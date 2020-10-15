const userCtrl = {}
const User = require('../models/User')

userCtrl.getUsers = async(req, res) => {
    const users = await User.find();
    res.json({
        petition: true,
        data: users
    })
}

userCtrl.createUser = async(req, res) => {
    const {username} = req.body
    const newUser = new User({
        username
    })
    await newUser.save()
    res.json({
        petition: true,
        data: newUser
    })
}

userCtrl.deleteUser = async(req, res) => {
    const { id } = req.params
    await User.findByIdAndDelete(id)
    res.json({
        petiton: true
    })
}



module.exports = userCtrl