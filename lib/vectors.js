
function Vector(options) {
    options = options || {};
    var values;
    
    if (options.values)
        values = options.values.slice();
        
    if (options.size && values == null) {
        values = [];
        var value = 0;
        
        if (options.value != null)
            value = options.value;
            
        for (var k = 0; k < options.size; k++)
            values[k] = value;
    }
    
    if (!values)
        values = [];
    
    this.size = function() { return values.length; };
    
    this.element = function (n) { return values[n]; };
}

Vector.prototype.isVector = function () { return true; };

function createVector(options) {
    return new Vector(options);
}

module.exports = {
    createVector: createVector
}