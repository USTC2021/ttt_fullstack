// 设计一个支持以下两种操作的数据结构
// void addWorld(world) 
// bool search(word) . a - z

// addWorld('bad')
// addWorld('dad')
// addWorld('mad')

// search('pad') // false
// search('bad') // true
// search('.ad') // true
// search('b..') // true

const WordDictionary = function() {
  this.words = {} // map 角色
}

WordDictionary.prototype.addWorld = function(word) {
  // word相同长度的数组已经存在，只添加
  if (this.words[word.length]) {
    this.words[word.length].push(word)
  } else {
    this.words[word.length] = [word]
  }
}

WordDictionary.prototype.search = function(word) {
  if (!this.words[word.length]) {
    return false
  }
  const len = word.length
  if (!word.includes('.')) {
    return this.words[len].includes(word)
  }

  const reg = new RegExp(word)
  return this.words[len].some((item) => {
    return reg.test(item)
  })
}

let test = new WordDictionary()

test.addWorld('bad')
test.addWorld('dad')
test.addWorld('mad')
console.log(test)
console.log(test.search('pad')) // false
console.log(test.search('bad')) // true
console.log(test.search('.ad')) // true
console.log(test.search('b..')) // true

test.addWorld('hello')
console.log(test.search('hello'))