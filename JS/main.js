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

const weeklyList = ["Crême solaire", "mirror", "Eparcyl", "Viande", "Lait", "Vinaigre balsamique", "Eponges", "Barre céréales", "Charcuterie", "Gâteaux", "Confiture", "Pain", "Brioche", "Harengs", "Chips", "Trucs apéro", "Echalottes", "Ail", "Poivron", "Tomates", "Bananes", "Pomelo", "Bière", "Oeufs", "Lardons", "Croquettes", "Boulettes", "Glaces"]


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
// const my_ul = document.createElement("ul");
// for(i in sortedWeeklyList)
// {
// 	const ul = document.createElement("ul");
// 	const li = document.createElement("li");
// 	li.textContent = sortedWeeklyList[i];
// 	li.id = sortedWeeklyList[i];
// 	ul.appendChild(li);
// 	noteCategoriesList.appendChild(ul);
	
// }


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
	// getNoteList.appendChild(c_ul);
}






// Copy the hard coded lists elements in a new array
// function copyInArray()
// {
	let myOtherArray = [];
	let sortedWeeklyList = weeklyList.sort();

	for(i = 0 ; i < sortedWeeklyList.length ; i++)
	{
		myOtherArray.push(weeklyList[i]);	
	}
	

	console.table(`Membres de myArray (${myOtherArray.length}) : ${myOtherArray}`);
	// localStorage.setItem("array", myArray)
	


	for(i in myOtherArray)
	{
		const ul = document.createElement("ul");
		const li = document.createElement("li");
		li.textContent = myOtherArray[i];
		li.id = myOtherArray[i];
		ul.appendChild(li);
		// document.getElementById("myDaily").appendChild(ul)
		getNoteList.appendChild(ul);
	}


	// Ajout manuel d'un élément
	const getInput = document.getElementById("addItem");
	getInput.addEventListener("blur", copyInArray);
	
	let list = [];
	function copyInArray()
	{
		list.push(getInput.value);
		console.log(`Liste : ${list}`);
		document.getElementById("myDaily").innerHTML = list;
	}
	

	// Nombre d'éléments dans la liste
	let getList = document.querySelector("#nbTest");
	getList.dataset.nbItems = myOtherArray.length;
	// getList.setAttribute("nbItems", weeklyList.length)
	getList.innerHTML = myOtherArray.length;

	// Essai effacement d'un élément la liste et mise à jour du nombre
	// let item = myArray.indexOf("Boulettes");
	// console.log(myArray.indexOf("Boulettes"));
	// myArray.splice(item, 1);

	// console.log(`Nouveaux membres de myArray: ${myArray}`);
	// getList.innerHTML = myArray.length;

// }

		
// Deleting element from list
function hide(evt)
{
  // evt.target refers to the clicked <li> element
  // This is different than evt.currentTarget, which would refer to the parent <ul> in this context
  evt.target.style.display = "none";
  
}

function DeleteFromArray(value)
{
	let aValue = value.target.id;
	let getList = document.querySelector("#nbTest");

	// Copie des éléments contenus dans la liste "en dur" dans une nouvelle liste
	let myArray = [];
	for(i = 0 ; i < weeklyList.length ; i++)
	{
		myArray.push(weeklyList[i])
	}
	// On cherche l'index de l'item que l'on veut supprimer
	let itemToDelete = myArray.indexOf(aValue);

	// Que l'on nvoie à splice
	myArray.splice(itemToDelete, 1);

	// On met à jour le nombre d'éléments restants
	getList.innerHTML = myArray.length;

	// effacement du DOM de l'élément
	value.target.style.display = "none";

	console.log(`Nouveaux membres de myArray: ${myArray}`);


}

// Attach the listener to the list
// It will fire when each <li> is clicked
let getUl = document.querySelectorAll("ul");
for (i = 0 ; i < getUl.length ; i++)
{
	getUl[i].addEventListener("dblclick", DeleteFromArray, false);
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