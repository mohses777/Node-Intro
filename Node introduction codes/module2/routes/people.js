const express = require('express');
const {deletePerson,getPeople,updatePerson,createPerson} = require('../controllers/people')

const router = express.Router()


router.get('/',getPeople)

router.post('/postman',createPerson)

router.put('/:id',updatePerson)

router.delete('/:id',deletePerson)


module.exports = router