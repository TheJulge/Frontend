export const data = {
  offset: 'number',
  limit: 'number',
  count: 2,
  items: [
    {
      item: {
        id: '1',
        createdAt: '1분 전',
        result: 'rejected',
        read: false,
        application: {
          item: {
            id: 'string',
            status: 'rejected',
          },
          href: 'string',
        },
        notice: {
          item: {
            id: 'string',
            hourlyPay: 'number',
            description: 'HS 과일주스(2023-01-14 15:00~18:00)',
            startsAt: 'string',
            workhour: 'number',
            closed: 'boolean',
          },
          href: 'string',
        },
        links: [],
      },
    },
    {
      item: {
        id: '2',
        createdAt: '3분 전',
        result: 'accepted',
        read: false,
        application: {
          item: {
            id: 'string',
            status: 'accepted',
          },
          href: 'string',
        },
        notice: {
          item: {
            id: 'string',
            hourlyPay: 'number',
            description: 'HS 과일주스(2023-01-14 15:00~18:00)',
            startsAt: 'string',
            workhour: 'number',
            closed: 'boolean',
          },
          href: 'string',
        },
        links: [],
      },
    },
  ],
};
export default data;
