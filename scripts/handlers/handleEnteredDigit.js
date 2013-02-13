function handleEnteredDigit (digit)
{
    if(current.val().length == 8) return;
    if(_.isNull(operation)){
        if(current.val() !== '0'){
            x1 = current.val() +digit;
        }else{
            x1 = digit;
        }
        current.val(x1);
    }else{
        if (_.isNull(x1)){
            x1 = current.val();
        }
        if(_.isNull(x2)){
            x2 = digit;
        }else{
            x2 += digit;
        }
        current.val(x2);
    }
}
