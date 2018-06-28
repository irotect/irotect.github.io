var http = new XMLHttpRequest();
    var url = "https://script.google.com/macros/s/AKfycbyY-QlhE9mxXvKjDoAAFkZPlc-c1IASk_kRlz5f206ja2sCkqEl/exec";
    //var params = "email=ddd@gmail.com&password=mypassword&devid=mydevoceid&imei=9425818965";
    var data = JSON.stringify({
        "email": email
    });
    http.open("POST", url, true);
    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/json");
    //http.setRequestHeader("Content-length", params.length);
    //http.setRequestHeader("Connection", "close");

    http.onreadystatechange = function() { //Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
            var responsecode = http.responseText;
            if (responsecode == "no file found" || responsecode == "email mismatch" || responsecode == "Error: Bad parameters") {
                setLocal('done', 'error');
                setGlobal('Toflash',responsecode);
                exit();
            } else {
                setLocal('done', 'yes');
                setGlobal('Toflash',responsecode);
                exit();
            }
        } 
    };
    http.send(data);