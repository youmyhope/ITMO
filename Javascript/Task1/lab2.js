document.write("No time to die");
document.write("</br>");

//1.2. Count
let text = ("No time to die");
let a = text.length;
document.write(a);
let splittext = text.split(" ");
let b = splittext.length;
document.write(" ");
document.write(b);
document.write("</br>");

//1.5. URL
let hrefLocal = document.location.href;
let hrefInternet = "https://chocayxanh.net/wp-content/uploads/2019/03/cay-moc-lan17.jpg";
let hrefParams = "https://www.facebook.com/photo.php?fbid=1271116249748585&set=a.126510870875801&type=3&theater";
//1.5. Protocol & fileExtension
let hrefLocalProtocol = {
	protocol: hrefLocal.substring(0, hrefLocal.indexOf(":"))
}
let hrefLocalfileExtension = {
	fileExtension: hrefLocal.substring(hrefLocal.lastIndexOf('.') +1, hrefLocal.length)
} 
let hrefInternetProtocol = {
	InternetProtocol: hrefInternet.substring(0, hrefInternet.indexOf(":"))
}
let hrefInternetfileExtension = {
	InternetfileExtension: hrefInternet.substring(hrefInternet.lastIndexOf('.') +1, hrefInternet.length)
}
//1.6. Param
function gethrefParams(href) {
	let Params = {};
	hrefParams.substring(hrefParams.indexOf('?') + 1, hrefParams.length).split('&')
	.forEach(param => {
		const paramkeyValue = param.split('=');
		Params[paramkeyValue[0]] = paramkeyValue[1];
	});
	return Params;
}

document.write(hrefLocal);
document.write("</br>");
document.write(hrefLocalProtocol.protocol, ' ', hrefInternetProtocol.InternetProtocol);
document.write("</br>");
document.write(hrefLocalfileExtension.fileExtension, ' ', hrefInternetfileExtension.InternetfileExtension);
document.write("</br>");
console.log(gethrefParams(hrefParams));

//2. Key tags in the document
let secondPart = document.createElement("h1");
secondPart.innerText = "II. Key tags in the document";
document.body.append(secondPart);
let hrefAnchors = "https://www.youtube.com/watch?v=QUfaVWw1wb4&list=RDQUfaVWw1wb4&index=1";

//2.1
console.log('Number of anchors in HTML: ', document.body.getElementsByTagName('a').length);
for (let i = 0; i < 3; i++)
{
	let anchors = (document.createElement('a'));
	anchors.href = hrefAnchors.concat(`/${i}`);
	anchors.innerText = `Link ${i+1}`;
	anchors.style.marginRight =  '10px';
	document.body.append(anchors);
}
document.write("</br>");

//2.3
for (let i = 0; i < 2; i++)
{
	let image = (document.createElement('img'));
	image.id = `value ${i+1}`;
	image.src = "https://chocayxanh.net/wp-content/uploads/2019/03/cay-moc-lan17.jpg";
	image.style.height = 30 + i * 30 + 'px';
	image.style.width = 50 + i * 30 + 'px';
	image.alt = `Link ${i+1}`;
	image.style.marginRight = '10px';
	document.body.append(image);
	document.write("</br>"); 
}

//2.4
document.write('1. Number of anchors: '+ document.body.getElementsByTagName('a').length);
console.log('Number of anchors via JS: '+ document.body.getElementsByTagName('a').length);
document.write("</br>");

//2.5
document.write('2. Number of links: '+ document.links.length);
console.log('Number of links in HTML: '+ document.links.length);
document.write("</br>");

//2.6
document.write('3. The content (innerHTML) of the first anchors: '+ document.body.getElementsByTagName('a').item(0).innerText);
document.write("</br>");

//2.7
document.write('4. Number of pics: '+ document.body.getElementsByTagName('img').length);
document.write("</br>");

//2.8
document.write('5. Width of the first pic: '+ document.body.getElementsByTagName('img').item(0).width);
document.write("</br>");

//2.9
let images = document.querySelectorAll('img');
let maxWidth = images[0].width;
images.forEach((img) => {
	if (img.width > maxWidth)
	{
		maxWidth = img.width;
	}
});
document.write('6. The width of the widest pic: ', maxWidth);
document.write("</br>");

