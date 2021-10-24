- `components/cicada-block` -- handle `cicada counterexample`

  - denote the code block is counterexample even when not activated
  - allow interact with `cicada counterexample` code block
    - should be parsed, but be ignored in normal run
    - running code block with error will not effect current `mod`

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
