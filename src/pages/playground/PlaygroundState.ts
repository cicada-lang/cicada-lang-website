import { Mod, Errors } from '@cicada-lang/cicada'
import { Loader } from '@cicada-lang/cicada/lib/loader'

console.log(Loader)

const loader = new Loader()

export class PlaygroundState {
  mod = new Mod({ url: new URL(window.location.href), loader })

  text = ''
  error?: {
    kind: string
    message: string
  }

  get outputs(): Array<string> {
    return Array.from(this.mod.outputs.values())
  }

  async refresh(url: URL): Promise<void> {
    try {
      delete this.error
      if (!this.text) return
      this.mod = await loader.load(url, { code: this.text })
    } catch (error) {
      this.catchError(error)
    }
  }

  catchError(error: unknown): void {
    if (!(error instanceof Error)) throw error
    if (error instanceof Errors.ParsingError) {
      this.error = {
        kind: 'ParsingError',
        message: error.message + '\n' + error.report(this.text),
      }
    } else {
      this.error = {
        kind: error.name,
        message: error.message,
      }
    }
  }
}
