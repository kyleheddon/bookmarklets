bookmarklets
============

Collection of bookmarklets I find useful 

offsetDays
----
paste this into the url of a bookmark
```
javascript:var OFFSET=-3;(function(){;var p=7+OFFSET>7?OFFSET:7+OFFSET;var d=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];var t=["<!--DAY0-->","<!--DAY1-->","<!--DAY2-->","<!--DAY3-->","<!--DAY4-->","<!--DAY5-->","<!--DAY6-->"];for(var i=0;i<d.length;i++){v(d[i],t[i])}for(var i=0;i<d.length;i++){var r=s(i);u(t[i],r)}function s(b){var a=d[(b+p)%7];return a[0].toUpperCase()+a.substring(1)}function v(a,b){var c=new RegExp(a,"gi");document.body.innerHTML=document.body.innerHTML.replace(c,b)}function u(b,a){var c=new RegExp(b,"g");document.body.innerHTML=document.body.innerHTML.replace(c,a)}})()
```

