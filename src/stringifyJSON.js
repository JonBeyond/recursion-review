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

  } else if (typeof obj === 'object') {
    jsonString += '{';
    for (let key in obj) {
      jsonString += '"' + key + '": ' + stringifyJSON(obj[key]);
    }
    jsonString += '}';
    return jsonString;
  
  }




  //case if obj is an objec



  //case if obj is a primitive : null, num, string 
};

