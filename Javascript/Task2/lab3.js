document.write("Creat your table");

let form = document.createElement('form');
document.body.append(form);

let header = document.createElement("p");
header.appendChild(document.createTextNode("Create your table"));
form.appendChild(header);

let rowsName = document.createElement('span');
rowsName.appendChild(document.createTextNode('Row:'));
rowsName.style.margin = "5px";
form.appendChild(rowsName);

let rows = document.createElement('input');
rows.type = "number";
rows.style.margin = "5px";
rows.style.paddingLeft = "3px";
form.appendChild(rows);

let columnsName = document.createElement('span');
columnsName.appendChild(document.createTextNode('Column:'));
columnsName.style.margin = "5px";
form.appendChild(columnsName);

let columns = document.createElement('input');
columns.type = "number";
columns.style.margin = "5px";
columns.style.paddingLeft = "3px";
form.appendChild(columns);

let button = document.createElement('button');
button.type = 'button';
button.innerText = "Submit";
button.style.margin = "5px";
form.appendChild(button);

button.onclick = () => {
	form.style.display = 'none';
	
	let table = document.createElement('table');
	table.border = "2";
	table.style.borderCollapse = "collapse";
	table.style.marginTop = "5px";
	for (let i = 0; i < rows.value; i++) {
		let row = document.createElement('tr');
		for (let j = 0; j < columns.value; j++) {
			let column = document.createElement('td');
			column.style.width = "130px";
			column.style.height = "30px";
			column.style.padding = "2px";
			column.style.paddingLeft = "5px";

			let form1 = document.createElement("form");
			let textarea = document.createElement("textarea");
			textarea.style.paddingLeft = "5px";
			let buttonText = document.createElement("button");
			buttonText.type = 'button';
			buttonText.innerText = "Save";
			buttonText.style.margin = "2px";
			buttonText.style.left = "auto";
			buttonText.style.right = "auto";
			form1.appendChild(textarea);
			form1.appendChild(buttonText);
			column.appendChild(form1);
			buttonText.onclick = () => {
				form1.style.display = "none";
				column.appendChild(document.createTextNode(textarea.value));
			}
			row.appendChild(column);
		}
		table.appendChild(row);
	}
	document.body.append(table);
	createDivTask5();
}

function createDiv() {
	let divWapper = document.createElement("div");
	divWapper.className = "function-container";
	document.body.append(divWapper);
}

	

