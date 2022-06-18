import Mock from 'mockjs'

import record from './record.json'

Mock.mock('/mock/record', {
  code: 200,
  message: '成功',
  ok: true,
  data: record
})
