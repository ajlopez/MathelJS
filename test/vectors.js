
var vectors = require('../lib/vectors');

exports['create vector with size'] = function (test) {
    var vector = vectors.createVector({ size: 4 });
    
    test.ok(vector);
    test.equal(typeof vector, "object");
    test.ok(vector.isVector());
    test.ok(!vector.isMatrix());
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

exports['simple inner product'] = function (test) {
    var values1 = [ 1, 2, 3 ];
    var values2 = [ 2, 3, 4 ];
    
    var vector1 = vectors.createVector({ values: values1 });
    var vector2 = vectors.createVector({ values: values2 });
    
    var result = vector1.innerProduct(vector2);
    
    test.ok(result);
    test.equal(typeof result, 'object');
    test.ok(result.isVector());
    test.equal(result.size(), 3);
    test.deepEqual(result.elements(), [ 2, 6, 12 ]);
    
    test.done();
}

exports['simple add'] = function (test) {
    var values1 = [ 1, 2, 3 ];
    var values2 = [ 2, 3, 4 ];
    
    var vector1 = vectors.createVector({ values: values1 });
    var vector2 = vectors.createVector({ values: values2 });
    
    var result = vector1.add(vector2);
    
    test.ok(result);
    test.equal(typeof result, 'object');
    test.ok(result.isVector());
    test.equal(result.size(), 3);
    test.deepEqual(result.elements(), [ 3, 5, 7 ]);
    
    test.done();
}

exports['simple subtract'] = function (test) {
    var values1 = [ 1, 2, 3 ];
    var values2 = [ 2, 3, 4 ];
    
    var vector1 = vectors.createVector({ values: values1 });
    var vector2 = vectors.createVector({ values: values2 });
    
    var result = vector1.subtract(vector2);
    
    test.ok(result);
    test.equal(typeof result, 'object');
    test.ok(result.isVector());
    test.equal(result.size(), 3);
    test.deepEqual(result.elements(), [ -1, -1, -1 ]);
    
    test.done();
}

exports['negate'] = function (test) {
    var values1 = [ 1, 2, 3 ];
    var values2 = [ 2, 3, 4 ];
    
    var vector = vectors.createVector({ values: [ 2, 3, 4 ] });
    
    var result = vector.negate();
    
    test.ok(result);
    test.equal(typeof result, 'object');
    test.ok(result.isVector());
    test.equal(result.size(), 3);
    test.deepEqual(result.elements(), [ -2, -3, -4 ]);
    
    test.done();
}

exports['get undefined value as zero'] = function (test) {
    var vector = vectors.createVector({ values: [ 1, 2, 3 ] });
    
    test.strictEqual(vector.element(3), 0);
    test.strictEqual(vector.element(-1), 0);
    
    test.done();
}