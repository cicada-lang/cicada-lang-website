export abstract class PathResolver {
  abstract resolve(path: string): string
  abstract isExternal(path: string): boolean

  target(path: string): string {
    if (this.isExternal(path)) {
      return "_blank"
    } else {
      return "_self"
    }
  }
}
