function chatbox() {
    var cusInformation = []
    var a = {
        name: document.getElementById("txt1").value,
        gmail: document.getElementById("gmail").value,
        phonenumber: document.getElementById("phonen").value,
        address: document.getElementById("address").value,
        password: document.getElementById("txt2").value
    }
    console.log(a);
    cusInformation.push(a);

    var show = ''
    show += '<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">';
    show += '<div class="modal-dialog">';
    show += '<div class="modal-content">';
    show += '<div class="modal-body">';
    show += '<p>CẢM ƠN BẠN ĐẪ QUAN TÂM ĐẾ [GO GO] CHÚNG TÔI SẼ KHÔNG ĐỂ BẠN THẤT VỌNG</p>';
    show += '</div>';
    show += '</div>';
    show += '</div>';
    show += '</div>';

    document.getElementById("sms").innerHTML = show;
}
function myFunction() {
    var iframe = document.getElementById("myFrame");
    var elmnt = iframe.contentWindow.document.getElementsByTagName("H1")[0];
    elmnt.style.display = "none";
}