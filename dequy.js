




// function loop(start, end, cb) {
//     if (start <= end) {
//         cb(start);
//         loop(start + 1, end, cb);

//     }
// }


// var course = ["JS", "Net", "PHP"];

// loop(0, course.length - 1, function (index) {
//     console.log(course[index]);
// })


function factical(num) {
    var total = 1;
    if (num != 1) {
        total = num * factical(num - 1);

    }
    return total
}

console.log(factical(3));


<i class="fas fa-h2    "></i>