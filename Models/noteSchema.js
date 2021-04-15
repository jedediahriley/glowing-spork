const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addNoteSchema = new Schema({

    note: {
        type: String,
        require: true
    },

   url: {
       type: String

   }

  

});

const noteSchema = mongoose.model('Equipment', addNoteSchema);

module.exports = noteSchema;