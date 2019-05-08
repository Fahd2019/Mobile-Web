const mongoose   =  require('mongoose');
const crypto     =  require('crypto');
const Schema     =  mongoose.Schema;

let UserSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: "client"
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
});

mongoose.model('User', UserSchema);