//2.10
let SumHeightImages = 0;
images.forEach((img) => 
{
	SumHeightImages += img.height;
});
document.write('7. The sum of all the heights of the pictures: ', SumHeightImages);
document.write("</br>");

//3. Form
let thirdPart = document.createElement("h1");
thirdPart.innerText = "III. Form";
document.body.append(thirdPart);

let forms = [];
for (let i = 0; i < 15; i++) {
    let form = document.createElement('form');
    form.name = `formName${i+1}`;
    form.id = `formValue${i+1}`;
    forms.push(form);
    document.body.append(form);
}

let evenFormsNames = forms.filter((form) => form.id.substring(9, form.id.length) % 2 == 0)
    .map((evenForm) => evenForm.id).join(', ');
document.write(evenFormsNames);


let formsHTML = document.body.getElementsByTagName('form');
for (let i = 0; i < formsHTML.length ; i++) 
	{
		let inputTextTitle = document.createElement('span');
		let inputPassTitle = document.createElement('span');
		let inputRadioTitle = document.createElement('span');
		inputTextTitle.appendChild(document.createTextNode('Name'));
		inputPassTitle.appendChild(document.createTextNode('Password'));
		inputRadioTitle.appendChild(document.createTextNode('Male'));   
	    inputTextTitle.style.margin = "5px";
	    inputPassTitle.style.margin = "5px";
	    inputRadioTitle.style.margin = "5px";

	    let inputText = document.createElement('input');
	    let inputPass = document.createElement('input');
	    let inputRadio = document.createElement('input');
	    inputText.type = "text";
	    inputText.style.margin = "5px";
	    inputPass.type = "password";
	    inputPass.style.margin = "5px";
	    inputRadio.type = "radio";
	    inputRadio.style.margin = "5px";

	    formsHTML[i].appendChild(inputTextTitle);
	    formsHTML[i].appendChild(inputText);

	    formsHTML[i].appendChild(inputPassTitle);
	    formsHTML[i].appendChild(inputPass);

	    formsHTML[i].appendChild(inputRadioTitle);
	    formsHTML[i].appendChild(inputRadio);

	    //button Name
	    let buttonName = document.createElement('button');
	    buttonName.innerText = "Показать имя формы";
	    buttonName.style.padding = "10px";
	    buttonName.style.margin = "5px";
	    buttonName.style.borderRadius = "10px";
	    buttonName.style.backgroundColor = 'white';
	    buttonName.style.color = 'black';
	    buttonName.onclick = () => alert(inputText.value);
	    buttonName.onmouseover = () => {
	        buttonName.style.backgroundColor = '#f8a5c2';
	        buttonName.style.color = "white";
	    };
	    buttonName.onmouseout = () => {
	        buttonName.style.backgroundColor = 'white';
	        buttonName.style.color = 'black';
	    };
		let iconName = document.createElement('img');
	    iconName.style.width = '20px';
	    iconName.style.height = '20px';
	    iconName.style.marginRight = '5px';
	    iconName.style.verticalAlign = 'bottom';
		iconName.src = 'icons/smile.png';
		buttonName.prepend(iconName);

		//button ID
	    let buttonId = document.createElement('button'); 
	    buttonId.innerText = "Принадлежность";
	    buttonId.style.padding = "10px";
	    buttonId.style.margin = "5px";
	    buttonId.style.borderRadius = "10px";
	    buttonId.style.backgroundColor = 'white';
	    buttonId.style.color = 'black';
	    buttonId.onclick = () => alert(formsHTML[i].id);
	    buttonId.onmouseover = () => {
	        buttonId.style.backgroundColor = '#f8a5c2';
	        buttonId.style.color = "white";
	    };
	    buttonId.onmouseout = () => {
	        buttonId.style.backgroundColor = 'white';
	        buttonId.style.color = 'black';
	    };

	    let iconId = document.createElement('img');
	    iconId.style.width = '20px';
	    iconId.style.height = '20px';
	    iconId.style.marginRight = '5px';
	    iconId.style.verticalAlign = 'bottom';
		iconId.src = 'icons/pencil.png';
		buttonId.prepend(iconId);


		//button Reset
	    let buttonReset = document.createElement('button');
	    buttonReset.type = 'reset';
	    buttonReset.innerText = "Сбросить";
	    buttonReset.style.padding = "10px";
	    buttonReset.style.margin = "5px";
	    buttonReset.style.borderRadius = "10px";   
	    buttonReset.style.backgroundColor = 'white';
	    buttonReset.style.color = 'black'; 
	    buttonReset.onmouseover = () => {
	        buttonReset.style.backgroundColor = '#f8a5c2';
	        buttonReset.style.color = "white";
	    };
	    buttonReset.onmouseout = () => {
	        buttonReset.style.backgroundColor = 'white';
	        buttonReset.style.color = 'black';
	    };

	    let iconReset = document.createElement('img');
	    iconReset.style.width = '20px';
	    iconReset.style.height = '20px';
	    iconReset.style.marginRight = '5px';
	    iconReset.style.verticalAlign = 'bottom';
		iconReset.src = 'icons/bin.png';
		buttonReset.prepend(iconReset);


		//button Number
	    let buttonNumber = document.createElement('button');    
	    buttonNumber.type = 'button';
	    buttonNumber.innerText = "Показать количество полей";
	    buttonNumber.style.padding = "10px";
	    buttonNumber.style.margin = "5px";
	    buttonNumber.style.borderRadius = "10px";
	    buttonNumber.style.backgroundColor = 'white';
	    buttonNumber.style.color = 'black';
	    buttonNumber.onclick = () => {
	        alert(`Количество полей равно ${formsHTML[i].childNodes.length}`);
	    };    
	    buttonNumber.onmouseover = () => {
	        buttonNumber.style.backgroundColor = '#f8a5c2';
	        buttonNumber.style.color = "white";
	    };
	    buttonNumber.onmouseout = () => {
	        buttonNumber.style.backgroundColor = 'white';
	        buttonNumber.style.color = 'black';
	    };

	    let iconNumber = document.createElement('img');
	    iconNumber.style.width = '20px';
	    iconNumber.style.height = '20px';
	    iconNumber.style.marginRight = '5px';
	    iconNumber.style.verticalAlign = 'bottom';
		iconNumber.src = 'icons/delete.png';
		buttonNumber.prepend(iconNumber);

    formsHTML[i].appendChild(buttonName);
    formsHTML[i].appendChild(buttonId);
    formsHTML[i].appendChild(buttonReset);
    formsHTML[i].appendChild(buttonNumber);
}

