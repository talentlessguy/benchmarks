const { App } = require('@tinyhttp/app')

const app = new App({
	xPoweredBy: false
})

app.get('/', (req, res) => res.json({ hello: 'world' }))

app.listen(3000)
