const assert = require('assert')
const userModel = require('../../models/user')

// Describe Test
describe('Save record to Users collection', () => {

	it('Save a record', (done) => {
		let user = new userModel({
			name: 'Can Ozkan',
			mail: 'onrcan.ozkan@gmail.com',
			password: '98D234DB7E91F5BA026A25D0D6F17BC5EE0A347EA2216B0C9DE06D43536D49F4',
			avatar: 'dist/img/gravatar.jpg',
			creditCardNumber: '4945 5958 2616 1407',
			address: 'Ankara/Turkey'
		})

		user.save().then(() => {
			assert(user.isNew === false)
			done()
		})
	}) // it('Save a record', (done) => {
	
})