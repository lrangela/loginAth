const {Router} = require('express');
const router = Router();

const User = require('../models/User');

const jwt = require('jsonwebtoken');

router.get('/', (req, res) => res.send('Hello word'))

router.post('/signup', async (req, res) => {
    const {email, password} = req.body;
    const newUser = new User({email, password});
    await newUser.save();

const token = jwt.sign({_id: newUser.id}, 'secrectKey');

res.status(200).json({token})
})

router.post('/signin', async (req, res) =>{

    const { email, password} = req.body;
    const user = await User.findOne({email})

    if(!user) return res.status(401).send("The email doesn't exists");
    if(user.password !== password) return res.status(401).send('Worng Password');

    const token = jwt.sign({_id: user.id}, 'secrectKey');
    return res.status(200).json({token});
});

router.get('/tasks', (req, res) => {
    res.json([
        {
        _id: 1,
        name: 'Task one',
        description: 'lorem ipsum',
        date: "2021-11-01T19:00:33.697Z" 
    },
    {
        _id: 2,
        name: 'Task two',
        description: 'lorem ipsum',
        date: "2021-11-01T19:00:33.697Z" 
    },
    {
        _id: 3,
        name: 'Task three',
        description: 'lorem ipsum',
        date: "2021-11-01T19:00:33.697Z" 
    },
])
})

router.get('/private-tasks',verifyToken, (req, res) =>{
    res.json([
        {
        _id: 1,
        name: 'Task one',
        description: 'lorem ipsum',
        date: "2021-11-01T19:00:33.697Z" 
    },
    {
        _id: 2,
        name: 'Task two',
        description: 'lorem ipsum',
        date: "2021-11-01T19:00:33.697Z" 
    },
    {
        _id: 3,
        name: 'Task three',
        description: 'lorem ipsum',
        date: "2021-11-01T19:00:33.697Z" 
    },
])
})

router.get('/profile', verifyToken, (req, res)=>{
    res.send(req.userId);
})

function verifyToken(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send('Unthorize Request');
    }

    //console.log(req.headers.authorization);

    const token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send('Unthorize Request');
    }

    const payload = jwt.verify(token, 'secrectKey')
    req.userId = payload._id;
    next();
}

module.exports = router;