module.exports = function (bundler) {
    bundler.addAssetType('html', require.resolve('./src/assets/HTMLAssetWithSrcset.js'));
};
