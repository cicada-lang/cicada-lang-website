export type Reference =
  | {
      host: "github"
      bookname: string
      by: string
      dir?: string
    }
  | {
      host: "gitlab"
      bookname: string
      by: string
      dir?: string
      hostURL?: string
    }
