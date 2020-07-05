import Mock from 'mockjs';

export default {
  getHomeData: () => {
    return {
      code: 20000,
      data: {
        videoData: [
          {
            name: 'JS',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'vue',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'react',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'ts',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'nodejs',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
        ]
      }
    }
  }
}