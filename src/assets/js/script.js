/**
 * Created by ashotkazaryan on 18.11.18.



$(document).ready(function () {
    var iframe = document.getElementById("myIframe");
    var elmnt = iframe.contentWindow.document.getElementsByTagName("body");
    console.log(iframe)
    console.log(elmnt)
//elmnt.style.display = "none";
})
*/
$('.modal').modal();