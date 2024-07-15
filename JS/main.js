// Comment créer la liste de courses ?
// Des accordéons par catégories (fruits et légumes / bières et alcools / droguerie / jouets / etc.)




// Comment supprimer les items de la liste de course ?
//Idée :
// Les éléments de la liste de courses, sont retirés simplement en cliquant dessus
// Voir ce bout de code  

// Make a list
const getCategory = document.getElementById("fruitsAndVegetables");
const getMeat = document.getElementById("meat");
const getCategories = document.getElementById("categories");
const getNoteList = document.getElementById("noteCategoriesList");

const getCaddy = document.getElementById("myCaddy");

const ul = document.createElement("ul");

// Bdd
const categories = ["Desserts / laitages", "Animaux", "Fruits et légumes", "Bricolage", "Boucherie / Charcuterie", "Poissonnerie", "Bières et alcools", "Apéro", "Vêtements", "Droguerie", "Epices et condiments", "Hygiène et beauté", "Glaces", "Pâtes, riz, etc."]
let sortedCategories = categories.sort();

const fruitsAnVegetables = ["Banane", "Poire", "Pomme", "Orange", "Citron", "Pamplemousse", "Melon", "Tomate", "Salade", "Poivron", "Carotte" ];
const meat = ["Pâté", "Rillettes", "Steack", "Onglet", "Saucisson", "Lardons"];
const spices = ["Huile d'olive", "Huile végétale", "Vinaigre de vin", "Vinaigre balsamique", "oeufs", "Moutarde", "Chips"];
const cannedFood = ["Sardines à l'huile", "Raviolis"];

const weeklyList = ["Gâteaux Thé", "Pain", "Poivron", "Tomates", "Bananes", "Oranges", "Pomelo", "Bière", "Oeufs", "Lardons", "Brioche", "Croquettes", "Boulettes", "Glaces"]
let sortedWeeklyList = weeklyList.sort();

let myList = [];


// Création des éléments de la liste fruits et légumes
for(i in fruitsAnVegetables)
{
	const ul = document.createElement("ul");
	const li = document.createElement("li");
	li.textContent = fruitsAnVegetables[i];
	ul.appendChild(li);
	getCategory.appendChild(ul);
}

// Création des éléments de la liste boucherie / charcuterie
for(i in meat)
{
	const ul = document.createElement("ul");
	const li = document.createElement("li");
	li.textContent = meat[i];
	ul.appendChild(li);
	getMeat.appendChild(ul);
}

// Creation des boutons de catégories
for(i in categories)
{
	const createButton = document.createElement("button");
	
	createButton.type = "button";
	createButton.textContent = categories[i];
	createButton.className = "btn_categories";
	let id = categories[i];
	createButton.setAttribute("id",  id)

	getCategories.appendChild(createButton);
	// getCategories.appendChild(inpute);
}

// Les fonctions
// Liste par défaut semaine
for(i in sortedWeeklyList)
{
	const ul = document.createElement("ul");
	const li = document.createElement("li");
	li.textContent = sortedWeeklyList[i];
	ul.appendChild(li);
	noteCategoriesList.appendChild(ul);
	
}


// Ajout d'une liste 
const getSelector = document.querySelectorAll(".btn_categories");

for (i = 0; i < getSelector.length ; i++)
{
	getSelector[i].addEventListener("click", createList)
}

function createCaddy(e)
	{
		event = e.target.innerHTML;

		const c_button = document.createElement("BUTTON");
		c_button.innerHTML = "Liste" + " " + event;
		c_button.classList="accordion";

		getCaddy.appendChild(c_button);
	}


function createList(e)
{
	event = e.target.innerHTML;

	const c_ul = document.createElement("ul");
	c_il = document.createElement("li");
	c_il.innerHTML = event;
	
	c_ul.appendChild(c_il);
	getNoteList.appendChild(c_ul);
}

// Nombre d'éléments dans la liste
let getList = document.querySelector("#nbTest");
getList.dataset.nbItems = weeklyList.length;
// getList.setAttribute("nbItems", weeklyList.length)
getList.innerHTML = weeklyList.length;
// alert(pate);


function hide(evt)
{
  // evt.target refers to the clicked <li> element
  // This is different than evt.currentTarget, which would refer to the parent <ul> in this context
  evt.target.style.display = "none";
}

// Attach the listener to the list
// It will fire when each <li> is clicked
let getUl = document.querySelectorAll("ul");
for (i = 0 ; i < getUl.length ; i++)
{
	getUl[i].addEventListener("dblclick", hide, false);
}

// Accordeon
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) 
	{
      panel.style.maxHeight = null;
    } else 
	{
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}