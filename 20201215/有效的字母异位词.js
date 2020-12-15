var isAnagram = function(s,t){
    // ~~~~~~~~~~~~
    // 排序暴力解法 
    // return s.length==t.length&&[...s].sort().join('')===[...t].sort().join('')
    // ~~~~~~~~~~
    // 哈希解法
    if(s.length!==t.length){
        return false
    }
    var table = Array[26].fill(0)
    for(var i=0;i<s.length;++i){
        table[s.codePointAt(i)-'a'.codePointAt(0)]++
    }
    for (let i = 0; i < t.length; ++i) {
        table[t.codePointAt(i) - 'a'.codePointAt(0)]--;
        if (table[t.codePointAt(i) - 'a'.codePointAt(0)] < 0) {
            return false;
        }
    }
    return true
}
// console.log(isAngram('ad','da'))
var map =new Map()
map.set('a',1)
map.set('a',3)
map.forEach((key,value)=>{console.log(key,value)})
console.log(map[3])