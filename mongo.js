//ÄLÄ TEE UUSIA MUUTOKSIA TÄNNE!!!!!!



const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

// eslint-disable-next-line no-undef
const password = process.argv[2]
const url =
`mongodb+srv://sonja:${password}@cluster0-evjkv.mongodb.net/phonebook?retryWrites=true&w=majority`
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [3, 'name must be atleast 3 characters'],
    unique: true,
  },
  number: {
    type: String,
    minlength: 8,
  }
})
personSchema.plugin(uniqueValidator);


/*

if ( process.argv.length<3 ) {

  console.log('give password as argument')
  process.exit(1)

} else if (process.argv.length === 3) {

  console.log('phonebook:')

  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person.name, person.number)
    })
    mongoose.connection.close()
  })

} else {

  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
  })
  person.save().then(response => {
    console.log(`added ${process.argv[3]} number ${process.argv[4]} to phonebook`);
    mongoose.connection.close();
  })

}

*/

