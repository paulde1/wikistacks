const express = require('express')
const router = express.Router()
const { Page, User } = require("../models");
const {userList , userPages} = require('../views')


router.get('/', async (req,res,next) => {
    try {
        const users = await User.findAll();
        res.send(userList(users));
      } catch (error) {
        next(error)
      }
})

router.get('/:userId', async (req, res, next) => {
    try{
        const id = req.params.userId
        const user = await User.findByPk(id);
        const pages = await Page.findAll({
            where: {authorId: id}
        })
        res.send(userPages(user, pages))
    }catch (error){
        next(error)
    }
})

//test push 








module.exports = router