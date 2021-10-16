import { App } from "./app"

declare global {
  interface Window {
    app: App
  }
}

const app = new App()

window.app = app
