(function () {

    var pag1 = $('#pagination');
    pag1.twbsPagination({
        totalPages: 30
    });

    test("Test 'equals' method", function () {
        var a1 = [5, 4, 5, 8, 7, 9, 1, 70];
        var a2 = [5, 4, 5, 8, 7, 9, 1, 70];
        var b = [1, 4, 8];
        var real = [1, 4, 8, 9, 0, undefined, 5000];
        ok(pag1.twbsPagination('equals', a1, a1), "Check the same array");
        ok(pag1.twbsPagination('equals', a1, a2), "Check separate equals array");
        ok(!pag1.twbsPagination('equals', a1, b), "Check not equal array");
        ok(!pag1.twbsPagination('equals', b, real), "Dirty test");
    });

    test( "Test 'getPages' method (EVEN visible pages number)", function() {
        var expected1 = {currentPage: 1, numeric: [1, 2, 3, 4, 5]};
        deepEqual(pag1.twbsPagination('getPages', 1), expected1);
        var expected2 = {currentPage: 2, numeric: [1, 2, 3, 4, 5]};
        deepEqual(pag1.twbsPagination('getPages', 2), expected2);
        var expected3 = {currentPage: 3, numeric: [1, 2, 3, 4, 5]};
        deepEqual(pag1.twbsPagination('getPages', 3), expected3);

        var expected4 = {currentPage: 4, numeric: [2, 3, 4, 5, 6]};
        deepEqual(pag1.twbsPagination('getPages', 4), expected4);
        var expected5 = {currentPage: 5, numeric: [3, 4, 5, 6, 7]};
        deepEqual(pag1.twbsPagination('getPages', 5), expected5);
        var expected20 = {currentPage: 20, numeric: [18, 19, 20, 21, 22]};
        deepEqual(pag1.twbsPagination('getPages', 20), expected20);

        var expected27 = {currentPage: 27, numeric: [25, 26, 27, 28, 29]};
        deepEqual(pag1.twbsPagination('getPages', 27), expected27);
        var expected28 = {currentPage: 28, numeric: [26, 27, 28, 29, 30]};
        deepEqual(pag1.twbsPagination('getPages', 28), expected28);
        var expected29 = {currentPage: 29, numeric: [26, 27, 28, 29, 30]};
        deepEqual(pag1.twbsPagination('getPages', 29), expected29);
        var expected30 = {currentPage: 30, numeric: [26, 27, 28, 29, 30]};
        deepEqual(pag1.twbsPagination('getPages', 30), expected30);
    });

    test( "Test 'getPages' method (ODD visible pages number)", function() {
        pag1.twbsPagination('init', {totalPages: 30, visiblePages: 6});
        var expected1 = {currentPage: 1, numeric: [1, 2, 3, 4, 5, 6]};
        deepEqual(pag1.twbsPagination('getPages', 1), expected1);
        var expected2 = {currentPage: 2, numeric: [1, 2, 3, 4, 5, 6]};
        deepEqual(pag1.twbsPagination('getPages', 2), expected2);
        var expected3 = {currentPage: 3, numeric: [1, 2, 3, 4, 5, 6]};
        deepEqual(pag1.twbsPagination('getPages', 3), expected3);

        var expected4 = {currentPage: 4, numeric: [2, 3, 4, 5, 6, 7]};
        deepEqual(pag1.twbsPagination('getPages', 4), expected4);
        var expected5 = {currentPage: 5, numeric: [3, 4, 5, 6, 7, 8]};
        deepEqual(pag1.twbsPagination('getPages', 5), expected5);
        var expected20 = {currentPage: 20, numeric: [18, 19, 20, 21, 22, 23]};
        deepEqual(pag1.twbsPagination('getPages', 20), expected20);

        var expected27 = {currentPage: 27, numeric: [25, 26, 27, 28, 29, 30]};
        deepEqual(pag1.twbsPagination('getPages', 27), expected27);
        var expected28 = {currentPage: 28, numeric: [25, 26, 27, 28, 29, 30]};
        deepEqual(pag1.twbsPagination('getPages', 28), expected28);
        var expected29 = {currentPage: 29, numeric: [25, 26, 27, 28, 29, 30]};
        deepEqual(pag1.twbsPagination('getPages', 29), expected29);
        var expected30 = {currentPage: 30, numeric: [25, 26, 27, 28, 29, 30]};
        deepEqual(pag1.twbsPagination('getPages', 30), expected30);
    });

})();