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
const getCaddy = document.getElementById("myCaddy");

const ul = document.createElement("ul");

const categories = ["Fruits et légumes", "Bricolage", "Boucherie / Charcuterie", "Poissonnerie", "Bières et alcools", "Apéro", "Vêtements", "Droguerie", "Epices et condiments", "Hygiène et beauté"]

const fruitsAnVegetables = ["Banane", "Poire", "Pomme", "Orange", "Citron", "Pamplemousse", "Melon", "Tomate", "Salade", "Poivron", "Carotte" ];
const meat = ["Pâté", "Rillettes", "Steack", "Onglet", "Saucisson", "Lardons"];
const spices = ["Huile d'olive", "Huile végétale", "Vinaigre de vin", "Vinaigre balsamique", "oeufs", "Moutarde", "Chips"];
const cannedFood = ["Sardines à l'huile", "Raviolis"];

for(i in fruitsAnVegetables)
{
	const ul = document.createElement("ul");
	const li1 = document.createElement("li");
	li1.textContent = fruitsAnVegetables[i];
	ul.appendChild(li1);
	getCategory.appendChild(ul);
}



for(i in meat)
{
	const ul = document.createElement("ul");
	
	const li2 = document.createElement("li");
	li2.textContent = meat[i];
	ul.appendChild(li2);
	getMeat.appendChild(ul);
}


for(i in categories)
{
	const createButton = document.createElement("button");
	
	// const inpute =  document.createElement("input");
	// const label = document.createElement("label");
	
	// label.htmlFor =  categories[i];
	// label.appendChild(document.createTextNode(categories[i]));

	createButton.type = "button";
	createButton.textContent = categories[i];
	createButton.className = "btn_categories";

	getCategories.appendChild(createButton);
	// getCategories.appendChild(inpute);
}

// Les fonctions
const getSelector = document.querySelectorAll(".btn_categories");


for (i = 0; i < getSelector.length ; i++)
{
	getSelector[i].addEventListener("click", createCaddy)
	

}

function createCaddy(e)
	{
		event = e.target.innerHTML;

		const c_button = document.createElement("BUTTON");
		c_button.innerHTML = "Liste" + " " + event;
		c_button.classList="accordion";

		getCaddy.appendChild(c_button);
	}


function hide(evt) {
  // evt.target refers to the clicked <li> element
  // This is different than evt.currentTarget, which would refer to the parent <ul> in this context
  evt.target.style.visibility = "hidden";
}

// Attach the listener to the list
// It will fire when each <li> is clicked
ul.addEventListener("click", hide, false);



// Accordeon
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}