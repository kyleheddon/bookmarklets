var OFFSET = -3;
(function(){
  var positiveOffset = 7 + OFFSET > 7 ? OFFSET : 7 + OFFSET;
  var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  var dayTokens = ['<!--DAY0-->', '<!--DAY1-->', '<!--DAY2-->', '<!--DAY3-->', '<!--DAY4-->', '<!--DAY5-->', '<!--DAY6-->'];
  
  for(var i = 0; i < days.length; i++){
    replaceDayWithToken(days[i], dayTokens[i]);
  }
  
  for(var i = 0; i < days.length; i++){
    var replacementDay = getReplacementDay(i);
    replaceTokenWithDay(dayTokens[i], replacementDay);
  }
  
  function getReplacementDay(i){
    var replacementDay = days[(i + positiveOffset) % 7];
    return replacementDay[0].toUpperCase() + replacementDay.substring(1);
  }
  
  function replaceDayWithToken(day, token){
    var dayRegEx = new RegExp(day, 'gi');
    document.body.innerHTML = document.body.innerHTML.replace(dayRegEx, token);
  }
  
  function replaceTokenWithDay(token, day){
    var tokenRegEx = new RegExp(token, 'g');
    document.body.innerHTML = document.body.innerHTML.replace(tokenRegEx, day);
  }

})()
