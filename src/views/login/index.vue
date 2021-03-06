<template>
	<div class="container">
		<!-- 背景图 -->
		<transition-group
			tag="ul"
			name="fade">
			<li
				v-for="(item, index) in bgImgList"
				v-show="index === (bgIndex - 1)"
				:key="item"
				class="bg-img"
				:style="{
					backgroundImage: `url(${item})`
				}"></li>
		</transition-group>
		<!-- 特效组件 -->
		<component
			v-if="effectComponent"
			:is="effectComponent"></component>
		<div class="title-wrapper-box">
			<div class="title-box">
				<h2
					class="system-name"
					:style="loginBtnStyle">Cat You Manager</h2>
				<img
					class="cat-img"
					src="@/assets/images/logo.png">
			</div>
		</div>
		<div class="login-container">
			<el-form
				ref="loginFormRef"
				:model="form"
				:rules="rules"
				label-width="100px">
				<el-form-item
					class="input-item-container"
					label="用户名："
					prop="username">
					<div class="username-input-container">
						<el-input
							:class="['input', `login-input-hover-${bgIndex}`, {
								shaking: isUsernameError
							}]"
							v-model="form.username"
							placeholder="请输入用户名"
							@animationend.native="isUsernameError = false"></el-input>
					</div>
				</el-form-item>
				<el-form-item
					class="input-item-container password"
					label="密码："
					prop="password">
					<div class="password-input-container">
						<el-input
							:type="ifViewPassword ? 'text' : 'password'"
							:class="['input', `login-input-hover-${bgIndex}`, {
								shaking: isPasswordError
							}]"
							v-model="form.password"
							placeholder="请输入密码"
							@animationend.native="isPasswordError = false"
							@keyup.native.enter="onHandleClickLogin">
						</el-input>
						<i
							:class="['el-icon-view eye-btn', {
								hide: ifViewPassword
							}]"
							@click="ifViewPassword = !ifViewPassword"></i>
					</div>
				</el-form-item>
				<div class="operator-btn-box">
					<span
						class="reset-password-btn"
						@click="isShowResetPasswordModal = !isShowResetPasswordModal">忘记密码？</span>
				</div>
				<div class="login-btn-container">
					<div
						:class="['login-btn', {
							'loading': loginLoading
						}]"
						:style="loginBtnStyle"
						@click="onHandleClickLogin">
						<span class="login-text">登 录</span>
						<i
							v-show="loginLoading"
							class="el-icon-loading icon-loading"></i>
					</div>
				</div>
			</el-form>
		</div>
		<!-- 重置密码弹框 -->
		<el-dialog
			class="reset-password-modal"
			title="重置密码"
			width="35%"
			:visible.sync="isShowResetPasswordModal"
			@close="$refs.resetPasswordFormRef.resetFields()">
			<el-alert
				title="输入电子邮箱地址收到邮件后去邮件里的链接网站完成重置操作"
				type="warning"></el-alert>
			<el-form
				ref="resetPasswordFormRef"
				:model="resetPasswordModel"
				:rules="resetPasswordFormRules">
				<el-form-item
					prop="email"
					class="form-item-box"
					label="电子邮箱: "
					required>
					<el-input
						v-model="resetPasswordModel.email"
						placeholder="请输入"></el-input>
				</el-form-item>
			</el-form>
			<div class="btn-box">
				<el-button
					type="danger"
					@click="isShowResetPasswordModal = false">取消</el-button>
				<el-button
					type="primary"
					@click="onHandleClickSubmitResetPasswordForm">确定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
import flyStart from '@components/fly-start'

