import { App } from "./app"

declare global {
  var app: App
}

const app = new App()

globalThis.app = app
