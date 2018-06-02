$(function() {
    var http = new XMLHttpRequest();
    var url = "https://script.google.com/macros/s/AKfycbwI1c4YZQoqFrTtBw6bQ6CsEhPceYvWJmqDXL2hWBvY1jrFKXg/exec";
    //var params = "email=ddd@gmail.com&password=mypassword&devid=mydevoceid&imei=9425818965";
    var data = JSON.stringify({
        "email": email,
        "password": password,
        "devid": devid,
        "imei": imei
    });
    http.open("POST", url, true);
    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/json");
    //http.setRequestHeader("Content-length", params.length);
    //http.setRequestHeader("Connection", "close");

    http.onreadystatechange = function() { //Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
            var responsecode = http.responseText;
            if (responsecode == "password mismatch" || responsecode == "email mismatch" || responsecode == "Error: Bad parameters") {
                setLocal('done', 'error');
                setGlobal('Toflash',responsecode);
                exit();
} else {
                setLocal('done', 'yes');
                var jsonobj = JSON.parse(responsecode);
                setGlobal('Tempphone',jsonobj.phone+'');
                setGlobal('Temptrustedcontact1',jsonobj.trustedcontact1+'');
                setGlobal('Temptrustedcontact2',jsonobj.trustedcontact2+'');
                setGlobal('Tempusername',jsonobj.username+'');
                setGlobal('Tempuniqueid',jsonobj.uniqueid+'');
                //alert(global('Temp uniqueid'));
                exit();
            }
        } 
    };
    http.send(data);
});
