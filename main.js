var xe18choPercent = 1
var xe12choPercent = 0.8
var xe7choPercent = 0.6
var xe18cho = [
    {
        id: "B1",
        value: false,
        idTour: 1,
    },
    {     
        id: "B2",
        value: false,
        idTour: 2,
    },
    {
        id: "B3",
        value: false,
        idTour: 3,
    },
    {      
        id: "B4",
        value: false,
        idTour: 4,
    },
    {
        id: "B5",
        value: false,
        idTour: 5,
    },
    {      
        id: "B6",
        value: false,
        idTour: 6,
    },
    {
        id: "B7",
        value: false,
        idTour: 7,
    },
    {      
        id: "B8",
        value: false,
        idTour: 8,
    },
    {
        id: "B9",
        value: false,
        idTour: 9,
    },
    {      
        id: "B10",
        value: false,
        idTour: 10,
    },
    {
        id: "B11",
        value: false,
        idTour: 11,
    },
    {      
        id: "B12",
        value: false,
        idTour: 12,
    },
    {
        id: "B13",
        value: false,
        idTour: 13,
    },
    {       
        id: "B14",
        value: false,
        idTour: 14,
    },
    {
        id: "B15",
        value: false,
        idTour: 15,
    },
    {
        id: "B16",
        value: false,
        idTour: 16,
    },
    {
        id: "B17",
        value: false,
        idTour: 17,
    },
    {  
        id: "B18",
        value: false,
        idTour: 18,
    },

];

var xe12cho = [
    {
        id: "A1",
        value: false,
        idTour: 1
        
    },
    {     
        id: "A2",
        value: false,
        idTour: 2
    
    },
    {
        id: "A3",
        value: false,
        idTour: 3
    },
    {      
        id: "A4",
        value: false,
        idTour: 4
    },
    {
        id: "A5",
        value: false,
        idTour: 5
    },
    {      
        id: "A6",
        value: false,
        idTour: 6
    },
    {
        id: "A7",
        value: false,
        idTour: 7
    },
    {      
        id: "A8",
        value: false,
        idTour: 8
    },
    {
        id: "A9",
        value: false,
        idTour: 9
    },
    {      
        id: "A10",
        value: false,
        idTour: 10
    },
    {
        id: "A11",
        value: false,
        idTour: 11
    },
    {      
        id: "A12",
        value: false,
        idTour: 12
    }
];

var xe7cho = [
    {
        id: "C1",
        value: false,
        idTour: 1
    },
    {     
        id: "C2",
        value: false,
        idTour: 2
    },
    {
        id: "C3",
        value: false,
        idTour: 3
    },
    {      
        id: "C4",
        value: false,
        idTour: 4
    },
    {
        id: "C5",
        value: false,
        idTour: 5
    },
    {      
        id: "C6",
        value: false,
        idTour: 6
    },
    {
        id: "C7",
        value: false,
        idTour: 7
    }
];
function showLeft18() {
    var a='';
    var number=0;
    document.getElementById("showLeft18").innerHTML=''
    for (var i=0; i<3; i++) {
        a += '<div class="row">';
        for (var j=0; j<3; j++) {
        a += '<div class="col-md-3">';
        a += '<button onclick="clickModalItem('+ xe18cho[number].id + ')"  class="button-item '+(xe18cho[number].value  ? 'blue' : '') +'" id="'+xe18cho[number].id+'">'+xe18cho[number].id+'</button>';
        a += '</div>';
            number++;
        }
        a+= '</div>';
    }
    document.getElementById("showLeft18") && (document.getElementById("showLeft18").innerHTML=a);
}

function showRight18() {
    var b='';
    var number=9;
    for (var x=0; x<3; x++) {
        b += '<div class="row">';
        for (var y=0; y<3; y++) {
        b += '<div class="col-md-3">';
        b += '<button onclick="clickModalItem('+ xe18cho[number].id + ')"  class="button-item '+(xe18cho[number].value  ? 'blue' : '') +'" id="'+xe18cho[number].id+'">'+xe18cho[number].id+'</button>';
        b += '</div>';
            number++;
        }
        b+= '</div>';
    }
    document.getElementById("showRight18") && (document.getElementById("showRight18").innerHTML=b);
}

