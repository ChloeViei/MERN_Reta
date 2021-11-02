const StockModel = require('../models/stock.model');
const ObjectID = require('mongoose').Types.ObjectId;


module.exports.getAllStocks = async (req, res) => {
    StockModel.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Error to get data: ' + err);
        }
    }).limit(5);
};

module.exports.stockInfo = async (req, res) => {
    if (!ObjectID.isValid(req.params.userId)) {
        return res.status(400).send('ID unknow : ' + req.params.userId);
    };

    StockModel.findOne(
        {userId: req.params.userId},
        (err, res) => {
            if (!err) res.send(docs);
            else console.log('ID unknown : ' + err);
        }
    )
}

module.exports.createStock = async (req, res) => {

};

module.exports.updateStock = (req, res) => {

};

module.exports.deleteStock = (req, res) => {

};