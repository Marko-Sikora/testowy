const express = require('express')
const port = 3000
let arr =[]
const app = express()
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.send("hello node! :P")
    arr.push("new")
    console.log(arr.length)
})

app.get('/test', (req, res) => {
    res.render('index')
    if (arr.length > 2) {
       console.log(arr.length)
       let d = new Date()
       console.log(d)

    }

})

app.listen(port)