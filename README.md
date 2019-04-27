# Env Variable from `netlify.toml` Test repo

Testing if `netlify.toml` environment variables get injected into functions.

## `netlify.toml`

```toml
[build]
  publish = "build"
  functions = "functions"
  command = "npm run build"
  environment = {FOOBAR = "baz"}
```

## Function

```js
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
    	message: `Show me the env var: ${process.env.FOOBAR}.`
    })
  }
}
```
