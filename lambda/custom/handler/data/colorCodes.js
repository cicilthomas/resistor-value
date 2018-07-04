/* Contains the resistor color codes 
 * and their specifics.
 */


module.exports = {
    black: {
      value: 0,
      multiplier: '',
      tolerance: '1'
    },
    brown: {
      value: 1,
      multiplier: '0',
      tolerance: '2'
    },

    red: {
      value: 2,
      multiplier: '00',
      tolerance: 'na'
    },
    orange: {
      value: 3,
      multiplier: ' kilo',
      tolerance: 'na'
    },
    yellow: {
      value: 4,
      multiplier: '0 kilo',
      tolerance: 'na'
    },
    green: {
      value: 5,
      multiplier: '00 kilo',
      tolerance: '0.5'
    },
    blue: {
      value: 6,
      multiplier: ' mega',
      tolerance: '0.25'
    },
    violet: {
      value: 7,
      multiplier: '0 mega',
      tolerance: '0.1'
    },
    gray: {
      value: 8,
      multiplier: '00 mega',
      tolerance: '0.05'
    },
    white: {
      value: 9,
      multiplier: ' giga',
      tolerance: 'na'
    },
    silver: {
      value: 'na',
      multiplier: 0.01,
      tolerance: '10'
    },
    gold: {
      value: 'na',
      multiplier: 0.1,
      tolerance: '5'
    }
};