var express = require('express');
// var app = express();
const calander_controller = require('../controllers/calanders');



module.exports.configure = function (app) {
    app.get('/', function (req, res) {
        res.render('index');
    });
 
//========================== Start Create calander apis=============================//

    app.post('/create/calander',calander_controller.calander)



//========================== End Create calander apis=============================//

}
