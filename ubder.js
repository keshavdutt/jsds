Uber Questions

1. select animation for song name when song name and song length is given

function findMatchingAnimations(songs, animations) {
const result = {};

```
// Parse animations into objects with name and length
const parsedAnimations = animations.map((animation, index) => {
    const [name, length] = animation.split(':');
    return { name, length: parseInt(length), index };
});

// Sort animations by length in descending order for optimization
parsedAnimations.sort((a, b) => b.length - a.length);

// Iterate through each song
for (const song of songs) {
    const [songName, songLength] = song.split(':');
    const length = parseInt(songLength);
    let matchedAnimation = null;

    // Find compatible animation for the current song
    for (const animation of parsedAnimations) {
        if (length % animation.length === 0) {
            matchedAnimation = animation;
            break;
        }
    }

    // Select animation with the lowest index if multiple animations fit
    if (matchedAnimation) {
        result[songName] = matchedAnimation.name;
    }
}

return result;

```

}

// Example usage:
const songs = ['song1:120', 'song2:180', 'song3:150'];
const animations = ['animation1:60', 'animation2:30', 'animation3:90', 'animation4:20'];

const matchingAnimations = findMatchingAnimations(songs, animations);
console.log(matchingAnimations);

1. found the given word in a 2 d matrix

function searchWord(matrix, word) {
const rows = matrix.length;
const cols = matrix[0].length;
const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // Possible directions: up, down, left, right

```
function dfs(row, col, index) {
    if (index === word.length) {
        return true; // Word found
    }

    if (row < 0 || row >= rows || col < 0 || col >= cols || matrix[row][col] !== word[index]) {
        return false; // Out of bounds or mismatch
    }

    const temp = matrix[row][col]; // Temporarily mark the cell as visited
    matrix[row][col] = '#';

    let found = false;
    for (const [dx, dy] of directions) {
        found = found || dfs(row + dx, col + dy, index + 1); // Recursive call in all possible directions
    }

    matrix[row][col] = temp; // Restore the cell

    return found;
}

// Iterate through each cell in the matrix and start DFS if the character matches the first character of the word
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        if (matrix[i][j] === word[0]) {
            if (dfs(i, j, 0)) {
                return true; // Word found starting from this position
            }
        }
    }
}

return false; // Word not found

```

}

// Example usage:
const matrix = [
['A', 'B', 'C', 'E'],
['S', 'F', 'C', 'S'],
['A', 'D', 'E', 'E']
];

const words = ['ABCCED', 'SEE', 'ABCB', 'ASFC']; // Words to search

for (const word of words) {
const exists = searchWord(matrix, word);
console.log(`The word "${word}" ${exists ? 'exists' : 'does not exist'} in the matrix.`);
}

1. given two string s and t. check every t[i] comes after a[i]

function isNextCharacter(s, t) {
if (s.length !== t.length) {
return false; // If lengths are different, return false
}

```
for (let i = 0; i < s.length; i++) {
    // Calculate the ASCII difference between characters
    let diff = t.charCodeAt(i) - s.charCodeAt(i);
    // Adjust the difference if it's negative or if the next character is 'a' after 'z'
    if (diff !== 1 && !(diff === -(26 - 1))) {
        return false; // If the difference is not 1 or the wrapping case, return false
    }
}

return true; // If all characters satisfy the condition, return true

```

}

// Example usage:
const s = 'abyz';
const t = 'bczb';
console.log(isNextCharacter(s, t)); // Output: true