let xhr4 = new XMLHttpRequest();

let times;

xhr4.onload = function () {
  //check status
  console.log(xhr4.status);

  if (xhr4.status === 200) {
    //create an object to get data from json
    let responseObject = JSON.parse(xhr.responseText);

    console.log(responseObject);
    

  }
};