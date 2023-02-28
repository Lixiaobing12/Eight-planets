import { createStore } from 'vuex'

const files =
    import.meta.globEager('./modules/*.js')
const modules = {}
Object.keys(files).forEach(key => {
    const name = key.match(/modules\/(.*)\.js/);
    modules[name[1]] = files[key].default;
})
export const store = createStore({
    modules
})