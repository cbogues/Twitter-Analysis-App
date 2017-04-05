var core = require('./controllers/core');

module.exports = function(app) {
	app.get('/', core.home);

	// app.get('/top', function(req, res) {
	// 	res.send('this is the top page');
	// })
	app.get('/top', core.top);
	
	app.get('/results', function(req, res) {
		res.send('this is the results page');
	})

	app.get('/api/results', function(req, res) {
		res.json({message: 'this is the API page'});
	})
}