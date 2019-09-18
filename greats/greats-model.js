const db = require('../data/dbConfig.js')

module.exports = {
	insert,
	update,
	remove,
	getAll,
	findById
}

async function insert(great) {
	const [id] = await db('greats').insert(great)

	return db('greats')
		.where({ id })
		.first()
}

async function update(id, changes) {
	return null
}

function remove(id) {
	return null
}

function getAll() {
	return db('greats')
}

function findById(id) {
	return null
}
