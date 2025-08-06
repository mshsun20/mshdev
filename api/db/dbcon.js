import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

const host = process.env.HOST || 'localhost'
const dbuser = process.env.DB_USER || 'root'
const dbpass = ''
const dbnm = process.env.DB_NAME || 'mshdevdb'

const conn = mysql.createPool({ host, user: dbuser, password: dbpass, database: dbnm, multipleStatements: true })

export default conn