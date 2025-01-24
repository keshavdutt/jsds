// if (!Array.prototype.groupBy) {
//     Array.prototype.groupBy = function(callback) {
//       return this.reduce((acc, val) => {
//         const key = callback(val);
//         if (!acc[key]) {
//           acc[key] = [];
//         }
//         acc[key].push(val);
//         return acc;
//       }, {});
//     };
//   }
  
//   // Usage example
//   const arr = [6.1, 4.2, 6.3];
//   const grouped = arr.groupBy(Math.floor);
//   console.log(grouped);
//   // Output: { '4': [4.2], '6': [6.1, 6.3] }


if(!Array.prototype.groupBy) {
    Array.prototype.groupby = function(callback) {
        return this.reduce((acc, val) => {
            const key = callback(val);
            if(!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(val);
            return acc;
            }, {})
    }
}