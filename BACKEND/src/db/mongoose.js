const mongoose = require('mongoose')

var connectionURL = 'mongodb+srv://admin:taquitos@cluster0-xg9bk.mongodb.net/clase?retryWrites=true'

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
