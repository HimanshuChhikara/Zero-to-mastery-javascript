let commonWords = (s0, s1) => {

    let s0Map = new Set();
    let s1Map = new Set();

    s0.split(' ').forEach(x => s0Map.add(x.toLowerCase()))
    s1.split(' ').forEach(x => s1Map.add(x.toLowerCase()))

   let ans = 0;

   s0Map.forEach(x => ans = s1Map.has(x) ? ans + 1 : ans);
   return ans;

}

console.log(commonWords("hello world hello oyster","world is your oyster"));