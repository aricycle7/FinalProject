let xhr2 = new XMLHttpRequest();

let times1;

xhr2.onload = function () {
  //check status
  console.log(xhr2.status);

  if (xhr2.status === 200) {
    //create an object to get data from json
    let responseObject = JSON.parse(xhr2.responseText);

    console.log(responseObject);
    let newCard = "";

    //create loop and stuff
    for (let i = 0; i < responseObject.trans.length; i++) {
      newCard += "<div class='event'>";

      newCard +=
        "<a href='" +
        responseObject.trans[i].link +
        "'> <img src='" +
        responseObject.trans[i].img +
        "' alt='" +
        responseObject.trans[i].alt +
        "' style='width:100px;height:100px'></a>";

      newCard += "<p><b>" + responseObject.trans[i].name + "<br>";
      newCard += responseObject.trans[i].range + "<br>";
      newCard += responseObject.trans[i].cost + "<br>";
      newCard += "</p></b>";
      newCard += "</div>";
    }

    document.getElementById("ht_sect2").innerHTML += newCard;
  }
};

xhr2.open("GET", "./../json/trans.json", true);
xhr2.send(null);