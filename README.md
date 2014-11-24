bookmarklets
============

Collection of bookmarklets I find useful 

offsetDays
----
paste this into the url of a bookmark
```
javascript:var OFFSET=-3;(function(d){var h=7+d>7?d:7+d;var j=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];var c=["<!--DAY0-->","<!--DAY1-->","<!--DAY2-->","<!--DAY3-->","<!--DAY4-->","<!--DAY5-->","<!--DAY6-->"];for(var e=0;e<j.length;e++){g(j[e],c[e])}for(var e=0;e<j.length;e++){var b=a(e);f(c[e],b)}function a(l){var k=j[(l+h)%7];return k[0].toUpperCase()+k.substring(1)}function g(i,k){var l=new RegExp(i,"gi");document.body.innerHTML=document.body.innerHTML.replace(l,k)}function f(k,i){var l=new RegExp(k,"g");document.body.innerHTML=document.body.innerHTML.replace(l,i)}})(OFFSET)
```

