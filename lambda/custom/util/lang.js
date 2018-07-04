var translations = {
      'en-US': {
          'translation': {
            }
        },
      'en-IN': {
          'translation': {
          }
        }
        ,
      'en': {
          'translation': {
          }
        }
    };


module.exports = {
   add: function(trans) {
      for(var localeKey in trans){
            console.log("locale key: " + localeKey);
            var locale = trans[localeKey];
             for(var langKey in locale){
              console.log(" key: " + locale[langKey])
               translations[localeKey].translation[langKey] = locale[langKey];
             }
           }
        },
  getLang: function() {
    return translations;
  }
 }
