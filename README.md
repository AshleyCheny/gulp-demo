## References
https://gulpjs.com/docs/en/getting-started/quick-start

## Notes
- Each gulp task is an asynchronous JS fn
- Tasks - public vs. private
-- Public: exported, can be ran by Gulp CLI
-- Private: used internally, used as part of series() or parallel()
- series() and parallel() can be nested to any arbitrary depth.

### Functions/APIs provided by Gulp
#### Series
- series()
- Execute tasks in order

### parallel()
- Run tasks at maximum concurrency

### src(<glob>) / dest(<glob>) - used to interact with system files
- glob: a string of literal and/or wildcard characters used to match filepaths.

### pipe(<plugins>())

### watch()

### registry()
- create shared tasks or augmented functionality.