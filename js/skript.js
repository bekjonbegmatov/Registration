$('document').ready(function(){

//-----------------rigester ready------------//    
    $('#button_rigester').on('click', function(){
        // prermennoe

        var name ;
        name = $('#name_user').val();
        
        alert( name + " , Вы успешно зарегистривались !!!");
    });

//----------------rigester keyup------------//

    $('#name_user').on('keyup', function(){
        var name;
        name = $('#name_user').val();
                
        $('#user_info').html(name);
    
    });

//--------------Welcome---------------------//

    $('#welcome').on('click', function(){

        // var name ;
        // name = $('#name_user').val();
        alert("Приветствую вас ");
    });

//-------------------login------------------//

    $('#login_button').on('click', function(){
        var email;
        email = $('#email_login').val();
        alert("Мы помным вас , " + email)
    });
});



    //email = $('#user_email').val();
        //passvord = $('#user_password').var();
        // user info
        //alert(name);
        //$('#user_info').html(name);

        // alert("Ohooooo");
        //var a, b, c;
        //a = $('#a').val();
        //b = $('#b').val();

        //a = parseInt(a)
       // b = parseInt(b)

        //c = a + b;
        //alert(c)
        //$('#j').html(a);