# book

- `views/book` -- show information in `CONTENTS.md`
- `views/book` -- generate order from links in `CONTENTS.md` -- need `postmark`

# book page

- `views/book/page` -- setup route to `/books/{bookId}/pages/{pagename}`
- `views/book/page` -- run and show results in the page
- `views/book/page` -- render markdown files

- `cicada custom block` for `article` and `book/page` views

- `views/book/page` -- be able to turn pages of a book

# user

- `views/user` -- setup route to `/{username}`

# study

> Ones study.

- `views/study` -- setup route to `/{username}/study/{bookId}`
- `views/study` -- watch file change and provide feedback
- `views/study` -- support REPL

# landing page

- `views/home` -- logo
- `views/home` -- decorate -- celtic knotworklogo
- `views/home` -- sign up form
  - sign up to receive news asynchronously
  - sign in to use our services
