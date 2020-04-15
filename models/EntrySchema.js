let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let EntrySchema = new Schema({
    StudentName: String,
    StudentEmail: String

}, 
{
TeacherName : String,
TeacherEmail :String,
TeacherCourseFocus :String

})

module.exports = mongoose.model('myCWEntry', EntrySchema)