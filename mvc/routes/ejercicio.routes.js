const express= require('express'),
    router=express.Router(),
    Ejercicioctrl=require('../controllers/ejercicio.controller')

router.post('/',Ejercicioctrl.create)

module.exports=router