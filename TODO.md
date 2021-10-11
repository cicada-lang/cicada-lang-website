- extract `GitFileStoreId` to `enchanter`

# book

> Demonstration of a book.

- `views/book` -- show information in `CONTENTS.md`
- `views/book` -- generate order from links in `CONTENTS.md` -- need `postmark`

# page

- `views/page` -- setup route to `/books/{bookId}/pages/{pagename}`
- `views/page` -- run and show results in the page
- `views/page` -- rander markdown files

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
