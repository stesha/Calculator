function calculation(){
    var transaction = '';
    $.ajax({
        dataType: "jsonp",
        url: "http://train.eu01.aws.af.cm/calc.php",
        data: {x1: x1, x2: x2, operation:  operationMap[operation]},
        success: function(data){
            current.val(data.result);
            history.append('<p>'+transaction+data.result+'</p>')
                .show();
            _.each($('.calc_btn'), function(btn){btn.disabled = false;});
            calculator.removeClass('opacity50');
        },
        beforeSend: function() {
            transaction = x1+operation+x2+'=';
            _.each($('.calc_btn'), function(btn){btn.disabled = true;});
            calculator.addClass('opacity50');
        }
    });
}