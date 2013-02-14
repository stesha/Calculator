var digitArr
var operationArr
var operationMap
var x1
var x2
var operation
var current
var calculator
var history

requirejs(['handlers/digitHandler', 'handlers/operationHandler', 'handlers/reset','handlers/signSwitch','handlers/calculation','operationList'],
    function(digitHandler, operationHandler, res, signSw, calc, list){
        digitArr = ['0','1','2','3','4','5','6','7','8','9']
        operationArr = ['/','-','+','*','=']
        operationMap = list
        x1 = null
        x2 = null
        operation = null
        current = $("#calc_result")
        calculator = $(".calculator")
        history = $("#history")
        current.val(0)

        $('input').bind('click', function(){
            var btnVal = $(this).val()
            if (_.contains(digitArr, btnVal)){
                handleEnteredDigit(btnVal)
            }else if(_.contains(operationArr, btnVal)){
                handleEnteredOperation(btnVal)
            }else{
                switch(btnVal){
                    case '+/-':
                        signSwitch()
                        break
                    default:
                        reset()
                        break
                }
            }
        })
    })