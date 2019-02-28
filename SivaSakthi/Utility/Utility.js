/******************************************************************************
 *  Execution       :   1. default node         cmd> node Utility.js 
 *                      
 * 
 *  Purpose         : TO deploy all the busness logic.
 * 
 *  @description    
 * 
 *  @file           : Utility.js
 *  @overview       : ALl the business logic bus be here.
 *  @module         : read-line modules are installed
 *  @author         : SIVASAKTHI
 *  @version        : 10.0
 *  @since          : 06-01-2019
 *
 ******************************************************************************/

const readf = require('fs');
const readline = require('readline-sync');
module.exports = {

    /**
         *@purpose : To generate the Array 
         *@description : this method is used to generate the number array of user choice elements
                        and return the resultant array
         * @param {empty array } arr 
     */
    arrayinput(arr) {
        var n = readline.question("Enter the size of the array ");

        for (var i = 0; i < n; i++) {

            arr[i] = Number(readline.question(''));

        }
        return arr;
    },
    /**
     * @description:This method is used to read the input from the file.
     */
    readfile() {
        var f = readf.readFileSync('text.txt', 'utf8');
        return f;
    },
    /**
     * @description:This method is used to read the input from the file.
     */
    readfile1() {
        var f = readf.readFileSync('numbers.txt', 'utf8');
        return f;
    },
    /**
  * @description:This method is used to Write the data from the file.
  */
    Writefile(filename, data) {

        readf.writeFile(filename, data, (err) => {


            if (err) {// in cae of file Writing it show any error it show throw message
                console.log("ERROR : can't read your file " + err);

            }

        })
    },
    /**
     * @purpose : To generate the StringArray 
     * @description : this method is used to generate the Stringarray of user choice elements
                        and return the resultant array
     * @param {empty Array} arr 
     */
    ArrayInputString(arr) {
        var n = readline.question("Enter the Size of the array ");

        for (var i = 0; i < n; i++) {

            arr[i] = readline.question("");
        }

        return arr;

    },
    /**
     * @description :This array is get input from the user 
     * @param {Array} arr 
     * @param {number} read 
     * @returns{array} arr
     */
    Arrayread(arr, read) {
        console.log("Enter " + read + " element");
        for (var i = 0; i < read; i++) {
            arr[i] = readline.question("");

            if (isNaN(arr[i])) {
                console.log("ENter the Number value..");

            }
        }
        return arr;
    },


    /**
     * @purpose : TO replace the String
     * @description: this method is used for string replaec the perticulate place;
     * @param {replace String} user 
     */
    replace(user) {
        if (user.length >= 3) {
            console.log("Hello " + user + ", How are you?");
        }
        else {
            console.log('plz enter the charactor above 3 charactor');
        }
    },
    /**
     * @purpose :To find How many time flip the coin
     * @description:this method is used to find the percentage of fliping the coins
     * @param {fliptime} f 
     */
    flip(f) {
        var head = 0, tail = 0;
        for (var i = 0; i < f; i++) {
            readline.question("plz enter any key to flip the coin ");
            var rn = Math.floor(Math.random() * 2);


            if (rn == 1) {
                head++;
                console.log(rn);
            }
            else {
                tail++;
                console.log(rn);
            }


        }
        console.log("Time of head is " + head);
        console.log("Time of tail is " + tail);

        var tails = (tail * 100) / f;
        var heads = (head * 100) / f;
        console.log(" percentage of Tail " + tails + "%");
        console.log(" percentage of Head " + heads + "%");

    },

    /**
 * @ purpuse:To find leap year
 * @description: This method is used to Find the leap year..
 * @param {year in number} year 
 */
    leapyear(year) {

        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {

            console.log(year + " is leap year");

        }
        else {
            console.log(year + " is not leapyear");
        }

    },
    p(n) {

        for (var i = 0; i <= n; i++) {
            var mul = Math.pow(2, i);
            console.log(" power of 2 is  " + mul);
        }
    },
    /**
     * @purpose : To find hormonic
     * @description :This method is used to find the hormonic number.
     * @param {number} n 
     */
    hormonic(n) {
        var sum = 0;
        for (var i = 1; i <= n; i++) {

            sum = sum + 1 / i;
        }
        console.log("Your Harmonic value is " + sum);
    },

    /**
     * @purpose :to find primefactor.
     * @description :This method is used to find the Primefactor.. 
     * @param { number} n 
     */
    PrimeFactor(n) {

        for (var i = 2; i <= n; i++) {

            while (n % i == 0) {
                console.log(i);
                n = n / i;
            }

        }
        if (n < 2) {
            console.log(n);
        }
    },
    /**
     * @ purpose :to play gambler.
     * @description: This method is used to play the gambler game..
     * @param {goal amount} goal 
     */
    gambler(goal) {


        var win = 0;
        var loose = 0;
        var toss = 0;
        var amount = 0;

        while (amount < goal) {
            toss++;

            var b = readline.question("Enter your betting number 1 to 6");

            readline.question("press any key to toss");
            var r = Math.floor(Math.random() * 6 + 1);// to generate the random number........ 
            console.log(r);
            if (b == r) {
                win++;
                amount = amount + r;
                console.log("Your amount " + amount);
                if (amount > goal) {
                    amount = amount - r;
                    console.log("Your amount is still " + amount);
                }
            }
            else {
                loose++;
                console.log(amount);
            }
        }

        var pw = (win * 100) / toss;
        var pl = (loose * 100 / toss);


        console.log("win percentage out of toss is " + pw);
        console.log("loose percentage out of toss " + pl);

        // show  user to all the values 
        console.log("win==========>" + win);
        console.log("loose========>" + loose);
        console.log("amount========>" + amount);
        console.log("toss===========>" + toss);

    },
    /**
     * @purpose :To generate copun code..
     * @description :This method is used To generate the coupon number..
     * @param {coupon digit} c 
     */
    copun(c) {

        var ar = [];

        for (var i = 0; i < c; i++) {
            ar[i] = Math.floor(Math.random() * 9 + 1);
            for (var j = 0; j < i; j++) {
                if (ar[i] == ar[j]) {
                    i--;
                }
            }

        }
        for (var index = 0; index < c; index++) {
            console.log(ar[index]);

        }
    },
    /**
     * @ purpose : to get 2d array from the user
     * @description :To read 2D array from the user..
     * @param {arry} arr 
     * @param {rows} row 
     * @param {columns} col 
     */
    ReadTwoDarry(arr, row, col) {
        // var arr = [[], [],[]];
        //var arr=[];
        console.log("Enter elements ");
        //to generate the multi-dimensional array
        for (let index = 0; index < row; index++) {
            arr.push([]);
            // adding elements by elements in generated array
            for (let index2 = 0; index2 < col; index2++) {
                arr[index][index2] = readline.question('');
            }
        }
        return arr;
    },
    /**
      * @ purpose : to get 2d array from the user
      * @description :To read 2D array from the user..
      * @param {arry} arr 
      * @param {rows} row 
      * @param {columns} col 
      */
    PrintTwoDarry(arr, row, col) {
        console.log("your d array Element");
        for (let index = 0; index < row; index++) {
            for (let index1 = 0; index1 < col; index1++) {
                console.log(arr[index][index1]);
            }

        }
    },
    /**
     * @purpose :To find triplets
     * @description :This method is used to find the triplets  are not..
     * @param {array} arr 
     */
    Triplets(arr) {

        for (let i = 0; i < arr.length - 2; i++) {
            for (let j = i + 1; j < arr.length - 1; j++) {
                for (let k = j + 1; k < arr.length; k++) {
                    if (arr[i] + arr[j] + arr[k] == 0) {

                        console.log("your Triplets number is " + arr[i] + " " + arr[j] + " " + arr[k]);
                        return true;
                    }
                }

            }
        }
        return false;
    },
    /**
     * @purpose :to find the distance.
     * @description:THis method is used to find the distance between X and y.
     * @param {Distances} x 
     * @param {Distances} y 
     */
    Distances(x, y) {
        var d = ((x * x) + (y * y));
        console.log(" Distance is  :" + Math.sqrt(d));
    },

    /**
     * @purpose : To find the purmutation.
     * @description:This Method is used to Find the permutation possible ways.
     * @param {word} word 
     * @param {word first index} first 
     * @param {word last index} last 
     */
    Permutation(word, first, last) {

        if (first == last) {
            console.log(word);
        }
        else {
            for (let i = first; i <= last; i++) {

                word = this.swap(word, first, i);
                this.Permutation(word, first + 1, last);
                word = this.swap(word, first, i);
            }
        }
    },

    swap(word, i, j) {
        var words = [];
        var st = "";
        words = word.split('');
        var temp;
        temp = words[i];
        words[i] = words[j];
        words[j] = temp;

        for (var i = 0; i < words.length; i++) {
            st = st + words[i];

        }
        return st;
    },
    /**
     * @description:This method is used to GEt the time from the System.
     * @purpose :To gethe the time.
     */

    gettime() {
        var date = new Date();
        var n = date.getTime();

        return n;
    },
    /**
     * @purpose :To get stopwatch time
     * @description :This method is used to find the Stopwatch when we get Start and stop time.
     * @param {start timming} stop 
     * @param {stop timing} start 
     */
    stopwatch(stop, start) {

        var time = stop - start;

        var div = time / 1000;
        return div;
    },
    /**
     * @purpose :TO play tictoc
     * @description:This method is used to play the tictoc game.
     */
    tictoc() {
        var board = [[], [], []];


    },
    createboard(board) {

        for (var i = 0; i < board.length; i++) {

            console.log("|" + board[i].join(" ") + "|");

        }

    },
    /**
     * @purpose :To find Quadratic formula.
     * @description:This method is used to find the Quadratic function.. 
     * @param {value for a} a 
     * @param {value for b} b 
     * @param {value for c} c 
     */
    quadratic(a, b, c) {
        var delta = (b * b) - (4 * a * c);
        console.log(delta);

        // farmula for Quadratics....... 
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);

        console.log("your Quadratic formula for positive sign is " + x1);

        console.log("your Quadratic formula for negative sign is" + x2);

    },
    /**
     * @description :This method is used to find windchill formula. 
     * @param {temperature value} t 
     * @param {Ferenhiet value} v 
     */
    windchill(t, v) {
        var W = 35.74 + (0.6215 * t) + ((0.4275 * t) - 35.75) * (Math.pow(v, 0.16));

        console.log("your formula value is " + w);
    },
    /**
     * 
     * Algorithm program Started......................................................
     * 
     * 
     */
    /**
     * @description:This method is used to find the anagram or not
     * @param {String} st1 
     * @param {String} st2 
     */
    Anagram(st1, st2) {

        if (st1.length != st2.length) {
            return false;
        }
        let unsortedStr1 = "" + st1;
        let unsortedStr2 = "" + st2;

        var ch = this.sort(unsortedStr1);
        var ch1 = this.sort(unsortedStr2);

        if (ch === ch1) {
            return true;
        }
        else {
            return false;
        }
        //console.log(ch);
    },
    /**
     * @description:This method is used to sortinging the given String.
     * @param {string} st 
     */
    sort(st) {

        var ch = st.split('');
        for (var i = 0; i < ch.length; i++) {
            for (var j = i + 1; j < ch.length; j++) {
                if (ch[i] > ch[j]) {
                    var temp = ch[i];
                    ch[i] = ch[j];
                    ch[j] = temp;
                }
            }
        }
        var sort = "";
        for (var i = 0; i < ch.length; i++) {
            var sort = sort + ch[i];
        }
        //console.log(sort);
        return sort;
    },
    /**
 * @description:This method is used to find the Prime number between 1 to 1000.
 * 
 */
    Prime() {

        for (var i = 1; i < 1000; i++) {

            if (this.isprime(i)) {
                console.log(i);
            }
        }
    },
    isprime(n) {
        for (var i = 2; i < n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    },
    /**
     * @description:This method is used to find prime in that prime how many
     *  anagrams. 
     * 
     */
    primepoliana() {

        for (var i = 1; i < 1000; i++) {

            if (this.isprime(i)) {

                this.palindrom(i);

            }

        }

    },
    /**
     * @description:This method is used to find palindrome value
     * @param {number} n 
     */
    palindrom(n) {
        var t = n;

        var rev = 0;
        while (n != 0) {
            var r = n % 10;

            rev = rev * 10 + r;

            n = Math.floor(n / 10);
        }
        if (rev == t) {
            console.log(t);
        }

    },
    /**
     * @description:This method is used to find element in binary search
     * @param {array} arr 
     * @param {Element} ele 
     */
    Binarysearch(arr, ele) {

        var l = 0;
        var h = arr.length - 1;
        while (l <= h) {

            m = Math.floor((l + h) / 2);
            if (ele === arr[m]) {
                return m;
            }
            else if (ele < arr[m]) {
                h = m - 1;

            }
            else if (ele > arr[m]) {
                l = m + 1;
            }
            else {
                return m;
            }
        }
        return -1;
    },
    /**
     * @description:This method is used to find  element in binary search in String
     * @param {Array} arr 
     * @param {Element} ele 
     */
    Binarysearchstr(arr, ele) {

        var l = 0;
        var h = arr.length - 1;
        while (l <= h) {
            m = Math.floor((l + h) / 2);

            if (ele == arr[m]) {
                return m;
            }
            else if (ele < arr[m]) {

                h = m - 1;
            }
            else if (ele > arr[m]) {
                l = m + 1;
            }
            else {
                return m;
            }
        }
        return -1;
    },

    /**
    * @description:This method is used to sort the array in insertionSort
    * @param {array} arr 
    * @param {Element} ele 
    */
    Insertionsort(arr) {

        for (var i = 1; i < arr.length; i++) {
            var temp = arr[i];
            var j = i;
            while (j > 0 && arr[j - 1] > temp) {
                arr[j] = arr[j - 1];
                j = j - 1;
            }
            arr[j] = temp;
        }
        return arr;

    },
    /**
    * @description:This method is used to sort the array in BubbleSort
    * @param {array} arr 
    * @param {Element} ele 
    */
    BubbleSor(arr) {																															

        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {

                if (arr[i] > arr[j]) {
                    var temp;
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }

        return arr;
    },
    /**
     * @description:This method is used to find the guess number
     * @param {range} left 
     * @param {Range} right 
     */
    Findnumber(left, right) {

        var m = Math.floor(left + (right - left) / 2);
        console.log(m);
        if (left < right) {
            var c;
            if (left == right - 1) {

                c = readline.question("your number is ? " + left);

                if (c == 'y')
                    return left;

                if (c == 'n')
                    return right;


            }

            c = readline.question("your number is in the range of " + m + " to " + right + " ");
            if (c == "y") {
                m = this.Findnumber(m, right);
            }
            else if (c == "n") {
                m = this.Findnumber(left, m - 1);
            }
        }
        return m;
    },
    /**
     * 
     * @param {Array} arr 
     * @param {first index} low 
     * @param {Middle index} middle 
     * @param {Lastindex} last 
     */
    merge(arr, low, middle, last) {

        /**
         * Find size of two sub-Arrays
         */
        let size1 = middle - low + 1;

        let size2 = last - middle;

        /* Create temp arrays */
        let left = [];
        let right = [];

        /*Copy data to temp arrays*/
        for (let i = 0; i < size1; ++i)
            left[i] = arr[low + i];
        for (let j = 0; j < size2; ++j)
            right[j] = arr[middle + 1 + j];


        /* Merge the temp arrays */

        // Initial indexes of first and second subarrays 
        let i = 0, j = 0;

        // Initial index of merged subarry array 
        let k = low;
        while (i < size1 && j < size2) {
            if (left[i] <= right[j]) {
                arr[k] = left[i];
                i++;
            }
            else {
                arr[k] = right[j];
                j++;
            }
            k++;
        }

        /* Copy remaining elements of L[] if any */
        while (i < size1) {
            arr[k] = left[i];
            i++;
            k++;
        }

        /* Copy remaining elements of R[] if any */
        while (j < size2) {
            arr[k] = right[j];
            j++;
            k++;
        }
    },

    // Main function that sorts arr[l..r] using 
    // merge() 
    Mergesort(arr, low, last) {


        if (low < last) {
            // Find the middle point 
            let middle = (Math.floor((low + last) / 2));

            // Sort first and second halves 
            this.Mergesort(arr, low, middle);
            this.Mergesort(arr, middle + 1, last);

            // Merge the sorted halves 
            this.merge(arr, low, middle, last);
        }
        return arr;
    },
    /**
     * @description:This method is used to find the minimum notes
     * @param {amount} am 
     */
    VendingMachine(am) {


        var notes = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
        var count = 0;
        for (var i = 0; i < notes.length; i++) {

            if (am / notes[i] > 0) {

                console.log("number of " + notes[i] + " is " + Math.floor(am / notes[i]));

                count = count + Math.floor(am / notes[i]);
                am = am % notes[i];
            }
        }
        console.log("your total number of notes is " + count);

    },
    /**
     * @description:This method is used to find day of the passed value.
     * @param {day} d 
     * @param {month} m 
     * @param {year} y 
     */
    dayOfWeek(d, m, y) {
        var y0 = y - Math.floor((14 - m) / 12);
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
        m0 = m + 12 * Math.floor((14 - m) / 12) - 2;
        var d0 = (d + x + Math.floor((31 * m0) / 12)) % 7;
        return d0;
    },
    /**
     * @description:This method is used to find convertion of faCelsius to Fahrenheit,
    Fahrenheit to Celsius
    
     */
    CelsiustoFahrenheit(c) {

        var F = ((c * 9) / 5) + 32;
        return F;
    },
    FahrenheittoCelsius(F) {

        var c = ((F - 32) * 5) / 9;

        return c;
    },
    /**
     * @description :This method is used to  find the monthly payment...
     */
    monthlypayment() {
        var p = readline.question("Enter the principal loan amount ");
        var Y = readline.question("Enter how many years ");
        var R = readline.question(" Enter your percent interest ");

        var n = 12 * Y;

        var r = R / (12 * 100);
        var d = Math.pow((1 + r), (-n));
        var payment = (p * r) / (1 - (d));

        console.log("The monthly payment is " + payment);
    },
    /**
     * @description :this method is used to get squre root of non negative value.
     * @param {number} num 
     */
    sqrt(num) {
        if (num > 0) {
            //formula 
            var t = num;
            var epsilon = 1e-15;
            while (Math.abs(t - num / t) > epsilon * t) {
                t = (num / t + t) / 2;
            }
            console.log("Squre root of non negative number is : ", t)
        }
        else {
            console.log("Number should be positive ");
        }
    },
    /**
     * @description: This method is used to Covert the dicimal number to binary value.
     * @param {number} num 
     */
    Tobinary(num) {

        var str = "";
        while (num != 0) {
            var r = num % 2;
            str = str + r;

            num = Math.floor(num / 2);
        }

        return this.padding(str);
    },
    padding(str) {

        for (var i = str.length; i < 32; i++) {


            str = "0" + str;


        }
        return str;

    },
    /**
     * @description :This method is used to swap the nibbles 
     * @param {number } num 
     */
    Nibbles(num) {
        var str = this.Tobinary1(num);
        var mid = Math.floor((str.length) / 2);
        console.log("middle " + mid);
        if (mid % 2 == 0) {
            var arr1 = [];
            for (var i = 0; i < mid; i++) {

                arr1[i] = str[i];

            }
            console.log(arr1);
            var arr2 = [];
            var k = 0;
            for (var j = str.length / 2; j < str.length; j++) {
                arr2[k] = str[j];
                k++;
            }
            console.log(arr2);
            var s = "";
            for (var i = 0; i < arr1.length; i++) {
                s = s + arr1[i];
            }
            var s1 = "";
            for (var i = 0; i < arr2.length; i++) {
                s1 = s1 + arr2[i];
            }
            console.log(s);
            console.log((s1));
            console.log("Your Swapping nibbles is " + s1 + s)
        }
        else {
            console.log("Your String can't able to split into two Strings ");
        }
    },
    /**
     * @description:This method is used to Convert the decimal value into binary value.
     * @param {number} num 
     */
    Tobinary1(num) {
        var str = "";
        while (num != 0) {
            var r = num % 2;
            str = str + r;

            num = Math.floor(num / 2);
        }
        console.log("Str :" + str);
        return str;
    },
    /**
     * @description :This method is used If You pass Staring value and ending value means. it return prime number in the given range.
     * @param {number} s1 
     * @param {number} s2 
     */
    findPrime(s1, s2) {
        var flag = 0, k = 0;
        var prime = [];

        for (var i = s1; i <= s2; i++) {
            for (var j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = 0;
                    break;
                }
                else {
                    flag = 1;
                }
            }
            if (flag == 1) {
                prime[k++] = i;
            }
        }
        return prime;
    },
    /**
     * @description :This method is used If You pass Staring value and ending value it return prime number which are anagram in the range.
     * @param {numbers} ii 
     * @param {number} jj 
     */
    findAnaPrime(ii, jj) {
        var primes = this.findPrime(ii, jj);
        var n = primes.length;

        var anaPrimes = [];
        var h = 0;

        for (let i = 0; i < n - 1; i++) {
            for (let j = i + 1; j < n - 1; j++) {
                if (this.Anagram(primes[i], primes[j])) {
                    anaPrimes[h++] = primes[i];
                    anaPrimes[h++] = primes[j];
                }
            }
        }
        return anaPrimes;
    }

}

