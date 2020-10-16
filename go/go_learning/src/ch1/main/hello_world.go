package main  // 包 主 module 模块化

// import "fmt"  // 内置模块

import (
    "fmt"
    "os"
)
  
func main() {  
    // 格式输出模块，需要引入
    // fmt.Printf("hello, world!\n")  
    if len(os.Args) > 1 {
        fmt.Println(os.Args[1])
    }

    fmt.Println("hello world!")    
}  