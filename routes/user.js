const express=require('express')

const userController= require('../controllers/user')
const expenseController=require('../controllers/expense')


const router = express.Router()

router.post('/signup',userController.signup)
router.post('/login',usercontroller.login)
router.post('/addexpense',)