const mongoose = require ('mongoose');

const Type = {
    MEAT: "meat",
    VEGETABLE: "vegetable",
    DRINK: "drink",
    FISH: "fish"
};

const Unit = {
    NUMBER: "number",
    WEIGHT: "weight",
    VOLUME: "volume"
};

const ItemSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 250
        },
        default_quantity: {
            type: Number,
        },
        picture: {
            type: String
        },
        type: {
            type: String,
            enum: Type,
        },
        unit: {
            type: String,
            enum: Unit
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Item', ItemSchema);