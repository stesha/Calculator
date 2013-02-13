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
