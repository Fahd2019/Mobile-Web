var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    table: {
      type: String,
      required: true
    }
});

mongoose.model('Order', OrderSchema);
