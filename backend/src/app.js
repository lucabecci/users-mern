const express = require('express');
const cors = require('cors')
const app = express()

//imp routes
const userRoutes = require('./routes/user.routes')
const notesRoutes = require('./routes/notes.routes')
//setting
app.set('port', process.env.PORT || 4000)

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.use('/api/users', userRoutes)
app.use('/api/notes', notesRoutes)


module.exports = app;