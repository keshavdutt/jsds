class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

class Codec {
  // Serializes a tree to a single string.
  serialize(root) {
    if (!root) return '';

    const queue = [root];
    const result = [];

    while (queue.length > 0) {
      const node = queue.shift();
      
      if (node) {
        result.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      } else {
        result.push('null');
      }
    }

    return result.join(',');
  }

  // Deserializes your encoded data to tree.
  deserialize(data) {
    if (!data) return null;

    const values = data.split(',');
    const root = new TreeNode(parseInt(values[0]));
    const queue = [root];
    let i = 1;

    while (queue.length > 0 && i < values.length) {
      const node = queue.shift();
      
      if (values[i] !== 'null') {
        node.left = new TreeNode(parseInt(values[i]));
        queue.push(node.left);
      }
      i++;

      if (i < values.length && values[i] !== 'null') {
        node.right = new TreeNode(parseInt(values[i]));
        queue.push(node.right);
      }
      i++;
    }

    return root;
  }
}

// Example usage:
const codec = new Codec();
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);

const serializedData = codec.serialize(root);
console.log('Serialized:', serializedData);  // Output: "1,2,3,null,null,4,5"
const deserializedTree = codec.deserialize(serializedData);
console.log('Deserialized:', deserializedTree);
