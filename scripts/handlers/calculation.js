function calculation(){
    var transaction = '';
    $.ajax({
        dataType: "jsonp",
        url: "http://train.eu01.aws.af.cm/calc.php",
<<<<<<< HEAD
        data: {x1: _x1, x2: _x2, operation:  operationMap[_operation]},
        success: function(data){
            $current.val(data.result);
            $history.append('<p>'+transaction+data.result+'</p>')
                .show();
            _.each($('.calc_btn'), function(btn){btn.disabled = false;});
            $calculator.removeClass('opacity50');
        },
        beforeSend: function() {
            transaction = _x1+_operation+_x2+'=';
            _.each($('.calc_btn'), function(btn){btn.disabled = true;});
            $calculator.addClass('opacity50');
        }
    });
}
=======
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
>>>>>>> origin/master
