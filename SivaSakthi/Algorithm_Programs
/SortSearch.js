const Utility = require('../Utility/Utility');
const readline = require('readline-sync');


function search() {
    console.log("Enter 1 for BINARY SEARCH");
    console.log("Enter 2 for BinarySearch Method For String");
    console.log("Enter 3 for Insertion Sort ");
    console.log("Enter 4 for Insertion Sort for String ");
    console.log("Enter 5 for  bubble Sort ");
    console.log("Enter 6 for  bubble Sort for String ");

    var n = readline.question("Enter Your choice ");
    var n1 = Math.floor(n);
    switch (n1) {
        case 1: {
            var start = Utility.gettime();
            var arr = [];
            var arr = Utility.arrayinput(arr);
            console.log("Your array is " + arr);
            var s = readline.question("Enter your Search Element ");
            var b = Utility.Binarysearch(arr, s);

            if (b == -1) {
                console.log("Your number is not Present ");
            }
            else {
                console.log("Your number is in " + b + " index");
            }
            var stop = Utility.gettime();
            var ftime = Math.floor((stop - start) / 1000);
            console.log("time taken for this process is " + ftime + " seconds");
            break;
        }
        case 2: {
            var start = Utility.gettime();
            var arr = [];
            var arr = Utility.ArrayInputString(arr);
            console.log("Your Array is " + arr);
            var s = readline.question("Enter your Search Array ");
            var b = Utility.Binarysearchstr(arr, s);
            if (b == -1) {
                console.log("Your String is not Present ");
            }
            else {
                console.log("Your String is in " + b + " index");
            }
            var stop = Utility.gettime();
            var ftime = Math.floor((stop - start) / 1000);
            console.log("time taken for this process is " + ftime + " seconds");
            break;

        }
        case 3: {
            var start = Utility.gettime();
            var arr = [];
            var arr = Utility.arrayinput(arr);
            console.log("your Array before " + arr);

            var b = Utility.Insertionsort(arr);
            console.log("After sorting  ");
            console.log(b);
            var stop = Utility.gettime();
            var ftime = Math.floor((stop - start) / 1000);
            console.log("time taken for this process is " + ftime + " seconds");
            break;
        }
        case 4: {
            var start = Utility.gettime();
            var arr = [];
            var arr = Utility.ArrayInputString(arr);
            console.log(" Your Array before Sort " + arr);

            var b = Utility.Insertionsort(arr);
            console.log("After sorting  ");
            console.log(b);
            var stop = Utility.gettime();
            var ftime = Math.floor((stop - start) / 1000);
            console.log("time taken for this process is " + ftime + " seconds");
            break;
        }
        case 5: {
            var start = Utility.gettime();
            var arr = [];
            var arr = Utility.arrayinput(arr);
            console.log(" Your Array before Sort " + arr);

            var b = Utility.BubbleSor(arr);
            console.log("After sorting  ");
            console.log(b);
            var stop = Utility.gettime();
            var ftime = Math.floor((stop - start) / 1000);
            console.log("time taken for this process is " + ftime + " seconds");
            break;

        }
        case 6: {
            var start = Utility.gettime();
            var arr = [];
            var arr = Utility.ArrayInputString(arr);
            console.log(" Your Array before Sort " + arr);

            var b = Utility.BubbleSor(arr);
            console.log("After sorting  ");
            console.log(b);
            var stop = Utility.gettime();
            var ftime = Math.floor((stop - start) / 1000);
            console.log("time taken for this process is " + ftime + " seconds");
            break;
        }

    }
}
search();