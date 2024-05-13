let xhr3 = new XMLHttpRequest();

let times2;

xhr3.onload = function () {
  //check status
  console.log(xhr3.status);

  if (xhr3.status === 200) {
    //create an object to get data from json
    let responseObject = JSON.parse(xhr3.responseText);

    console.log(responseObject);
    let newCard = "";

    //create loop and stuff
    for (let i = 0; i < responseObject.reviews.length; i++) {
      newCard += "<div class='review'>";
/*       newCard +=
        "<a href='" +
        responseObject.review[i].link +
        "'> <img src='" +
        responseObject.hotels[i].img +
        "' alt='" +
        responseObject.hotels[i].alt +
        "' style='width:100px;height:100px'></a>"; */
      newCard += "<p><b>" + responseObject.reviews[i].name + "<br>";
      newCard += responseObject.reviews[i].stars + "<br>";
      newCard += responseObject.reviews[i].head + "<br>";
      newCard += responseObject.reviews[i].review + "<br>";
      newCard += responseObject.reviews[i].attribution + "<br>";
      newCard += "</p></b>";
      newCard += "</div>";
    }

    document.getElementById("f_re").innerHTML += newCard;
  }
};

xhr3.open("GET", "./../json/reviews.json", true);
xhr3.send(null);
