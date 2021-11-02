const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true
    },
    inventory: {
        type: [
            {
                productId: String,
                quantity: Number,
                timestamps: Number
            }
        ],
        required: true
    }
  },
  {
    timestamps: true,
  }
);

const StockModel = mongoose.model("stock", stockSchema);

module.exports = StockModel;