
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