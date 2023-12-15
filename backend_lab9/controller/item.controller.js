const Item = require('../models/item.module')

exports.create = (req, res) => {
    // Validate request
    if(!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const item = {
        title: req.body.title,
        price: req.body.price
    }

    // Create and Save a new Item
    Item.create(item)
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while  creating the Item."
        });
        });
};

exports.findAll = (req, res) => {
    Item.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while  creating the Item."
        });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Item.findByPk(id)
        .then(data => {
            if(data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Item with id=${id}.`
                });
            }
        })
        .catch(err => {
            console.error("Error retrieving Item with id=" + id, err);
            res.status(500).send({
                message: "Error retrieving Item with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Item.update(req.body,{
        where: { id: id }
    })
        .then(num => {
            if(num == 1) {
                res.send({
                    message: "Item was updated successfully"
            });
            } else {
                res.send({
                    message: `Cannot update Item with id=${id}. Maybe Item was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Item with id=" + id
            });
        });
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Item.destroy({
        where: { id: id }
    })
        .then(num => {
            if(num == 1) {
                res.send({
                    message: "Item was deleted successfully."
            });
            } else {
                res.send({
                    message: `Cannot delete Item with id=${id}.     Maybe Item was not found.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Item with id=" + id
        })
        });
};

