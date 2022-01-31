const app = require('express')()
const next = require('next')
const express = require('express')
const { connectDB } = require('./DB/connect')

// ! Create a check for development vs production
const dev = process.env.NODE_ENV !== "production"

const PORT = process.env.PORT || 3000

// * there are giant error warnings that pop up when in development
const nextApp = next({dev})

// * this is a built in next router that will handle all requests made to a server
const handler = nextApp.getRequestHandler()

app.use(express.json())
connectDB()

nextApp.prepare().then(() => {
  app.all("*", (req, res) => handler(req, res))
  app.listen(PORT, (err => {
    if(err) console.log(err)
    else console.log(`Server listening @ ${PORT}`)
  }))
})
