const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const asyncHandler = require('../helpers/asyncHandler')


router.post('/login', asyncHandler(async (req, res) => {
	const secret = process.env.secret
	if (!req.body.email || !req.body.password) 
        return res.status(400).send({"success" : false , "message":'incorrect credintiels', "field":"inputs"});

	if (req.body.email != process.env.adminEmail) 
        return res.status(400).send({"success" : false , "message":'incorrect email', "field":"email"});

	if (req.body.password != process.env.adminPassword) 
        return res.status(400).send({"success" : false , "message":'incorrect password', "field":"password"});


    const token = jwt.sign({
            admin: 0,
            isAdmin : true
    }, secret, {expiresIn : '1000000000d'} )

    return res.status(200).send({success : true, data : {token: token, isAdmin: true}});

}))

module.exports = router;
