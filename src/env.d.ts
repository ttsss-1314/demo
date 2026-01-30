declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
interface ImportMetaEnv {
    readonly VITE_BAIDU_APPID: string
    readonly VITE_BAIDU_SECRET_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
