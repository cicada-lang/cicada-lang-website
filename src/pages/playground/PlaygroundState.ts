import { Loader, Mod, Errors } from '@cicada-lang/cicada'

export class PlaygroundState {
  loader = new Loader()

  mod = new Mod({
    url: new URL(window.location.href),
    loader: this.loader,
  })

  text = ''

  error?: {
    message: string
  }

  get outputs(): Array<string> {
    return Array.from(this.mod.outputs.values())
  }

  async refresh(url: URL): Promise<void> {
    try {
      delete this.error
      if (!this.text) return
      this.mod = await this.loader.load(url, { text: this.text })
    } catch (error) {
      this.catchError(error)
    }
  }

  catchError(error: unknown): void {
    if (!(error instanceof Error)) {
      this.error = {
        message: JSON.stringify(error),
      }
    } else if (error instanceof Errors.ParsingError) {
      this.error = {
        message: error.report(this.text),
      }
    } else {
      this.error = {
        message: error.message,
      }
    }
  }
}
