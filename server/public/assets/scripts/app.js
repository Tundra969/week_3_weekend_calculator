var equation = {};

$(document).ready(function(){
    $("#calculator").submit(function(event){
        event.preventDefault()
    });

    enable();

});

function enable(){
    $("#operatorButtons").on('click', '.btn',  addObjectMathOperation);
    $("#equalButton").on('click', doMath);
    $("#clearButton").on('click', clear);
}

function addObjectMathOperation(){
        var mathOperation = event.target.id;
        equation.mathOperation = mathOperation;
        console.log(mathOperation);
}

function doMath() {

    $.each($("#inputForm").serializeArray(), function (i, field) {
        equation[field.name] = field.value;
    });

    $("#inputForm").find("input[type=text]").val("");

    ajaxCall();
}


function ajaxCall(){
    $.ajax({
        type:"POST",
        url: "/data",
        data:equation,
        beforeSend: function(){
            console.log("HERE IS THE DATA: ", equation);
        },
        success: function(data){
            console.log("this is data back from server:", data);
            appendResults(data);
        }
    })
}

function appendResults(data){
    $("#answer").append("<div class='answer'>" + data.message + "</div>");
}

function clear(){
    $("#calculator").empty();
    equation = {};
}
