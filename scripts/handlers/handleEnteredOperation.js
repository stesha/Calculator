function handleEnteredOperation (oper)
{
    if(oper != '='){
<<<<<<< HEAD
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
=======
        if (!_.isNull(operation) && !_.isNull(x1) && !_.isNull(x2)){
            calculation();
            x2 = null;
        }
        operation = oper;
    }else if(!_.isNull(x1) && !_.isNull(x2) && !_.isNull(operation)){
        calculation();
        x1 = null;
        x2 = null;
        operation = null;
>>>>>>> origin/master
    }
}
