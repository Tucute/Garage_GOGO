
function getInformation() {
    var name = document.getElementById('pname').value;
    var phone = document.getElementById('pphone').value;
    var email = document.getElementById('pemail').value;
    console.log(name,phone,email);

    axios.put('https://63aa9d067d7edb3ae62c2692.mockapi.io/test/api/v1/information/1',{
        name,
        phone,
        email        
    }).then((res)=>{
        console.log(res);
    })
    .catch((e)=>{console.log(e)})  
    setTimeout(()=>{
        window.location.href=`http://127.0.0.1:3000/pay.html`;
    },1000)
}

function onload() {
    var a;
    axios.get('https://63aa9d067d7edb3ae62c2692.mockapi.io/test/api/v1/information/1').then((res)=>{
        a=res.data;
        console.log(a);
        document.getElementById("name").innerHTML=a.name;
        document.getElementById("phone").innerHTML=a.phone;
        document.getElementById("email").innerHTML=a.email;
    })
    .catch((e)=>{console.log(e)}) 
    
    var b;
    axios.get('https://63aa9d067d7edb3ae62c2692.mockapi.io/test/api/v1/product/1').then((res)=>{
        b=res.data;
        console.log(b);
        document.getElementById("quantity-seat").innerHTML=b.quantity;
        document.getElementById("price").innerHTML=b.price;
    })
    .catch((e)=>{console.log(e)})
}
function onloadHome() {
    window.location.href=`http://127.0.0.1:3000/index.html`;
}