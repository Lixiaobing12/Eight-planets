import { createI18n } from 'vue-i18n' //引入vue-i18n组件
import messages from './getMessage'

//注册i8n实例并引入语言文件
const localeData = {
    legacy: false, // composition API
    locale: 'en',
    globalInjection: true,
    messages,
}

const i18n = createI18n(localeData)
export default i18n;