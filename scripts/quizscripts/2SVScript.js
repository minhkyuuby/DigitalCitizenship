$( document ).ready(function() {
    $(".reset").click(function(){
        location.reload();
    });
    $("#submit").click(function() {
        var a1= $("input[name='Q1']:checked").val();
        var a2= $("input[name='Q2']:checked").val();
        var a3= $("input[name='Q3']:checked").val();
        if(a1 == "o2" && a2 == "o3" && a3=="o1") {
            $("#myModal").modal();
            return;
        }
        $("#myModal2").modal();
    });
});