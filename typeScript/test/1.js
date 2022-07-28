var str = "Hello World";
var num = 123;
var boo = true;
var n = null;
var nu = undefined;
// 就是都可以
var test = true;
// 陣列
var arr = ['a', 'b', 'c'];
var arr2 = [['a'], ['b', 'c']];
// 元組
var tuple = [1, 'a', true];
var tuple2 = [['a', 'b']];
// ============Enum===========
var LiveState;
(function (LiveState) {
    LiveState[LiveState["SUCCESS"] = 0] = "SUCCESS";
    LiveState[LiveState["FAIL"] = -1] = "FAIL";
    LiveState[LiveState["STREAMING"] = 1] = "STREAMING";
})(LiveState || (LiveState = {}));
var staus = LiveState.SUCCESS;
console.log(staus);
