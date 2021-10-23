- `components/cicada-block` -- observer for beautiful narration

  - use a different font
  - should we use text center? which will break the indentation of formated text
    - should we use more structured data type for text instead of string?

- `components/cicada-block` -- handle `cicada counterexample`

  - denote the code block is counterexample even when not activated
  - allow interact with `cicada counterexample` code block
    - should be parsed, but be ignored in normal run
    - running code block with error will not effect current `mod`

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
