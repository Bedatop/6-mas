
let fruit=['яблоко', 'апельсин', 'слива'];
console.log(fruit);
for (let i=0; i<fruit.length; i++) {
    console.log(fruit[i])
}
for (let key of fruit) {
    console.log(key); //второй способ перебрать данные
}

let a=[1, 2, 3, 4, 5]
console.log(a);
let b=['a', 'b', 'c'];
console.log(b);
let arr=['a', 'b', 'c', 'd'];
console.log(`${arr[0]}+${arr[1]}+${arr[2]}+${arr[3]}`);
let aa=[1, 2, 3, 4, 'a']
console.log(aa.length);
let aab=[1, 2, 'ss', 4, 'a']
console.log(aab.at(-1));
let arra=['a', 'b', 'c'];
arra[0]=1;
arra[1]=2;
arra[2]=3;
console.log(arra);
let ab=[1, 2, 3];
console.log(`${ab[0]+3},${ab[1]+3},${ab[2]+3}`);
let aaa=[];
for (let i=0; i<=20; i++) {
    aaa.push(i)
}
console.log(aaa)
let bbb=[];
for (let i=10; i<=40; i++) {
    if (i%2) {
        console.log(aaa.push(i))
    }
}
let asa=[2, 3, 5, -1, 6];
for (let key2 of asa) {
    if (key2==-1) {
        break
    }
    console.log(key2)
}
let add=[2, 3, 5, -1, 6, 120];
console.log(add.reverse());
console.log(Math.max.apply(null, add));
for (let key3 of asa) {
    if (key3==3) {
        console.log("есть")
    }
    else {
        console.log('нет')
    }
    console.log(key3)
}
let arre=[1,2,3];
console.log(arre[0]+arre[1]+arre[2]);