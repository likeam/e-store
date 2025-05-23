require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const {logger} = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const PORT = process.env.PORT || 3500

console.log(process.env.NODE_ENV)

app.use(logger)
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())

app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/root'))
app.all('*', (req, res) => {
    res.status(404)
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    }else if (req.accepts('json')){
        res.json({massage: '404 Not found '})
    }else {
        res.type('text').send('404 Not found')
    }
})

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server Runnig on Port ${PORT}`))