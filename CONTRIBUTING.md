# How to contribute

## Building

Run `npm install` and `npm run build` to build.

## Testing

Run `npm test` to run tests.

## Submitting changes

Please send a [GitHub Pull Request](https://github.com/FlaUI/FlaUI.WebDriver/pulls) with a clear list of what you've done (read more about [pull requests](http://help.github.com/pull-requests/)). Please follow our coding conventions (below) and make sure all of your commits are atomic (one feature per commit).

Always write a clear log message for your commits. One-line messages are fine for small changes, but bigger changes should look like this:

    $ git commit -m "feat: A brief summary of the commit
    > 
    > A paragraph describing what changed and its impact."

See also <https://www.conventionalcommits.org>.

## Releasing

To release, simply create a tag and push it, which will trigger the release automatically:

    git tag -a v0.1.0-alpha -m "Your tag message"
    git push origin v0.1.0-alpha
