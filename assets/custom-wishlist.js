if(!window.SwymCallbacks){window.SwymCallbacks = [];}
window.SwymCallbacks.push(function(){
  _swat.fetchWrtEventTypeET(function(products){
   console.log(products);
 }, _swat.EventTypes.addToWishlist);});
