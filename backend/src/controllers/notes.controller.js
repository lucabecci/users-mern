const notesCtrl = {}
const Note =  require('../models/Note')

notesCtrl.getNotes = async(req, res) => {
    const notes = await Note.find();
    res.json({
        data: notes
    })
}

notesCtrl.createNote = async(req, res) => {
    const { title, content, date, author } = req.body
    const newNote = new Note({
        title,
        content,
        author,
        date
    })
    await newNote.save()
    res.json({
        petition: true,
        created: newNote.length
    })
}

notesCtrl.getNote = async(req, res) => {
    const { id } = req.params;
    const note = await Note.findById(id)
    res.json({
        petition:true,
        data: note
    })
}

notesCtrl.updateNote = async(req, res) => {
    const { id } = req.params;
    const { title, content, author } = req.body;
    await Note.findOneAndUpdate({_id:id}, {
        title,
        content,
        author
    })
    res.json({
        petition: true
    })
}

notesCtrl.deleteNote = async(req, res) => {
    const { id } = req.params;
    const deletedNote = await Note.findByIdAndDelete(id)
    res.json({
        petition: true, 
        deleted: deletedNote.length
    })
}


module.exports = notesCtrl