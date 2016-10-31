// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

Array.prototype.myReduce = function(callback){
  var result = this[0];
  for(var i=1; i<this.length; i++){
    result = callback(result, this[i]);
  }
  return result;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
