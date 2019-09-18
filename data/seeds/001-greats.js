exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries and resets ids
	return knex('greats')
		.truncate()
		.then(function() {
			return knex('greats').insert([
				{ name: 'Walter Payton' },
				{ name: 'Joe Montana' },
				{ name: 'Mike Singletary' },
				{ name: 'Jack Lambert' },
				{ name: 'Dan Marino' },
				{ name: 'Roger Staubach' },
				{ name: 'Eric Dickerson' },
				{ name: 'Ray Lewis' },
				{ name: 'Reggie White' },
				{ name: 'Barry Sanders' },
				{ name: 'Lawrence Taylor' },
				{ name: 'Peyton Manning' },
				{ name: 'Mean Joe Green' },
				{ name: 'Jim Brown' },
				{ name: 'Tom Brady' },
				{ name: 'Jerry Rice' }
			])
		})
}
