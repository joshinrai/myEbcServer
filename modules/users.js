/**
 * Created by joshinrai on 2017/4/9.
 */
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://127.0.0.1/myEbc') //连接本地数据库
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

//var test = db.model('test' , UsersSchema) ;
//console.log("mongodb test ..." , test) ;

module.exports = UsersSchema;