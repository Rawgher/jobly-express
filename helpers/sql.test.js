const { sqlForPartialUpdate } = require('./sql');

describe('sqlForPartialUpdate', () => {
    test("works: add 1 item", () => {
        const res = sqlForPartialUpdate(
            { f1: 'v1' },
            { f1: 'f1', f2: 'f2' }
        );
        expect(res).toEqual({
            setCols: "\"f1\"=$1",
            values: ["v1"],
        });
    });

    test("works: adds 2 items", function () {
        const result = sqlForPartialUpdate(
            { f1: "v1", f2: "v2" },
            { f2: "f2" }
        );
        expect(result).toEqual({
          setCols: "\"f1\"=$1, \"f2\"=$2",
          values: ["v1", "v2"],
        });
    });
});