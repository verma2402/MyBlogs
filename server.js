const express = require('express')
const articleRouter = require("./routes/articles")
const Article = require('./models/article')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const app = express()



// sToquNGDYvuQkjHm
// Connect to MongoDB
mongoose.connect("mongodb+srv://vermanitisha24:sToquNGDYvuQkjHm@cluster0.n1grmfz.mongodb.net/blogwebsite",
    {
        ssl: true
     }
);



app.set("views", "./view")
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.get('/', async(req, res) => {
    const articles =await Article.find().sort({ createdAt:'desc'})
    res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter)

app.listen(3000)
