// Lancer la fonction
filterSelection("all")
// La fonction qui filtre la selection seleon le parametre
function filterSelection(c) {
  var x, i;
  // Recuperer toutes les class column ou sont stocke les infos par une categorie c
  x = document.getElementsByClassName("column");
  // controle de la categorie parametre c
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    // Supprimer la chass show(Permet de visualiser un bloc) des classes column
    RemoveClass(x[i], "show");
    // Si la classe column courente a pour son index,une valeur > -1,ajouter la classe show
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}
// Ajoute a la classe l'element name
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

// Supprimer a la classe l'element name
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// ajoute active class au bouton courent
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
