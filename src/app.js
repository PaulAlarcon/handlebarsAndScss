const express = require('express')
const hbs = require('hbs')
const path = require('path')


const app = express()





app.use('/assets', express.static(path.join(__dirname, '../public')))


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/index.html'))
//   })

// const ROOT = "src"


app.set('view engine', 'hbs')



// app.use('/assets', express.static(path.join(__dirname, '../public')))



app.set('views', 'src/views')
app.get('/', (req, res) => {
    res.render('index')
})
 
app.listen(3000);