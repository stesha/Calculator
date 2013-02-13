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
