function allocateBooks(books, m) {
    const n = books.length;

    // If there are fewer books than students, it's impossible to allocate
    if (n < m) return -1;

    // Helper function to check if allocation is possible
    function isPossible(mid) {
        let studentCount = 1; // Start with one student
        let currentPages = 0;

        for (let pages of books) {
            if (currentPages + pages > mid) {
                // Allocate to the next student
                studentCount++;
                currentPages = pages;

                // If the number of students exceeds `m`, return false
                if (studentCount > m) return false;
            } else {
                currentPages += pages;
            }
        }
        return true;
    }

    // Binary search on the answer
    let low = Math.max(...books); // Maximum pages in a single book
    console.log(low, 'low')
    let high = books.reduce((sum, pages) => sum + pages, 0); // Total pages
    console.log(high, 'high')
    let result = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (isPossible(mid)) {
            result = mid; // Update result
            high = mid - 1; // Try for a smaller value
        } else {
            low = mid + 1; // Try for a larger value
        }
    }

    return result;
}

// Example usage
const books = [12, 34, 67, 90];
const students = 2;
console.log(allocateBooks(books, students)); // Output: 113
