// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, prenode) {
  let node = prenode || document.body;
  let elementCollection = [];

  if (node.classList && node.classList.contains(className)) {
    elementCollection.push(node);
  }

  if (node.hasChildNodes()) {
    
    for (let i = 0; i < node.childNodes.length; i++) {
      elementCollection = elementCollection.concat(getElementsByClassName(className, node.childNodes[i]));
    }
  }
  return elementCollection;
};