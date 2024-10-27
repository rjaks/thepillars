const express = require('express')
const mongoose = require('mongoose')
const app = express()
const productRoute = require('./routes/product.route.js')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/products', productRoute)

mongoose.connect('mongodb+srv://adreforsado:EpPi5uGqwSiJpIKr@adnu.cpcx6.mongodb.net/Node-API?retryWrites=true&w=majority&appName=ADNU')
.then(() => {
    console.log('Connected to the database')
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
})
.catch(() => console.log('Connection failed'));

app.get('/', (req, res) => {
    res.send("Hello from Node API Server!");
});