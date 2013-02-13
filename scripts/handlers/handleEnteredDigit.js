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
