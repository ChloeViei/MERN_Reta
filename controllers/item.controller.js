const ItemModel = require('../models/item.model');
const ObjectID = require('mongoose').Types.ObjectId;


module.exports.getAllItems = async (req, res) => {
    ItemModel.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Error to get data: ' + err);
        }
    })
}

module.exports.createItem = async (req, res) => {
    const newItem = new ItemModel({
        name: req.body.name
    });

    try {
        const item = await newItem.save();
        return res.status(200).json(item);
    } catch (err) {
        return res.status(400).json(err);
    }
}

module.exports.updateItem = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)){
        return res.status(400).send('ID unknown : ' + req.params.id)
    };

    const updateItem = {
        name: req.body.name
    };

    ItemModel.findByIdAndUpdate(
        req.params.id,
        {
            $set: updateItem
        },
        { new: true},
        (err, docs) => {
            if (!err) {
                res.send(docs);
            } else {
                console.log("Update error : " + err);
            }
        }
    )
}

module.exports.deleteItem = async (req, res) => {

}