export default {
	name: 'Login',
	components: {
		flyStart
	},
	data() {
		return {
			loginLoading: false,
			isUsernameError: false,
			isPasswordError: false,
			ifViewPassword: false,
			bgIndex: this.$utils.commonUtils.tweenRandom(1, 4),
			bgEffect: {
				1: 'flyStart'
			},
			form: {
				username: '',
				password: ''
			},
			rules: {
				username: [
					{
						required: true,
						trigger: 'blur'
					}
				],
				password: [
					{
						required: true,
						trigger: 'blur'
					}
				]
			},
			isShowResetPasswordModal: false,
			resetPasswordModel: {
				email: ''
			},
			resetPasswordFormRules: {
				email: [
					{
						required: true, message: '请输入电子邮箱', trigger: 'blur'
					},
					{
						validator: (rule, value, callback) => {
							if(!value) return callback(new Error('电子邮箱不能为空'))
							if(!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)) return callback(new Error('电子邮箱格式不正确'))

							return callback()
						}, trigger: 'blur'
					}
				]
			},
			bgImgList: [
				require('@/assets/images/bg1.png'),
				require('@/assets/images/bg2.png'),
				require('@/assets/images/bg3.png'),
				require('@/assets/images/bg4.png')
			]
		}
	},
	computed: {
		effectComponent() {
			const bgIndex = this.bgIndex
			return this.$themes.loginTheme.loginBgEffectComponent[bgIndex]
		},
		loginBtnStyle() {
			const bgIndex = this.bgIndex
			const loginBtnLinearGradient = this.$themes.loginTheme.loginBtnLinearGradient
			const randomDirection = [
				'left',
				'right'
			][this.$utils.commonUtils.tweenRandom(0, 1)]
			let startThreshold = this.$utils.commonUtils.tweenRandom(0, 100)
			let endThreshold = this.$utils.commonUtils.tweenRandom(0, 100)
			const sortedThresholdList = [
				startThreshold,
				endThreshold
			].sort((a, b) => a - b)

			startThreshold = sortedThresholdList[0] + '%'
			endThreshold = sortedThresholdList[1] + '%'

			this.registerLoginBtnCssHoudiniProperty()

			return {
				backgroundImage: loginBtnLinearGradient(randomDirection, startThreshold, endThreshold)[bgIndex]
			}
		}
	},
	mounted() {
		this.timer = setInterval(() => {
			this.bgIndex = this.$utils.commonUtils.tweenRandom(1, 2)
		}, 8000)
	},
	destroyed() {
		this.timer && clearInterval(this.timer)
	},
	methods: {
		registerLoginBtnCssHoudiniProperty() {
			const loginBtnLinearGradientCssHoudiniPropertyList = this.$themes.loginTheme.loginBtnLinearGradientCssHoudiniPropertyList
			let loginBtnStyleEl = document.querySelector('#login-btn-houdini')
			const bgIndex = this.bgIndex

			if(!loginBtnStyleEl) {
				loginBtnStyleEl = document.createElement('style')
				loginBtnStyleEl.id = 'login-btn-houdini'
				document.head.appendChild(loginBtnStyleEl)
			}

			const cssText = loginBtnLinearGradientCssHoudiniPropertyList
				.filter(({ key }) => (key === `loginBtn-${bgIndex}-start`) || (key === `loginBtn-${bgIndex}-end`))
				.map(item => {
					const suffixKey = item.key.indexOf('start') > -1 ? 'start' : 'end'

					return `
						@property --loginBtn-${suffixKey} {
							syntax: '${item.syntax}';
							inherits: ${item.inherits};
							initial-value: ${item['initial-value']};
						}
					`
				})
				.join('')
				.replace(/\t/g, '')

			loginBtnStyleEl.innerHTML = cssText
		},
		async onHandleClickLogin() {
			const form = this.form
			if(!form.username || !form.password) {
				if(!form.username) this.isUsernameError = true
				if(!form.password) this.isPasswordError = true
			}

			try {
				const isValid = await this.$refs.loginFormRef.validate()
				if(!isValid) return
				if(this.loginLoading) return

				this.loginLoading = true
				const result = await this.login(form)
				if(result && this.$service.userService.checkServerUserData(result)) {
					await this.fetchUserPermissionList()
					return this.$router.push('/')
				}else {
					this.$message.error('登录信息不合法')
				}
			}catch(error) {
				this.loginLoading = false
				if(this.isUsernameError || this.isPasswordError || !error) return
				this.$message.error(error)
			}
		},
		onHandleClickSubmitResetPasswordForm() {
			this.$refs.resetPasswordFormRef.validate(async valid => {
				if(!valid) return

				try {
					const email = this.resetPasswordModel.email
					await this.$service.userService.resetPasswordByEmail(email)
					this.$message.success('邮件发送成功')
					this.isShowResetPasswordModal = false
				}catch(error) {
					this.$message.error(error)
				}
			})
		},
		...mapActions(['login', 'fetchUserPermissionList'])
	}
}
</script>

