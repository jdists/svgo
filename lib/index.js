"use strict";
const svgo = require("svgo");
const jdistsUtil = require("jdists-util");
module.exports = (function (content, attrs, scope) {
    if (!content) {
        return content;
    }
    let plugins = [{
            cleanupIDs: {
                remove: false
            }
        }, {
            removeUnknownsAndDefaults: {
                keepDataAttrs: false,
            }
        }];
    let extend = null;
    if (attrs.extend) {
        extend = jdistsUtil.buildFunction(scope.execImport(attrs.extend), 'plugins');
        extend(plugins);
    }
    return new svgo({
        plugins: plugins
    }).optimize(content).then((svg) => {
        let match = content.match(/^[^\n\S]+/);
        let space = match ? match[0] : '';
        return Promise.resolve(space + svg.data);
    });
});
