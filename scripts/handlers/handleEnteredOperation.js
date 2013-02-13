function handleEnteredOperation (oper)
{
    if(oper != '='){
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
    }
}
