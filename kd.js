const txt = "forxxorfxdofr";
const pat = "for";
console.log(countAnagrams(txt, pat)); // Output: 3


function countAnagrams(txt, pat) {
    const n = txt.length;
    const m = pat.length;

    if (m > n) return 0;

    const countPat = new Array(26).fill(0);
    const countWindow = new Array(26).fill(0);


    // frequency of the array pattern
    for (let i = 0; i < pat.length; i++) {
        countPat[pat.charCodeAt(i) - 'a'.charCodeAt(0)]++
    }

    let result = 0;

    // frequency of the array pattern
    for (let i = 0; i < m; i++) {
        countWindow[txt.charCodeAt(i) - 'a'.charCodeAt(0)]++
    }

    if (areCountsEqual(countPat, countWindow)) {
        result++;
    }

    for (let i = m; i < txt.length; i++) {
        // add the new character from right
        countWindow[txt.charCodeAt(i) - 'a'.charCodeAt(0)]++
        // remove the character from the starting of the widow
        countWindow[txt.charCodeAt(i - m) - 'a'.charCodeAt(0)]--

        if (areCountsEqual(countPat, countWindow)) {
            result++;
        }
    }


    return result




}


// Helper function to compare two frequency arrays
function areCountsEqual(countPat, countWindow) {
    for (let i = 0; i < 26; i++) {
        if (countPat[i] !== countWindow[i]) {
            return false;
        }
    }
    return true;
}
