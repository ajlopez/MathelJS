
function Matrix(options) {
    options = options || {};
    
    var values;
    
    if (options.values) {
        values = options.values.slice();
        
        for (var k = 0; k < values.length; k++)
            values[k] = values[k].slice();
    }
    
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
    
    this.determinant = function () {
        var size = this.nrows();
        if (size != this.ncolumns())
            throw new Error("Matrix is not square");
            
        return values[0][0] * values[1][1] - values[0][1] * values[1][0];
    }
    
    this.add = function (matrix) {
        var nrows = this.nrows();
        var ncols = this.ncolumns();
        var newvalues = [];
        
        for (var nr = 0; nr < nrows; nr++) {
            var newrow = [];
            
            for (var nc = 0; nc < ncols; nc++)
                newrow[nc] = values[nr][nc] + matrix.element(nr, nc);
                
            newvalues.push(newrow);
        }
        
        return new Matrix({ values: newvalues });
    }
    
    this.elements = function () {
        var elems = [];
        
        values.forEach(function (row) {
            elems.push(row.slice());
        });
        
        return elems;
    }
}

Matrix.prototype.isMatrix = function () { return true; }
Matrix.prototype.isVector = function () { return false; }

function createMatrix(options) {
    return new Matrix(options);
}

module.exports = {
    createMatrix: createMatrix
}

