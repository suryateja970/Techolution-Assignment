const mongoose = require('mongoose')
const User = require('../models/user')
const express = require('express')
const user = require('../models/user')
const router = express.Router()

router.post('/create', async(req, res) => {
    try {
        await User.create(req.body)
        await res.status(200).json({
            success: true,
            message: "Data Saved Successfully",
            data: req.body
        })
    } catch (err) {
        res.status(200).json({
            success: false,
            message: "Unable to save"
        })
    }
})

router.get('/userslist', async(req, res) => {
    try {
        const users = await User.find()
        console.log(users)
        await res.status(200).json({
            data: users
        })
    } catch (err) {
        res.status(401).json({
            message: "No Users Found"
        })
    }
})

module.exports = router