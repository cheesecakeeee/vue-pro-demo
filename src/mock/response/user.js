// export const getUserInfo = (option) => {
//   console.log(option)
//   return {
//     name: 'lalala'
//   }
// }

import Mock from 'mockjs'
export const getUserInfo = () => {
  const Random = Mock.Random
  const template = {
    'strMinMax|2-4': 'la',
    'strCount|2': 'eudora',
    'numAdd|+1': 6,
    'numMinMax|8-18': 9,
    'numFloat|1-100.1-2': 99.9,
    'bol1|1': true,
    'bolVal|3-4': true,
    'objCount|2': {a: 1, b: 2, c: 3},
    'objMinMax|2-4': {a: 11, b: 22, c:33, d: 44},
    'arr1|1': [4,2,5,0],
    'arrAdd|+2': [9,2,3,4,5,6],
    'arrMinMax|2-3': [7,9],
    'arrCount|3': [1,2,3],
    'fun': () => {
      return '属性值为函数形式'
    },
    'regexp1': /[a-z][A-Z][0-9]{2}/,
    '日期': Random.date('yyyy-MM-dd'),
    '邮箱': Mock.mock('@email'),
    '姓名': Mock.mock('@cfirst@clast'),
    '地区': Mock.mock('@province@city@county')
  }
  // 生成数组
  let i = 3
  let arr = []
  while(i--) {
    // console.log(i)
    arr.push(template)
  }
  return  Mock.mock(arr)
}