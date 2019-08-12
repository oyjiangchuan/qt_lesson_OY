// 140 likes
// 喜欢的人 []  当是一个空时 返回 "no one likes this"
// ["Perter"]  "Perter like this"
// ["Jacob", "Alex"] "Jacob and Alex like this"
// ["Max", "john", "Mark"] "Max, John and Mark like this"
// ["Alex","Max", "john", "Mark"] "Alex Max and 2 others like this"
// const likes = names => {
//     switch(names.length) {
//         case 0:
//             return `no one likes this`
//         case 1:
//             return names[0] + ` like this`
//         case 2:
//             return names[0] + ` and ` + names[1] + ` like this`
//         case 3:
//             return names[0] + `, ` + names[1] + ` and ` + names[2] + ` like this`
//     }   
// }

// 顺序思维  数学思维
// 4种可能 likes 的模式？
// phone number 1种模式的匹配 
// name names[i]

// 正则
const likes = names => {
    const templates = [
        `no one likes this`,
        `{name} like this`,
        `{name} and {name} like this`,
        `{name}, {name} and {name} like this`,
        `{name} {name} and {n} others like this`     
    ];
    let idx = Math.min(names.length, 4); // 哪一个模式
    return templates[idx].replace(/{name}|{n}/g, function(val) {
            return val === `{name}` ? names.shift() : names.length; // 巧妙names.shift()移除数组的第一项,返回该项的值
    })
}
console.log(likes(["Max", "john", "Mark", "hhah", "cakjk"]))