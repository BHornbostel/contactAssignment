$(document).ready(function(){

    $("form").submit(function(){
        var first= $("#firstname").val();
        var last= $("#lastname").val();
        var dis= $("#discription").val();
        var alt= "<div class='discription'>"+dis+"</div>";
        var markup = "<div class='contact'><h3>"+first +" "+ last+"</h3><p>Click for description!</p></div>"
        $("#main").append(markup); 
        $("#main").append(alt); 
        $(".discription").hide();
        return false;  
    });
    $(document).on('click', '.contact', function(){
     $(this).hide();
     $(".discription").show();
    });
    $(document).on('click', '.discription', function(){
        $(this).hide();
        $(".contact").show();
       });
});