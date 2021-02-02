// const count = ref(ref(ref(2)))
// count.value.value.value = 3
// { value: T }

type Ref<T = any> = {
  value: T
}

// type UnwrapRef<T> = T extends Ref<infer R> ? R : T
// UnwrapRef<Ref<number>> // number

type UnwrapRef<T> = {
  ref: T extends Ref<infer R> ? UnwrapRef<R> : T
  object: { [K in keyof T]: UnwrapRef<T[K]> }
  other: T
}[T extends Ref ? 'ref' : T extends object ? 'object' : 'other']

function ref<T>(value: T): T extends Ref ? T : Ref<UnwrapRef<T>>
  
// const count = ref(Ref<number>)  // ref(2) === Ref<number>  ref({ a: 1 }) === Ref<{ a: number }>

// count.value  // number

// ref(ref(2))
// UnwrapRef<Ref<Ref<number>>>
// UnwrapRef<number>


// const count = ref({
//   foo: ref('1'),
//   bar: ref(2)
// })

// const count: Ref<{
//   foo: string,
//   bar: number
// }>