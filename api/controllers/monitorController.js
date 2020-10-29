'use strict';

const mongoose = require('mongoose'),
  Monitor = mongoose.model('MonitorModel');

exports.listAll = function(req, res) {
    Monitor.find({}, function(err, monitor) {
        if (err)
            res.send(err);
        res.json(monitor);
    });
};

exports.create = function(req, res) {
    var new_monitor = new Monitor(req.body);
    new_monitor.save(function(err, monitor) {
        if (err)
            res.send(err);
        res.json(monitor);
    });
};

exports.read = function(req, res) {
    Monitor.findById(req.params.monitorId, function(err, monitor) {
        if (err)
            res.send(err);
        res.json(monitor);
    });
};

exports.update = function(req, res) {
    Monitor.findOneAndUpdate({_id: req.params.monitorId}, req.body, {new: true}, function(err, monitor) {
        if (err)
            res.send(err);
        res.json(monitor);
    });
};

exports.delete = function(req, res) {
    Monitor.remove({
        _id: req.params.monitorId
    }, function(err, monitor) {
        if (err)
            res.send(err);
        res.json({ message: 'Monitor successfully deleted' });
    });
};
