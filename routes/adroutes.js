'use strict';
module.exports = function(app) {
	
	let adc = require('../controllers/adController');

		// rotas definidas para a API
		app.route('/testeLocal')
		.get(adc.testeLocal);

		app.route('/teste')
		.get(adc.testeRemote);

		app.route('/search')
		.post(adc.postRemote);
		
		app.route('/login')
		.post(adc.postRemote);

		app.route('/users')
		.get(adc.getRemote);

		app.route('/users/find/:id')
		.get(adc.getRemote);

		app.route('/users/find2/:id')
		.get(adc.getRemote);

		app.route('/users/adduser')
		.post(adc.postRemote);

		app.route('/users/deleteuser')
		.delete(adc.deleteRemote);
	
		app.route('/users/edituser')
		.put(adc.updateRemote);

		app.route('/update')
		.put(adc.updateRemote);

		app.route('/users/disableuser')
		.put(adc.updateRemote);

		app.route('/users/enableuser')
		.put(adc.updateRemote);

		app.route('/users/changepassword')
		.put(adc.updateRemote);
		
		app.route('/users/resetpassword')
		.put(adc.updateRemote);

		//por testar
		app.route('/update')
		.put(adc.updateRemote);

	
};