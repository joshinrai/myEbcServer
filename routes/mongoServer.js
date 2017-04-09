/**
 * Created by joshinrai on 2017/4/9.
 */

var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var Server      = require('mongodb').server;

console.log("Server is ...." , Server) ;
// 创建客户端连接对象
/*var client = new MongoClient( new Server('localhost', 27017, {
    socketOpations: { connectTimeoutMS: 500 },
    poolSize: 5,
    auto_reconnect: true
}, {
    numberOfRetries: 3,
    retryMilliSeconds: 500
}));

// 打开对服务器端MongoDB数据库的连接
client.open(function(err, client) {
    if ( err ) {
        console.log('连接失败！');
    } else {
        var db = client.db('blogdb');  // 建立到数据库blogdb的连接
        if ( db ) {
            console.log('连接成功');
            db.authenticate('username', 'pwd', function(err, result) {   // 对用户数据库身份进行验证
                if ( err ) {
                    console.log('数据库用户身份验证失败');
                    client.close();  // 关闭对MongoDB的连接
                    console.log('连接已关闭......');
                } else {
                    console.log('用户身份验证通过');
                    db.logout(function (err, result) {  // 关闭对数据库的连接，即退出数据库
                        if ( !err ) {
                            console.log('退出数据库出错');
                        }

                        client.close();  // 关闭对MongoDB的连接
                        console.log( '已关闭连接......' );
                    });
                }
            });
        }
    }
});*/
module.exports = router;