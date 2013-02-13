// Home task #5.
var digitArr;
var operationArr;
var operationMap;
var _x1;
var _x2;
var _operation;
var $current;
var $calculator;
var $history;

$(document).ready(function(){
    digitArr = ['0','1','2','3','4','5','6','7','8','9'];
    operationArr = ['/','-','+','*','='];
    operationMap = {
        '/':'divide',
        '-':'minus',
        '+':'plus',
        '*':'multiply'
    };
    _x1 = null;
    _x2 = null;
    _operation = null;
    $current = $("#calc_result");
    $calculator = $(".calculator");
    $history = $("#history");
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

})




