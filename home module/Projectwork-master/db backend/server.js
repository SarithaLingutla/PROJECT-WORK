var express = require('express')
var mongo = require('mongodb').MongoClient
var app = express()
var cors = require('cors')
var database;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

mongo.connect('mongodb://localhost:27017/', (err, data) => {
    if (err) {
        console.log('Connection failed')
    }
    else {
        console.log('Connection Sucess')
    }
    cursor = data.db('obooks', (err) => {
        if (err) {
            console.log('Connection to db failed')
        }
        else {
            console.log('Connection to db sucess')
        }
    })
})

app.get('/book', (req, res) => {
    cursor.collection('obookinfo').find({}).toArray((err, result) => {
        if (err) {
            console.log('err' + err)
        }
        else {
            console.log(result)
            res.json(result)
        }
    })
})



app.listen(5002, (err) => {
    if (err) {
        console.log('Not Connected to 5000' + err)
    }
    else {
        console.log('Connected to 5002')
    }
});
