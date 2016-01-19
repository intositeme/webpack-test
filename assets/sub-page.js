__webpack_public_path__ = "js/";
require ('./js/world');
var extra = require.ensure(['./js/extra.js'], function(require) {

    const extra = require("./js/extra");
   	extra();
    /* ... */
});

/*define(['./js/extra'], function(extra) {
    console.log(extra); 
});*/