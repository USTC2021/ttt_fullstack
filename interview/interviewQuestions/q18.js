[1 < 2 < 3, 3 < 2 < 1]
// [true, true]

// 1 < 2   // true
// true < 3  =>  1 < 3  => true
// [true, 3 < 2 < 1]
// 3 < 2 => false
// false < 1 => 0 < 1 => true
// true



2 == [[[2]]]   // true
// [[[2]]].valueof() 不行
// [[[2]]].toString() => '2'
// 2 == '2'
// true