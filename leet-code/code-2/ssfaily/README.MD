第一题:
方法一:

初始化一个新数组;

 newdata[datal[]++;

这样计算出新数组中哪个最数最大，那么其索引|就是原数组中出现最多次数的数了

方法二：

先进行排序,排序之后其主要元素应当出现在其中间位置,

计算出newdata中哪个数值最大，则其对应的索引|就是出现次数最多的元素元素出现的最后一个位

减去第- -次出现的位置加1,如果大于数组元素的一半,则为主要元素;

第二题:

方法一：用过滤器筛选出索弓|不等于元素的数值对应索|即为所求+

方法二：计算0~n的和，减去现在的和0