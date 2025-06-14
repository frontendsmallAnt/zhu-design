import type {App, Plugin} from "vue";
import { each } from 'lodash-es'

type SFCWithInstall<T> = T & Plugin

/**
 * 创建一个安装器函数，用于批量注册组件
 * @param components 需要安装的组件数组
 * @returns 返回一个安装函数，该函数接收 Vue 应用实例作为参数
 */
export function makeInstaller(components: Plugin[]) {
    const install = (app:App) => {
        each(components , (c) => {
            app.use(c)
        })
    }
    return install
}

/**
 * 为组件添加 install 方法，使其可以通过 app.use() 进行全局注册
 * @param component 需要添加 install 方法的组件
 * @returns 返回添加了 install 方法的组件
 */
export const withInstall = <T>(component: T) => {
    (component as SFCWithInstall<T>).install = (app: App) => {
        const name = (component as any)?.name || "UnnamedComponent"
        app.component(name, component as SFCWithInstall<T>)
    }
    return component as SFCWithInstall<T>
}