function createDivTask5() {

	let headtable = document.createElement("h");
	headtable.style.fontWeight = "bold";
	headtable.style.textTransform = "uppercase";
	document.body.insertBefore(headtable, document.body.firstChild);

	let div = document.createElement("div");
	let divP = document.createElement("p");
	divP.appendChild(document.createTextNode("Change table borders"));

	let input1 = document.createElement("input");
	input1.setAttribute("list", "borderStyle");
	input1.placeholder = "Select";
	input1.style.paddingLeft = "3px";

	 	let input1List = document.createElement("datalist");
	  	input1List.setAttribute("id", "borderStyle");

			let option1 = document.createElement("option");
			option1.setAttribute("value", "Solid");
			input1List.appendChild(option1);

			let option2 = document.createElement("option");
			option2.setAttribute("value", "Dotted");
			input1List.appendChild(option2);

			let option3 = document.createElement("option");
			option3.setAttribute("value", "Dashed");
			input1List.appendChild(option3);

			let option4 = document.createElement("option");
			option4.setAttribute("value", "Double");
			input1List.appendChild(option4);

			let option5 = document.createElement("option");
			option5.setAttribute("value", "Groove");
			input1List.appendChild(option5);

			let option6 = document.createElement("option");
			option6.setAttribute("value", "Ridge");
			input1List.appendChild(option6);

			let option7 = document.createElement("option");
			option7.setAttribute("value", "Inset");
			input1List.appendChild(option7);

			let option8 = document.createElement("option");
			option8.setAttribute("value", "Outset");
			input1List.appendChild(option8);

		input1.appendChild(input1List);
	div.appendChild(divP);
	div.appendChild(input1);

	let input2 = document.createElement("input");
	input2.type = "number";
	input2.placeholder = "Insert number";
	input2.style.marginLeft = "10px";
	input2.style.paddingLeft = "3px";
	div.appendChild(input2);

	let divButton = document.createElement("button");
	divButton.type = "button";
	divButton.innerText = "Apply";
	divButton.style.marginLeft = "20px";
	
	input2.onchange = () => {
		divButton.innerText = "Apply " + input2.value + " px";
		if (input1 !== "") {
			divButton.innerText = "Apply " + input1.value + " and " + input2.value + " px";
		}
	}
	
	input1.onchange = () => {
		divButton.innerText = "Apply " + input1.value;		
		if (input2 !== "") {
			divButton.innerText = "Apply " + input1.value + " and " + input2.value + " px";
		}
	}
	
	divButton.onclick = () => {
		let tdList = document.querySelectorAll('td');
        tdList.forEach((td) =>
            td.style.border = `${input2.value}px ${input1.value}`
        );

	}
	div.appendChild(divButton);

	let divTittle = document.createElement("div");
	let divTittleP = document.createElement("p");
	divTittleP.appendChild(document.createTextNode("Add Tittle"));
	div.appendChild(divTittleP);

	let tittle = document.createElement("input");
	tittle.type = "text";
	tittle.placeholder = "Insert tittle";
	divTittle.appendChild(tittle);
	div.appendChild(divTittle);

	let divTittleButton = document.createElement("button");
	divTittleButton.type = "button";
	divTittleButton.innerText = "Add";
	divTittleButton.style.marginLeft = "20px";
	divTittleButton.onclick = () => {
		headtable.innerText = tittle.value
	}
	divTittle.appendChild(divTittleButton);

	div.appendChild(divTittle);

	let divRemove = document.createElement("div");
	let divRemoveP = document.createElement("p");
	divRemoveP.appendChild(document.createTextNode("Delete row"));
	divRemove.appendChild(divRemoveP);

	let remove = document.createElement("input");
	remove.type = "text";
	remove.placeholder = "Insert row's number";
	divRemove.appendChild(remove);

	let divRemoveButton = document.createElement("button");
	divRemoveButton.type = "button";
	divRemoveButton.innerText = "Remove";
	divRemoveButton.style.marginLeft = "20px";
	divRemoveButton.onclick = () => {
		if (remove.value > 0 && remove.value <= document.getElementsByTagName("tr").length)
		{
			document.getElementsByTagName("tr")[remove.value-1].remove();
		}
		else {
			alert("Invalid number!");
		}
	}
	divRemove.appendChild(divRemoveButton);
	div.appendChild(divRemove);

	let divRandom = document.createElement("div");
	let divRandomP = document.createElement("p");
	divRandomP.appendChild(document.createTextNode("Random Selection"));
	divRandom.appendChild(divRandomP);

	let magic = document.createElement("button");
	magic.innerText = "Magic";
	magic.style.marginTop = "3px";
	magic.onclick = () => {
		let tdList = document.querySelectorAll('td');
		let idx = Math.floor(Math.random()*tdList.length);
   		if (Math.floor(Math.random()*2) == 0){
		    tdList[idx].style.backgroundColor = "rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")";
		    tdList[idx].style.color = "rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")";
		    tdList[idx].style.fontSize = Math.floor(Math.random()*10 + 15)+"px";
		}
		else {
    		tdList[idx].removeChild(tdList[idx].lastChild);
    		let size = Math.floor(Math.random()*6);
    		let str = '';
			let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    		for (let i = 0; i < size; i++){
    			str += characters.charAt(Math.floor(Math.random() * characters.length));;
    		}
    		tdList[idx].appendChild(document.createTextNode(str));
    	}
	}
	divRandom.appendChild(magic);
	div.appendChild(divRandom);

	let divDel = document.createElement("div");
	let divDelP = document.createElement("p");
	divDelP.appendChild(document.createTextNode("Delete"));
	divDel.appendChild(divDelP);

	let delButton = document.createElement("button");
	delButton.innerText = "Delete table";
	delButton.style.marginTop = "3px";
	delButton.onclick = () => {
		let tables = document.querySelectorAll("table");
		tables.forEach((table)=>{
			table.style.display = "none"
		});
		div.style.display = "none";
		form.style.display = "block";
		rows.value = "";
		columns.value = "";
	}
	
	divDel.appendChild(delButton);
	div.appendChild(divDel);

	document.body.append(div);
}
