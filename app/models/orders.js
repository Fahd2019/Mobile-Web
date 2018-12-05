var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    items: {
      type: String,
      required: true
    },
    quantity: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    }
});

mongoose.model('Order', OrderSchema);
