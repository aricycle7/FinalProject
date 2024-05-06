let xhr = new XMLHttpRequest();

let times;

xhr.onload = function () {
  //check status
  console.log(xhr.status);

  if (xhr.status === 200) {
    //create an object to get data from json
    let responseObject = JSON.parse(xhr.responseText);

    console.log(responseObject);
    let newCard = "";

    //create loop and stuff
    for (let i = 0; i < responseObject.hotels.length; i++) {
      newCard += "<div class='event'>";
      newCard +=
        "<a href='" +
        responseObject.hotels[i].link +
        "'> <img src='" +
        responseObject.hotels[i].img +
        "' alt='" +
        responseObject.hotels[i].alt +
        "' style='width:100px;height:100px'></a>";
      newCard += "<p><b>" + responseObject.hotels[i].name + "<br>";
      newCard += responseObject.hotels[i].location + "<br>";
      newCard += responseObject.hotels[i].cost + "<br>";
      newCard += "</p></b>";
      newCard += "</div>";
    }

    document.getElementById("ht_sect").innerHTML += newCard;
  }
};

xhr.open("GET", "./../json/hotels.json", true);
xhr.send(null);
