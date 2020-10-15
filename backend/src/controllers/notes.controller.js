const notesCtrl = {}

notesCtrl.getNotes = (req, res) => res.json({ message: [] })

notesCtrl.createNote = (req, res) => res.json({message: 'successfully upload'})

notesCtrl.getNote = (req, res) => res.json({message: []})

notesCtrl.updateNote = (req, res) => res.json({message: 'successfuly updated'})

notesCtrl.deleteNote = (req, res) => res.json({message: 'successfuly deleted'})


module.exports = notesCtrl