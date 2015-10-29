// Always try to avoid global variables
// Strive to make functions reusable

function updateItemStatus() {
 var cbId = this.id.replace("cb_", "") ; //function replace
	//console.log(me);
	//alert(cbId);
	var itemText = document.getElementById("item_" + cbId);
	//itemText.innerText = "CLICKED";
	 //css in js ! replace text-decoration
	if (this.checked) {
		itemText.className = "checked";
		/*itemText.style.textDecoration = "line-through";
		itemText.style.fontWeight = "800";
		itemText.style.color = "#c00";*/
	}
	else {
		itemText.className = "";
		/*itemText.style.textDecoration = "none";
		itemText.style.fontWeight = "400";
		itemText.style.color = "#000";*/

	}
}

function renameItem(){
	//this == span
	//var cb_Id = this.id.replace("cb_", "") ;
	var newText = prompt("What should this item be renamed to?");

	if(!newText || newText =="" || newText ==" ") {
		// (!itemText) to iste ako (itemText == false)
		return false;
	}
	this.innerText = newText;
}

function removeItem(){
	this.style.display = "none";
	//this == span
	/*var spanId = this.id.replace("item_", "") ;
	document.getElementById("li_" + spanId).style.display = "none";*/
	 //not delete but hide them
}

function addNewItem(list, itemText){
		//totalItems++;
		 //<li><input type= "checkbox"/><span></span></li>
	var date = new Date();
	var id =  "" +date.getHours() + date.getMinutes()+ date.getSeconds() + date.getMilliseconds(); // we need unik number
	// by adding "" string all numbers after are gonna ack like strings!

	var listItem = document.createElement("li");
	listItem.id = "li_" + id;
	listItem.ondblclick = removeItem; // function on double click!

	var checkBox = document.createElement("input");
	checkBox.type = "checkbox";
	checkBox.id = "cb_" + id; //totalItems;
	checkBox.onclick = updateItemStatus;

	var span = document.createElement("span");
	span.id = "item_" + id; //totalItems;
	span.innerText = itemText;
	span.onclick =renameItem;

	listItem.appendChild(checkBox);
	listItem.appendChild(span);

	//listItem.innerText = itemText; old code
	list.appendChild(listItem); //check this plus global var

}

//var totalItems = 0;
var inItemText = document.getElementById("inItemText");
inItemText.focus();

//var btnNew = document.getElementById("btnAdd");

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

