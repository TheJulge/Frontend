const listMockData = {
  offset: 0,
  limit: 10,
  address: [],
  count: 0,
  hasNext: false,
  items: [
    {
      item: {
        id: '1',
        name: '너구리네 라면집',
        hourlyPay: 12000,
        startsAt: '2023.01.12 10:00 - 12:00 (2시간)',
        workhour: 9,
        description: 'string',
        closed: true,
        status: 'pending',
      },
      links: [],
    },
    {
      item: {
        id: '2',
        name: '감자네 수제비집',
        hourlyPay: 13000,
        startsAt: '2023.01.12 10:00 - 11:00 (1시간)',
        workhour: 10,
        description: 'string',
        closed: true,
        status: 'accepted',
      },
      links: [],
    },
    {
      item: {
        id: '3',
        name: '망곰이네 버거집',
        hourlyPay: 13000,
        startsAt: '2024.01.12 10:00 - 13:00 (3시간)',
        workhour: 11,
        description: 'string',
        closed: true,
        status: 'rejected',
      },
      links: [],
    },
    {
      item: {
        id: '4',
        name: '춘식이네 빵집',
        hourlyPay: 15000,
        startsAt: '2024.04.12 10:00 - 14:00 (4시간)',
        workhour: 11,
        description: 'string',
        closed: true,
        status: 'canceled',
      },
      links: [],
    },
  ],
  links: [
    {
      rel: 'self',
      description: '현재 페이지',
      method: 'GET',
      href: '/api/4-17/the-julge/notices?offset=0&limit=10',
    },
    {
      rel: 'prev',
      description: '이전 페이지',
      method: 'GET',
      href: '/api/4-17/the-julge/notices?offset=0&limit=10',
    },
    {
      rel: 'next',
      description: '다음 페이지',
      method: 'GET',
      href: '/api/4-17/the-julge/notices?offset=10&limit=10',
    },
  ],
};

export default listMockData;
