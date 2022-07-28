let str: string = "Hello World";
let num: number = 123;
let boo: boolean = true;

let n: null = null;
let nu: undefined = undefined;

// 就是都可以
let test: any = true;

// 陣列
let arr: string[] = ["a", "b", "c"];
let arr2: string[][] = [["a"], ["b", "c"]];

// 元組
let tuple: [number, string, boolean] = [1, "a", true];
let tuple2: [string, string][] = [["a", "b"]];

// ============Enum===========
enum LiveStatus {
  SUCCESS = 0,
  FAIL = -1,
  STREAMING = 1,
}

const staus = LiveStatus.SUCCESS;
console.log(staus);

// =============nuion=========
let aaa: string | number;
aaa = 1000;
aaa = "str";
// 因為沒有設定所以不行
// aaa = true;

// =========type=========
type A = number | string;

let a1: A;
a1 = 999;
a1 = "str";
// 因為沒有設定所以不行
// a1= true

// ==========interface=======
interface User {
  name: string;
  age: number;
}

// =========object======
// interface可以擴充， type不可擴充
type Card = {
  name: string;
  desc: string;
};
// type Card ={
//     age:number;
// }

interface Card2 {
  name: string;
  desc: string;
}
interface Card2 {
  // 可不填寫
  age?: number;
}

const obj: Card2 = {
  name: "Chen",
  desc: "...",
  age: 100,
};

// ==============function=====

// 參數
function hello(a: string, b: string) {
  return a + b;
}

function hello2(a: string, b: string): number {
  console.log(a, b);
  return 999;
}

function hello3(a:number, b:boolean, c:string){
    return 100
}

// nudefined
function hello4 (name: string, age?:number){
    return age
}