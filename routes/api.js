let express = require('express');
let router = express.Router();
router.use(express.json());
let entryCollection = require('../models/EntrySchema')
// get should use find method
router.get('/', (req, res) => {
    // res.send('all students')
    entryCollection.create({},(errors, results)=>{
        errors ? res.send(errors): res.send(results);
    })

})
router.get('/:sudent_id', (req, res) => {
    entryCollection.findOne({ StudentName :req.params.StudentName },(errors, results)=>{
        errors ? res.send(errors): res.send(results);
    })
   



}
)
router.post('/', (req, res) => {
    // res.send('post method worked')
    entryCollection.create(req.body, (errors,results)=>{
        errors ? res.send(errors): res.send(results);
    });
    res.send(req.body)



})
// delete must have query param
router.delete('/', (req, res) => {
    entryCollection.findOneAndDelete({StudentName : req.params.StudentName }, (errors, results)=>{
        errors ? res.send(errors): res.send(`deleted student`);
    });
    // res.send('delete method worked')



})
router.put('/:StudentName', (req, res) => {
    // res.send('post method worked')
    entryCollection.findOneAndUpdate({StudentName :req.params.StudentName }, req.body, (errors,results)=>{
        errors ? res.send(errors): res.send(results);

    })

})
// __________________________________________________________________
// get should use find method
router.get('/teachers', (req, res) => {
    res.send('all teachers')
    entryCollection.create({},(errors, results)=>{
        errors ? res.send(errors): res.send(results);
    })

})
// query param must match req.params.name
router.get('/:teacher_id', (req, res) => {
    entryCollection.findOne({TeacherName:req.params.TeacherName},(errors, results)=>{
        errors ? res.send(errors): res.send(results);
    })
    // res.send(`get method ${req.params.id} worked`);




}
)
router.post('/teacher', (req, res) => {
    // res.send('post method worked')
    entryCollection.create(req.body, (errors,results)=>{
        errors ? res.send(errors): res.send(results);
    });
    res.send(req.body)



})
// query param must match req.params.name
router.delete('/teacher', (req, res) => {
    entryCollection.findOneAndDelete({TeacherName: req.params.TeacherName}, (errors, results)=>{
        errors ? res.send(errors): res.send(`teacher deleted`);
    });
    // res.send('delete method worked')



})
router.put('/:TeacherName', (req, res) => {
    // res.send('post method worked')
    entryCollection.findOneAndUpdate({TeacherName:req.params.TeacherName}, req.body, (errors,results)=>{
        errors ? res.send(errors): res.send(results);

    })

})











module.exports = router;