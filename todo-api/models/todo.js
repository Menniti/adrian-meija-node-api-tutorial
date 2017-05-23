// todo.js

var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
	name: String,
	completed: Boolean,
	note: String,
	update_at: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('todo', todoSchema);