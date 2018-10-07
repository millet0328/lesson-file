var mongoose = require('../config/mongoose');
var models = {};
//用户
var userSchema = mongoose.Schema({
	tel: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	nickname: {
		type: String,
		default: ''
	},
	sex: {
		type: String,
		default: '男'
	},
	avator: {
		type: String,
		default: 'img/avator.jpg'
	}
});
models.User = mongoose.model('User', userSchema);
//请求列表、好友列表
var friendListSchema = mongoose.Schema({
	account: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	friends: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		default: []
	}],
	request: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		default: []
	}]
})
models.FriendList = mongoose.model('FriendList', friendListSchema);
//消息记录
var recordSchema = mongoose.Schema({
	users: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}],
	history: []
})
models.Record = mongoose.model('Record', recordSchema);
//消息列表，记录最后一次信息
var chatListSchema = mongoose.Schema({
	account: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	list: [{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
		lastMsg: {
			type: String,
			default: ''
		}
	}]
})
models.ChatList = mongoose.model('ChatList', chatListSchema);

module.exports = models;