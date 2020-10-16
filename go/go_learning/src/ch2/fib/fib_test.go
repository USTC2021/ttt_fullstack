package fib

import (
	"testing"
)
// 1,1,2, 3, 5, 8....

func testFibList(t *testing.T)  {
	// 声明变量方法一
	// var a int = 1
	// var b int = 1
	// 声明变量方法二
	// var (
	// 	a int = 1
	// 	b int = 1
	// )
	// 声明变量方法三
	a := 1
	b := 1
	t.Log(a)
	for i := 0; i < 5; i++ {
		t.Log(" ", b)
		tmp := a
		a = b 
		b = tmp + a
	}
} 