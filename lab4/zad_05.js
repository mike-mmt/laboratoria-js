'use strict';

function f1(){
    console.log('asd');
}

function f2(passed_function) {
    passed_function()
}

f2(f1)
// https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
