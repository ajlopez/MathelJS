
var vectors = require('../lib/vectors');

exports['create vector with size'] = function (test) {
    var vector = vectors.createVector({ size: 4 });
    
    test.ok(vector);
    test.equal(typeof vector, "object");
    test.ok(vector.isVector());
    test.equal(vector.size(), 4);
    test.equal(vector.element(0), 0);
    test.equal(vector.element(1), 0);
    test.equal(vector.element(2), 0);
    test.equal(vector.element(3), 0);
    
    test.done();
};

exports['create vector with values'] = function (test) {
    var vector = vectors.createVector({ values: [ 1, 2, 3, 4 ] });
    
    test.ok(vector);
    test.equal(typeof vector, "object");
    test.equal(vector.size(), 4);
    test.equal(vector.element(0), 1);
    test.equal(vector.element(1), 2);
    test.equal(vector.element(2), 3);
    test.equal(vector.element(3), 4);
    
    test.done();
};

exports['create vector with value and size'] = function (test) {
    var vector = vectors.createVector({ value: 3, size: 10 });
    
    test.ok(vector);
    test.equal(typeof vector, 'object');
    test.equal(vector.size(), 10);
    
    for (var k = 0; k < vector.size(); k++)
        test.equal(vector.element(k), 3);
        
    test.done();
};

exports['create vector without options'] = function (test) {
    var vector = vectors.createVector();
    
    test.ok(vector);
    test.equal(typeof vector, 'object');
    test.equal(vector.size(), 0);
    
    test.done();
};

exports['get elements'] = function (test) {
    var values = [ 1, 2, 3, 4 ];
    var vector = vectors.createVector({ values: values });

    values[1] = 2;

    var elements = vector.elements();
    
    test.ok(elements);
    test.ok(Array.isArray(elements));
    test.deepEqual(elements, [ 1, 2, 3, 4 ]);
    
    test.done();
};

