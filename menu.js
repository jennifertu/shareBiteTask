// Map to store menu-sections with its relevant items
var myMap = new Map();
//array to store the one section selected by user
var selectedSection=[];

var addSectionSubmitBtn=document.getElementById("addSectionSubmitBtn");

var addItemSumbitBtn= document.getElementById("addItemSubmitBtn")

var sections= document.querySelectorAll("li");

//by clicking addSection Button, a new menu section will be added to myMap and also displayed under menu section
addSectionSubmitBtn.addEventListener("click", function(){
	//create an empty array to store the itemms which later will be added
	var arr=[];
	var newsection=document.getElementById("menusection").value;
	//update myMap
	myMap.set(newsection, arr);
	document.getElementById("itemList").innerHTML = '';
	//create a <li> node
	var node = document.createElement("LI");
	//add event listener to the newly created node which will be clicked to add items later by user
	node.addEventListener("click",function(){

		var allsections=document.querySelectorAll(".sectionList li");
		//loop through all the li elements in the sectionList and make it all black
		for (li of allsections) {
			li.style.color="black";
		}
		//change the clicked li element red
		this.style.color="red";
		
		//update the selectedSection, create childnode, show its item
		//if no menu section is selected before, push it into the list
		if(selectedSection.length==0){
			selectedSection.push(this.childNodes[0].nodeValue);
			showItems(newsection);
			
		}
		//if user previously already selected menu section, remove the old one and add the new one
		else{
			selectedSection=[];
			selectedSection.push(this.childNodes[0].nodeValue);
			showItems(newsection);
		}
	})
	//get the content of user input and add it to the childnode
	var textnode = document.createTextNode(newsection); 
	node.appendChild(textnode);
	document.getElementById("sectionList").appendChild(node); 

})


//By clicking the add item button, a new item will be added to its relevant menu section
addItemSubmitBtn.addEventListener("click",function(){
	//first find out which section
	if(selectedSection.length===1){
		//get input items from user and update the map
		//display new items below
		var newitem=document.getElementById("sectionitem").value;

		var node= document.createElement("LI");

		//adding event listener to the newly created node
		node.addEventListener("click",function(){
		
		var allItems=document.querySelectorAll(".itemList li");
		//loop through all the li elemnt in the item list
		for (li of allItems) {
			//make all black
			li.style.color="black";

		}
		//change the clicked li element to red
		this.style.color="red";
		})

		//create a childnode appended to the item list
		var textnode = document.createTextNode(newitem); 
		node.appendChild(textnode);
		document.getElementById("itemList").appendChild(node); 
		//update the map
		myMap.get(selectedSection[0]).push(newitem);
				

	}
	else{
		alert("you have to selected menu section first");
	}

})


//this function is called every time any li element in the menu section is clicked
function showItems(string){
	
	var node = document.getElementById("itemList");

	//clear current display
	if (node) {
		node.innerHTML = '';
	}

	//find the values of the clicked element by looking into myMap
	displayItems=myMap.get(string);

	//loop through the values for the menu section and display them
  	for (const item of displayItems){
  		//create items 
  		var itemNode = document.createElement("LI");
  		var textnode = document.createTextNode(item); 
		itemNode.appendChild(textnode);
		document.getElementById("itemList").appendChild(itemNode); 
  	}
  }








