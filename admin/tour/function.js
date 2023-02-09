function Save() {
    localStorage.setItem('listTour', JSON.stringify(tour));
}
Save();

function Load() {
    tour = JSON.parse(localStorage.getItem('listTour'));
}
if (localStorage.getItem('listTour') != null) {
    Load();
}

function show() {
    var list = '';
    for (var i in tour) {
        var dt = JSON.parse(JSON.stringify(tour[i]));
        list += '<tr>';
        list += '<td>' + dt.stt + '</td>';
        list += '<td>' + dt.orign + '</td>';
        list += '<td>' + dt.destination + '</td>';
        list += '<td>' + dt.type + '</td>';
        list += '<td>' + dt.distance + ' km </td>';
        list += '<td>' + dt.duration + '</td>';
        list += '<td>' + dt.price + '</td>';
        list += '<td>';
        list += '<button type="button" onclick="updateTour(' + dt.stt + ')" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#ModalEdit"> Edit </button>';
        list += '</td>';
        list += '<td>';
        list += '<button type="button" onclick="deleteTour(' + dt.stt + ')" class="btn btn-danger"> Delete </button>';
        list += '</td>';
        list += '</tr>';
    }
    document.getElementById('tbl').innerHTML = list;
    Save();
};

show();

var updateTour = function (i) {
    var t = tour[i - 1];
    document.getElementById('idd').innerHTML = t.stt;
    console.log(t);
    document.getElementById('orignd').innerHTML = t.orign;
    document.getElementById('destinationd').innerHTML = t.destination;
    document.getElementById('typed').innerHTML = t.type;
    document.getElementById('distanced').innerHTML = t.distance;
    document.getElementById('durationd').innerHTML = t.duration;
    document.getElementById('priced').innerHTML = t.price;
    // document.getElementById('idd').value=t.id;
    document.getElementById('submitUpdate').innerHTML = '<button class="btn btn-outline-danger mt-3" onclick="submitUpdate(' +
        i + ')">Đồng ý</button>';
};

