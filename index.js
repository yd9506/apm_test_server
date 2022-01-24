const Koa = require('koa');

const app = new Koa();
app.use(async (ctx) => {
  ctx.body = {
    RealtimeInstanceData: [
      {
        rejectRate: 100,
        heapUsed: 100,
        concurrentUser: 100,
        visitDay: 100,
        instanceName: 'test',
        responseTime: 150,
        visitHour: 1000,
        domainId: 'test',
        instanceDescription: 'This is apm test server',
        hitHour: 100,
        activeServiceRangeCount0: 100,
        activeServiceRangeCount1: 100,
        activeServiceRangeCount2: 100,
        activeServiceRangeCount3: 100,
        instanceId: 'testInstance',
        tps: 100,
        activeService: 5,
        procMemory: 1500,
        heapCommitted: 100,
        procCpu: 30,
      },
    ],
  };
});

app.listen(4500);
