var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var str = "Hello World";
var num = 123;
var boo = true;
var n = null;
var nu = undefined;
// 就是都可以
var test = true;
// 陣列
var arr = ["a", "b", "c"];
var arr2 = [["a"], ["b", "c"]];
// 元組
var tuple = [1, "a", true];
var tuple2 = [["a", "b"]];
// ============Enum===========
var LiveStatus;
(function (LiveStatus) {
  LiveStatus[(LiveStatus["SUCCESS"] = 0)] = "SUCCESS";
  LiveStatus[(LiveStatus["FAIL"] = -1)] = "FAIL";
  LiveStatus[(LiveStatus["STREAMING"] = 1)] = "STREAMING";
})(LiveStatus || (LiveStatus = {}));
var staus = LiveStatus.SUCCESS;
console.log(staus);
// =============nuion=========
var aaa;
aaa = 1000;
aaa = "str";
var a1;
a1 = 999;
a1 = "str";
var obj = {
  name: "Chen",
  desc: "...",
  age: 100,
};
// ==============function=====
// 參數
function hello(a, b) {
  return a + b;
}
function hello2(a, b) {
  console.log(a, b);
  return 999;
}
function hello3(a, b, c) {
  return 100;
}
// nudefined
var test2 = function (a) {
  console.log(a);
};
function hello4(name, age) {
  //   age有可能是未定義
  //   let a: number;
  //   a = age;
  if (age === undefined) return -1;
  test2(age);
  return age;
}
// 箭頭函式
var func = function () {};
var func2 = function () {
  return 1;
};
function getData() {
  return __awaiter(this, void 0, void 0, function () {
    var res, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [
            4 /*yield*/,
            fetch("https://jsonplaceholder.typicode.com/todos/1"),
          ];
        case 1:
          res = _a.sent();
          return [4 /*yield*/, res.json()];
        case 2:
          data = _a.sent();
          return [2 /*return*/];
      }
    });
  });
}
var data1 = {
  userId: 1,
  id: 1,
  title: "delectus aut autem",
  completed: false,
};
var beta = data1;
// ==========class===========
// private 私有
// public 公開
// protected 受保護
var Live = /** @class */ (function () {
  function Live(roomName1, id1, name1) {
    console.log("建立直播中...");
    this.roomName = roomName1;
    this.id = id1;
    this.name = name1;
  }
  return Live;
})();
var live = new Live("1號", "0001", "Avery");
console.log(live);
