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
        jsonString += ', ';
      }
    }
    jsonString += ']';
    return jsonString;

  } else if (obj && typeof obj === 'object') { //testing if not null 
    jsonString += '{';
    for (let key in obj) {
      jsonString += '"' + key + '": ' + stringifyJSON(obj[key]);
    }
    jsonString += '}';
    return jsonString;
  } else {
    
    let stringObj = obj.toString();
    //add number
    if (stringObj[0] === '-' || stringObj[0] >= 0 || stringObj[0] >= 9) {
      return stringObj;
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
    if (obj === undefined || typeof obj === "function") {
      return '';
    }
    console.log("not found (err)");
    return "error";
  }
  /*
function: 
undefined
*/
};

