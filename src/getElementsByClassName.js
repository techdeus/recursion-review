// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var docBody = document.body;
  var results = [];
  
  var checkNode = function(node){
    if ( node.classList && node.classList.contains(className) ) {
      results.push(node);
      console.log(results);
    }
    node.childNodes.forEach(function(child){
      checkNode(child);
    });
  }
  checkNode(docBody);
  return results;
};
