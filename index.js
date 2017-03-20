var tessel = require('tessel');
var rfidlib = require('./rfid/rfid.js');

console.log(tessel);

var rfid = rfidlib.use(tessel.port['A']);

rfid.on('ready', function(version){
  console.log("Our RFID is running!");
  rfid.on('data', function(card) {
    console.log('UID:', card.uid.toString('hex'));
  });
});