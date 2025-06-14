import type { App, Plugin } from 'vue'
declare const installer: {
    install: (app: App) => void
  }

export * from '@zhu-element/components'
export default installer