bookmarklets
============

Collection of bookmarklets I find useful 

offsetDays
----
paste this into the url of a bookmark
```
javascript:var OFFSET=-3;(function(){var e=7+OFFSET>7?OFFSET:7+OFFSET;var h=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];var a=["<!--DAY0-->","<!--DAY1-->","<!--DAY2-->","<!--DAY3-->","<!--DAY4-->","<!--DAY5-->","<!--DAY6-->"];for(var d=0;d<h.length;d++){g(h[d],a[d])}for(var d=0;d<h.length;d++){var b=f(d);c(a[d],b)}function f(k){var j=h[(k+e)%7];return j[0].toUpperCase()+j.substring(1)}function g(i,j){var k=new RegExp(i,"gi");document.body.innerHTML=document.body.innerHTML.replace(k,j)}function c(j,i){var k=new RegExp(j,"g");document.body.innerHTML=document.body.innerHTML.replace(k,i)}})()
```

