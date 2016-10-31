// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

Array.prototype.myMap = function(callback){
  var result =[];
  for(var i=0; i<this.length; i++){
    result.push(callback(this[i]));
  }
  return result;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myMap;
