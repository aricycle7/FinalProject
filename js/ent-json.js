let xhr4 = new XMLHttpRequest();

let times;

xhr4.onload = function () {
  //check status
  console.log(xhr4.status);

  if (xhr4.status === 200) {
    //create an object to get data from json
    let responseObject = JSON.parse(xhr4.responseText);

    console.log(responseObject);

    // loop for the thing
    for (let i=0; i<responseObject.CCT.length; i++){
      let newCard ="";
      newCard += "<p>" + responseObject.CCT[i].name;
      newCard += "</p>";
      document.getElementById("ecard_sect1").innerHTML += newCard;
    }

    for (let i=0; i<responseObject.LegoLand.length; i++){
      let newCard ="";
      newCard += "<p>" + responseObject.LegoLand[i].name;
      newCard += "</p>";
      document.getElementById("ecard_sect2").innerHTML += newCard;
    }

    for (let i=0; i<responseObject.Otherworld.length; i++){
      let newCard ="";
      newCard += "<p>" + responseObject.Otherworld[i].name;
      newCard += "</p>";
      document.getElementById("ecard_sect3").innerHTML += newCard;
    }

    for (let i=0; i<responseObject.COSI.length; i++){
      let newCard ="";
      newCard += "<p>" + responseObject.COSI[i].name;
      newCard += "</p>";
      document.getElementById("ecard_sect4").innerHTML += newCard;
    }

    for (let i=0; i<responseObject.PolarisMall.length; i++){
      let newCard ="";
      newCard += "<p>" + responseObject.PolarisMall[i].name;
      newCard += "</p>";
      document.getElementById("ecard_sect5").innerHTML += newCard;
    }

    for (let i=0; i<responseObject.ZoombeziBay.length; i++){
      let newCard ="";
      newCard += "<p>" + responseObject.ZoombeziBay[i].name;
      newCard += "</p>";
      document.getElementById("ecard_sect6").innerHTML += newCard;
    }

  }

  
};

xhr4.open("GET", "./../json/ent.json", true);
xhr4.send(null);
