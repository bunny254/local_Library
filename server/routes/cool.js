var express= require('express');
var router= express.Router();

router.get('/',function(req,res,next){
    res.send('This one is really cool')
});

module.exports= router;