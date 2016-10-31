// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Find
Array.prototype.myFind = function(callback){
  for(var i=0; i<this.length; i++){
    if(callback(this[i])){
      return this[i];
    }
  }
  return undefined;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myFind;
