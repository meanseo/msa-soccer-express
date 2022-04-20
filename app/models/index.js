import dotenv from 'dotenv'
import mongoose from 'mongoose'
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dotenv.MONGO_URI
// db.user = require('./user.model')(mongoose)
// db.todo = require('./todo.model')(mongoose)

export default db