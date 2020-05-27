// ทำโจทย์ programming.in.th ข้อ 0011 ถึง 0020
// https://programming.in.th/task/rev2_problemset.php

//1.Grading
function Grading(num1, num2, num3) {
    if (num1 < 0 || num1 > 30) {
        console.log("INPUT NUM1 WRONG")
        return false
    }
    if (num2 < 0 || num2 > 30) {
        console.log("INPUT NUM2 WRONG")
        return false
    }
    if (num3 < 0 || num3 > 40) {
        console.log("INPUT NUM3 WRONG")
        return false
    }
    let sum = num1 + num2 + num3
    //console.log(sum)
    if (sum <= 100 && sum >= 80) {
        console.log(sum + " : A")
    } else if (sum <= 79 && sum >= 75) {
        console.log(sum + " : B+")
    } else if (sum <= 74 && sum >= 70) {
        console.log(sum + " : B")
    } else if (sum <= 69 && sum >= 65) {
        console.log(sum + " : C+")
    } else if (sum <= 64 && sum >= 60) {
        console.log(sum + " : C")
    } else if (sum <= 59 && sum >= 55) {
        console.log(sum + " : D+")
    } else if (sum <= 54 && sum >= 50) {
        console.log(sum + " : D")
    } else if (sum <= 49 && sum >= 0) {
        console.log(sum + " : F")
    }
}

//2.SHOW MIN AND MAX
function minmax(array) {
    let min = Math.min(...array)
    let max = Math.max(...array)
    console.log(min + " : " + max)
}

//3.Matrix Addition
function MatrixAddition(m, n, arr1, arr2) {
    let a = []
    let b = []
    let c = []
    let sum = []
    let num
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            num = arr1[i][j] + arr2[i][j]
            if (i === 0) {
                a.push(num)
            } else if (i === 1) {
                b.push(num)
            } else if (i === 2) {
                c.push(num)
            }
        }
    }
    sum.push(a)
    sum.push(b)
    sum.push(c)
    console.log(sum)
}

//4.Character Checker
function CharacterChecker(text) {
    if (text === text.toUpperCase()) {
        console.log("UPPER CASE")
    } else if (text === text.toLowerCase()) {
        console.log("LOWER CASE")
    } else {
        console.log("MIX")
    }
}

//5.Pythagorus
function Pythagorus(num1, num2) {
    let a = (Math.pow(num1, 2)).toFixed(6)
    let b = (Math.pow(num2, 2)).toFixed(6)
    let sum = Math.sqrt(parseInt(a) + parseInt(b)).toFixed(6)
    console.log(a + " + " + b + " = " + sum)
}

//6.A+B Problem
function ABProblem(num1, num2) {
    if (num1 < 0 && num1 > Math.pow(10, 9)) {
        console.log("WRONG")
        return false
    } else if (num2 < 0 && num2 > Math.pow(10, 9)) {
        console.log("WRONG")
        return false
    } else {
        console.log(num1 + num2)
    }

}

//7.Herman
function Herman(radian) {
    let a = (Math.PI * Math.pow(radian, 2)).toFixed(6)
    let b = (2 * radian * radian).toFixed(6)
    console.log(a + "|" + b)
}

//8.X2
function X2(X1, S) {
    let X2 = (S * 2) - X1
    console.log(X2)
}

//9.ABC
function ABC(array) {
    let arr1 = [array[1][0], array[0][0]]
    let arr2 = [array[1][1], array[0][1]]
    let arr3 = [array[1][2], array[0][2]]
    let sum = []
    sum.push(arr1)
    sum.push(arr2)
    sum.push(arr3)
    let sort = sum.sort()
    console.log(sort.reverse())
}

//10.Trik
function Trik(array) {
    let count = array.length
    let sum = 1
    for (i = 0; i < count; i++) {
        if (array[i] === 'A') {
            if (sum = 1) {
                sum = 2
            } else if (sum = 2) {
                sum = 1
            }
        } else if (array[i] === 'B') {
            if (sum = 2) {
                sum = 3
            } else if (sum = 3) {
                sum = 2
            }
        } else if (array[i] === 'C') {
            if (sum = 3) {
                sum = 1
            } else if (sum = 1) {
                sum = 3
            }
        }
    }
    console.log(sum)
}