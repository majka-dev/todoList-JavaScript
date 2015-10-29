function addNewItem(list, itemText){
	var listItem = document.createElement("li");
	listItem.innerText = itemText;

	list.appendChild(listItem); //check this plus global var

}

var btnNew = document.getElementById("btnAdd");
//btnNew.onclick = addNewItem; // bez zatvoriek lebo inak by sa ten alert objavil pri kazdom obnoveni stranky a takto sa objavi len ako prepojenie s funkciou napisanou hore
btnNew.onclick = function () {
	var itemText = prompt("What should be name new item?");

	if(!itemText || itemText ==""){ // (!itemText) to iste ako (itemText == false)
		return false; 
	}

	addNewItem(document.getElementById("todoList"), itemText);
};

