// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  let jsonString = '';
  //if obj is an array 
  
  if (Array.isArray(obj)) {
    jsonString += '[';
    for (let i = 0; i < obj.length; i++) {
      jsonString += stringifyJSON(obj[i]);
      if (i !== obj.length - 1) {
        jsonString += ',';
      }
    }
    jsonString += ']';
    return jsonString;

  } else if (obj && typeof obj === 'object') { //testing if not null 
    jsonString += '{';
    
    for (let key in obj) {
      if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
        //do nothing - ignore value
      } else {
        jsonString += '"' + key + '":' + stringifyJSON(obj[key]) + ',';
      }
    }

    if (jsonString.length > 1 ) {
      jsonString = jsonString.slice(0, jsonString.length - 1);
    }
    jsonString += '}';
    return jsonString;
  } else {
    
    //add number
    if (typeof obj === 'number') {
      return jsonString.concat(obj);
    }
    
    //add string
    if (typeof obj === 'string' ) {
      return jsonString += '"' + obj + '"';
    }
    
    if (typeof obj === 'boolean' ) {
      return obj ? 'true' : 'false';
    }
    
    if (obj === null) {
      return 'null';      
    }
    if (obj === undefined || typeof obj === 'function') {
      return '';
    }
    console.log('not found (err)');
    return 'error';
  }
  /*
function: 
undefined
*/
};







