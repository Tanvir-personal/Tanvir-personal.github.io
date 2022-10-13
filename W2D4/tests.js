
describe("String filter", function () {
    it("returns \'hello world\' from \'hello not world\' banned - \'not\'", () => {
        assert.equal(("hello not world").filter("not"), "hello  world");
    });
    it("returns \'hello world\' from \'hello world\' banned - \'\'", () => {
        assert.equal(("hello world").filter(""), "hello world");
    });
    it("returns \'\' from \'hello world\' banned - \'hello world\'", () => {
        assert.equal(("").filter("hello world"), "");
    });
});

describe("Array bubble sort", function () {
    it("returns [-9, 0, 1, 2, 4, 8] after sorting array [2, 4, 1, -9, 8, 0]", () => {
        assert.deepEqual(([2,4,1,-9,8,0]).bubbleSort(), [-9,0,1,2,4,8]);
    });
    it("returns [-1, 0, 1, 1, 1, 6] after sorting array [1, 0, -1, 6, 1, 1]", () => {
        assert.deepEqual(([1,0,-1,6,1,1]).bubbleSort(), [-1,0,1,1,1,6]);
    });
});

describe("Teacher inherits from Person", function () {
    it("Teacher has a method teach() that retuns \'Peter is now teaching math\'", () => {
        
        const t = new Teacher();
        t.initialize('Peter', 55);
        // console.log(t.teach('math'));
        assert.equal(t.teach('math'), "Peter is now teaching math");
    });

    it("Another teacher is created by Teacher constructor function. Returns \'Scott is now teaching science\'", () => {
        
        const t = new Teacher();
        t.initialize('Scott', 45);
        assert.equal(t.teach('science'), "Scott is now teaching science");
    });
});