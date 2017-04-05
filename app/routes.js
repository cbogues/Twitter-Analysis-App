var core = require('./controllers/core');
var api  = require('./controllers/api');

module.exports = function(app) {
	app.get('/', core.home);

	// app.get('/top', function(req, res) {
	// 	res.send('this is the top page');
	// })
	app.get('/top', core.top);
	
	app.get('/results', core.results);

	// app.get('/api/results', function(req, res) {
	// 	res.json({message: 'this is the API page'});
	// })
	app.get('/api/results', api.results);
}