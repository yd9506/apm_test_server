# APM 테스트 서버

## 사용법

```bash
git clone https://github.com/yd9506/apm_test_server.git
cd apm_test_serer
yarn install
yarn start
```

4500번 포트로 `Jeniffer v5` 형태 JSON 응답 전송

## 응답 형태

```JSON
{
    "RealtimeInstanceData": [
        {
            "rejectRate": 100,
            "heapUsed": 100,
            "concurrentUser": 100,
            "visitDay": 2000,
            "instanceName": "10000",
            "responseTime": 1000,
            "visitHour": 1000,
            "domainId": 1000,
            "instanceDescription": "10000",
            "hitHour": 1000,
            "instanceId": 10000,
            "activeServiceRandgeCount0": 1000,
            "activeServiceRandgeCount1": 1000,
            "activeServiceRandgeCount2": 1000,
            "activeServiceRandgeCount3": 1000,
            "tps": 1000,
            "activeService": 1,
            "procMemory": 4000,
            "heapCommitted": 1000,
            "procCPU": 45
        }
    ]
}
```