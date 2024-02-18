const express = require ('express')

const router = express.Router()
 

const voitures = [
    {id:1, name:"clio"}, {id:2, name:"migane"},{id:3, name:"range"}
]

router.post('/add', (req, res)=>{
    const newVoiture = {id: req.body.id, name: req.body.name}
    voitures.push (newVoiture)
    res.send(voitures)
})

router.get('/all', (req, res)=>{

    res.send(voitures)
})

router.get('/get/:id' , (req, res)=>{
    const id = req.params.id
    const oneCar = voitures.find(element => element.id == id)
    if(oneCar){
        res.json({msg:"voiture success ", response:oneCar})

    }else{
        res.json("not found")
    }

})

router.put('/modif/:id' , (req, res)=>{
    const id = req.params.id
    const oneCar = voitures.find(element => element.id == id)
    if(oneCar){
        const resultat = voitures.map(element=>{
            if(element.id == id){
                return {...element, name: req.body.name }
            }
            return element
        }) 
        return res.json(resultat)

    }else{
        return res.json("not found")
    }
})

router.delete('/supp/:id' , (req, res)=>{
    const id = req.params.id
    const oneCar = voitures.find(element => element.id == id)
    if(oneCar){
        const resultat = voitures.filter(element=>element.id != id)
        return res.json(resultat)
    }else{
        return res.json("not found")
    }

})

module.exports=router

