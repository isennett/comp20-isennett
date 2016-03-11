// Isabelle Sennett -- comp20 -- March 2016

function parse(){
    request = new XMLHttpRequest();
    request.open("GET", "data.json", true);
    request.onreadystatechange = callme;
    request.send(null);
};

function callme () {
    if (request.readyState == 4 && request.status == 200) {
        result = "";
        raw = request.responseText;
        theMessage = JSON.parse(raw);
        elem = document.getElementById("messages");
        for (i = 0; i < theMessage.length; i++) {
            result += "<p>" + theMessage[i]["content"] + " " + theMessage[i]["username"]+ "</p>";
        }
        elem.innerHTML = result;
    }
    else if (request.readyState == 4 && request.status != 200) {
        document.getElementById("messages").innerHTML = "<p>Whoops, #fail</p>";
    }
};
