// todos.js

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Todo = require('../models/todo');

// Get Todo
router.get('/', function(req, res, next){
	Todo.find(function(err, todos){
		if(err) 
			return next(err);
		res.json(todos);
	});
});
// post todo
router.post('/', function(req,res,next){
	Todo.create(req.body, function(err, post){
		if(err)
			return next(err);
		res.json(post);
	});
});

// get :id
router.get('/:id', function(req, res,next){
	Todo.findById(req.params.id, function(err, post){ 
		if (err)
			return next(err);
		res.json(post);
	});
});

// update :id
router.put('/:id', function(req, res, next){
	Todo.findByIdAndUpdate(req.params.id, req.body, function(err, post){
		if(err)
			return next(err);
		res.json(post);
	});
});

// delete :id
router.delete('/:id', function(req, res, next){
	Todo.findByIdAndRemove(req.params.id, function(err, post){
		if(err)
			return next(err);
		res.json(post);
	})
})

module.exports = router;