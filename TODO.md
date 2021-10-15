- use `app.bookState` to share state across views -- `book`, `book-contents` and `book-page`

- `views/book-contents` -- show content entry
- `views/book-contents` -- link jump to page route

- `views/book` -- use prefix numbering convention generate order from for table of contents
- `views/book` -- button to turn from title page to table of contents
- `views/book` -- setup route to `/books` -- a book loading page

# book page

- `views/book-page` -- run and show results in the page
- `views/book-page` -- render markdown files

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
