const { create } = require('../controllers/ejercicio.controller')
const user1=require('../models/user1'),
ejercicio=require('../models/ejercicio')

exports.createEjercicio=function(){

    let newEjercicio=new ejercicio({
        name: "Jorge Rodriguez",
        document: 123456,
        phone: 3000000,
        mail: "jr@mail.com",
        date: "2021-11-15"
    })
    newEjercicio.save()
}