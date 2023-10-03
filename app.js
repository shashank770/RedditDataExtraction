const express = require("express");
const app = express();
const cors = require("cors");
const fetch = require("node-fetch")
require("dotenv").config()
app.use(cors());
const REDDIT_CLIENT_ID='rnyVZZYSU5qj1qWo34RpRg'
const REDDIT_CLIENT_SECRET='U45URrgbWsGSc0V615ozM9Qqy4wyOg'
app.get("/login_reddit", async(req, res) => {
    try {
        const code = req.query.code;
        const encodedHeader = Buffer.from (`${REDDIT_CLIENT_ID}:${REDDIT_CLIENT_SECRET}`).toString("base64") 
        let response = await fetch('https://www.reddit.com/api/v1/access_token', {
            method: 'POST',
            body: `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/login/callback`,
            headers: {authorization: `Basic ${encodedHeader}`, 'Content-Type': 'application/x-www-form-urlencoded'}
        });


        let body = await response.json();
        response = await fetch('https://oauth.reddit.com/api/v1/me', {
            method: "GET",
            headers: {authorization: `bearer ${body.access_token}`}
        })

        let TOKEN = body.access_token
        
        response = await fetch('https://oauth.reddit.com/user/singhania_/overview', {
            method: "GET",
            headers: {
                'User-Agent': 'MyAPI/0.0.1',
                'Authorization': `bearer ${TOKEN}`
            }
        });

        let responseJSON = await response.json();
        let upvotedList = await responseJSON.data.children;
        console.log(upvotedList)

        // for(upvoted of upvotedList) {
        //     console.log(upvoted)
        // }

    } catch(e) {
        res.send({msg: "Something went wrong."})
        console.log("errrr")
    }
    })

app.listen(3003, () => {
console.log("Server Started")
})