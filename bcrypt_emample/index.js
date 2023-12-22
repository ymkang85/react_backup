const express = require('express');
const cookieParser = require('cookie-parser');
const session = require("express-session");
const bcrypt = require("bcrypt");
const nunjucks = require('nunjucks');

const app = express();
app.set("port", 8080);
app.set("view engine", "html");
nunjucks.configure("views", {
    express: app,
    watch: true
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("ymkang85"));
app.use(session({
    resave: false,
    saveUninitialized:false,
    secret:"ymkang85",
    cookie:{
        httpOnly:true,
        secure: false,
        // store: MemoryStore
    }, 
    name: 'session-cookie'
}));
app.get("/", (req, res) => {
    const {user} = req.cookies;
    if(user){
        res.render("index", { user });
        return;    
    }
    res.render("index");
});
app.post("/", async (req, res) => {
    const { user, pass } = req.body;
    const dbpass = "good";
    const dbuser = "홍길동";
    const slatRounds = 10;
    const dbpass_hash = await bcrypt.hash(dbpass, slatRounds);
    const pass_ok = await bcrypt.compare(pass, dbpass_hash);

    console.log(pass_ok);
    if (dbuser == user) {
        if (!pass_ok) {
            res.render("index", "비밀번호를 다시 확인하세요.");
            return;
        }

    } else {
        res.render("index", "아이디를 다시 확인하세요.");
        return;
    }
    res.cookie('pass_ok', "ok", {
        expires: new Date(Date.now() + 60 * 60 * 1000 * 24), //24시간 유지
        httpOnly: true, //클라이언트에서 쿠키를 확인하지 못하게 하기 위함
        secure: false //https 에서만 사용하게 함.
    });
    
    res.render("page2", { user, pass, pass_ok });
})

app.get('/pg2', (req, res) => {
    const { pass_ok } = req.cookies;
    console.log(pass_ok);
    res.render("page2.html", { pass_ok });
})

app.get('/logout', (req, res) => {
    const { pass_ok } = req.cookies;
    if (pass_ok) {
        res.clearCookie('pass_ok');
        res.redirect('/');
    }
    res.clearCookie('pass_ok');
})

app.listen(app.get("port"), () => {
    console.log(app.get("port"), "포트로 접속 대기중");
})