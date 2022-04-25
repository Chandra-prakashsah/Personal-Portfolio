function sendMail() {
    var link = "Gmail:chk995566@gmail.com"
    + "?cc=myCCaddress@example.com"
    + "&subject=" + escape("This is my subject")
    + "&body=" + escape(document.getElementById('submit').value)
;

window.location.href = link;
}