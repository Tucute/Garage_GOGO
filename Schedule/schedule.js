function Save() {
    localStorage.setItem('litstPlace', JSON.stringify(tour));
}
function Load() {
    tour = JSON.parse(localStorage.getItem('listPlace'));
}

Load();


function ticketCentre(){
    var listTour;
    for (var i in tour){
        var data  = JSON.parse (JSON.stringify(tour[i]));
        listTour +='<tr>';
        listTour +='<td>' + data.orign + '</td>';
        listTour +='<td>' + data.destination + '</td>';
        listTour +='<td>' + data.type + '</td>';
        listTour +='<td>' + data.duration + '</td>';
        listTour +='<td>' + data.price + '</td>';
        listTour +='</tr>';
       
    }
    document.getElementById('a').innerHTML =listTour;
    Save();
};

var addTour = function(){
    var Tour ={
        id : '' + parseInt(tour.length+1),
        orign: document.getElementById('orign').value,
        destination: document.getElementById('destination').value,
        type: document.getElementById('type').value,
        duration: document.getElementById('duration').value,
        price: document.getElementById('price').value,
    };
    tour.push(Tour);
    localStorage.setItem('listTour', JSON.stringify(tour));
    window.location.reload();
};
//Xóa Sản Phẩm

var deleteTour=function(i){
    tour.splice(i, 1);
    localStorage.setItem('listTour', JSON.stringify(tour));
    window.location.reload();
};

var updateTour=function(i){
    var t = tour[i];
    document.getElementById('idd').value=t.id;
    document.getElementById('orignn').value=t.orign;
    document.getElementById('destinationn').value=t.destination;
    document.getElementById('typee').value=t.type;
    document.getElementById('durationn').value=t.duration;
    document.getElementById('pricee').value=t.price;
    // document.getElementById('idd').value=t.id;
    document.getElementById('submitUpdate').innerHTML='<button class="btn btn-outline-danger mt-3" onclick="submitUpdate('+
    1+')">Đồng ý</button>';
};

var submitUpdate=function(i){
    var t = tour[i];
    t.id=document.getElementById('idd').value=t.id;
    t.orign=document.getElementById('orignn').value=t.orign;
    t.destination=document.getElementById('destinationn').value=t.destination;
    t.type=document.getElementById('typee').value=t.type;
    t.duration=document.getElementById('durationn').value=t.duration;
    t.price=document.getElementById('pricee').value=t.price;
    localStorage.setItem('listTour', JSON.stringify(tour));
    window.location.reload()
};