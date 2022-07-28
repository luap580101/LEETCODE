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

function hello3(a: number, b: boolean, c: string) {
  return 100;
}

// nudefined
let test2 = (a: number) => {
  console.log(a);
};

function hello4(name: string, age?: number) {
  //   age有可能是未定義
  //   let a: number;
  //   a = age;
  if (age === undefined) return -1;
  test2(age);
  return age;
}

// 箭頭函式
const func = () => {};
const func2 = () => {
  return 1;
};

// ==========斷言 unknow==========

type Data = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = (await res.json()) as Data;
}

const data1: Data = {
  userId: 1,
  id: 1,
  title: "delectus aut autem",
  completed: false,
};

type Beta = {
  name: string;
};

const beta = data1 as unknown as Beta;

// ==========class===========

// private 私有
// public 公開
// protected 受保護

class Live {
  roomName: string;
  private id: string;
  protected name: string;

  constructor(roomName1: string, id1: string, name1: string) {
    console.log("建立直播中...");

    this.roomName = roomName1;
    this.id = id1;
    this.name = name1;
  }
}

class CarLive extends Live {
  constructor(roomName1: string, id1: string, name1: string) {
    super(roomName1, id1, name1);
  }

  start() {
    // 可以用 name，roomName
    // id 訪問不到
  }
}

const live = new Live("1號", "0001", "Avery");
const carLive = new CarLive("car room", "0002", "Chen");
console.log("live", live);
console.log("carLive", carLive);

class Live2 {
  // 私有變數
  #name;
  constructor(name: string) {
    this.#name = name;
  }
}

const live2 = new Live2("live2");
// 會找不到name
// console.log(live2.name);

export interface CarProps {
  name: string;
  age: number;
  start: () => void;
}
class Car implements CarProps {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  start() {}
}

// ===========泛型=========

function print<T>(data: T) {
  console.log("data", data);
}
print<number>(999);
print<string>("Chen");
print<boolean>(true);

class Print<T> {
  data: T;

  constructor(d: T) {
    this.data = d;
  }
}
const p = new Print<number>(999);
const p2 = new Print<string>("chen");
console.log("p", p);
console.log("p1", p2);

// ============Utility==========
// Record<Keys, Type>
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
  // 因為名子沒有定義CHEN 所以會錯
  // chen: { age: 16, breed: "British Shorthair" },
};

const obj1: Record<string, boolean> = {
  name: true,
};


// // Pick<Type, Keys>
// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }
 
// type TodoPreview = Pick<Todo, "title" | "completed">;
 
// const todo: TodoPreview = {
//   title: "Clean room",
//   completed: false,
//   // 沒有引用近來
//   // description:'123'
// };


// Omit<Type, Keys>
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}
 
type TodoPreview = Omit<Todo, "description">;
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};
 
todo;
 
const todo: TodoPreview
 
type TodoInfo = Omit<Todo, "completed" | "createdAt">;
 
const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};
 