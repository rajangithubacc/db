"use strict";

const models = require('mongoose').models;
const async = require('async');




exports.calander = (req, res) => {
    console.log("enter");
    async.waterfall([
        (cb) => {
            models.calander.create({
                name: "Rajan Sharma",
                status: true
            }, function (err, user) {
                if (err) return (err);
                return cb(null, user);
            })
        }
    ], (err, data) => {
        return res.send(data);
    });
}