require('dotenv').config();

module.exports = {
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIANui61pJRXLGWAQAAHIHAAAKAAAAY3JlZHMuanNvbpVUWbOiOBT+L3m9VrugLFbdqpFFRFRcUJGpeYgSIOwmAcEusU2rdvP8z03OEpJKlzvvMt+Q6yHFNkogaMv4OC4Aoy1C5ZUyAwBnLp+4iADvAgg2AMLqt1vEz5mJqOZktV73rq4v2mzp2ls71mZq8phZxJzsqK43fw6ICiPCf48puC7GROd6N6a0x9p4hWygmR2ra53eI8O8U5uVLTjstMnW6mxjt4tBUhJjgLtCJEKSIwMVGzhph8Eb4Ry27qhtU8VpBVOTszozSapbbjzmCMm9U62AVrPnX7y6*B7++HI222IkEgdhOqGke9RpHajWYbN5zjM5NXErsNFpkf0Rd8ioMMeYaHMoZZ82Xe00VcbUP+bI0arWq4dcDUkTU5KLfCqKLDLR6Zw325uvf1bPI14F2d24qJiA*mCZaWsdhxmXlyeE3YzOlNv*i52w9CQ1DVXfwr8DX58Er8f3g3J*3bTJ6mgm9n+S4*HgcBw7dDU2ujaXS8VPFdj4SjIEkp*Rr88I1Y+Dg1JTqUDltPOWQudzoek*Qecdstf62dkyXr27Vd7z*hQ1aS36G89o7JSeL9GGqaJC9qwestFpqEp6xcKAOtypKtOlEEN1Uz3RDRVUqWwTC9uOZsv7yZ+yoIRxHsOa4lTN1w*1aNbrWpbt6fE8WoMTww7j86gKAAU0Ygw3n23OtxHQC9aocuBLEnvWAmKTssGR6yRNcX3rLTFN5h5pqXlZBFoqipMTfFsba49E7voAMKkl8QpcibYcpy0iwRpTBAFIzKsDMlSzl3BtO67fAT4mlO2zskhy6H2o+nEIL5e8zNiuyS5Ku0AEjHuf24gxnAW05bHMILmEuEJKCBkFYx8mFP2cEBHkgTEjJfqZWiX3WuKnW3mxWthD0AHpUxDsgTEYcNxIEoV+byByY673B*12a8vCoviWIQY6IHle64+kkTQQxB7P90ReaG+2B4+fCNuCHmIQJxSMgTIvd9myp2vzKKkvS12fGMFECSbgc6IPa7yox5zWvd8bd7CYL+NhuneN0tof9nZoEdJMQyu4z4k7SZxis3n*hyJgDA7ybnuNq0GTNxG*Vpf03JfThcJvQ+u8U03ncErnBirfqn7Az7aGfs*nsnIyuTnqozS87TnrbWg7aBMcV9frwe9e68aXWx91gIcqfEG*NqM2mSjyfEs4uZtmdnykpXB01+K51m8q1mepbkaDs8t3ZfkaLdSwctTtsbm5jrB*c2TF9mV22CwVcW24NVFrOnNDKt9epn2GJvnxWOGnnVqt2l8fo2f2M9gq+N*avYC3Fus9Or*U+PGa*Esi5ROr16Ioph5u7Lk1T*TdIkqmB21oX3kxPNn5soGDzfzA7zXwePzVAUUCmZ+TFIwBzDySYw90AMnL1rNG5ue*aaZMAmMSvCZPIGWTzxzYOEWUwbQA474wGgz4EScMXrfWJC9mkIYtCfpwkpatqZtJUewYZB+xApP208oCPP4GUEsBAhQDFAAACAgA26LrWklFcsZYBAAAcgcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAgAQAAAAA',
  BOT_ADMIN: process.env.BOT_ADMIN || '233598710283',
  PORT: parseInt(process.env.PORT) || 20087,
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Celaxi',
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 074900,
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
