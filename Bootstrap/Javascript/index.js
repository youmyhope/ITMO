let input1 = document.getElementsByName("RowsInput")[0];
console.log(input1.value);

let input2 = document.getElementsByName("ColsInput")[0];
console.log(input2.value);

let buttonList = document.querySelectorAll('button');
buttonList.forEach((button) =>
    button.onclick = goToTablePage);

function goToTablePage() {
    let parsedUrl= new URL(location.protocol + '//' + location.host + location.pathname);
    parsedUrl.searchParams.set('rows',input1.value);
    parsedUrl.searchParams.set('columns',input2.value);
    var url = parsedUrl.href;
    var myPage = "table";
    var ind1 = url.lastIndexOf('/');
    var ind2 = url.lastIndexOf('.');
    new_url = url.substring(0, ind1+1 )+myPage+url.substring(ind2);
    window.location = new URL(new_url);
}