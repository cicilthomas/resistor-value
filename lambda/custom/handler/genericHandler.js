/**
 * This handler takes care of the generic intents like
 * LaunchIntent, StopIntent, CancelIntent etc.
 */

var lang = require('./../util/lang');


lang.add({
    'en': {
        'WELCOME': "Welcome to Resistor Value skill. Tell me the resistor color bands to know its resistance",
        'TITLE': "Resistor Value",
        'HELP': "You could simply say the color bands of the resistor. Example, just say, brown, black, red, gold.",
        'STOP': "Okay, see you next time"

    }
});


module.exports = {
    handlers: {
        'LaunchRequest': function() {
            console.log("Inside LaunchRequest");
            this.emit(':ask', this.t('WELCOME'), this.t('HELP'));
        },

        'AMAZON.HelpIntent': function() {
            this.emit(':ask', this.t('HELP'), this.t('HELP'));
        },

        'AMAZON.CancelIntent': function() {
            this.emit(':tell', this.t('STOP'));
        },
        'AMAZON.StopIntent': function() {
            this.emit(':tell', this.t('STOP'));
        },

        'SessionEndedRequest': function() {
            this.emit(':tell', this.t('STOP'));
        }
    }
};

