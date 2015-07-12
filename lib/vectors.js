
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
    
    this.element = function (n) { var element = values[n]; return element == null ? 0 : element; };
    
    this.elements = function () { return values.slice(); };
    
    this.innerProduct = function (vector) {
        var size = values.length;
        
        var newvalues = [];
        
        for (var k = 0; k < size; k++)
            newvalues[k] = values[k] * vector.element(k);
            
        return new Vector({ values: newvalues });
    }
}

Vector.prototype.isVector = function () { return true; };
Vector.prototype.isMatrix = function () { return false; };

function createVector(options) {
    return new Vector(options);
}

module.exports = {
    createVector: createVector
}

