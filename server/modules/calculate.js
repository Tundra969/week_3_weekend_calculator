
var calculate = function(object) {

    var result;

    switch (object.mathOperation) {
        case "plus":
            result = parseInt(object.xInput) + parseInt(object.yInput);
            break;
        case "minus":
            result = parseInt(object.xInput) - parseInt(object.yInput);
            break;
        case "times":
            result = parseInt(object.xInput) * parseInt(object.yInput);
            break;
        case "divide":
            result = parseInt(object.xInput) / parseInt(object.yInput);
            break;
        default:
            result = "Try again";
    }
    return result;
};

module.exports = calculate;