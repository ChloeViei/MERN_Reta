const ProductModel = require('../models/product.model');
const fs = require('fs');
const { promisify } = require('util');
const pipeline = promisify(require('steam').pipeline);

module.exports.uploadProfil = async (req, res) => {
    try {
        if (req.file.detectedMimeType != "image/jpg" && 
            req.file.detectedMimeType != "image/png" && 
            req.file.detectedMimeType != "image/jpeg"
        ) {
            throw Error("invalid file");
        };

        if (req.file.size > 50000) throw Error('max size'); 
    } catch (err) {
        return res.status(400).json(err);
    };

    const filename = req.body.name + ".jpg";

    await pipeline(
        req.file.steam,
        fs.createWriteStream(
            `${__dirname}/../product/public/uploads/picture/${filename}`
        )
    );
}