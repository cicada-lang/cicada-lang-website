# improve url format

- books

  /books/xieyuheng/mathematical-structures@github.com
  /books/xieyuheng/mathematical-structures@gitlab.com -- default
  /books/xieyuheng/mathematical-structures/-/title
  /books/xieyuheng/mathematical-structures/-/contents
  /books/xieyuheng/mathematical-structures/-/category/hom-set/category.md

- articles

  /articles/cicada-lang/cicada/-/notes/inductive-datatype.md
  /articles/cicada-lang/cicada/-/notes/inductive-datatype.md?action=edit

- [bug] multiple position of `@elab` narration.

# content manager

- we need to use a content server

  - to get good url name

  - to replace the use of gitlab and github API
    - they have rate limits
    - structured ID to them are not good url name

# user

- `views/user` -- setup route to `/{username}`

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
