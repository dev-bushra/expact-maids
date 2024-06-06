require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');
var timeout = require('connect-timeout')
const helmet = require("helmet");

const port = 4001
const app = express()


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('database connected'))


app.use(cors())
app.use(timeout('120s'))
app.use(fileUpload({ useTempFiles: true, limits: { fileSize: 100 * 1024 * 1024 } }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(express.json())
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(helmet());

app.disable('x-powered-by')


app.get('/', (req, res) => {
  res.send('Hello!')
})

app.get('/get-prices', )

// API: Get in touch
const getInTouchRouter = require('./api/getInTouch')
app.use('/get-in-touch', getInTouchRouter)

// API: Employer Info
const employerInfoRouter = require('./api/employerInfo')
app.use('/employer-info', employerInfoRouter)

// API: Employer Personal Info
const employerPersonalInfoRouter = require('./api/employerPersonalInfo')
app.use('/employer-personal-info', employerPersonalInfoRouter)

// API: Config
const configRouter = require('./api/config')
app.use('/configurator', configRouter)


const expressServer = app.listen(port, () => {
  console.log(`server running at port ${port}`)
})