<<<<<<< HEAD
requirejs(['baseFunctional','handlers/handleEnteredDigit', 'handlers/handleEnteredOperation', 'handlers/reset','handlers/signSwitch','handlers/calculation','lib/jquery-1.9.1','lib/underscore.js']);
=======
var digitArr;
var operationArr;
var operationMap;
var x1;
var x2;
var operation;
var current;
var calculator;
var history;

requirejs(['lib/jquery-1.9.1','handlers/handleEnteredDigit', 'handlers/handleEnteredOperation', 'handlers/reset','handlers/signSwitch','handlers/calculation'],
function($, digitHandler, operationHandler, res, signSw, calc){
    digitArr = ['0','1','2','3','4','5','6','7','8','9'];
    operationArr = ['/','-','+','*','='];
    operationMap = {
            '/':'divide',
            '-':'minus',
            '+':'plus',
            '*':'multiply'
        };
    x1 = null;
    x2 = null;
    operation = null;
    current = jQuery("#calc_result");
    calculator = jQuery(".calculator");
    history = jQuery("#history");
    current.val(0);

     jQuery('input').bind('click', function(){
        var btnVal = jQuery(this).val();
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
     })
});
>>>>>>> origin/master
