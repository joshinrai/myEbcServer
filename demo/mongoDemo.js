/**
 * Created by joshinrai on 2017/4/10.
 */

var express = require('express');
var router = express.Router();

var mongodb = require('mongodb');
var server = new mongodb.Server('127.0.0.1' , 27017 , {auto_reconnect:true}) ;
var  db = new mongodb.Db('myEbc', server, {safe:true});

db.open(function(err, db) {
    if (!err) {
        console.log('connect db');
        // 连接Collection（可以认为是mysql的table）
        // 第1种连接方式
        // db.collection('mycoll',{safe:true}, function(err, collection){
        //     if(err){
        //         console.log(err);
        //     }
        // });
        // 第2种连接方式
        db.createCollection('mycoll', {safe:true}, function(err, collection){
            if(err){
                console.log(err);
            }else{
                //更新数据
                // collection.update({title:'hello'}, {$set:{number:3}}, {safe:true}, function(err, result){
                //     console.log(result);
                // });
                // 删除数据
                // collection.remove({title:'hello'},{safe:true},function(err,result){
                //                   console.log(result);
                //               });

                // console.log(collection);
                // 查询数据
                var tmp1 = {title:'hello'};
                var tmp2 = {title:'world'};
                //新增数据
                collection.insert([tmp1,tmp2],{safe:true},function(err,result){
                    console.log(result);
                });
                //查询多条记录
                collection.find().toArray(function(err,docs){
                    console.log('find');
                    console.log(docs);
                });
                //查询一条记录
                collection.findOne(function(err,doc){
                    console.log('findOne');
                    console.log(doc);
                });
            }

        });
        // console.log('delete ...');
        // //删除Collection
        // db.dropCollection('mycoll',{safe:true},function(err,result){

        //           if(err){

        //         console.log('err:');
        //         console.log(err);
        //     }else{
        //         console.log('ok:');
        //         console.log(result);
        //     }
        //       });

    }else{
        console.log(err) ;
    }
}) ;

module.exports = router;