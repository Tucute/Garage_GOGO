
// function getDatatk() {
//     var quantity = document.getElementById('ticketNumber').value;
//     var price = document.getElementById('totalPrice').value;
//     console.log(quantity,price);
//     
// }



function translateOf18(){
    var tiketNumber = document.getElementById('ticketNumber').innerHTML;
    var totalPrice = document.getElementById("totalPrice").innerHTML;
   
    
    axios.put('https://63aa9d067d7edb3ae62c2692.mockapi.io/test/api/v1/product/1',{
        quantity:tiketNumber,
        price:totalPrice
    }).then((res)=>{
        console.log(res);
    })
    .catch((e)=>{console.log(e)})

    setTimeout(() => {
        window.location.href=`http://127.0.0.1:3000/informationCustomer.html`;
    },1500);
};


function procedure() {
    var a = document.getElementById("select-orign"); 
    var b = a[a.selectedIndex].value;
    var c = document.getElementById("select-destination"); 
    var d = c[c.selectedIndex].value;
    var e = document.getElementById("start-date").value;
    if ((b / d / e) == null) {
        alert("Bạn chưa điền đầy đủ thông tin");
    }
    else {
        window.location.href=`http://127.0.0.1:3000/selectCar.html?orign=${b}&destination=${d}&date=${e}`;
    }  
};


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const orign = urlParams.get('orign')
console.log(orign);
const destination = urlParams.get('destination')
console.log(destination);
const date = urlParams.get('date')
console.log(date)

var show = function() {
    var temp = '<h3>'+ orign + ' -  ' + destination + '</h3>';
    temp += '<div>'+ date +'</div>';
    document.getElementById("title") && (document.getElementById("title").innerHTML=temp);    
};
show();

function selectPrice() {
    var price=0;
    for (var i in tour) { 
        var data = JSON.parse(JSON.stringify(tour[i]));
        if (data.orign==orign && data.destination==destination){
            price = data.price ;
        }     
    }
    document.getElementById("showPrice") && ( document.getElementById("showPrice").innerHTML=price);
};
selectPrice();

showLeft18();


showRight18();


showLeft12();


showRight12();


show7();


