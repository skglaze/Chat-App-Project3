const express = require('express')
const app = express()
const io = require('socket.io')(4000)

io.on('connection', (socket) => {
    socket.on('send-message', message => {
        io.emit('new-message', postMessage)
    })
})

const { userRouter } = require('./controllers/user.js')
const { roomRouter } = require('./controllers/room')
const { messageRouter } = require('./controllers/message')

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use(express.static(`${__dirname}/client/build`))

app.use(express.static(`${__dirname}/public`))

app.use('/api/users', userRouter)
app.use('/api/rooms', roomRouter)
app.use('/api/messages', messageRouter)

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})