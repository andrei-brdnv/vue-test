module.exports = {
    publicPath: '/',
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/scss/variables.scss";`
            }
        }
    }
}