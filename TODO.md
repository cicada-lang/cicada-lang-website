- improve url format for `/books`

  - dynamic dispatch components -- instead of subroutes

  /books/xieyuheng/mathematical-structures?front-matter=title
  /books/xieyuheng/mathematical-structures?front-matter=contents
  /books/xieyuheng/mathematical-structures/-/category/hom-set/category.md

- [bug] multiple position of `@elab` narration.

# user

- `views/users` -- setup route to `/{username}`

# study

> Ones study.

- `views/study` -- setup route to `/{username}/study/{bookId}`
- `views/study` -- watch file change and provide feedback
- `views/study` -- support REPL
- `views/study` -- share, invite and republish study

# landing page

- `views/home` -- logo
- `views/home` -- decorate -- celtic knotwork
- `views/home` -- sign up form
  - sign up to receive news asynchronously
  - sign in to use our services
