function Save() {
    localStorage.setItem('litstPlace', JSON.stringify(tour));
}
function Load() {
    tour = JSON.parse(localStorage.getItem('listPlace'));
}

Load();


function ticketCentre(){
    var listTour='';
    for (var i in tour){
        var data  = JSON.parse (JSON.stringify(tour[i]));
        listTour +='<tr>';
        listTour +='<td>' + data.orign + '</td>';
        listTour +='<td>' + data.destination + '</td>';
        listTour +='<td>' + data.type + '</td>';
        listTour +='<td>' + data.duration + '</td>';
        listTour +='<td>' + data.price + '</td>';
        listTour+= '<td>';
        listTour += '<button type="button" class="btn btn-warning" onclick="translate()">Đặt vé</button>';
        listTour += '</td>';
        listTour +='</tr>';
       
    }
    document.getElementById('tb').innerHTML =listTour;
    Save();
};

function translate() {
    window.location.href=`http://127.0.0.1:3000/index.html`;
}



function show2() {
    let orign = document.getElementById('orign').value;
    console.log(orign);
    let list = '';
    let count = 0;
    for (var i in tour) {
        var data  = JSON.parse (JSON.stringify(tour[i]));
        if(orign==data.orign) {
            list +='<tr>';
            list +='<td>' + data.orign + '</td>';
            list +='<td>' + data.destination + '</td>';
            list +='<td>' + data.type + '</td>';
            list +='<td>' + data.duration + '</td>';
            list +='<td>' + data.price + '</td>';
            list+= '<td>';
            list += '<button type="button" class="btn btn-warning">Đặt vé</button>';
            list += '</td>';
            list +='</tr>';

            count++;
        }
    }
    if (count == 0) {
        document.getElementById('tbl').innerHTML="Không tìm thấy tuyến đường ";
    }
    else {
        document.getElementById('tbl').innerHTML=list;
    }
}

function show3() {
    let destination = document.getElementById('destination').value;
    console.log(destination);
    let list = '';
    let count = 0;
    for (var i in tour) {
        var data  = JSON.parse (JSON.stringify(tour[i]));
        if(destination==data.destination) {
            list +='<tr>';
            list +='<td>' + data.orign + '</td>';
            list +='<td>' + data.destination + '</td>';
            list +='<td>' + data.type + '</td>';
            list +='<td>' + data.duration + '</td>';
            list +='<td>' + data.price + '</td>';
            list+= '<td>';
            list += '<button type="button" class="btn btn-warning">Đặt vé</button>';
            list += '</td>';
            list +='</tr>';

            count++;
        }
    }
    if (count == 0) {
        document.getElementById('tbl').innerHTML="Không tìm thấy tuyến đường ";
    }
    else {
        document.getElementById('tbl').innerHTML=list;
    }
}