function findGetParameter(parameterName) {
    var result = null, tmp = [];
    location.search.substr(1).split("&").forEach(function (item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
    return result;
}

let rows = findGetParameter("rows");
let columns = findGetParameter("columns");

setTimeout(() => {
	if (rows <= 0 || columns <= 0) {
	alert("Invalid number!");
	let parsedUrl= new URL(location.protocol + '//' + location.host + location.pathname);
    var url = parsedUrl.href;
    var myPage = "index";
    var ind1 = url.lastIndexOf('/');
    var ind2 = url.lastIndexOf('.');
    new_url = url.substring(0, ind1+1 )+myPage+url.substring(ind2);
    window.location = new URL(new_url);
}
}, 3000);


let divTable = document.createElement('div');
divTable.align = "center";
divTable.style.marginBottom = "50px";

let divAdd = document.createElement('div');
divAdd.style.display = "inline-block";
divAdd.style.verticalAlign = "top";
divAdd.style.marginTop = "5px";

let table = document.createElement('table');
let firstRow = document.createElement('tr');

if (location.search.substr(1) != "") {
	table.border = "2";
	table.style.borderCollapse = "collapse";
	table.style.marginTop = "5px";
	table.style.display = "inline-block";

	for (let j = 0; j <= columns; j++) {
		let column = document.createElement('td');
		column.style.height = "40px";
		column.align = "center";
		column.style.fontSize = "20px";
		column.style.fontWeight = "bold";
		if (j) column.appendChild(document.createTextNode(String.fromCharCode(64+j)));
		firstRow.appendChild(column);
	}
	table.appendChild(firstRow);

	for (let i = 1; i <= rows; i++) {
		let row = document.createElement('tr');
		let firstColumn = document.createElement('td');
		firstColumn.style.width = "40px";
		firstColumn.align = "center";
		firstColumn.style.fontSize = "20px";
		firstColumn.style.fontWeight = "bold";
		firstColumn.appendChild(document.createTextNode(i));
		row.appendChild(firstColumn);
		for (let j = 0; j < columns; j++) {
			let column = document.createElement('td');
			column.style.width = "130px";
			column.style.height = "30px";
			column.style.padding = "2px";
			column.style.paddingLeft = "5px";
			column.align = "center";

			let form1 = document.createElement("form");
			let textarea = document.createElement("textarea");
			textarea.style.paddingLeft = "5px";

			let buttonText = document.createElement("button");
			buttonText.type = 'button';
			buttonText.innerText = "Save ";
			buttonText.className = "btn btn-success";
			buttonText.style.marginBottom = "5px";
			buttonText.style.padding = "3px";
				let img = document.createElement("img");
				img.src = "octicons-svg-master/mark-github.svg";
				img.style.marginLeft = "5px";
				buttonText.appendChild(img);

			form1.appendChild(textarea);
			form1.appendChild(buttonText);

			let form2 = document.createElement("div");

			let newP = document.createElement("p");
			newP.innerHTML = textarea.value;

			let buttonDel = document.createElement("button");
			buttonDel.type = 'button';
			buttonDel.innerText = "Delete ";
			buttonDel.className = "btn btn-danger";
			buttonDel.style.marginBottom = "5px";
			buttonDel.style.padding = "3px";
				let img2 = document.createElement("img");
				img2.src = "octicons-svg-master/trashcan.svg";
				img2.style.marginLeft = "5px";
				buttonDel.appendChild(img2);

			form2.appendChild(newP);
			form2.appendChild(buttonDel);


			form2.style.display = "none";
			column.appendChild(form1);
			column.appendChild(form2);

			buttonText.onclick = () => {
				form1.style.display = "none";
				newP.innerHTML = textarea.value;
				form2.removeChild(form2.firstChild);
				form2.insertBefore(newP, form2.firstChild);
				form2.style.display = "initial";
			}

			buttonDel.onclick = () => {
				form2.style.display = "none";
				form1.style.display = "initial";
			}

			row.appendChild(column);
		}
		table.appendChild(row);
	}

	createDivTasks();
	divTable.appendChild(table);
	divTable.appendChild(divAdd);
	document.body.append(divTable);
}


let addRowButton = document.createElement("button");
let addColButton = document.createElement("button");

firstRow.onmouseover = () => {
	if (divAdd.childElementCount == 0) {
		addRowButton.innerText = "Add row";
		addRowButton.style.marginLeft = "20px";
		addRowButton.className = "btn btn-warning";
		addRowButton.style.width = "150px";
			let img = document.createElement("img");
			img.src = "octicons-svg-master/arrow-down.svg";
			img.style.marginLeft = "5px";
			let currentRow = document.createElement("span");
			currentRow.className = "badge badge-dark";
			currentRow.innerText = parseInt(rows)+1;
			currentRow.style.marginLeft = "5px";
			addRowButton.appendChild(currentRow);
			addRowButton.appendChild(img);

		divAdd.appendChild(addRowButton);

		let br = document.createElement("br");
		divAdd.appendChild(br);

		addColButton.innerText = "Add column";
		addColButton.style.marginLeft = "20px";
		addColButton.className = "btn btn-warning";
		addColButton.style.width = "150px";
		addColButton.style.marginTop = "20px";
			let img2 = document.createElement("img");
			img2.src = "octicons-svg-master/arrow-right.svg";
			img2.style.marginLeft = "5px";		
			let currentCol = document.createElement("span");
			currentCol.className = "badge badge-dark";
			currentCol.innerText = parseInt(columns)+1;
			currentCol.style.marginLeft = "5px";
			addColButton.appendChild(currentCol);
			addColButton.appendChild(img2);

		divAdd.appendChild(addColButton);	
	}
	setTimeout(() => {
		if (divAdd.childElementCount) {
			divAdd.innerHTML = "";
		} 
	}, 3000);
}

addColButton.onclick = () => {
	let trs = document.querySelectorAll("tr");
	let firstColumn = document.createElement('td');
	++columns;
	let column = document.createElement('td');
	column.style.height = "40px";
	column.align = "center";
	column.style.fontSize = "20px";
	column.style.fontWeight = "bold";
	column.appendChild(document.createTextNode(String.fromCharCode(64+columns)));
	trs[0].appendChild(column);
	for (let i = 1; i <= rows; ++i) {
		let column = document.createElement('td');
		column.style.width = "130px";
		column.style.height = "30px";
		column.style.padding = "2px";
		column.style.paddingLeft = "5px";
		column.align = "center";

		let form1 = document.createElement("form");
		let textarea = document.createElement("textarea");
		textarea.style.paddingLeft = "5px";

		let buttonText = document.createElement("button");
		buttonText.type = 'button';
		buttonText.innerText = "Save ";
		buttonText.className = "btn btn-success";
		buttonText.style.marginBottom = "5px";
		buttonText.style.padding = "3px";
			let img = document.createElement("img");
			img.src = "octicons-svg-master/mark-github.svg";
			img.style.marginLeft = "5px";
			buttonText.appendChild(img);

		form1.appendChild(textarea);
		form1.appendChild(buttonText);

		let form2 = document.createElement("div");

		let newP = document.createElement("p");
		newP.innerHTML = textarea.value;

		let buttonDel = document.createElement("button");
		buttonDel.type = 'button';
		buttonDel.innerText = "Delete ";
		buttonDel.className = "btn btn-danger";
		buttonDel.style.marginBottom = "5px";
		buttonDel.style.padding = "3px";
			let img2 = document.createElement("img");
			img2.src = "octicons-svg-master/trashcan.svg";
			img2.style.marginLeft = "5px";
			buttonDel.appendChild(img2);

		form2.appendChild(newP);
		form2.appendChild(buttonDel);


		form2.style.display = "none";
		column.appendChild(form1);
		column.appendChild(form2);

		buttonText.onclick = () => {
			form1.style.display = "none";
			newP.innerHTML = textarea.value;
			form2.removeChild(form2.firstChild);
			form2.insertBefore(newP, form2.firstChild);
			form2.style.display = "initial";
		}

		buttonDel.onclick = () => {
			form2.style.display = "none";
			form1.style.display = "initial";
		}
		trs[i].appendChild(column);
	};
}

addRowButton.onclick = () => {
	++rows;
	let row = document.createElement('tr');
	let firstColumn = document.createElement('td');
	firstColumn.style.width = "40px";
	firstColumn.align = "center";
	firstColumn.style.fontSize = "20px";
	firstColumn.style.fontWeight = "bold";
	firstColumn.appendChild(document.createTextNode(rows));
	row.appendChild(firstColumn);
	for (let j = 0; j < columns; j++) {
		let column = document.createElement('td');
		column.style.width = "130px";
		column.style.height = "30px";
		column.style.padding = "2px";
		column.style.paddingLeft = "5px";
		column.align = "center";

		let form1 = document.createElement("form");
		let textarea = document.createElement("textarea");
		textarea.style.paddingLeft = "5px";

		let buttonText = document.createElement("button");
		buttonText.innerText = "Save ";
		buttonText.className = "btn btn-success";
		buttonText.style.marginBottom = "5px";
		buttonText.style.padding = "3px";
			let img = document.createElement("img");
			img.src = "octicons-svg-master/mark-github.svg";
			img.style.marginLeft = "5px";
			buttonText.appendChild(img);

		form1.appendChild(textarea);
		form1.appendChild(buttonText);

		let form2 = document.createElement("div");

		let newP = document.createElement("p");
		newP.innerHTML = textarea.value;

		let buttonDel = document.createElement("button");
		buttonDel.innerText = "Delete ";
		buttonDel.className = "btn btn-danger";
		buttonDel.style.marginBottom = "5px";
		buttonDel.style.padding = "3px";
			let img2 = document.createElement("img");
			img2.src = "octicons-svg-master/trashcan.svg";
			img2.style.marginLeft = "5px";
			buttonDel.appendChild(img2);

		form2.appendChild(newP);
		form2.appendChild(buttonDel);


		form2.style.display = "none";
		column.appendChild(form1);
		column.appendChild(form2);

		buttonText.onclick = () => {
			form1.style.display = "none";
			newP.innerHTML = textarea.value;
			form2.removeChild(form2.firstChild);
			form2.insertBefore(newP, form2.firstChild);
			form2.style.display = "initial";
		}

		buttonDel.onclick = () => {
			form2.style.display = "none";
			form1.style.display = "initial";
		}

		row.appendChild(column);
	}
	table.appendChild(row);
}

function createDivTasks() {
	let divRow = document.createElement("div");
	divRow.className = "row";

	let divHeader = document.createElement("div");
	divHeader.style.textAlign = "center";
 
	let headtable = document.createElement("h");
	headtable.style.fontWeight = "bold";
	headtable.style.textTransform = "uppercase";
	headtable.style.fontSize = "30px";
	headtable.innerHTML = "No title"
	divHeader.append(headtable);

	let div = document.createElement("div");
	div.className = "card smallInput";

	let divP = document.createElement("p");
	divP.appendChild(document.createTextNode("Change table borders"));
	divP.className = "card-header";

	let input1 = document.createElement("input");
	input1.setAttribute("list", "borderStyle");
	input1.placeholder = "Select";
	input1.style.paddingLeft = "10px";
	input1.className = "form-control smallForm";
	input1.width = "100px";

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

	let input2 = document.createElement("input");
	input2.type = "number";
	input2.placeholder = "Insert number";
	input2.style.paddingLeft = "10px";
	input2.className = "form-control smallForm";

	let divButton = document.createElement("input");
	divButton.type = "submit";
	divButton.value = "Apply";
	divButton.innerText = "Apply";
	divButton.style.marginLeft = "auto";
	divButton.style.marginRight = "auto";
	divButton.className = "btn btn-outline-primary smallPurpleButton";
	
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

	div.appendChild(divP);
	div.appendChild(input1);
	div.appendChild(input2);
	div.appendChild(divButton);

	let div2 = document.createElement("div");
	div2.className = "card smallInput";

	let divTitleP = document.createElement("p");
	divTitleP.appendChild(document.createTextNode("Add Title"));
	divTitleP.className = "card-header";
	div2.appendChild(divTitleP);

	let title = document.createElement("input");
	title.type = "text";
	title.placeholder = "Insert title";
	title.className = "form-control smallForm";
	div2.appendChild(title);

	let divTitleButton = document.createElement("input");
	divTitleButton.type = "submit";
	divTitleButton.value = "Add title";
	divTitleButton.innerText = "Add";
	divTitleButton.style.marginTop = "auto";
	divTitleButton.style.marginLeft = "auto";
	divTitleButton.style.marginRight = "auto";
	divTitleButton.className = "btn btn-outline-primary smallPurpleButton";
	divTitleButton.onclick = () => {
		headtable.innerText = title.value
	}
	div2.appendChild(divTitleButton);

	let div3 = document.createElement("div");
	div3.className = "card smallInput";

	let divRemoveP = document.createElement("p");
	divRemoveP.className = "card-header";
	divRemoveP.appendChild(document.createTextNode("Delete row"));
	div3.appendChild(divRemoveP);

	let remove = document.createElement("input");
	remove.type = "text";
	remove.placeholder = "Insert row's number";
	remove.className = "form-control smallForm";
	div3.appendChild(remove);

	let divRemoveButton = document.createElement("input");
	divRemoveButton.type = "submit";
	divRemoveButton.value = "Remove";
	divRemoveButton.style.marginLeft = "auto";
	divRemoveButton.style.marginTop = "auto";
	divRemoveButton.style.marginRight = "auto";
	divRemoveButton.className = "btn btn-outline-primary smallPurpleButton";
	divRemoveButton.onclick = () => {
		if (remove.value > 0 && remove.value <= document.getElementsByTagName("tr").length)
		{
			document.getElementsByTagName("tr")[remove.value].remove();
			--rows;
		}
		else {
			alert(rows);
			alert("Invalid number!");
		}
	}
	div3.appendChild(divRemoveButton);

	let div4 = document.createElement("div");
	div4.className = "card smallInput";

	let divRandomP = document.createElement("p");
	divRandomP.className = "card-header";
	divRandomP.appendChild(document.createTextNode("Random Selection"));
	div4.appendChild(divRandomP);

	let divMagicContent = document.createElement("p");
	divMagicContent.innerText = "Cast a spell in one click!";
	divMagicContent.style.marginLeft = "15px";
	divMagicContent.style.marginTop = "15px";
	divMagicContent.style.fontSize = "20px";
	div4.appendChild(divMagicContent);

	let magic = document.createElement("input");
	magic.type = "submit";
	magic.value = "Magic";
	magic.style.marginTop = "auto";
	magic.style.marginLeft = "auto";
	magic.style.marginRight = "auto";
	magic.className = "btn btn-outline-primary smallPurpleButton";
	magic.onclick = () => {
		let tdList = document.querySelectorAll('td');
		let idx = Math.floor(Math.random()*tdList.length);

   		if (Math.floor(Math.random()*2) == 0){
		    tdList[idx].style.backgroundColor = "rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")";
		    tdList[idx].style.color = "rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")";
		    tdList[idx].style.fontSize = Math.floor(Math.random()*10 + 8)+"px";
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
	div4.appendChild(magic);

	let div5 = document.createElement("div");
	div5.className = "card smallInput";
	let divDelP = document.createElement("p");

	divDelP.className = "card-header";
	divDelP.appendChild(document.createTextNode("Delete"));
	div5.appendChild(divDelP);

	let divDelContent = document.createElement("p");
	divDelContent.innerText = "Delete table in one click!";
	divDelContent.style.marginLeft = "15px";
	divDelContent.style.marginTop = "15px";
	divDelContent.style.fontSize = "20px";
	div5.appendChild(divDelContent);

	let delButton = document.createElement("input");
	delButton.type = "submit";
	delButton.value = "Delete table";
	delButton.style.marginTop = "auto";
	delButton.style.marginLeft = "auto";
	delButton.style.marginRight = "auto";
	delButton.className = "btn btn-outline-primary smallPurpleButton";
	delButton.onclick = () => {
		let tables = document.querySelectorAll("table");
		tables.forEach((table)=>{
			table.style.display = "none"
		});
		div.style.display = "none";
		form.style.display = "block";
		rows = 0;
		columns = 0;
	}
	
	div5.appendChild(delButton);

	divRow.appendChild(div);
	divRow.appendChild(div2);
	divRow.appendChild(div3);
	divRow.appendChild(div4);
	divRow.appendChild(div5);

	document.body.append(divRow);
	document.body.append(divHeader);

}

