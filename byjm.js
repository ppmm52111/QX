/**************************************
[rewrite_local]

^http[s]?:\/\/.+\/api(\/video\/report_item?|\/live\/room\/detail?|\/video\/related?|\/video\/detail|\/social\/posts_info).*$ url script-request-header https://raw.githubusercontent.com/ppmm52111/QX/main/byjm.js

[mitm]
hostname = *.99.98.6

***************************************/
var headers = $request.headers;

headers['authorization'] = 'bearer 74f971f7251dd4a4c403e1a5f6fdeabb';

$done({headers: headers}
