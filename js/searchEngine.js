
var text = document.querySelector('#text');
var search = document.querySelector('#search');
var urlText = "";
console.log(text.value);
function go() {
    var site = " site:myelliot.cn/"
    var baidu = "https://www.baidu.com/s?wd=";
    var google = "https://www.google.com.hk/search?q="
    const searchText = text.value;
    console.log(searchText);
    var flag = 1;
    if (flag == 1) {
        urlText = baidu + searchText + site;
    }
    else {
        urlText = google + searchText + site;
    }
    location.href = urlText;

}

// search.addEventListener('click',go);