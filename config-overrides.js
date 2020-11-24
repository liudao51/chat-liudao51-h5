const {override, fixBabelImports, addLessLoader} = require('customize-cra');
const myTheme = require('./src/theme/my-theme.json');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        libraryDirectory: "es",
        style: true,
    }),
    addLessLoader({
        lessOptions: {
            strictMath: true,
            noIeCompat: true,
            javascriptEnabled: true,
            modifyVars: myTheme,
        }
        // cssLoaderOptions: {}, // .less file used css-loader option, not all CSS file.
        // cssModules: {
        //     localIdentName: "[path][name]__[local]--[hash:base64:5]", // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
        // },
    })
);
