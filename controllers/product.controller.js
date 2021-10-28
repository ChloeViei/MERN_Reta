const ProductModel = require('../models/product.model');
const ObjectID = require('mongoose').Types.ObjectId;


module.exports.getAllProducts = async (req, res) => {
    ProductModel.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Error to get data: ' + err);
        }
    })
}

module.exports.createProduct = async (req, res) => {
    const newProduct = new ProductModel({
        name: req.body.name
    });

    try {
        const product = await newProduct.save();
        return res.status(200).json(product);
    } catch (err) {
        return res.status(400).json(err);
    }
}

module.exports.updateProduct = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)){
        return res.status(400).send('ID unknown : ' + req.params.id)
    };

    const updateProduct = {
        name: req.body.name
    };

    ItemModel.findByIdAndUpdate(
        req.params.id,
        {
            $set: updateProduct
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

module.exports.deleteProduct = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id);

    try {
        UserModel.remove(
            { _id: req.params.id },
            (err, docs) => {
                if (err) {
                    return res.status(500).send({ message: err });
                }
                return res.status(200).json({ message: "Successfully deleted " });
            }
        );
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};


module.exports.deleteElementInProduct = async (req, res) => {

    ProductModel.findOne({}, function (err, product) {
        product.req.params.element = undefined;
        product.save();
        return res.status(200).json({ message: "Successfully deleted " });
    });
}