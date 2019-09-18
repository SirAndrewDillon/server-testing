const db = require('../data/dbConfig.js')

module.exports = {
	insert,
	remove,
	getAll
}

async function insert(greats) {
	return db('greats')
		.insert(greats)
		.then((ids) => {
			return db('greats')
				.where({ id: ids[0] })
				.first()
		})
}

function remove(id) {
	return db('greats')
		.where({ id })
		.del()
		.then((ids) => {
			console.log('butt')
			return db('greats')
		})
}

function getAll() {
	return db('greats')
}
