const HTMLAsset = require('parcel-bundler/src/assets/HTMLAsset');

class HTMLAssetWithSrcset extends HTMLAsset {
    collectDependencies() {
        super.collectDependencies();
        this.ast.walk(node => {
            if (node.attrs) {
                for (let attr in node.attrs) {
                    if (node.tag === 'source' && attr === 'srcset') {
                        node.attrs[attr] = super.collectSrcSetDependencies(node.attrs[attr]);
                        this.isAstDirty = true;
                        continue;
                    }
                }
            }

            return node;
        });
    }
}

module.exports = HTMLAssetWithSrcset;