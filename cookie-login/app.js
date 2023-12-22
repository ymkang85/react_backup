const express = require("express");
const morgan = require("morgan");
const nunjucks = require('nunjucks');
const cookieParser = require("cookie-parser");

const app = express();

app.use(morgan("dev"));
app.use(cookieParser());
app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true
});
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    const { member } = req.cookies;
    if( member ){
        res.render("index", { member });
        return;
    }
    res.render('login');
});

app.post("/", (req, res)=>{
    const { userid } = req.body;
    res.cookie("member", userid).redirect('/');
});

app.get("/logout", (req, res)=>{
    res.clearCookie('member').redirect("/");
});

app.listen(8080, ()=>{
    console.log('서버 8080포트에서 리스닝...');
})