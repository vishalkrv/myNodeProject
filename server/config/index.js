'use strict';

var path = require('path');
var config ={};
module.exports = config = {
	port: 8080,
	host: '127.0.0.1',
	db_url: 'mongodb://127.0.0.1:27017/expressAngular',
	secretKey:'thatsmyApp',
	root: path.normalize(path.join(__dirname, '../..')),
	serverPath: function(){
		return path.join(this.root,'/server');
	},
	clientPath: function(){
		return path.join(this.root,'/public');
	},
	routesPath: function(){
		return path.join(this.serverPath(),'/routes');
	},
	schemaPath:function(){
		return path.join(this.serverPath(),'/model/schema');
	}	
};