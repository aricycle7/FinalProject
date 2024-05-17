let xhr5 = new XMLHttpRequest();

let times0;

xhr5.onload = function() {
    console.log(xhr5.status);

    if(xhr5.status === 200) {
        let responseObject = JSON.parse(xhr5.responseText);

        console.log(responseObject);
        let newCard = "";

        for(let i = 2; i < responseObject.facts.length; i++){
            newCard += "<div class='facts'>";
            newCard += "<p><b>" + responseObject.facts[i].fact;
            newCard += "</p></b>";
            newCard += "</div>";
        }
        
        document.getElementById("ff_text").innerHTML += newCard;
    }
};

xhr5.open("GET", "./../json/facts.json", true);
xhr5.send(null);