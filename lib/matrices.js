
function Matrix(options) {
    var values;
    
    if (options.rows && options.columns) {
        values = [];
        
        for (var k = 0; k < options.rows; k++) {
            var row = [];
            
            for (var j = 0; j < options.columns; j++)
                row[j] = 0;
                
            values.push(row);
        }
    }   
    
    this.nrows = function () {
        return values.length;
    }
    
    this.ncolumns = function () {
        return values[0].length;
    }
    
    this.element = function (r, c) { return values[r][c]; }
}

Matrix.prototype.isMatrix = function () { return true; }
Matrix.prototype.isVector = function () { return false; }

function createMatrix(options) {
    return new Matrix(options);
}

module.exports = {
    createMatrix: createMatrix
}