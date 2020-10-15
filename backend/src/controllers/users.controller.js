const userCtrl = {}

userCtrl.getUsers = (req, res) => res.json({ message: [] })

userCtrl.createUser = (req, res) => res.json({message: 'successfully upload'})

userCtrl.deleteUser = (req, res) => res.json({message: []})



module.exports = userCtrl