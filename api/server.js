const express = require('express')

const Greats = require('../greats/greatsModel.js')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
	res.status(200).json({ api: 'up' })
})

server.get('/greats', (req, res) => {
	Greats.getAll()
		.then((greats) => {
			res.status(200).json(greats)
		})
		.catch((error) => {
			const err = {
				message: error.message,
				stack: error.stack
			}
			res.status(500).json(err)
		})
})

module.exports = server
