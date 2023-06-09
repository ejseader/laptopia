const router = require('express').Router();
// need to import the laptop file from models here. 
const {Laptop} = require('../../models');

// The `/api/laptop` endpoint
// get all the laptops that are seeded into database. 
router.get('/', (req, res) => {
  // find all laptops
  // be sure to include its associated Products
  Laptop.findAll({
    include: [Laptop]
  })
  .then(cat => res.json(cat))
  .catch(err => res.status(500).json(err))
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Laptop.findOne({
    where: {
      id: req.params.id
    },
    include: [Laptop]
  })
  .then(cat => res.json(cat))
  .catch(err => res.status(500).json(err))
});

router.post('/', (req, res) => {
  // create a new laptop
  Laptop.create(req.body)
  .then(cat => res.json(cat))
  .catch(err => res.status(500).json(err))
});

router.put('/:id', (req, res) => {
  // update a laptop by its `id` value
  Laptop.update(req.body, {
    where: {
      id: req.params.id
    },
  })
  .then(cat => res.json(cat))
  .catch(err => res.status(500).json(err))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.delete({
    where: {
      id: req.params.id
    },
  })
  .then(cat => res.json(cat))
  .catch(err => res.status(500).json(err))
});

module.exports = router;
