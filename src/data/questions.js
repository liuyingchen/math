export const categories = [
  {
    "id": "geometry",
    "name": "一、几何图形与角度周长",
    "count": 8,
    "icon": "CircleHelp",
    "tone": "orange"
  },
  {
    "id": "travel",
    "name": "二、行程问题",
    "count": 4,
    "icon": "Navigation",
    "tone": "blue"
  },
  {
    "id": "average",
    "name": "三、平均数问题与统计",
    "count": 5,
    "icon": "BarChart3",
    "tone": "green"
  },
  {
    "id": "word-problems",
    "name": "四、和差倍、鸡兔同笼与盈亏问题",
    "count": 10,
    "icon": "Scale",
    "tone": "yellow"
  },
  {
    "id": "operations",
    "name": "五、定义新运算与计算技巧",
    "count": 8,
    "icon": "Calculator",
    "tone": "orange"
  },
  {
    "id": "number-theory",
    "name": "六、数列与数论综合",
    "count": 13,
    "icon": "Sigma",
    "tone": "blue"
  },
  {
    "id": "counting",
    "name": "七、计数与排列组合",
    "count": 12,
    "icon": "Blocks",
    "tone": "green"
  },
  {
    "id": "logic",
    "name": "八、抽屉原理与逻辑推理",
    "count": 15,
    "icon": "Brain",
    "tone": "yellow"
  },
  {
    "id": "cycles",
    "name": "九、周期、报数与操作应用",
    "count": 9,
    "icon": "RefreshCw",
    "tone": "orange"
  },
  {
    "id": "number-grid",
    "name": "十、数阵图与数独填数",
    "count": 3,
    "icon": "Grid3X3",
    "tone": "blue"
  }
];

