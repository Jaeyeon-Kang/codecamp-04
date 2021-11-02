let fruits = ["사과", "바나나", "파인애플"]
//undefined
push.fruits
//VM609:1 Uncaught ReferenceError: push is not defined
//    at <anonymous>:1:1
//(anonymous) @ VM609:1
fruits.length
//3
fruits.push
//ƒ push() { [native code] }
NewFruits.push(fruits[(fruits.length-1)])
//VM940:1 Uncaught ReferenceError: NewFruits is not defined
 //   at <anonymous>:1:1
//(anonymous) @ VM940:1
NewFruits.push(fruits[fruits.length-1])
//VM952:1 Uncaught ReferenceError: NewFruits is not defined
    at <anonymous>:1:1
//(anonymous) @ VM952:1
newFruits.push(fruits[fruits.length-1])
//VM1057:1 Uncaught ReferenceError: newFruits is not defined
 //   at <anonymous>:1:1
//(anonymous) @ VM1057:1
newFruits.push(fruits[fruits.length-1])
//VM1062:1 Uncaught ReferenceError: newFruits is not defined
 //   at <anonymous>:1:1
//(anonymous) @ VM1062:1
let newFruits=[]
//undefined
newFruits.push(fruits[fruits.length-1])
//1
newFruits
//['파인애플']
let students = ["철수", "영희", "훈이", "짱구", "유리"]

//undefined
newArr=[]
//[]
let newArr=[]
//undefined
newArr=[student.slice(0,3)]
//VM1417:1 Uncaught ReferenceError: student is not defined
//    at <anonymous>:1:9
(anonymous) @ VM1417:1
//let newArr=[student.slice(0,3)]
//VM1437:1 Uncaught ReferenceError: student is not defined
 //   at <anonymous>:1:13
//(anonymous) @ VM1437:1
let newArr=student.slice(0,3)
//VM1456:1 Uncaught ReferenceError: student is not defined
 //   at <anonymous>:1:12
//(anonymous) @ VM1456:1
let newArr=students.slice(0,3)
//undefined
newArr
//(3) ['철수', '영희', '훈이']
let fruits = ["사과", "바나나"]
//undefined
fruits[0]="맛있는"+fruits[0]
fruits[1]="맛있는"+fruits[1]
//'맛있는바나나'
fruits
//(2) ['맛있는사과', '맛있는바나나']

fruits[0]="맛있는"+""+fruits[0]
fruits[1]="맛있는"+""+fruits[1]
//'맛있는맛있는바나나'
fruits[0]="맛있는"+" "+fruits[0]
fruits[1]="맛있는"+" "+fruits[1]
//'맛있는 맛있는맛있는바나나'
let fruits = ["사과", "바나나"]
//undefined
fruits[0]="맛있는"+" "+fruits[0]
fruits[1]="맛있는"+" "+fruits[1]
//'맛있는 바나나'
fruits
//(2) ['맛있는 사과', '맛있는 바나나']
let arr=[]
//undefined
const number = "01012345678"
//undefined
arr=["(slice.number(0,2)","(slice.number(3,6)","(7,10)"]
//(3) ['(slice.number(0,2)', '(slice.number(3,6)', '(7,10)']
arr
//(3) ['(slice.number(0,2)', '(slice.number(3,6)', '(7,10)']
arr=["number.slice(0,2)","number.slice(3,6)","number.slice(7,10)"]
//(3) ['number.slice(0,2)', 'number.slice(3,6)', 'number.slice(7,10)']
arr
//(3) ['number.slice(0,2)', 'number.slice(3,6)', 'number.slice(7,10)']
arr=[number.slice(0,2),number.slice(3,6),number.slice(7,10)]
//(3) ['01', '123', '567']
arr
//(3) ['01', '123', '567']
arr=[number.slice(0,3),number.slice(3,7),number.slice(7,11)]
//(3) ['010', '1234', '5678']

// edit