<style lang="stylus" scoped>
	.container
		overflow hidden
		height 100%

		.bg-img
			position fixed
			left 0
			top 0
			right 0
			bottom 0
			background-repeat no-repeat
			background-size contain
			background-position center

		.title-wrapper-box
			display flex
			flex-direction row
			justify-content center
			align-items center
			margin-top 150px
			margin-bottom 25px

			.title-box
				position relative
				width 600px

				.system-name
					position relative
					margin 0
					font-size 30px
					color #fff
					text-align center
					z-index 100
					-webkit-background-clip text
					-webkit-text-fill-color transparent
					transition --loginBtn-start 3s, --loginBtn-end 3s

				.cat-img
					position absolute
					top 50%
					right 110px
					width 60px
					border-radius 6px
					transform translateY(-50%)
					z-index 999

		.login-container
			position relative
			width 600px
			padding 60px 30px
			margin 0 auto
			border-radius 5px
			box-shadow 0px 2px 10px rgba(0, 0, 0, .3)
			background rgba(255, 255, 255, .3)
			backdrop-filter blur(10px)
			z-index 100

			& >>> .el-form-item__label
				white-space nowrap
				line-height 35px

			.input-item-container
				& >>> .el-form-item__label
					color #333

				& >>> .el-form-item__error
					display none

				&.password
					margin-bottom 0

				.password-input-container,
				.username-input-container
					position relative
					margin-right 44px

				.password-input-container
					.eye-btn
						position absolute
						right 15px
						top 50%
						font-size 20px
						transform translateY(-50%)
						cursor pointer

						&.hide:after
							content ''
							display block
							position absolute
							left 50%
							top 0
							width 1px
							height 20px
							background #000
							transform translateX(-50%) rotate(-45deg)

				.input
					width 100%

					@keyframes shaking
						0%
							transform translateX(0px)

						50%
							transform translateX(10px)

						100%
							transform translateX(0px)

					&.shaking
						animation shaking .3s ease 3

			.operator-btn-box
				display flex
				flex-direction row
				justify-content flex-end
				margin 0 40px
				color #fff

				.reset-password-btn
					color #333
					margin-top 5px
					cursor pointer

					&:hover
						text-decoration underline

			.login-btn-container
				display flex
				flex-direction row
				justify-content center
				margin-left 100px
				margin-right 44px

				.login-btn
					position relative
					width 100%
					height 40px
					line-height 40px
					margin 25px 0
					margin-bottom 0
					border-radius 8px
					color #fff
					text-align center
					cursor pointer
					transition width .3s ease, box-shadow .3s ease, --loginBtn-start 3s, --loginBtn-end 3s
					box-shadow 0px 2px 10px rgba(0, 0, 0, .3)

					&:hover
						box-shadow 0px 2px 10px rgba(0, 0, 0, .5)

					&.loading
						opacity .5
						cursor not-allowed

					.login-text
						position relative
						font-size 16px
						z-index 10

					.icon-loading
						margin-left 5px
						font-size 16px

		.reset-password-modal
			& >>> .el-dialog__close
				font-size 18px

			& >>> .el-dialog__body
				padding-top 5px

			.form-item-box
				display: flex;
				flex-direction: row;
				align-items: center;
				margin-top: 10px;

				& >>> .el-form-item__content
					flex: 1;

			.btn-box
				display flex
				flex-direction row
				justify-content center
				align-items center
				margin-top 30px
</style>
