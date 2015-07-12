
function Matrix(options) {
    options = options || {};
    
    var values;
    
    if (options.values)
        values = options.values;
    
    if (options.rows && options.columns && !values) {
        values = [];
        
        for (var k = 0; k < options.rows; k++) {
            var row = [];
            
            for (var j = 0; j < options.columns; j++)
                row[j] = 0;
                
            values.push(row);
        }
    }   
    
    this.nrows = function () {
        if (!values)
            return 0;
            
        return values.length;
    };
    
    this.ncolumns = function () {
        if (!values)
            return 0;
            
        return values[0].length;
    };
    
    this.element = function (r, c) { 
        if (!values) return 0;
        var row = values[r];
        if (!row) return 0;
        var element = values[r][c]; 
        return element == null ? 0 : element;
    };
}

Matrix.prototype.isMatrix = function () { return true; }
Matrix.prototype.isVector = function () { return false; }

function createMatrix(options) {
    return new Matrix(options);
}

module.exports = {
    createMatrix: createMatrix
}

