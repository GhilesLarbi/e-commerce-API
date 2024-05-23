const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

const asyncHandler = require('../helpers/asyncHandler')
const isAdmin = require('../helpers/isAdmin')

const User = require('../models/user');

router.get('/', asyncHandler(async (req, res) =>{
    const userList = await User.find().select('-passwordHash');

    if(!userList) {
        return res.status(500).json({success:false})
    }
    res.send(userList);
}))

router.get ('/:id', asyncHandler(async (req, res) => {
	console.log("what the hell is going on here")
    const user = await User.findById(req.params.id).select('-passwordHash');

    if (!user) {
		return res.status(500).json({ success: false, message: 'The user with the given ID not exists' })
    }
    res.status(200).send({success: true, data : user})
    
}))



router.post('/register', asyncHandler(async (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(req.body.password, 10),
        isAdmin: req.body.isAdmin,
    })
	try {
    	user = await user.save();
	} catch (err) {
		console.log(err)
    	return res.status(404).send({success: false, field : Object.keys(err.keyValue)[0], message : "This is already exist"})
	}

    if (!user) return res.status(404).send({ message : 'User cannot be created'})

	else return res.send(user);
}))


router.delete('/:id',isAdmin, (req, res) => {
    User.findByIdAndRemove(req.params.id).then(user => {
        if (user) {
            return res.status(200).json({ success: true, message: 'User deleted successfully' })
        } else {
            return res.status(404).json({ success: false, message: 'User cannot find' })
        }
    }).catch(err => {
        return res.status(400).json({ success: false, error: err })
    })
})

router.post('/login', asyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email})
    const secret = process.env.secret;

    if(!user) {
        return res.status(400).send({"success" : false , "message":'Email not found', "field":"email"});
    }

    if(user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
        const token = jwt.sign({
            userID: user.id,
            isAdmin : false
        }, secret, {expiresIn : '100000000d'} )
        return res.status(200).send({success : true, data : {id: user.id, email: user.email, token: token, isAdmin: user.isAdmin}});
    } else {
        return res.status(400).send({"success" : false ,"message":"password is incorrect", "field":"password"});
    }

    return res.status(200).send(user);
}))

router.get('/get/count', asyncHandler(async (req, res) => {
    const userCount = await User.countDocuments((count) => count);
    if (!userCount) {
        res.status(500), json({ success: false })
    }
    res.status(200).send({
        userCount: userCount
    });
}))

module.exports = router;
