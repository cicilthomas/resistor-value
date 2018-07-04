/**
 * This handler takes care of the resistor related intent ResistorBands
 */

var lang = require('./../util/lang');
var colorCode = require('./data/colorCodes');


/* Add to master language json */
lang.add({
  'en': {
    'RESISTANCE': "{resistance} ohms",
    'TOLERANCE' : " with a {tolerance}% tolerance",
    'ASK_AGAIN'  : "Do you want try another one",
    'INVALID_COLOR_BANDS' : "Please provide at least 3 valid color codes",
    'ASK_FOR_COLORBANDS': "Okay, please tell me the color bands"
  }
});



module.exports = {
  handlers: {
    'ResistorBands': function() {
      console.log("Request: " + JSON.stringify(this.event.request));

      /* Resistor color bands */
      var band_1 = isSlotValid(this.event.request, "band_one");
      var band_2 = isSlotValid(this.event.request, "band_two");
      var band_3 = isSlotValid(this.event.request, "band_three");
      var tolerance_band = isSlotValid(this.event.request, "tolerance_band");

      /* Proceed if atleast first three colors are valid */
      if (band_1 && band_2 && band_3) {
        /* Find resistance */
        var resistance = colorCode[band_1].value.toString() + colorCode[band_2].value.toString() + colorCode[band_3].multiplier;
        var speechletResponse = this.t('RESISTANCE').replace("{resistance}",resistance);

        /* Add tolerance if the fourth band is specified */
        if (tolerance_band != false && colorCode[tolerance_band].tolerance != 'na') {
          speechletResponse = speechletResponse + this.t('TOLERANCE').replace("{tolerance}",colorCode[tolerance_band].tolerance );
        }
        this.emit(':ask', speechletResponse + '. ' + this.t('ASK_AGAIN'), this.t('HELP'));
      }
      /* Color bands are missing/invalid */
      else {
        this.emit(':ask', this.t('INVALID_COLOR_BANDS'), this.t('HELP'));
      }
    },

    'AMAZON.YesIntent' :  function() {
      console.log("Request: " + JSON.stringify(this.event.request));
      this.emit(':ask',this.t('ASK_FOR_COLORBANDS'), this.t('HELP'));
    },

    'AMAZON.NoIntent' :  function() {
      console.log("Request: " + JSON.stringify(this.event.request));
      this.emit(':tell',this.t('STOP'));
    }
  }
};




/* Checks whether the slots has value
 */
function isSlotValid(request, slotName){
  var slot = request.intent.slots[slotName];
  var slotValue;
  /* Check for slot value and check whether the colors are valid */
  if (slot && slot.value && colorCode[slot.value]) {
      slotValue = slot.value.toLowerCase();
      return slotValue;
  } else {
      return false;
  }
}
