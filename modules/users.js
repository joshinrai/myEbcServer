/**
 * Created by joshinrai on 2017/4/9.
 */
var mongoose = require('mongoose');

//申明一个mongoose对象
var UsersSchema = new mongoose.Schema({
    name: String,
    paw: String,
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
})
module.exports = UsersSchema;