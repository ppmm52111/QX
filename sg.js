#!name=sh
#!desc=解锁会员视频

[Script]

SHZB = type=http-response, pattern=^http[s]?:\/\/.*\.douyin123\.cc\/index\.php\/App\/(Account\/Login|User\/Info|Index\/Update).*$, requires-body=true, max-size=3145728, script-path=https://raw.githubusercontent.com/ppmm52111/QX/main/jm.js, timeout=60, script-update-interval=0
SHZB = type=http-request, pattern=^http[s]?:\/\/.*\.douyin123\.cc, requires-body=true, max-size=3145728, script-path=https://raw.githubusercontent.com/ppmm52111/QX/main/jm.js, timeout=60, script-update-interval=0

[MITM]

hostname = %APPEND% *douyin123*
