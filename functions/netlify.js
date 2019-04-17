
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
    	message: `Show me the env var: ${process.env.FOOBAR}.`
    })
  }
}