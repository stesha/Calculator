/**
 * Created with JetBrains WebStorm.
 * User: Pavel
 * Date: 11.02.13
 * Time: 23:42
 * To change this template use File | Settings | File Templates.
 */
// Home task #5.
$(document).ready(function(){
    var digitArr = ['0','1','2','3','4','5','6','7','8','9'];
    var operationArr = ['/','-','+','*','='];
    var operationMap = {
        '/':'divide',
        '-':'minus',
        '+':'plus',
        '*':'multiply'
    };
    var _x1 = null;
    var _x2 = null;
    var _operation = null;
    var $current = $("#calc_result");
    var $calculator = $(".calculator");
    var $history = $("#history");
    $current.val(0);

    $('input').bind('click', function(){
        var btnVal = $(this).val();
        if (_.contains(digitArr, btnVal)){
            handleEnteredDigit(btnVal);
        }else if(_.contains(operationArr, btnVal)){
            handleEnteredOperation(btnVal);
        }else{
            switch(btnVal){
                case '+/-':
                    signSwitch();
                    break;
                default:
                    reset();
                    break;
            }
        }
    });

    function handleEnteredDigit (digit)
    {
        if($current.val().length == 8) return;
        if(_.isNull(_operation)){
            if($current.val() !== '0'){
                _x1 = $current.val() +digit;
            }else{
                _x1 = digit;
            }
            $current.val(_x1);
        }else{
            if (_.isNull(_x1)){
                _x1 = $current.val();
            }
            if(_.isNull(_x2)){
                _x2 = digit;
            }else{
                _x2 += digit;
            }
            $current.val(_x2);
        }
    }

    function handleEnteredOperation (oper)
    {
        if(oper != '='){
            if (!_.isNull(_operation) && !_.isNull(_x1) && !_.isNull(_x2)){
                calculation();
                _x2 = null;
            }
            _operation = oper;
        }else if(!_.isNull(_x1) && !_.isNull(_x2) && !_.isNull(_operation)){
            calculation();
            _x1 = null;
            _x2 = null;
            _operation = null;
        }
    }

    function reset ()
    {
        $current.val(0);
        _x1 = null;
        _x2 = null;
        _operation = null;
    }

    function signSwitch ()
    {
        if(!_.isNull(_x1) && _.isNull(_operation) && _x1 !== 0){
            _x1 *= -1;
            $current.val(_x1);
        }else if(!_.isNull(_operation) && !_.isNull(_x2) && _x2 !== 0){
            _x2 *= -1;
            $current.val(_x2);
        }else if(_.isNull(_x1) && $current.val() !== 0){
            _x1 = -1*$current.val();
            $current.val(_x1);
        }
    }

    function calculation(){
        var transaction = '';
        $.ajax({
            dataType: "jsonp",
            url: "http://train.eu01.aws.af.cm/calc.php",
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
});

