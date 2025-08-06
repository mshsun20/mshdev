import express from 'express'
const router = express.Router()

import accController from '../controllers/accController.js'


// ping
router.route('/').get((req, res) => res.json({ message: `Server is Online...`, statuscode: 200 }))

// post
router.route('/acc').post(accController.create)

// get
router.route('/acc').get(accController.read)


export default router