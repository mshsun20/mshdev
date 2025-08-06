import express from 'express'
const router = express.Router()

import accController from '../controllers/accController.js'


// ping
router.route('/').get((req, res) => res.json({ message: `Server is Online...`, statuscode: 200 }))

// post
router.route('/acc').post(accController.create)

// get
router.route('/acc').get(accController.read)
router.route('/acc/:id').get(accController.readById)

// put
router.route('/acc/:id').put(accController.update)

// delete
router.route('/acc/:id').delete(accController.remove)


export default router