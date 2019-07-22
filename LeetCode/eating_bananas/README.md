- 香蕉问题
    Koko loves to eat bananas.  There are N piles of bananas, the i-th pile has piles[i] bananas.  The guards have gone and will come back in H hours.

    Koko can decide her bananas-per-hour eating speed of K.  Each hour, she chooses some pile of bananas, and eats K bananas from that pile.  If the pile has less than K bananas, she eats all of them instead, and won't eat any more bananas during this hour.

    Koko likes to eat slowly, but still wants to finish eating all the bananas before the guards come back.

    Return the minimum integer K such that she can eat all the bananas within H hours.

- H 时间 
- K K*H
- K min     K太小，吃不完
- K max     K太大，不到H小时就吃完了

    在min 和 max之间尝试，取得满足条件的最小K值

1. 把香蕉表达一下
    [3,6,7,11]  H = 8
    max = 11
    min = 4
    [30,11,23,4,20] H = 5
    max = 30 
    min = 15
2. max  规则 Max(arr)
3. max--    正好在H小时吃完，如果在小一只，就会变成>H小时 此时的值就为最小的K值
4. 怎么可以高效一点 二分查找

- Js数据类型
    整型 Number String null undefiend Boolean
    复杂数据类型 Object
    Array，Function，Math，Regexp，Date

    Math.max()
    Math.min()
    Math.round()
    Math.floor()
    Math.cile()

- ... spread 展开一个数组,可以把每一项
    ... reset 收起参数
-   Math.max(arr)
    Math.max(...arr)

- koko 
    while(1=>Math.max(...piles))
    每把香蕉花的小时数加起来小于等于H
    pile=>pile=>Math.ceil(pile/low)
- 减少一些尝试
    1-> Max     二分查找
