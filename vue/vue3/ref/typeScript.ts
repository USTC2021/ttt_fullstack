// const count = reactive(2)

// count = 3 // 无法改 
// // reactive 是用 proxy 写的


// const count = ref(2)
// count.value = 3
// { value: T }


// const count = ref(2)
// const num = ref(count)
// num.value = 3
// { value: T }

// const count = ref(ref(ref(2)))
// count.value.value.value = 3
// { value: T }


// 泛型
// 类型变量就是泛型
type Value<T> = T
type NumberValue = Value<number>

// function returnItem(para: number): number {
//   return para
// }

// function returnItem<T>(para: T): T {
//   return para
// }
// returnItem('hello')

// function swap<T, U>(tuple: [T, U]): [U, T] {
//   return [tuple[1], tuple[0]]
// }

// swap([7, 'seven'])


// function getArrayLength<T>(arg: Array<T>) {
//   console.log(arg.length)
//   return arg
// }

// getArrayLength([1, 2, 3])



// 反向推导

// function create<T>(val: T): T {
//   return val
// } 
// let num: number
// const c = create(2)



// 索引签名
type Test = {
  foo: number,
  bar: string
}

type N = Test['foo'] // number



// 条件类型
type IsNumber<T> = T extends number ? 'yes' : 'no'
type A = IsNumber<2>  // yes
type B = IsNumber<'3'> // no

type TypeName<T> = T extends string ? 'string' : T extends boolean ? 'boolean' : 'object'
type T0 = TypeName<'a'>  // 'string'
type T1 = TypeName<true>  // 'boolean'



// keyof  是ts中用来获取对象的key值集合
type obj = {
  foo: number,
  bar: string
}

// type keys = keyof obj  // 'foo' | 'bar'
type Copy = {
  [k in keyof obj]: obj[k]
}



// infer  条件类型中的类型推断
// type T = Get<number>
// type Get<number> = number extends infer number ? number : never

type Unpack<T> = T extends Array<infer R> ? R : T

type U = Unpack<2>