const express = require('express')
const app = express()
const mongoose = require('mongoose');
const opn = require('opn');
const path = require('path');
const error404 = require('./controller/error404');
const config = require('./controller/config');
const createTutor = require('./controller/DB/createTutor');
const createStudent = require('./controller/DB/createStudent')
const createSchool = require('./controller/DB/createSchool')
const allStudents = require('./controller/allStudents')
const allTutors = require('./controller/allTutors')


mongoose.set('useFindAndModify', false);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'title/index.html'))
});
app.post('/api/createStudent', createStudent);
app.post('/api/createTutor', createTutor);
app.post('/api/createSchool', createSchool);

//app.get('/api/students', allStudents);
//app.get('/api/tutors', allTutors);
app.use('*', error404);

app.listen(config.port, err => {
    console.log('Server listen on port ' + config.port + '...');

    if (config.itsStartupServer){
        opn('http://localhost:' + config.port);
    }
});
 