const clickModalItem = (e) => {
    // console.log('in', tour)
 
    let ticketNumber=0
    let totalPrice = 0
    xe18cho.forEach((item) => {
        if (item.id == e.id) {
            item.value = !item.value
        }
        if(item.value) {
            ticketNumber++
            document.getElementById(item.id)?.classList.add("blue");
            const selectedTour = tour.find((t) => t.id == item.idTour);
            totalPrice += (selectedTour?.price || 0) * xe18choPercent
        } else {
            document.getElementById(item.id)?.classList.remove("blue");
        }
    })


    // console.log('v', totalPrice)
   
    document.getElementById("ticketNumber").innerHTML=ticketNumber
    document.getElementById("totalPrice").innerHTML=totalPrice
  
};

function showLeft12() {
    var a='';
    var number=0;
    for (var i=0; i<3; i++) {
        a += '<div class="row">';
        for (var j=0; j<2; j++) {
        a += '<div class="col-md-3">';
        a +='<button onclick="clickModalItem2('+ xe12cho[number].id + ')"  class="button-item '+(xe12cho[number].value  ? 'blue' : '') +'" id="'+xe12cho[number].id+'">'+xe12cho[number].id+'</button>';
        a += '</div>';
            number++;
        }
        a+= '</div>';
    }
    document.getElementById("showLeft12")&&(document.getElementById("showLeft12").innerHTML=a);
}
function showRight12() {
    var b='';
    var number=6;
    for (var x=0; x<3; x++) {
        b += '<div class="row">';
        for (var y=0; y<2; y++) {
        b += '<div class="col-md-3">';
        b += '<button onclick="clickModalItem2('+ xe12cho[number].id + ')"  class="button-item '+(xe12cho[number].value  ? 'blue' : '') +'" id="'+xe12cho[number].id+'">'+xe12cho[number].id+'</button>';
        b += '</div>';
            number++;
        }
        b+= '</div>';
    }
    document.getElementById("showRight12") && (document.getElementById("showRight12").innerHTML=b);
}

const clickModalItem2 = (e) => {
    // console.log('in', tour)
 
    let ticketNumber=0
    let totalPrice = 0
    xe12cho.forEach((item) => {
        if (item.id == e.id) {
            item.value = !item.value
        }
        if(item.value) {
            ticketNumber++
            document.getElementById(item.id)?.classList.add("blue");
            const selectedTour = tour.find((t) => t.id == item.idTour);
            totalPrice += (selectedTour?.price || 0) * xe12choPercent 
        } else {
            document.getElementById(item.id)?.classList.remove("blue");
        }
    })


    // console.log('v', totalPrice)
   
    document.getElementById("ticketNumber12").innerHTML=ticketNumber
    document.getElementById("totalPrice12").innerHTML=totalPrice
  
};

const clickModalItem3 = (e) => {
    // console.log('in', tour)
 
    let ticketNumber=0
    let totalPrice = 0
    xe7cho.forEach((item) => {
        if (item.id == e.id) {
            item.value = !item.value
        }
        if(item.value) {
            ticketNumber++
            document.getElementById(item.id)?.classList.add("blue");
            const selectedTour = tour.find((t) => t.id == item.idTour);
            totalPrice += (selectedTour?.price || 0) * xe7choPercent 
        } else {
            document.getElementById(item.id)?.classList.remove("blue");
        }
    })


    // console.log('v', totalPrice)
   
    document.getElementById("ticketNumber7").innerHTML=ticketNumber
    document.getElementById("totalPrice7").innerHTML=totalPrice
  
};
function show7() {
    var b='';
    var number=0;
    for (var x=0; x<2; x++) {
        b += '<div class="row">';
        for (var y=0; y<3; y++) {
        b += '<div class="col-md-3">';
        b += '<button onclick="clickModalItem3('+ xe7cho[number].id + ')"  class="button-item '+(xe12cho[number].value  ? 'blue' : '') +'" id="'+xe7cho[number].id+'">'+xe7cho[number].id+'</button>';
        b += '</div>';
            number++;
        }
        b+= '</div>';
    }
    b += '<div class="row">';
    b += '<div class="col-md-3">';
    b += '<button type="button" value="'+ xe7cho[number].id +'" class="button-item">'+xe7cho[number].id+'</button>';
    b += '</div>';
    document.getElementById("show7").innerHTML=b;
}