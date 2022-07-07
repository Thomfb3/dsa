describe("Comment Tree Maker function", function () {
    // create list of comments
    let comment1 = new Comment(1, null);
    let comment2 = new Comment(2, null);
    let comment3 = new Comment(3, null);
    let comment4 = new Comment(4, 1);
    let comment5 = new Comment(5, 1);
    let comment6 = new Comment(6, 5);

    const comments = [comment1, comment2, comment3, comment4, comment5, comment6];

    const treeNodes = createCommentTree(comments);

    it("should create an array of tree nodes with length of 6", function () {
        expect(treeNodes.length).toBe(3);
    });
    it("should creare the right first node", function () {
        expect(treeNodes[0].children.length).toBe(2);
        expect(treeNodes[0].commentId).toBe(1);
    });

});


describe("Comment Tree Printer function", function () {
    // create list of comments
    it("should accept an array of Comment Tree Nodes and print them", function () {

        let comment1 = new Comment(1, null);
        let comment2 = new Comment(2, null);
        let comment3 = new Comment(3, null);
        let comment4 = new Comment(4, 1);
        let comment5 = new Comment(5, 1);
        let comment6 = new Comment(6, 5);

        const comments = [comment1, comment2, comment3, comment4, comment5, comment6];

        const treeNodes = createCommentTree(comments);
        let printedTree = printCommentTree(treeNodes, 0, "");

        let sampleOutput = "1\n\t4\n\t5\n\t\t6\n2\n3";

        function remove_linebreaks(str) {
            return str.replace(/[\r\n]+/gm, "");
        }

        sampleOutput = remove_linebreaks(sampleOutput)
        printedTree = remove_linebreaks(printedTree)

        expect(printedTree).toBe(sampleOutput);
    });

});


