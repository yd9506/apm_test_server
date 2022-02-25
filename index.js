import Koa from 'koa';

const app = new Koa();
app.use(async (ctx) => {
  ctx.body = {
    RealtimeInstanceData: [
      {
        rejectRate: 100,
        heapUsed: 100,
        concurrentUser: 100,
        visitDay: 2000,
        instanceName: '10000',
        responseTime: 1000,
        visitHour: 1000,
        domainId: 1000,
        instanceDescription: '10000',
        hitHour: 1000,
        instanceId: 10000,
        activeServiceRandgeCount0: 1000,
        activeServiceRandgeCount1: 1000,
        activeServiceRandgeCount2: 1000,
        activeServiceRandgeCount3: 1000,
        tps: 1000,
        activeService: 1,
        procMemory: 4000,
        heapCommitted: 1000,
        procCPU: 55,
      },
    ],
  };
});

app.listen(4500);
