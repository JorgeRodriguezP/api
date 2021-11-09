const ctrlEjercicio={},
Ejercicio=require('../models/ejercicio')

ctrlEjercicio.create=async(req, rest) => {
    console.log(req.body)
    
    const newEjercicio= new Ejercicio({
        name: req.body.name,
        document: req.body.document,
        phone: req.body.phone,
        mail: req.body.mail,
        date: req.body.date
    })

    await newEjercicio.save()
    rest.json({status:true,msg:'Cita aprobada'})
}

module.exports=ctrlEjercicio