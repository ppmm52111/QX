/**************************************
[rewrite_local]


^http[s]?:\/\/.*\.douyin123\.cc\/index\.php\/App\/(Account\/Login|User\/Info|Index\/Update|Host\/Info).*$ url script-response-body https://raw.githubusercontent.com/ppmm52111/QX/main/jm.js
^http[s]?:\/\/.*\.douyin123\.cc url script-request-header https://raw.githubusercontent.com/ppmm52111/QX/main/tk.js

[mitm]
hostname = *douyin123*

***************************************/
