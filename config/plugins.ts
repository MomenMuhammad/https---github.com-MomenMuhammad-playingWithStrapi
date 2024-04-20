export default () => ({
    "paymob": {
        enabled: true,
        resolve: "./src/plugins/paymob",
        config: {}
    },
    "strapi-stripe":{
        enabled: true,
    }
});
