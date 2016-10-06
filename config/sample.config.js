var config = {
    env: 'dev',
    port: 3003,
    flagpole: {
        tinu: {
            promo: true,
            released: true
        }
    },
    aws: {
        bucket: 'bucket-name',
        accessKey: 'access-key',
        secretKey: 'secret-key'
    },
    captcha: {
        siteKey: 'site-key',
        secretKey: 'secret-key'
    },
    mail: {
        apiKey: 'api-key',
        recipient: 'email@example.com'
    },
    cdn: {
        dev: {
            url: ''
        }
    }
};

module.exports = config;
