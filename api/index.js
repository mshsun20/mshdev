import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import router from './routes/route.js'


const app = express()
dotenv.config()

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Accept", "X-Requested-With", "Authorization"],
    credentials: true,
    optionsSuccessStatus: 200
}))
app.use(bodyParser.json({ limit: "10000mb" }))
app.use(bodyParser.urlencoded({ limit: "10000mb", extended: true }))
app.use('/api', router)

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || '8000'

app.listen(port, host, () => console.log(`Server is running on ${host}:${port}`))
