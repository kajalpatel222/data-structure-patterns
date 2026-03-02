/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
function isStringAnagram(str1, str2) {
  let map = new Map();

  for(let i=0; i<str1.length; i++){
    map.set(str1[i],(map.get(str1[i]) ?? 0) +1 )
  }

  for(let i=0; i<str2.length; i++){
    if(!map.has(str2[i])){
      return false
    }
    map.set(str2[i],(map.get(str2[i]))-1 )

    if(map.get(str2[i])==0){
      map.delete(str2[i])
    }
  }

  return true
}

console.log(isStringAnagram("listen", "silent")) // true
