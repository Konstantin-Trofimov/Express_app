const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const app = express()
const homeRoutes = require('./routes/home')
const addRoutes = require('./routes/add')
const coursesRoutes = require('./routes/coureses')

const hbs = exphbs.create({
 defaultLayout: 'main',
 extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.use(homeRoutes)
app.use(coursesRoutes)
app.use(addRoutes)



const PORT = process.env.PORT || 3060

app.listen(PORT, () => {
 console.log(`Server is runing on port: ${PORT}`)
})