'use strict';

// https://github.com/xetorthio/shmock

var shmock = require('shmock'),
	port = process.env.PORT || 8100;

	var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'foobarbank.com.s3-website-us-east-1.amazonaws.com');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
	};

var mock = shmock(port, [allowCrossDomain]);

mock.post('/api/session/').persist().reply(201, require('./mock_data/create-session'));
mock.get('/api/session/0394oiljeljkdrd/transfer/').persist().reply(200, require('./mock_data/get-transfer'));
mock.post('/api/session/0394oiljeljkdrd/transfer/').persist().reply(200);
