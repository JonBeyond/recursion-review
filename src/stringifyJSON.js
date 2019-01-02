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
    
    
    
  }
  /*
number: can start with 0 to 9 or a - (negative)
string: will start with " and end with a 
null: 
boolean: true / false 
function: 
undefined


*/



  //case if obj is an objec



  //case if obj is a primitive : null, num, string 
};

