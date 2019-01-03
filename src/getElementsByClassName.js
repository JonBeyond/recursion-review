// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, prenode) {
  let node = prenode || body.document;
  let elementCollection = [];

  if (node.classList.contains(className)) {
    //do a thing. add to master object
    elementCollection.push(node);
  }
  if (node.childNodes) {
    //dive deeper
//look more into child nodes
// then figure out how to determine if it exists
    getElementsByClassName(className, node.childNodes() );
  }
  // check node contains className
  // -> check if node contains child getElements
  // --> recall recursively node.childNodes()
  
  
  
};

/*
Useful methods:

node.classList.contains()




*/
