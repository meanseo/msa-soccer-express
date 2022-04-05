const { getBmi, getCalc} = require('../controllers/basic.controller');
module.exports = x =>{
    x.app.post(`${x.url}/bmi`, getBmi) ;
    x.app.post(`${x.url}/calc`, getCalc) ;
} 