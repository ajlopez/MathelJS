
var matrices = require('../lib/matrices');

exports['create matrix with rows and columns'] = function (test) {
    var matrix = matrices.createMatrix({ rows: 3, columns: 4 });
    
    test.ok(matrix);
    test.equal(typeof matrix, 'object');
    test.equal(matrix.nrows(), 3);
    test.equal(matrix.ncolumns(), 4);
    
    for (var k = 0; k < 3; k++)
        for (var j = 0; j < 4; j++)
            test.equal(matrix.element(k, j), 0);
    
    test.done();
};

exports['create matrix with values'] = function (test) {
    var matrix = matrices.createMatrix({ values: [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] });
    
    test.ok(matrix);
    test.equal(typeof matrix, 'object');
    test.equal(matrix.nrows(), 2);
    test.equal(matrix.ncolumns(), 3);
    
    var value = 1;
    
    for (var k = 0; k < matrix.nrows(); k++)
        for (var j = 0; j < matrix.ncolumns(); j++) {
            test.equal(matrix.element(k, j), value);
            value++;
        }
    
    test.done();
};

exports['create matrix without options'] = function (test) {
    var matrix = matrices.createMatrix();
    
    test.ok(matrix);
    test.equal(typeof matrix, 'object');
    test.equal(matrix.nrows(), 0);
    test.equal(matrix.ncolumns(), 0);
    
    test.done();
};

exports['get undefined values as zero'] = function (test) {
    var matrix = matrices.createMatrix({ values: [ [ 1, 2, 3], [ 4, 5, 6 ] ] });
    
    test.strictEqual(matrix.element(-1, 1), 0);
    test.strictEqual(matrix.element(-2, -3), 0);
    test.strictEqual(matrix.element(1, -2), 0);
    test.strictEqual(matrix.element(4, 1), 0);
    test.strictEqual(matrix.element(1, 10), 0);
    test.strictEqual(matrix.element(20, 30), 0);
    
    test.done();
};

exports['get simple determinant'] = function (test) {
    var matrix = matrices.createMatrix({ values: [ [ 2, 3 ], [ 4, 5 ] ] });
    
    test.equal(matrix.determinant(), -2);
    test.done();
};

exports['throws for determinant when matrix is not square'] = function (test) {
    test.throws(
        function () { matrices.createMatrix({ rows: 2, columns: 3 }).determinant() },
        "Matrix is not square"
    );
    test.done();
};

exports['simple add'] = function (test) {
    var matrix1 = matrices.createMatrix({ values: [ [ 2, 3 ], [ 4, 5 ] ] });
    var matrix2 = matrices.createMatrix({ values: [ [ 1, 2 ], [ -1, -3 ] ] });
    
    var matrix = matrix1.add(matrix2);
    
    test.ok(matrix);
    test.deepEqual(matrix.elements(), [ [ 3, 5 ], [ 3, 2 ] ]);
    
    test.done();
};

exports['simple subtract'] = function (test) {
    var matrix1 = matrices.createMatrix({ values: [ [ 2, 3 ], [ 4, 5 ] ] });
    var matrix2 = matrices.createMatrix({ values: [ [ 1, 2 ], [ -1, -3 ] ] });
    
    var matrix = matrix1.subtract(matrix2);
    
    test.ok(matrix);
    test.deepEqual(matrix.elements(), [ [ 1, 1 ], [ 5, 8 ] ]);
    
    test.done();
};

exports['negate'] = function (test) {
    var matrix = matrices.createMatrix({ values: [ [ 2, 3 ], [ 4, 5 ] ] });
    
    var result = matrix.negate();
    
    test.ok(result);
    test.deepEqual(result.elements(), [ [ -2, -3 ], [ -4, -5 ] ]);
    
    test.done();
};

exports['traspose'] = function (test) {
    var matrix = matrices.createMatrix({ values: [ [ 2, 3, 4 ], [ 4, 5, 6 ] ] });
    
    var result = matrix.traspose();
    
    test.ok(result);
    test.deepEqual(result.elements(), [ [ 2, 4 ], [ 3, 5 ], [ 4, 6 ] ]);
    
    test.done();
};
