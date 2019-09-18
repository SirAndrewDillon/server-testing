const express = require('express')

const Greats = require('../greats/greats-model.js')

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
		.catch((err) => {
			res.status(500).json(err)
		})
})

server.post('/greats', (req, res) => {
	Greats.insert(req.body)
		.then((greats) => {
			res.status(200).json(greats)
		})
		.catch((err) => {
			res.status(500).json(err)
		})
})

server.delete('/greats/:id', (req, res) => {
	Greats.remove(req.params.id)
		.then((greats) => {
			res.status(200).json(greats)
		})
		.catch((err) => {
			res.status(500).json(err)
		})
})

module.exports = server