//4. Additional task
let fourthPart = document.createElement("h1");
fourthPart.innerText = "IV. Additional task";
document.body.append(fourthPart);

let a1 = [];
for (let i = 0; i < 10; i++){	

	let a2 = document.createElement('a');
	a2.style.marginRight = "5px";

	if (i % 3 == 0){
		a2.innerText = "Youtube";
		a2.href = "https://www.youtube.com/watch?v=WiinVuzh4DA&list=RDnSr5C4-CPNk&index=14";
	}
	else if (i % 3 == 1) {
		a2.innerText = "Translate";
		a2.href = "https://translate.google.com/?hl=vi&tab=TT&authuser=0";
	}	
	else {
		a2.innerText = "Facebook";
		a2.href = "https://www.facebook.com/lv.luu.7";
	}

	document.body.append(a2);
	a1.push(a2);
}

let table = document.createElement('table');
table.border = '4';
table.style.borderCollapse = 'collapse';
table.cellPadding = '5';
table.style.marginTop = '10px';
a1.forEach((a, i) => {
    if (!a1.slice(0, i).some((nextA) => a.innerText === nextA.innerText)) {
	    let row = document.createElement('tr');
	    let inner = document.createElement('td');
	    let count = document.createElement('td');
	    let href = document.createElement('td');
	    inner.innerText = a.innerText;
	    count.innerText = a1.filter((aInner) => a.innerText == aInner.innerText).length;
	    href.innerText = a.href;
	    row.appendChild(inner);
	    row.appendChild(count);
	    row.appendChild(href);
	    table.appendChild(row);
    }
});
document.body.append(table);
