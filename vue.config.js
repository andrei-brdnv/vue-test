module.exports = {
    publicPath: '/vue-test',
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/scss/variables.scss";`
            }
        }
    }
}