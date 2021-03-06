import { Message } from 'element-ui'
import Preview from '@components/preview'

const handleClick = function(binding) {
	const el = this

  return function() {
    const urls = binding.value

    if(urls.length === 0) {
      return Message({
        type: 'error',
        message: '无产品图片'
      })
    }

    Vue.nextTick(() => {
			const { left, top, width, height } = el.getBoundingClientRect()

			const PreviewConstructor = Vue.extend(Preview)
			const component = new PreviewConstructor({
				propsData: {
					url: urls,
					visible: true,
					position: {
						left,
						top
					},
					size: {
						width,
						height
					}
				}
			}).$mount()

			const $el = component.$el

			component.$on('close', () => {
				component.visible = false
			})

			document.body.appendChild($el)
		})
  }
}

Vue.directive('preview', {
	bind(el, binding) {
		el.addEventListener('click', handleClick.call(el, binding), false)
	},
	unbind(el) {
		el.removeEventListener('click', handleClick)
	}
})
