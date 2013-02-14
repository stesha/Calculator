function signSwitch ()
{
    if(!_.isNull(x1) && _.isNull(operation) && x1 !== 0){
        x1 *= -1
        current.val(x1)
    }else if(!_.isNull(operation) && !_.isNull(x2) && x2 !== 0){
        x2 *= -1
        current.val(x2)
    }else if(_.isNull(x1) && current.val() !== 0){
        x1 = -1*current.val()
        current.val(x1)
    }
}
