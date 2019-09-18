const db = require('../data/dbConfig')
const Greats = require('./greatsModel')

beforeEach(async () => {
	await db('greats').truncate()
})

describe('Greats.insert', () => {
	it('is able to add greats to the db!', async () => {
		// sanity: checking that trucate works, essentially
		let greats = await Greats.getAll()
		expect(greats).toHaveLength(0)

		// set up
		await Greats.insert({ name: 'Dick Butkus' })
		await Greats.insert({ name: 'Earl Campbell' })
		greats = await Greats.getAll()

		// assertion
		expect(greats).toHaveLength(2)
	})

	it('is able to insert the correct greats', async () => {
		// sanity: checking that trucate works, essentially
		let greats = await Greats.getAll()
		expect(greats).toHaveLength(0)

		// set up
		await Greats.insert({ name: 'Dick Butkus' })
		await Greats.insert({ name: 'Earl Campbell' })
		greats = await Greats.getAll()

		expect(greats[0].name).toBe('Dick Butkus')
		expect(greats[1].name).toBe('Earl Campbell')
	})

	it('returns the newly inserted great', async () => {
		const great = await Greats.insert({ name: 'Dick Butkus' })
		expect(great.name).toBe('Dick Butkus')
	})
})
