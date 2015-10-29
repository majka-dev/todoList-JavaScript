function addNewItem(list, itemText){
	var listItem = document.createElement("li");
	listItem.innerText = itemText;

	list.appendChild(listItem); //check this plus global var

}

var inItemText = document.getElementById("inItemText");
inItemText.focus();

var btnNew = document.getElementById("btnAdd");

inItemText.onkeyup = function (event) {
	// event.which 13 = ENTER
	if(event.which == 13){
		var itemText = inItemText.value;
		//var itemText = event.which; //We used this 'which' property of the event onkeyup to know keycode for enter, it's 13 !!!
		if(!itemText || itemText =="" || itemText ==" ") {
		// (!itemText) to iste ako (itemText == false)
			return false;
		}
		addNewItem(document.getElementById("todoList"), itemText);
		inItemText.focus();
		inItemText.select();
		// select text after enter -> no need to delete text before!
	}
};

//NOTE:
//CODE OLDER WITH BUTTON !
/*btnNew.onclick = function () {
 var itemText = inItemText.value;
 //var itemText = prompt("What should be name new item?"); predtym
 if(!itemText || itemText =="" || itemText ==" ") { // (!itemText) to iste ako (itemText == false)
 return false;
 }
 addNewItem(document.getElementById("todoList"), itemText);
 };*/
//btnNew.onclick = addNewItem; // bez zatvoriek lebo inak by sa ten alert
// objavil pri kazdom obnoveni stranky a takto sa objavi len ako prepojenie s funkciou napisanou hore


// With PROMPT

/*inItemText.onkeyup = function (event) {
	// event.which 13 = ENTER
	if(event.which == 13){
		var itemText = inItemText.value;
		//var itemText = event.which; //'which' is the property of the event onkeyup  keycode for enter is 13 !!!
		//var itemText = prompt("What should be name new item?"); predtym
		if(!itemText || itemText =="" || itemText ==" ") { // (!itemText) to iste ako (itemText == false)
			return false;
		}
		addNewItem(document.getElementById("todoList"), itemText);
	}
};*/

