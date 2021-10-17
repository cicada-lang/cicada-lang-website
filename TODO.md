- `components/cicada-block` -- fix ch08 bug

- `components/cicada-block` -- add `Running...` indicator
- `components/cicada-block` -- handle `cicada counterexample`
- `components/cicada-block` -- extract component to do syntax highlighting for `StmtOutput`

- `components/cicada-block` -- mimic the design from eloquent javascript code block

  - edit code block in-place, and run new code in context
  - reset code block
  - hide run button in `cicada-block-toolbox`
  - active editor on click

- `views/articles/article` -- be able to run cicada code block like `books/book-page`

- `vendor/postmark` -- handle markdown table

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
