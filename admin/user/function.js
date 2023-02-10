function showUser() {
    axios.get('https://63aa9d067d7edb3ae62c2692.mockapi.io/test/api/v1/information/').then((res)=>{
        console.log(res);
        var a = res.data;
        var user='';
        for (i in a) {
            user += '<div class="if-user">';
            user += '<p>';
            user += '<label> id: </label>';
            user +=  + a[i].id + '</p>';
            user += '<p>';
            user += '<label> Name: </label>';
            user +=  + a[i].name + '</p>';
            user += '<p>';
            user += '<label> Phone: </label>';
            user +=  + a[i].phone + '</p>';
            user += '<p>';
            user += '<label> Email: </label>';
            user +=  + a[i].email + '</p>';

            // user += '<p>id: :' + a[i].id + '</p>';
            // user += '<p>name: :' + a[i].name + '</p>';
            // user += '<p>phone: :' + a[i].phone + '</p>';
            // user += '<p> emaa[i]l:' + a[i].email + '</p>';
            user +=  '</div>';
        }
        document.getElementById('user').innerHTML=user;
    })
    .catch((e)=>{console.log(e)})
}

