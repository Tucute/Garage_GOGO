function addTour() {
    var newTour = {
        stt: parseInt(tour.length + 1),
        orign: document.getElementById('orign').value,
        destination: document.getElementById('destination').value,
        type: document.getElementById('type').value,
        distance: document.getElementById('distance').value,
        duration: document.getElementById('duration').value,
        price: document.getElementById('price').value,
    };
    console.log(newTour);
    tour.push(newTour);
    localStorage.setItem('listTour', JSON.stringify(tour));
    show();
    alert("Đã thêm thành công !");
};
//Xóa Sản Phẩm

function deleteTour(i) {
    tour.splice(i-1, 1);
    localStorage.setItem('listTour', JSON.stringify(tour));
    show();
};



var submitUpdate = function (i) {
    var t = tour[i-1];
    t.stt = document.getElementById('idd').value;
    t.orign = document.getElementById('orignd').value ;
    t.destination = document.getElementById('destinationd').value;
    t.type = document.getElementById('typed').value;
    t.duration = document.getElementById('durationd').value;
    t.price = document.getElementById('priced').value;
    localStorage.setItem('listTour', JSON.stringify(tour));
    show();
    // window.location.reload()
    alert("Đã chỉnh sửa thành công !");
};

var click = function() {
    window.location.href=``;
}

