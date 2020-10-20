function doSomething(){}
console.log( doSomething.prototype );
// 和声明函数的方式无关，
// JavaScript 中的函数永远有一个默认原型属性。
var doSomething = function(){};
console.log( doSomething.prototype );
doSomething.prototype.foo = "bar";
console.log( doSomething.prototype );
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value"; // add a property onto the object
console.log( doSomeInstancing );


// 使用语法结构创建的对象 
var o = {a: 1};

// o 这个对象继承了 Object.prototype 上面的所有属性
// o 自身没有名为 hasOwnProperty 的属性
// hasOwnProperty 是 Object.prototype 的属性
// 因此 o 继承了 Object.prototype 的 hasOwnProperty
// Object.prototype 的原型为 null
// 原型链如下:
// o ---> Object.prototype ---> null

var a = ["yo", "whadup", "?"];

// 数组都继承于 Array.prototype 
// (Array.prototype 中包含 indexOf, forEach 等方法)
// 原型链如下:
// a ---> Array.prototype ---> Object.prototype ---> null

function f(){
  return 2;
}

// 函数都继承于 Function.prototype
// (Function.prototype 中包含 call, bind等方法)
// 原型链如下:
// f ---> Function.prototype ---> Object.prototype ---> null


// 使用构造器创建的对象
function Graph() {
    this.vertices = [];
    this.edges = [];
  }
  
  Graph.prototype = {
    addVertex: function(v){
      this.vertices.push(v);
    }
  };
  
  var g = new Graph();
  // g 是生成的对象，他的自身属性有 'vertices' 和 'edges'。
  // 在 g 被实例化时，g.[[Prototype]] 指向了 Graph.prototype。


  // 使用 Object.create 创建的对象
  // Object.create() 可以调用这个方法来创建一个新对象。新对象的原型就是调用 create 方法时传入的第一个参数
  var a = {a: 1}; 
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (继承而来)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty); // undefined, 因为d没有继承Object.prototype


// 关键字创建的对象
class Polygon {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
}
  
class Square extends Polygon {
    constructor(sideLength) {
      super(sideLength, sideLength);
    }
    get area() {
      return this.height * this.width;
    }
    set sideLength(newLength) {
      this.height = newLength;
      this.width = newLength;
    }
}
  
var square = new Square(2);
console.log(square) // Square { height: 2, width: 2 }