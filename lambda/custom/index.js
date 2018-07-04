/* Required node modules */
const Alexa = require('alexa-sdk');
const AWS = require('aws-sdk');


/* App config */
var config = require('./config');

/* App Handlers */
var genericHandler = require('./handler/genericHandler');
var resistorHandler = require('./handler/resistorHandler');

/* App language translations */
var language = require('./util/lang');


AWS.config.update({
  region: config.awsRregion
});

exports.handler = function(event, context, callback) {
  console.log("-----------------------------------------------");
  console.log("Request timestamp: " + event.request.timestamp);
  var alexa = Alexa.handler(event, context);
  alexa.appId = config.appId;
  alexa.resources = language.getLang();
  alexa.registerHandlers(
    genericHandler.handlers,
    resistorHandler.handlers);
  alexa.execute();
};
