import Vue from 'vue'
import Element from 'element-ui/lib/element-ui.common'
import locale from 'element-ui/lib/locale/lang/pt-br'
import '@/assets/scss/_element.scss';

export default () => {
  Vue.use(Element, { locale })
}