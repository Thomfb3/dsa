class Comment {
    constructor(id, parentId) {
        this.id = id;
        this.parentId = parentId || null;
    };
};

class CommentTreeNode {
    constructor(commentId, parent) {
        this.commentId = commentId;
        this.parent = parent;
        this.children = [];
    };
};


//function to create tree
const createCommentTree = (comments) => {
    const hash = {}
    const commentTreeNodes = [];

    for (const comment of comments) {
        let node = new CommentTreeNode(comment.id, null);
        if (!hash[node.commentId]) hash[comment.id] = node;
    }

    for (const comment of comments) {
        let node = hash[comment.id];
        let parent = comment.parentId !== null ? hash[comment.parentId] : null;
        node.parent = parent;
        if (!parent) {
            commentTreeNodes.push(node);
        } else {
            parent.children.push(node);
        }
    }
    return commentTreeNodes;
}

//function to print tree
const printCommentTree = (commentTreeNodes) => {
    let output = "";
    const printCommentTreeHelper = (commentTreeNodes, indents) => {
        for (const node of commentTreeNodes) {
            output += `${"\t".repeat(indents)}${node.commentId}\n`;
            if (node.children.length > 0) {
                printCommentTreeHelper(node.children, indents + 1, output)
            }
        }
    }
    printCommentTreeHelper(commentTreeNodes, 0)
    return output;
}





// 1 
//     4
//     5
//         6           
// 2
// 3





