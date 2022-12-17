//# all required 
import express from 'express';
const app = express()
import cors from 'cors';
//#port setup
const port = process.env.PORT || 5000
//# used cors
app.use(cors())
//# json req body parser 
app.use(express.json())
import fetch from 'node-fetch';


app.get('/users', async function (req, res) {
    const url =
        'https://jsonplaceholder.typicode.com/users';
    const options = {
        method: 'GET',
    };
    // promise syntax
    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
    try {
        let response = await fetch(url, options);
        response = await response.json();
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: `Internal Server Error.` });
    }
});


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})