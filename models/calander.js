var mongoose = require('mongoose');
var models = require('mongoose').models;


var calander = mongoose.Schema({
    name: { type: String, default: "" },
    price: { type: String, default: ""  },
    status: { type: Boolean, default: true },
    endDate: { type: Date, default: ""  },
    startDate: { type: Date, default: "" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

calander.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

mongoose.model('calander', calander);
