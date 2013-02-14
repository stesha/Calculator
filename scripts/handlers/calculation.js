function calculation(){
    var transaction = ''
    var _x1, _x2, _operation
    $.ajax({
        dataType: "jsonp",
        url: "http://train.eu01.aws.af.cm/calc.php",
        data: {x1: x1, x2: x2, operation:  operationMap[operation]},
        success: function(data){
            var transaction = _.template('<p><%= x1%> <%= operation%> <%= x2%> = <%= result%></p>')
            history.append(transaction({x1:_x1, operation:_operation, x2:_x2, result: data.result}))
            _.each($('.calc_btn'), function(btn){btn.disabled = false;})
            calculator.removeClass('opacity50')
            current.val(data.result)
        },
        beforeSend: function() {
            _x1 = x1
            _x2 = x2
            _operation = operation
            _.each($('.calc_btn'), function(btn){btn.disabled = true;})
            calculator.addClass('opacity50')
        }
    })
}