requirejs.config({
    paths:{
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min',
        'underscore': 'http://underscorejs.org/underscore'
    },
    urlArgs : "bust="+new Date().getTime()
})
requirejs(['jquery','underscore','baseFunctional'], function($, _, bF){})