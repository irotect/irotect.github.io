"use strict";

var fencdata = "data";
/*
  $(function() {
  	"use strict";
  
    var file = new File([fpath], fname, {
type: "image/jpeg", 
});
    var fr = new FileReader();
    fr.onload = function(e) {
      fencdata = e.target.result.replace(/^.*,/, '');
      
postJump();
    }
    fr.readAsDataURL(file);
  });
  */

  $(function() {
    
    var http = new XMLHttpRequest();
    var url = "https://script.google.com/macros/s/AKfycbzYpEZt1OVn_zR8ZmeDcJ58ehdkBZ4AoZd5NDsnMVDR8tD2bxrw/exec";
    //fencdata = encodeURIComponent(global('%fDATA') );
    fencdata=global('%fDATA') ;
    uniqueid=global('%Uniqueid') ;
    
//var url = "https://webhook.site/1ab4d950-7ed1-4ef4-9581-83aae8adf79a";
    var params = "uniqueid="+ uniqueid + "&filename=" + fname + "&imageformat=" +mime+"&file=" + fencdata;
    http.open("POST", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //http.setRequestHeader("Content-length", params.length);
    //http.setRequestHeader("Connection", "close");

    http.onreadystatechange = function() { //Call a function when the state changes.
      if (http.readyState == 4 && http.status == 200) {
        var responsecode = http.responseText;
        //alert(responsecode);
        fencdata=null;
       exit();
      }
    }
    http.send(params);
  });