export const questions = [
  {
    "kind": "blank",
    "prompt": "如图，在一个长方形中有一段阴影部分，如果阴影部分恰好是正方形，那么图中大长方形的周长是多少厘米？（已知标注尺寸为6厘米和9厘米）",
    "answer": "30厘米",
    "category": "geometry",
    "categoryName": "一、几何图形与角度周长",
    "id": "geometry-1",
    "source": "第1次测试 第1题",
    "image": "/question-images/image1.png"
  },
  {
    "kind": "blank",
    "prompt": "如图所示，由三条直线相交而成，角2等于50度，角3等于55度，角1等于多少度？",
    "answer": "75度",
    "category": "geometry",
    "categoryName": "一、几何图形与角度周长",
    "id": "geometry-2",
    "source": "第1次测试 第2题",
    "image": "/question-images/image2.png"
  },
  {
    "kind": "blank",
    "prompt": "图中，若 角3 + 角5 + 角7 = 198度，则 角1 + 角2 + 角4 + 角6 + 角8 = ______度。",
    "answer": "198度",
    "category": "geometry",
    "categoryName": "一、几何图形与角度周长",
    "id": "geometry-3",
    "source": "第1次测试 第3题",
    "image": "/question-images/image3.png"
  },
  {
    "kind": "blank",
    "prompt": "正三角形中，有三条平行于边的线，三个阴影五边形周长和为110，正中间的白色三角形周长为10，则靠边的三个白色三角形周长和为多少？",
    "answer": "60",
    "category": "geometry",
    "categoryName": "一、几何图形与角度周长",
    "id": "geometry-4",
    "source": "第1次测试 第4题",
    "image": "/question-images/image4.png"
  },
  {
    "kind": "blank",
    "prompt": "将长方形的纸片ABCD按图折叠压平，使三角形DCF落在三角形DEF的位置，顶点E恰落在边AB上，已知 角1 = 20度，那么 角2 是多少度？",
    "answer": "40度",
    "category": "geometry",
    "categoryName": "一、几何图形与角度周长",
    "id": "geometry-5",
    "source": "第1次测试 第5题",
    "image": "/question-images/image5.png"
  },
  {
    "kind": "blank",
    "prompt": "如图所示，正方形ABCD的边长是18，E是CD中点，且ABFH是长方形，两个阴影三角形面积相等，那么四边形AEFB的面积是多少？",
    "answer": "216",
    "category": "geometry",
    "categoryName": "一、几何图形与角度周长",
    "id": "geometry-6",
    "source": "第1次测试 第6题",
    "image": "/question-images/image6.png"
  },
  {
    "kind": "blank",
    "prompt": "图中外侧的四边形是一边长为10厘米的正方形，阴影部分的面积是______平方厘米。（类弦图模型）",
    "answer": "53平方厘米",
    "category": "geometry",
    "categoryName": "一、几何图形与角度周长",
    "id": "geometry-7",
    "source": "第1次测试 第7题",
    "image": "/question-images/image7.png"
  },
  {
    "kind": "blank",
    "prompt": "在五边形ABCDE中，其中 角A为60度，其余的角均为120度，BC=3，CD=2，DE=1，求这个五边形的周长。",
    "answer": "14",
    "category": "geometry",
    "categoryName": "一、几何图形与角度周长",
    "id": "geometry-8",
    "source": "第1次测试 第8题",
    "image": "/question-images/image8.png"
  },
  {
    "kind": "blank",
    "prompt": "汽车以每小时72千米的速度笔直地开向寂静的山谷，驾驶员按一声喇叭，4秒后听到大山反射的回声。已知声音速度是每秒340米，听到回声时汽车离大山的距离是多少米？",
    "answer": "640米",
    "category": "travel",
    "categoryName": "二、行程问题",
    "id": "travel-1",
    "source": "第1次测试 第1题",
    "image": "/question-images/image9.png"
  },
  {
    "kind": "blank",
    "prompt": "甲、乙两车从A、B两地同时出发相向而行，5小时相遇；如果乙车提前1小时出发，则差13千米到中点时与甲车相遇；如果甲车提前1小时出发，则过中点37千米后与乙车相遇。那么甲车与乙车的速度差是多少千米/时？",
    "answer": "10千米/时",
    "category": "travel",
    "categoryName": "二、行程问题",
    "id": "travel-2",
    "source": "第1次测试 第2题",
    "image": "/question-images/image10.png"
  },
  {
    "kind": "blank",
    "prompt": "一列火车通过一座长430米的大桥用了30秒，通过一条长2180米的隧道时速度提高了一倍，结果只用了50秒。这列火车长多少米？",
    "answer": "320米",
    "category": "travel",
    "categoryName": "二、行程问题",
    "id": "travel-3",
    "source": "第1次测试 第3题",
    "image": "/question-images/image11.png"
  },
  {
    "kind": "blank",
    "prompt": "每天父亲下班后刚好在学校放学时骑电动车赶到学校接女儿回家。有一天学校提前放学，女儿步行10分钟后遇到父亲，坐车到家比平时迟到1分钟，原因是父亲下班比平时晚7分钟。求学校提前了几分钟放学？",
    "answer": "6分钟",
    "category": "travel",
    "categoryName": "二、行程问题",
    "id": "travel-4",
    "source": "第1次测试 第4题",
    "image": "/question-images/image12.png"
  },
  {
    "kind": "choice",
    "prompt": "The average of four different numbers is 18. And the least of the four numbers is 3. What is the least possible value of the biggest of the four numbers?",
    "answer": "C. 24",
    "category": "average",
    "categoryName": "三、平均数问题与统计",
    "id": "average-1",
    "source": "第1次测试 第1题",
    "image": "/question-images/image13.png"
  },
  {
    "kind": "blank",
    "prompt": "小鸡发现小熊、小狗和小兔三人的平均用时为4分钟，而小熊、小狗、小兔和小鸭四人的平均用时为5分钟。请问小鸭在这项比赛中用时多少分钟？",
    "answer": "8分钟",
    "category": "average",
    "categoryName": "三、平均数问题与统计",
    "id": "average-2",
    "source": "第1次测试 第2题",
    "image": "/question-images/image14.png"
  },
  {
    "kind": "blank",
    "prompt": "某校男老师的平均年龄是27岁，女老师的平均年龄是32岁，全体老师平均年龄是30岁。若男老师比女老师少13名，该校共有多少名老师？",
    "answer": "65名",
    "category": "average",
    "categoryName": "三、平均数问题与统计",
    "id": "average-3",
    "source": "第1次测试 第3题",
    "image": "/question-images/image15.png"
  },
  {
    "kind": "blank",
    "prompt": "某篮球运动员参加了10场比赛，在第6、7、8、9场分别得23、14、11、20分，前9场平均分比前5场高。若10场平均分超过18分，他在第10场比赛至少得多少分？",
    "answer": "29分",
    "category": "average",
    "categoryName": "三、平均数问题与统计",
    "id": "average-4",
    "source": "第1次测试 第4题",
    "image": "/question-images/image16.png"
  },
  {
    "kind": "blank",
    "prompt": "甲班小迎和乙班小春：甲乙两班总分一样；小春若去甲班则两班平均分一样；小迎若去乙班则两班人数一样；老师说小迎比两班总平均分低12分，小春比小迎高54分。求小迎得分。",
    "answer": "30分",
    "category": "average",
    "categoryName": "三、平均数问题与统计",
    "id": "average-5",
    "source": "第1次测试 第5题",
    "image": "/question-images/image17.png"
  },
  {
    "kind": "blank",
    "prompt": "四、五、六年级共植树110棵，六年级植的棵数是四年级的3倍少1棵，五年级植的棵数是四年级的2倍多3棵，那么六年级植树多少棵？",
    "answer": "53棵",
    "category": "word-problems",
    "categoryName": "四、和差倍、鸡兔同笼与盈亏问题",
    "id": "word-problems-1",
    "source": "第1次测试 第1题",
    "image": "/question-images/image18.png"
  },
  {
    "kind": "blank",
    "prompt": "四年级4个班，不算甲班其余三班共131人；不算丁班其余三班共134人；乙、丙两班总人数比甲、丁两班少1人。这四个班共有多少人？",
    "answer": "177人",
    "category": "word-problems",
    "categoryName": "四、和差倍、鸡兔同笼与盈亏问题",
    "id": "word-problems-2",
    "source": "第1次测试 第2题",
    "image": "/question-images/image19.png"
  },
  {
    "kind": "blank",
    "prompt": "小悦和大悦糖果不到20颗。大悦先分给小悦一些后小悦是大悦的3倍；小悦又把大悦分给自己数量的3倍返还，大悦是小悦的3倍。原来共有多少颗糖果？",
    "answer": "12颗",
    "category": "word-problems",
    "categoryName": "四、和差倍、鸡兔同笼与盈亏问题",
    "id": "word-problems-3",
    "source": "第1次测试 第3题",
    "image": "/question-images/image20.png"
  },
  {
    "kind": "blank",
    "prompt": "老师将一些苹果和梨平分给全班同学，分完后苹果剩2个，梨剩7个，且每人分得梨是苹果的2倍；若先分11人每人各7个，剩下的平分其余同学，每人梨是苹果的3倍恰好分完。苹果和梨共有多少个？",
    "answer": "474个",
    "category": "word-problems",
    "categoryName": "四、和差倍、鸡兔同笼与盈亏问题",
    "id": "word-problems-4",
    "source": "第1次测试 第4题",
    "image": "/question-images/image21.png"
  },
  {
    "kind": "choice",
    "prompt": "In Jen and Berry's ice cream shop, 12 scoops of vanilla ice cream are sold for 36, 16 scoops of chocolate ice cream are sold for 64, 18 scoops of strawberry ice cream are sold for 81, and 10 scoops of mint ice cream are sold for 35, Which flavor is the most expensive per scoop to buy?",
    "answer": "C. strawberry",
    "category": "word-problems",
    "categoryName": "四、和差倍、鸡兔同笼与盈亏问题",
    "id": "word-problems-5",
    "source": "第1次测试 第5题",
    "image": "/question-images/image22.png"
  },
  {
    "kind": "blank",
    "prompt": "有甲、乙、丙三个人，当甲的年龄是乙的2倍时丙22岁；当乙的年龄是丙的2倍时甲31岁；当甲60岁时，丙是多少岁？",
    "answer": "50岁",
    "category": "word-problems",
    "categoryName": "四、和差倍、鸡兔同笼与盈亏问题",
    "id": "word-problems-6",
    "source": "第1次测试 第6题",
    "image": "/question-images/image23.png"
  },
  {
    "kind": "blank",
    "prompt": "一个笼子里关着许多只鸡和兔，鸡的头数与兔的头数和为24，但鸡的脚数比兔的脚数少12，笼子里有多少只鸡？",
    "answer": "14只",
    "category": "word-problems",
    "categoryName": "四、和差倍、鸡兔同笼与盈亏问题",
    "id": "word-problems-7",
    "source": "第1次测试 第7题",
    "image": "/question-images/image24.png"
  },
  {
    "kind": "blank",
    "prompt": "60人参加脑筋急转弯答题游戏，共有10道题，每道题每人都答1次，共答对了452次。已知每人都至少答对了6道题，且只答对6道题的有21人，只答对8道题的有12人，只答对7道题和只答对9道题的人数一样多。那么10道题全答对的有多少人？",
    "answer": "7人",
    "category": "word-problems",
    "categoryName": "四、和差倍、鸡兔同笼与盈亏问题",
    "id": "word-problems-8",
    "source": "第1次测试 第8题",
    "image": "/question-images/image25.png"
  },
  {
    "kind": "blank",
    "prompt": "熊大和熊二为了阻止光头强偷摘香蕉，至少会有一个在森林里巡逻。熊大单人巡逻光头强每分摘8个；熊二单人摘10个；两人一起巡逻摘4个。12分钟共摘88个，熊大巡逻时间是熊二的2倍。熊大共巡逻了几分钟？",
    "answer": "10分钟",
    "category": "word-problems",
    "categoryName": "四、和差倍、鸡兔同笼与盈亏问题",
    "id": "word-problems-9",
    "source": "第2次测试 第1题",
    "image": "/question-images/image26.png"
  },
  {
    "kind": "blank",
    "prompt": "王叔叔购买了一些水果糖和牛奶糖，其中水果糖是牛奶糖的2倍还多20块。每袋装有6块牛奶糖和8块水果糖，最后牛奶糖全部装完但水果糖还剩下100块。王叔叔一共购买了多少块糖？",
    "answer": "380块",
    "category": "word-problems",
    "categoryName": "四、和差倍、鸡兔同笼与盈亏问题",
    "id": "word-problems-10",
    "source": "第2次测试 第2题",
    "image": "/question-images/image27.png"
  },
  {
    "kind": "blank",
    "prompt": "计算：28 × 7 × 25 + 12 × 7 × 25 + 7 × 11 × 3 + 11 × 4",
    "answer": "7275",
    "category": "operations",
    "categoryName": "五、定义新运算与计算技巧",
    "id": "operations-1",
    "source": "第1次测试 第1题",
    "image": "/question-images/image28.png"
  },
  {
    "kind": "blank",
    "prompt": "对于任意自然数 a、b，若 a、b 奇偶性相同，a (+) b = (a + b) ÷ 2；若奇偶性不同，a (+) b = (a + b + 1) ÷ 2。求 1 (+) 3 (+) 5 (+) 7 (+) 9 的值。",
    "answer": "8",
    "category": "operations",
    "categoryName": "五、定义新运算与计算技巧",
    "id": "operations-2",
    "source": "第1次测试 第2题",
    "image": "/question-images/image29.png"
  },
  {
    "kind": "blank",
    "prompt": "定义新运算 A ※ B 表示 A、B 两个数中较大数减去较小数的差。求 1 ※ 2 ※ 3 ※ ... ※ 99 ※ 100 的值。",
    "answer": "50",
    "category": "operations",
    "categoryName": "五、定义新运算与计算技巧",
    "id": "operations-3",
    "source": "第1次测试 第3题",
    "image": "/question-images/image30.png"
  },
  {
    "kind": "blank",
    "prompt": "规定 a & b = a × (a+1) × (a+2) × ... × (a+b-1)，如果 (M & 3) & 2 = 600，求 M。",
    "answer": "2",
    "category": "operations",
    "categoryName": "五、定义新运算与计算技巧",
    "id": "operations-4",
    "source": "第1次测试 第4题",
    "image": "/question-images/image31.png"
  },
  {
    "kind": "blank",
    "prompt": "设“△”满足 2 △ 3 = 2+3+4=9，7 △ 5 = 7+8+9+10+11=45。若自然数 a、b 符合 a △ b = 90，满足条件的 a、b 有几组？",
    "answer": "6组",
    "category": "operations",
    "categoryName": "五、定义新运算与计算技巧",
    "id": "operations-5",
    "source": "第1次测试 第5题",
    "image": "/question-images/image32.png"
  },
  {
    "kind": "blank",
    "prompt": "规定新运算 *：a * b = a × (a+1) × ... × (a+b-1)。如果 (y * 3) * 2 = 3660，求 y。",
    "answer": "3",
    "category": "operations",
    "categoryName": "五、定义新运算与计算技巧",
    "id": "operations-6",
    "source": "第1次测试 第6题",
    "image": "/question-images/image33.png"
  },
  {
    "kind": "blank",
    "prompt": "计算：444 × 443443444 - 443 × 444444443",
    "answer": "887",
    "category": "operations",
    "categoryName": "五、定义新运算与计算技巧",
    "id": "operations-7",
    "source": "第1次测试 第7题",
    "image": "/question-images/image34.png"
  },
  {
    "kind": "blank",
    "prompt": "计算 (336个142857组成的2016位数) × (2018个9组成的2018位数) 的各个数位上数字之和。",
    "answer": "18162",
    "category": "operations",
    "categoryName": "五、定义新运算与计算技巧",
    "id": "operations-8",
    "source": "第1次测试 第8题",
    "image": "/question-images/image35.png"
  },
  {
    "kind": "blank",
    "prompt": "某等差数列的第一项是5，第10项是59，那么这个数列的前18项和是多少？",
    "answer": "1008",
    "category": "number-theory",
    "categoryName": "六、数列与数论综合",
    "id": "number-theory-1",
    "source": "第1次测试 第1题",
    "image": "/question-images/image36.png"
  },
  {
    "kind": "blank",
    "prompt": "某个两位数是2的倍数，减1是3的倍数，加2是4的倍数，加3是5的倍数，那么这个两位数最大是多少？",
    "answer": "82",
    "category": "number-theory",
    "categoryName": "六、数列与数论综合",
    "id": "number-theory-2",
    "source": "第1次测试 第2题",
    "image": "/question-images/image37.png"
  },
  {
    "kind": "blank",
    "prompt": "商店里有六箱货物，分别重16、21、21、22、23、34千克，两个顾客买走了其中五箱，已知一个顾客买的货物重量是另一个顾客的2倍。那么商店剩下的一箱货物重多少千克？",
    "answer": "23千克",
    "category": "number-theory",
    "categoryName": "六、数列与数论综合",
    "id": "number-theory-3",
    "source": "第1次测试 第3题",
    "image": "/question-images/image38.png"
  },
  {
    "kind": "blank",
    "prompt": "斐波那契数列：1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...。问这串数的前100个数中有多少个偶数？",
    "answer": "33个",
    "category": "number-theory",
    "categoryName": "六、数列与数论综合",
    "id": "number-theory-4",
    "source": "第1次测试 第4题",
    "image": "/question-images/image39.png"
  },
  {
    "kind": "blank",
    "prompt": "韩老师给班里的小朋友们发苹果，如果第一个人发1个，后面每个人比前一个人多发1个，正好发完；如果第一个人发10个，后面每个人比前一个人多发2个，恰好有9个人没有苹果，那么韩老师一共有多少个苹果？",
    "answer": "190个",
    "category": "number-theory",
    "categoryName": "六、数列与数论综合",
    "id": "number-theory-5",
    "source": "第1次测试 第5题",
    "image": "/question-images/image40.png"
  },
  {
    "kind": "blank",
    "prompt": "一个三位数等于其各个数位上数字的阶乘之和，这个三位数是多少？",
    "answer": "145",
    "category": "number-theory",
    "categoryName": "六、数列与数论综合",
    "id": "number-theory-6",
    "source": "第1次测试 第6题",
    "image": "/question-images/image41.png"
  },
  {
    "kind": "blank",
    "prompt": "在黑板上任意写一个自然数，在不是它的因数中找到最小的自然数替换原数，直到出现2为止。对于任意自然数，最多擦几次黑板就会出现2？",
    "answer": "3次",
    "category": "number-theory",
    "categoryName": "六、数列与数论综合",
    "id": "number-theory-7",
    "source": "第1次测试 第7题",
    "image": "/question-images/image42.png"
  },
  {
    "kind": "blank",
    "prompt": "一个不含0且数字互不相同的五位数，它的后三位数字组成的数是前三位数字组成的数的7倍，那么这个五位数是多少？",
    "answer": "12896",
    "category": "number-theory",
    "categoryName": "六、数列与数论综合",
    "id": "number-theory-8",
    "source": "第1次测试 第8题",
    "image": "/question-images/image43.png"
  },
  {
    "kind": "blank",
    "prompt": "一次数学竞赛中，前10名的成绩恰好构成一个等差数列，考试满分100分，每个同学得分都是整数，第3、4、5、6名一共得了354分，又知道纳纳得了96分，那么第10名得了多少分？",
    "answer": "75分",
    "category": "number-theory",
    "categoryName": "六、数列与数论综合",
    "id": "number-theory-9",
    "source": "第2次测试 第1题",
    "image": "/question-images/image44.png"
  },
  {
    "kind": "blank",
    "prompt": "等差数列 a1, a2, ..., a2011 共2011项。已知 a1 + a1005 + a1008 + a2010 = 200，求前2011项的和。",
    "answer": "100550",
    "category": "number-theory",
    "categoryName": "六、数列与数论综合",
    "id": "number-theory-10",
    "source": "第2次测试 第2题",
    "image": "/question-images/image45.png"
  },
  {
    "kind": "blank",
    "prompt": "商店里有七箱货物，分别重15、16、19、20、23、26、31千克，两个顾客买走了其中六箱，已知一个顾客买的货物重量是另一个顾客的3倍。那么商店剩下的一箱货物重多少千克？",
    "answer": "26千克",
    "category": "number-theory",
    "categoryName": "六、数列与数论综合",
    "id": "number-theory-11",
    "source": "第2次测试 第3题",
    "image": "/question-images/image46.png"
  },
  {
    "kind": "blank",
    "prompt": "把连续自然数 1、2、3、...、n 连乘到一起，如果已知这个乘积的最末27位恰好都是零，那么 n 最小应该是多少？",
    "answer": "115",
    "category": "number-theory",
    "categoryName": "六、数列与数论综合",
    "id": "number-theory-12",
    "source": "第2次测试 第4题",
    "image": "/question-images/image47.png"
  },
  {
    "kind": "blank",
    "prompt": "某班学生人数大于20而小于30，其中女同学的人数是男同学的2倍。全班报名参加“纳约杯”的人数是未报名人数的3倍少1人。这个班有学生多少名？",
    "answer": "27名",
    "category": "number-theory",
    "categoryName": "六、数列与数论综合",
    "id": "number-theory-13",
    "source": "第2次测试 第5题",
    "image": "/question-images/image48.png"
  },
  {
    "kind": "blank",
    "prompt": "相邻两个数字的差都是2的三位数叫做“奇怪数”，用1、2、3、4、5能组成几个“奇怪数”（可以包含重复数字）？",
    "answer": "8个",
    "category": "counting",
    "categoryName": "七、计数与排列组合",
    "id": "counting-1",
    "source": "第1次测试 第1题",
    "image": "/question-images/image49.png"
  },
  {
    "kind": "blank",
    "prompt": "如图，一笔画出这个图形，有多少种不同的画法？",
    "answer": "72种",
    "category": "counting",
    "categoryName": "七、计数与排列组合",
    "id": "counting-2",
    "source": "第1次测试 第2题",
    "image": "/question-images/image50.png"
  },
  {
    "kind": "blank",
    "prompt": "图中一共能数出多少个三角形？",
    "answer": "72个",
    "category": "counting",
    "categoryName": "七、计数与排列组合",
    "id": "counting-3",
    "source": "第1次测试 第3题",
    "image": "/question-images/image51.png"
  },
  {
    "kind": "blank",
    "prompt": "编号从1到15的15个白球排成一行，现按照如下方法涂黑色：(1)涂2个球；(2)被涂色的2个球的编号之差大于5。那么不同的涂色方法有多少种？",
    "answer": "45种",
    "category": "counting",
    "categoryName": "七、计数与排列组合",
    "id": "counting-4",
    "source": "第1次测试 第4题",
    "image": "/question-images/image52.png"
  },
  {
    "kind": "blank",
    "prompt": "某校举办乒乓球比赛，某班出4名男生，3名女生组成一个队，分别参加男双、女双和混双比赛，则这7名队员组成的乒乓球队可以打多少场不同的比赛？",
    "answer": "21场",
    "category": "counting",
    "categoryName": "七、计数与排列组合",
    "id": "counting-5",
    "source": "第1次测试 第5题",
    "image": "/question-images/image53.png"
  },
  {
    "kind": "blank",
    "prompt": "3×2 网格是由6个相同的小正方形构成。将其中4个小正方形涂上灰色，要求每行每列都有涂色的小正方形。经旋转后两种涂色的网格相同，则视为相同的涂法，那么有多少种不同的涂色方法？",
    "answer": "7种",
    "category": "counting",
    "categoryName": "七、计数与排列组合",
    "id": "counting-6",
    "source": "第1次测试 第6题",
    "image": "/question-images/image54.png"
  },
  {
    "kind": "blank",
    "prompt": "用五种不同的颜色涂正方体的六个面，五种颜色都要使用，如果相邻的两个面不能涂同种颜色，共多少种不同的涂色方法？（翻转相同视为同一种）",
    "answer": "15种",
    "category": "counting",
    "categoryName": "七、计数与排列组合",
    "id": "counting-7",
    "source": "第1次测试 第7题",
    "image": "/question-images/image55.png"
  },
  {
    "kind": "blank",
    "prompt": "从1~10中每次取两个不同的数相加，和大于10的共有多少种取法？",
    "answer": "25种",
    "category": "counting",
    "categoryName": "七、计数与排列组合",
    "id": "counting-8",
    "source": "第1次测试 第8题",
    "image": "/question-images/image56.png"
  },
  {
    "kind": "blank",
    "prompt": "现在要从图形左上角的A点走到右下角的B点，如果每个点都只能经过一次，那么一共有多少种不同的走法？",
    "answer": "16种",
    "method": "通过节点分支树形图进行不重复路径枚举，汇总经过各中间顶点的路径数，总计得到 16 种不同的走法。",
    "category": "counting",
    "categoryName": "七、计数与排列组合",
    "id": "counting-9",
    "source": "第2次测试 第1题",
    "image": "/question-images/image57.png"
  },
  {
    "kind": "blank",
    "prompt": "将4个 1×1×2 的小长方体木块搭拼成一个 2×2×2 的紧靠墙角码放的大立方体，共有多少种不同的搭拼情况？",
    "answer": "9种",
    "category": "counting",
    "categoryName": "七、计数与排列组合",
    "id": "counting-10",
    "source": "第2次测试 第2题",
    "image": "/question-images/image58.png"
  },
  {
    "kind": "blank",
    "prompt": "至少有两位，任意相邻两数字左边小于右边的数叫“上升数”。用5、6、7、8这四个数字，可以组成多少个“上升数”？",
    "answer": "11个",
    "category": "counting",
    "categoryName": "七、计数与排列组合",
    "id": "counting-11",
    "source": "第2次测试 第3题",
    "image": "/question-images/image59.png"
  },
  {
    "kind": "blank",
    "prompt": "圆周上沿顺时针方向均匀排列了10个点，以这些点为端点连接5条线段，要求任意两条线段之间没有公共点，共有多少种连接方式？",
    "answer": "42种",
    "category": "counting",
    "categoryName": "七、计数与排列组合",
    "id": "counting-12",
    "source": "第2次测试 第4题",
    "image": "/question-images/image60.png"
  },
  {
    "kind": "blank",
    "prompt": "一个三位数 abc 满足 a × b × c 仍然是一个三位数，满足条件的 abc 最小为多少？",
    "answer": "269",
    "category": "logic",
    "categoryName": "八、抽屉原理与逻辑推理",
    "id": "logic-1",
    "source": "第1次测试 第1题",
    "image": "/question-images/image61.png"
  },
  {
    "kind": "blank",
    "prompt": "甲、乙、丙三人进行羽毛球比赛，每局2人单打，另外1人当裁判。甲共打了7局，当了3局裁判；乙共打了5局。那么丙打了多少局？",
    "answer": "8局",
    "category": "logic",
    "categoryName": "八、抽屉原理与逻辑推理",
    "id": "logic-2",
    "source": "第1次测试 第2题",
    "image": "/question-images/image62.png"
  },
  {
    "kind": "blank",
    "prompt": "“三脚猫”有3只脚，“波斯猫”有4只脚。这两种猫站成一排共计10只。已知与每只三脚猫相邻的猫的脚总数为偶数，与每只波斯猫相邻的猫的脚的总数为奇数。这一排猫共有多少只脚？",
    "answer": "36只",
    "category": "logic",
    "categoryName": "八、抽屉原理与逻辑推理",
    "id": "logic-3",
    "source": "第1次测试 第3题",
    "image": "/question-images/image63.png"
  },
  {
    "kind": "blank",
    "prompt": "有四头奶牛，每头要么正常要么变异。正常牛4条腿且永远说假话；变异牛3或5条腿且永远说真话。主人问四头牛一共有多少条腿，回答分别为13、14、15、16。这四头奶牛一共有多少条腿？",
    "answer": "15条",
    "category": "logic",
    "categoryName": "八、抽屉原理与逻辑推理",
    "id": "logic-4",
    "source": "第1次测试 第4题",
    "image": "/question-images/image64.png"
  },
  {
    "kind": "blank",
    "prompt": "请比较：A = 51的101次方 与 B = 101的阶乘(101!)。它们之中哪个计算结果更大？",
    "answer": "A",
    "category": "logic",
    "categoryName": "八、抽屉原理与逻辑推理",
    "id": "logic-5",
    "source": "第1次测试 第5题",
    "image": "/question-images/image65.png"
  },
  {
    "kind": "blank",
    "prompt": "一个骰子六个面上的数字分别为0, 1, 2, 3, 4, 5，掷骰子求和，当总点数超过12时停止，这种掷法最有可能出现的总点数是多少？",
    "answer": "13",
    "category": "logic",
    "categoryName": "八、抽屉原理与逻辑推理",
    "id": "logic-6",
    "source": "第1次测试 第6题",
    "image": "/question-images/image66.png"
  },
  {
    "kind": "blank",
    "prompt": "用火柴棒摆出各位数字互不相同的五位数。添1根火柴差最大为4；去1根差最大为600；移1根差最大为10000。原来的五位数是多少？",
    "answer": "24785",
    "category": "logic",
    "categoryName": "八、抽屉原理与逻辑推理",
    "id": "logic-7",
    "source": "第1次测试 第7题",
    "image": "/question-images/image67.png"
  },
  {
    "kind": "blank",
    "prompt": "第七次全国人口普查显示北京市人口为21893095人，头发数量不超过15万根，那么全北京市至少有多少人有同样多的头发？",
    "answer": "146人",
    "category": "logic",
    "categoryName": "八、抽屉原理与逻辑推理",
    "id": "logic-8",
    "source": "第1次测试 第8题",
    "image": "/question-images/image68.png"
  },
  {
    "kind": "blank",
    "prompt": "有5筐重量互不相同的苹果，两两一起称得到8个不同的重量：14, 15, 18, 19, 22, 23, 24, 27千克，则这5筐苹果的重量之和是多少千克？",
    "answer": "51千克",
    "category": "logic",
    "categoryName": "八、抽屉原理与逻辑推理",
    "id": "logic-9",
    "source": "第2次测试 第1题",
    "image": "/question-images/image69.png"
  },
  {
    "kind": "blank",
    "prompt": "学校买来科幻、文艺、历史3种图书若干本，每名学生从中任意借3本，那么最少有多少名学生才能保证有两人所借图书的种类完全相同？",
    "answer": "11人",
    "category": "logic",
    "categoryName": "八、抽屉原理与逻辑推理",
    "id": "logic-10",
    "source": "第2次测试 第2题",
    "image": "/question-images/image70.png"
  },
  {
    "kind": "blank",
    "prompt": "If each digit of my 5-digit ID code is different, the sum of its digits is at most: ______",
    "answer": "35",
    "category": "logic",
    "categoryName": "八、抽屉原理与逻辑推理",
    "id": "logic-11",
    "source": "第2次测试 第3题",
    "image": "/question-images/image71.png"
  },
  {
    "kind": "blank",
    "prompt": "甲、乙、丙三人乘飞机行李超重，甲付20元，乙付40元，丙付60元，三人行李共重150千克；如果一人带这些行李需付240元。每人可以免费携带多少千克行李？",
    "answer": "30千克",
    "category": "logic",
    "categoryName": "八、抽屉原理与逻辑推理",
    "id": "logic-12",
    "source": "第2次测试 第4题",
    "image": "/question-images/image72.png"
  },
  {
    "kind": "blank",
    "prompt": "游泳队中A, B, C三名队员制定周训练计划（见原题规则）。谁在周二、四、日训练？",
    "answer": "A",
    "category": "logic",
    "categoryName": "八、抽屉原理与逻辑推理",
    "id": "logic-13",
    "source": "第2次测试 第5题",
    "image": "/question-images/image73.png"
  },
  {
    "kind": "blank",
    "prompt": "有两种卡片各10张，A种两面写1和3，B种两面写2和5。纳纳、约约各拿10张。翻转后约约有多少张卡片数字2向上？",
    "answer": "3张",
    "category": "logic",
    "categoryName": "八、抽屉原理与逻辑推理",
    "id": "logic-14",
    "source": "第2次测试 第6题",
    "image": "/question-images/image74.png"
  },
  {
    "kind": "blank",
    "prompt": "A、B、C三人参加10道正误题考试均得70分，结合答卷表格，第6题的正确答案是什么？",
    "answer": "错（×）",
    "method": "每个人均错3题。对比三人答卷的一致题与冲突题进行逻辑假设排除，得出第6题的正确答案为“错”（×）。",
    "category": "logic",
    "categoryName": "八、抽屉原理与逻辑推理",
    "id": "logic-15",
    "source": "第2次测试 第7题",
    "image": "/question-images/image75.png"
  },
  {
    "kind": "choice",
    "prompt": "It is 1:00 p.m. now. I spent 20 minutes eating and finished eating 200 minutes ago. At what time did I begin eating?",
    "answer": "A. 9:20 a.m.",
    "category": "cycles",
    "categoryName": "九、周期、报数与操作应用",
    "id": "cycles-1",
    "source": "第1次测试 第1题",
    "image": "/question-images/image76.png"
  },
  {
    "kind": "blank",
    "prompt": "12位小朋友围成一圈顺时针报数3圈，每次比前一人大且差固定。纳纳最先报，约约最后报。纳纳3次报数和为135，约约3次报数和为234，纳纳第1次报的数是多少？",
    "answer": "9",
    "category": "cycles",
    "categoryName": "九、周期、报数与操作应用",
    "id": "cycles-2",
    "source": "第1次测试 第2题",
    "image": "/question-images/image77.png"
  },
  {
    "kind": "blank",
    "prompt": "报数拍手游戏：报7的倍数不含7拍1次，报含7但不是7的倍数拍2次，报既含7又是7的倍数拍3次。报到100共拍手多少次？",
    "answer": "52次",
    "category": "cycles",
    "categoryName": "九、周期、报数与操作应用",
    "id": "cycles-3",
    "source": "第1次测试 第3题",
    "image": "/question-images/image78.png"
  },
  {
    "kind": "blank",
    "prompt": "自然数 1~2021 顺时针排成一圈从1开始操作：第几步就划掉几个数再保留1个数。直到全部划掉，最后一个被划掉的数是多少？",
    "answer": "1769",
    "method": "通过累计划去与保留数的周期进行同余与逆推，第62步结束时保留2015，最后一步保留并划去的数为 1769。",
    "category": "cycles",
    "categoryName": "九、周期、报数与操作应用",
    "id": "cycles-4",
    "source": "第1次测试 第4题",
    "image": "/question-images/image79.png"
  },
  {
    "kind": "blank",
    "prompt": "50位同学围成一圈顺时针报数：第1人报1，跳过1人第3人报2，跳过2人第6人报3……报到2020为止，报2020的同学第一次报的是几？",
    "answer": "4",
    "category": "cycles",
    "categoryName": "九、周期、报数与操作应用",
    "id": "cycles-5",
    "source": "第1次测试 第5题",
    "image": "/question-images/image80.png"
  },
  {
    "kind": "blank",
    "prompt": "把一根绳子对折5次，再从中间剪5刀，可以分成多少段？",
    "answer": "161段",
    "category": "cycles",
    "categoryName": "九、周期、报数与操作应用",
    "id": "cycles-6",
    "source": "第1次测试 第6题",
    "image": "/question-images/image81.png"
  },
  {
    "kind": "blank",
    "prompt": "一个 5×5×5 的正方体由若干个 1×1×1 小正方体组成，三向打通挖空15列，剩下的小立方体还有多少个？",
    "answer": "68个",
    "category": "cycles",
    "categoryName": "九、周期、报数与操作应用",
    "id": "cycles-7",
    "source": "第1次测试 第7题",
    "image": "/question-images/image82.png"
  },
  {
    "kind": "choice",
    "prompt": "12月31日无雪，之后每晚降雪4cm，每天上午融化2cm，1月4日下午地面雪厚多少厘米？",
    "answer": "B. 6 cm",
    "category": "cycles",
    "categoryName": "九、周期、报数与操作应用",
    "id": "cycles-8",
    "source": "第1次测试 第8题",
    "image": "/question-images/image83.png"
  },
  {
    "kind": "blank",
    "prompt": "一排电灯全亮，大白从左第1盏起每隔2盏按一下，小黑从右第1盏起每隔4盏按一下，最后66盏亮着，原来最多有多少盏电灯？",
    "answer": "113盏",
    "category": "cycles",
    "categoryName": "九、周期、报数与操作应用",
    "id": "cycles-9",
    "source": "第2次测试 第1题",
    "image": "/question-images/image84.png"
  },
  {
    "kind": "blank",
    "prompt": "将 1~5 填入数阵图，使每条线上数字之和与外圈4数之和相同，所有填法共有多少种？",
    "answer": "8种",
    "category": "number-grid",
    "categoryName": "十、数阵图与数独填数",
    "id": "number-grid-1",
    "source": "第1次测试 第1题",
    "image": "/question-images/image85.png"
  },
  {
    "kind": "blank",
    "prompt": "在五角星各区域空格内填入数字1、2、3、4，使得箭头指示的5个方向及不同颜色区域内数字均不重复，中心5个数字的总和是多少？",
    "answer": "13",
    "category": "number-grid",
    "categoryName": "十、数阵图与数独填数",
    "id": "number-grid-2",
    "source": "第1次测试 第2题",
    "image": "/question-images/image86.png"
  },
  {
    "kind": "blank",
    "prompt": "把 0~9 填入方格竖式中，上方格子数字总大于正下方，第四行的四位数是多少？",
    "answer": "9460",
    "method": "根据加法竖式进位与大小上下约束依次确定各行数字，第四行构成的四位数为 9460。",
    "category": "number-grid",
    "categoryName": "十、数阵图与数独填数",
    "id": "number-grid-3",
    "source": "第1次测试 第3题",
    "image": "/question-images/image87.png"
  }
];
