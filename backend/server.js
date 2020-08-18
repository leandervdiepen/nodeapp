const express = require("express")
const dotenv = require("dotenv")
const passport = require('passport')
const session = require('express-session')
const cors =require('cors')
const morgan = require("morgan")
const connectDB = require("./config/db")

// Load config
dotenv.config({ path: './config/config.env' })

// Passport config
require('./config/passport')(passport)

connectDB()

const app = express()

// Enable CORS
app.use(cors())

// Sessions
app.use(session({
    secret: 'rednaelnepeidnav',
    resave: false,
    saveUninitialized: false
}))

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

//Logging with morgan
if (process.env.NODE_ENV == "development") {
    app.use(morgan("dev"))
}

// Routes
app.use('/auth', require('./routes/auth'))

const PORT = process.env.PORT || 5000


app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)