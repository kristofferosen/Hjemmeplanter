var express    = require('express');      
var app        = express();                
var bodyParser = require('body-parser');
var cors = require('cors');
var port = process.env.PORT || 80; 
var moment = require('moment');
var datapoint = require('./models/datapoint');
var router = express.Router();          


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

router.use(function(req, res, next) {
    console.log('Something is happening.');
    next(); 
});

router.route('/datapoint')
    .post(function(req, res) {

        var datapoint = new datapoint();

        datapoint.chipcode = req.body.chipcode;
        datapoint.soilMoisture = req.body.soilMoisture;
        datapoint.time = Date.now();

        console.log(datapoint)

        datapoint.save(function(err) {

            if (err)
                res.send(err);

            res.json({ message: 'datatapoint created!' });

        });

    }).get(function(req, res) {


    Datapoint.find(function(err, data){
        res.json(data)
    })
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);
var mongoose   = require('mongoose');
mongoose.connect('mongodb://178.62.194.135/greenhouse2');