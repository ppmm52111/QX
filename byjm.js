port: 7890
socks-port: 7891
allow-lan: true
mode: Rule
log-level: info
external-controller: ':9090'
dns:
  enabled: true
  nameserver:
    - 119.29.29.29
    - 223.5.5.5
  fallback:
    - 8.8.8.8
    - 8.8.4.4
    - tls://1.0.0.1:853
    - tls://dns.google:853
proxies:
  - name: "å¥\x97é¤\x90å\x88°æ\x9C\x9F:2025-10-13"
    type: ss
    server: 127.0.0.1
    port: 443
    cipher: aes-256-gcm
    password: password
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(US, Ashburn 3)
    type: ss
    server: 54.157.216.140
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(US, Ashburn 2)
    type: ss
    server: 52.90.171.241
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(US, Ashburn)
    type: ss
    server: 52.87.250.198
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(FR, Paris)
    type: ss
    server: 13.36.168.18
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(IN, Mumbai)
    type: ss
    server: 65.2.189.85
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(IN, Mumbai 1)
    type: ss
    server: 52.66.211.233
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(IN, Mumbai 2)
    type: ss
    server: 3.108.184.193
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(AU, Sydney)
    type: ss
    server: 52.64.71.250
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(AU, Sydney 1)
    type: ss
    server: 3.107.87.35
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(US, Ashburn)
    type: ss
    server: 54.84.99.165
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(AU, Sydney)
    type: ss
    server: 3.107.35.33
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(IN, Mumbai 1)
    type: ss
    server: 13.233.95.41
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(FR, Paris 1)
    type: ss
    server: 35.180.193.77
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(US, Ashburn)
    type: ss
    server: 54.209.249.254
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(AU, Sydney)
    type: ss
    server: 16.176.157.139
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(AU, Sydney 1)
    type: ss
    server: 3.25.166.0
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(FR, Paris 1)
    type: ss
    server: 13.39.112.103
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(FR, Paris 2)
    type: ss
    server: 15.237.121.95
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(FR, Paris)
    type: ss
    server: 13.36.166.230
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(AU, Sydney)
    type: ss
    server: 3.25.243.255
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(IN, Mumbai 1)
    type: ss
    server: 13.233.165.215
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(US, Ashburn 2)
    type: ss
    server: 54.90.199.180
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(US, Ashburn)
    type: ss
    server: 54.82.229.122
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(FR, Paris)
    type: ss
    server: 52.47.120.33
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(IN, Mumbai)
    type: ss
    server: 13.233.212.186
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(AU, Sydney 1)
    type: ss
    server: 3.25.225.79
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(AU, Sydney)
    type: ss
    server: 3.26.167.161
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(AU, Sydney 1)
    type: ss
    server: 13.236.91.254
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(FR, Paris 1)
    type: ss
    server: 15.237.118.240
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(IN, Mumbai)
    type: ss
    server: 15.206.124.85
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(IN, Mumbai 1)
    type: ss
    server: 15.206.116.139
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(FR, Paris 1)
    type: ss
    server: 13.38.44.116
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(IN, Mumbai 1)
    type: ss
    server: 43.205.207.209
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(IN, Mumbai 2)
    type: ss
    server: 15.206.93.129
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(AU, Sydney)
    type: ss
    server: 3.25.198.142
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(FR, Paris)
    type: ss
    server: 35.181.172.94
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(IN, Mumbai 3)
    type: ss
    server: 13.201.72.161
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(IN, Mumbai 1)
    type: ss
    server: 43.205.237.107
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(US, Ashburn 2)
    type: ss
    server: 13.222.159.183
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(FR, Paris 1)
    type: ss
    server: 15.237.208.55
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(US, Ashburn)
    type: ss
    server: 34.202.236.105
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(US, Ashburn)
    type: ss
    server: 184.72.209.232
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(US, Ashburn 3)
    type: ss
    server: 3.93.199.57
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(FR, Paris 1)
    type: ss
    server: 13.36.170.248
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(IN, Mumbai)
    type: ss
    server: 13.232.113.111
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(US, Ashburn)
    type: ss
    server: 34.201.50.141
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(US, Ashburn)
    type: ss
    server: 3.93.56.69
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(IN, Mumbai)
    type: ss
    server: 13.126.253.30
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(US, Ashburn 1)
    type: ss
    server: 18.212.212.85
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
  - name: VIP(US, Ashburn 1)
    type: ss
    server: 54.242.126.43
    port: 443
    cipher: aes-256-cfb
    password: amazonskr05
    udp-over-tcp: true
    udp-over-tcp-version: 2
proxy-groups:
  - name: 🚀 节点选择
    type: select
    proxies:
      - ♻️ 自动选择
      - DIRECT
      - "å¥\x97é¤\x90å\x88°æ\x9C\x9F:2025-10-13"
      - VIP(US, Ashburn 3)
      - VIP(US, Ashburn 2)
      - VIP(US, Ashburn)
      - VIP(FR, Paris)
      - VIP(IN, Mumbai)
      - VIP(IN, Mumbai 1)
      - VIP(IN, Mumbai 2)
      - VIP(AU, Sydney)
      - VIP(AU, Sydney 1)
      - VIP(US, Ashburn)
      - VIP(AU, Sydney)
      - VIP(IN, Mumbai 1)
      - VIP(FR, Paris 1)
      - VIP(US, Ashburn)
      - VIP(AU, Sydney)
      - VIP(AU, Sydney 1)
      - VIP(FR, Paris 1)
      - VIP(FR, Paris 2)
      - VIP(FR, Paris)
      - VIP(AU, Sydney)
      - VIP(IN, Mumbai 1)
      - VIP(US, Ashburn 2)
      - VIP(US, Ashburn)
      - VIP(FR, Paris)
      - VIP(IN, Mumbai)
      - VIP(AU, Sydney 1)
      - VIP(AU, Sydney)
      - VIP(AU, Sydney 1)
      - VIP(FR, Paris 1)
      - VIP(IN, Mumbai)
      - VIP(IN, Mumbai 1)
      - VIP(FR, Paris 1)
      - VIP(IN, Mumbai 1)
      - VIP(IN, Mumbai 2)
      - VIP(AU, Sydney)
      - VIP(FR, Paris)
      - VIP(IN, Mumbai 3)
      - VIP(IN, Mumbai 1)
      - VIP(US, Ashburn 2)
      - VIP(FR, Paris 1)
      - VIP(US, Ashburn)
      - VIP(US, Ashburn)
      - VIP(US, Ashburn 3)
      - VIP(FR, Paris 1)
      - VIP(IN, Mumbai)
      - VIP(US, Ashburn)
      - VIP(US, Ashburn)
      - VIP(IN, Mumbai)
      - VIP(US, Ashburn 1)
      - VIP(US, Ashburn 1)
  - name: ♻️ 自动选择
    type: url-test
    url: http://www.gstatic.com/generate_204
    interval: 300
    tolerance: 50
    proxies:
      - "å¥\x97é¤\x90å\x88°æ\x9C\x9F:2025-10-13"
      - VIP(US, Ashburn 3)
      - VIP(US, Ashburn 2)
      - VIP(US, Ashburn)
      - VIP(FR, Paris)
      - VIP(IN, Mumbai)
      - VIP(IN, Mumbai 1)
      - VIP(IN, Mumbai 2)
      - VIP(AU, Sydney)
      - VIP(AU, Sydney 1)
      - VIP(US, Ashburn)
      - VIP(AU, Sydney)
      - VIP(IN, Mumbai 1)
      - VIP(FR, Paris 1)
      - VIP(US, Ashburn)
      - VIP(AU, Sydney)
      - VIP(AU, Sydney 1)
      - VIP(FR, Paris 1)
      - VIP(FR, Paris 2)
      - VIP(FR, Paris)
      - VIP(AU, Sydney)
      - VIP(IN, Mumbai 1)
      - VIP(US, Ashburn 2)
      - VIP(US, Ashburn)
      - VIP(FR, Paris)
      - VIP(IN, Mumbai)
      - VIP(AU, Sydney 1)
      - VIP(AU, Sydney)
      - VIP(AU, Sydney 1)
      - VIP(FR, Paris 1)
      - VIP(IN, Mumbai)
      - VIP(IN, Mumbai 1)
      - VIP(FR, Paris 1)
      - VIP(IN, Mumbai 1)
      - VIP(IN, Mumbai 2)
      - VIP(AU, Sydney)
      - VIP(FR, Paris)
      - VIP(IN, Mumbai 3)
      - VIP(IN, Mumbai 1)
      - VIP(US, Ashburn 2)
      - VIP(FR, Paris 1)
      - VIP(US, Ashburn)
      - VIP(US, Ashburn)
      - VIP(US, Ashburn 3)
      - VIP(FR, Paris 1)
      - VIP(IN, Mumbai)
      - VIP(US, Ashburn)
      - VIP(US, Ashburn)
      - VIP(IN, Mumbai)
      - VIP(US, Ashburn 1)
      - VIP(US, Ashburn 1)
  - name: 🎯 全球直连
    type: select
    proxies:
      - DIRECT
      - 🚀 节点选择
      - ♻️ 自动选择
  - name: 🛑 全球拦截
    type: select
    proxies:
      - REJECT
      - DIRECT
  - name: 🐟 漏网之鱼
    type: select
    proxies:
      - 🚀 节点选择
      - 🎯 全球直连
      - ♻️ 自动选择
      - "å¥\x97é¤\x90å\x88°æ\x9C\x9F:2025-10-13"
      - VIP(US, Ashburn 3)
      - VIP(US, Ashburn 2)
      - VIP(US, Ashburn)
      - VIP(FR, Paris)
      - VIP(IN, Mumbai)
      - VIP(IN, Mumbai 1)
      - VIP(IN, Mumbai 2)
      - VIP(AU, Sydney)
      - VIP(AU, Sydney 1)
      - VIP(US, Ashburn)
      - VIP(AU, Sydney)
      - VIP(IN, Mumbai 1)
      - VIP(FR, Paris 1)
      - VIP(US, Ashburn)
      - VIP(AU, Sydney)
      - VIP(AU, Sydney 1)
      - VIP(FR, Paris 1)
      - VIP(FR, Paris 2)
      - VIP(FR, Paris)
      - VIP(AU, Sydney)
      - VIP(IN, Mumbai 1)
      - VIP(US, Ashburn 2)
      - VIP(US, Ashburn)
      - VIP(FR, Paris)
      - VIP(IN, Mumbai)
      - VIP(AU, Sydney 1)
      - VIP(AU, Sydney)
      - VIP(AU, Sydney 1)
      - VIP(FR, Paris 1)
      - VIP(IN, Mumbai)
      - VIP(IN, Mumbai 1)
      - VIP(FR, Paris 1)
      - VIP(IN, Mumbai 1)
      - VIP(IN, Mumbai 2)
      - VIP(AU, Sydney)
      - VIP(FR, Paris)
      - VIP(IN, Mumbai 3)
      - VIP(IN, Mumbai 1)
      - VIP(US, Ashburn 2)
      - VIP(FR, Paris 1)
      - VIP(US, Ashburn)
      - VIP(US, Ashburn)
      - VIP(US, Ashburn 3)
      - VIP(FR, Paris 1)
      - VIP(IN, Mumbai)
      - VIP(US, Ashburn)
      - VIP(US, Ashburn)
      - VIP(IN, Mumbai)
      - VIP(US, Ashburn 1)
      - VIP(US, Ashburn 1)
rules:
  - DOMAIN-SUFFIX,acl4.ssr,🎯 全球直连
  - DOMAIN-SUFFIX,ip6-localhost,🎯 全球直连
  - DOMAIN-SUFFIX,ip6-loopback,🎯 全球直连
  - DOMAIN-SUFFIX,lan,🎯 全球直连
  - DOMAIN-SUFFIX,local,🎯 全球直连
  - DOMAIN-SUFFIX,localhost,🎯 全球直连
  - IP-CIDR,0.0.0.0/8,🎯 全球直连,no-resolve
  - IP-CIDR,10.0.0.0/8,🎯 全球直连,no-resolve
  - IP-CIDR,100.64.0.0/10,🎯 全球直连,no-resolve
  - IP-CIDR,127.0.0.0/8,🎯 全球直连,no-resolve
  - IP-CIDR,172.16.0.0/12,🎯 全球直连,no-resolve
  - IP-CIDR,192.168.0.0/16,🎯 全球直连,no-resolve
  - IP-CIDR,198.18.0.0/16,🎯 全球直连,no-resolve
  - IP-CIDR,224.0.0.0/4,🎯 全球直连,no-resolve
  - IP-CIDR6,::1/128,🎯 全球直连,no-resolve
  - IP-CIDR6,fc00::/7,🎯 全球直连,no-resolve
  - IP-CIDR6,fe80::/10,🎯 全球直连,no-resolve
  - IP-CIDR6,fd00::/8,🎯 全球直连,no-resolve
  - DOMAIN,instant.arubanetworks.com,🎯 全球直连
  - DOMAIN,setmeup.arubanetworks.com,🎯 全球直连
  - DOMAIN,router.asus.com,🎯 全球直连
  - DOMAIN,www.asusrouter.com,🎯 全球直连
  - DOMAIN-SUFFIX,hiwifi.com,🎯 全球直连
  - DOMAIN-SUFFIX,leike.cc,🎯 全球直连
  - DOMAIN-SUFFIX,miwifi.com,🎯 全球直连
  - DOMAIN-SUFFIX,my.router,🎯 全球直连
  - DOMAIN-SUFFIX,p.to,🎯 全球直连
  - DOMAIN-SUFFIX,peiluyou.com,🎯 全球直连
  - DOMAIN-SUFFIX,phicomm.me,🎯 全球直连
  - DOMAIN-SUFFIX,router.ctc,🎯 全球直连
  - DOMAIN-SUFFIX,routerlogin.com,🎯 全球直连
  - DOMAIN-SUFFIX,tendawifi.com,🎯 全球直连
  - DOMAIN-SUFFIX,zte.home,🎯 全球直连
  - DOMAIN-SUFFIX,tplogin.cn,🎯 全球直连
  - DOMAIN-SUFFIX,wifi.cmcc,🎯 全球直连
  - DOMAIN-SUFFIX,ol.epicgames.com,🎯 全球直连
  - DOMAIN-SUFFIX,dizhensubao.getui.com,🎯 全球直连
  - DOMAIN,dl.google.com,🎯 全球直连
  - DOMAIN-SUFFIX,googletraveladservices.com,🎯 全球直连
  - DOMAIN-SUFFIX,tracking-protection.cdn.mozilla.net,🎯 全球直连
  - DOMAIN,origin-a.akamaihd.net,🎯 全球直连
  - DOMAIN,fairplay.l.qq.com,🎯 全球直连
  - DOMAIN,livew.l.qq.com,🎯 全球直连
  - DOMAIN,vd.l.qq.com,🎯 全球直连
  - DOMAIN,errlog.umeng.com,🎯 全球直连
  - DOMAIN,msg.umeng.com,🎯 全球直连
  - DOMAIN,msg.umengcloud.com,🎯 全球直连
  - DOMAIN,tracking.miui.com,🎯 全球直连
  - DOMAIN,app.adjust.com,🎯 全球直连
  - DOMAIN,bdtj.tagtic.cn,🎯 全球直连
  - DOMAIN,rewards.hypixel.net,🎯 全球直连
  - DOMAIN-SUFFIX,koodomobile.com,🎯 全球直连
  - DOMAIN-SUFFIX,koodomobile.ca,🎯 全球直连
  - DOMAIN-SUFFIX,synology.me,🎯 全球直连
  - DOMAIN-SUFFIX,DiskStation.me,🎯 全球直连
  - DOMAIN-SUFFIX,i234.me,🎯 全球直连
  - DOMAIN-SUFFIX,myDS.me,🎯 全球直连
  - DOMAIN-SUFFIX,DSCloud.biz,🎯 全球直连
  - DOMAIN-SUFFIX,DSCloud.me,🎯 全球直连
  - DOMAIN-SUFFIX,DSCloud.mobi,🎯 全球直连
  - DOMAIN-SUFFIX,DSmyNAS.com,🎯 全球直连
  - DOMAIN-SUFFIX,DSmyNAS.net,🎯 全球直连
  - DOMAIN-SUFFIX,DSmyNAS.org,🎯 全球直连
  - DOMAIN-SUFFIX,FamilyDS.com,🎯 全球直连
  - DOMAIN-SUFFIX,FamilyDS.net,🎯 全球直连
  - DOMAIN-SUFFIX,FamilyDS.org,🎯 全球直连
  - DOMAIN-KEYWORD,admarvel,🛑 全球拦截
  - DOMAIN-KEYWORD,admaster,🛑 全球拦截
  - DOMAIN-KEYWORD,adsage,🛑 全球拦截
  - DOMAIN-KEYWORD,adsensor,🛑 全球拦截
  - DOMAIN-KEYWORD,adsmogo,🛑 全球拦截
  - DOMAIN-KEYWORD,adsrvmedia,🛑 全球拦截
  - DOMAIN-KEYWORD,adsserving,🛑 全球拦截
  - DOMAIN-KEYWORD,adsystem,🛑 全球拦截
  - DOMAIN-KEYWORD,adwords,🛑 全球拦截
  - DOMAIN-KEYWORD,applovin,🛑 全球拦截
  - DOMAIN-KEYWORD,appsflyer,🛑 全球拦截
  - DOMAIN-KEYWORD,domob,🛑 全球拦截
  - DOMAIN-KEYWORD,duomeng,🛑 全球拦截
  - DOMAIN-KEYWORD,dwtrack,🛑 全球拦截
  - DOMAIN-KEYWORD,guanggao,🛑 全球拦截
  - DOMAIN-KEYWORD,omgmta,🛑 全球拦截
  - DOMAIN-KEYWORD,omniture,🛑 全球拦截
  - DOMAIN-KEYWORD,openx,🛑 全球拦截
  - DOMAIN-KEYWORD,partnerad,🛑 全球拦截
  - DOMAIN-KEYWORD,pingfore,🛑 全球拦截
  - DOMAIN-KEYWORD,socdm,🛑 全球拦截
  - DOMAIN-KEYWORD,supersonicads,🛑 全球拦截
  - DOMAIN-KEYWORD,wlmonitor,🛑 全球拦截
  - DOMAIN-KEYWORD,zjtoolbar,🛑 全球拦截
  - DOMAIN-SUFFIX,09mk.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,100peng.com,🛑 全球拦截
  - DOMAIN-SUFFIX,114la.com,🛑 全球拦截
  - DOMAIN-SUFFIX,123juzi.net,🛑 全球拦截
  - DOMAIN-SUFFIX,138lm.com,🛑 全球拦截
  - DOMAIN-SUFFIX,17un.com,🛑 全球拦截
  - DOMAIN-SUFFIX,2cnt.net,🛑 全球拦截
  - DOMAIN-SUFFIX,3gmimo.com,🛑 全球拦截
  - DOMAIN-SUFFIX,3xx.vip,🛑 全球拦截
  - DOMAIN-SUFFIX,51.la,🛑 全球拦截
  - DOMAIN-SUFFIX,51taifu.com,🛑 全球拦截
  - DOMAIN-SUFFIX,51yes.com,🛑 全球拦截
  - DOMAIN-SUFFIX,600ad.com,🛑 全球拦截
  - DOMAIN-SUFFIX,6dad.com,🛑 全球拦截
  - DOMAIN-SUFFIX,70e.com,🛑 全球拦截
  - DOMAIN-SUFFIX,86.cc,🛑 全球拦截
  - DOMAIN-SUFFIX,8le8le.com,🛑 全球拦截
  - DOMAIN-SUFFIX,8ox.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,95558000.com,🛑 全球拦截
  - DOMAIN-SUFFIX,99click.com,🛑 全球拦截
  - DOMAIN-SUFFIX,99youmeng.com,🛑 全球拦截
  - DOMAIN-SUFFIX,a3p4.net,🛑 全球拦截
  - DOMAIN-SUFFIX,acs86.com,🛑 全球拦截
  - DOMAIN-SUFFIX,acxiom-online.com,🛑 全球拦截
  - DOMAIN-SUFFIX,ad-brix.com,🛑 全球拦截
  - DOMAIN-SUFFIX,ad-delivery.net,🛑 全球拦截
  - DOMAIN-SUFFIX,ad-locus.com,🛑 全球拦截
  - DOMAIN-SUFFIX,ad-plus.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,ad7.com,🛑 全球拦截
  - DOMAIN-SUFFIX,adadapted.com,🛑 全球拦截
  - DOMAIN-SUFFIX,adadvisor.net,🛑 全球拦截
  - DOMAIN-SUFFIX,adap.tv,🛑 全球拦截
  - DOMAIN-SUFFIX,adbana.com,🛑 全球拦截
  - DOMAIN-SUFFIX,adchina.com,🛑 全球拦截
  - DOMAIN-SUFFIX,adcome.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,ader.mobi,🛑 全球拦截
  - DOMAIN-SUFFIX,adform.net,🛑 全球拦截
  - DOMAIN-SUFFIX,adfuture.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,adhouyi.com,🛑 全球拦截
  - DOMAIN-SUFFIX,adinfuse.com,🛑 全球拦截
  - DOMAIN-SUFFIX,adirects.com,🛑 全球拦截
  - DOMAIN-SUFFIX,adjust.io,🛑 全球拦截
  - DOMAIN-SUFFIX,adkmob.com,🛑 全球拦截
  - DOMAIN-SUFFIX,adlive.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,adlocus.com,🛑 全球拦截
  - DOMAIN-SUFFIX,admaji.com,🛑 全球拦截
  - DOMAIN-SUFFIX,admin6.com,🛑 全球拦截
  - DOMAIN-SUFFIX,admon.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,adnyg.com,🛑 全球拦截
  - DOMAIN-SUFFIX,adpolestar.net,🛑 全球拦截
  - DOMAIN-SUFFIX,adpro.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,adpush.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,adquan.com,🛑 全球拦截
  - DOMAIN-SUFFIX,adreal.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,ads8.com,🛑 全球拦截
  - DOMAIN-SUFFIX,adsame.com,🛑 全球拦截
  - DOMAIN-SUFFIX,adsmogo.com,🛑 全球拦截
  - DOMAIN-SUFFIX,adsmogo.org,🛑 全球拦截
  - DOMAIN-SUFFIX,adsunflower.com,🛑 全球拦截
  - DOMAIN-SUFFIX,adsunion.com,🛑 全球拦截
  - DOMAIN-SUFFIX,adtrk.me,🛑 全球拦截
  - DOMAIN-SUFFIX,adups.com,🛑 全球拦截
  - DOMAIN-SUFFIX,aduu.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,advertising.com,🛑 全球拦截
  - DOMAIN-SUFFIX,adview.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,advmob.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,adwetec.com,🛑 全球拦截
  - DOMAIN-SUFFIX,adwhirl.com,🛑 全球拦截
  - DOMAIN-SUFFIX,adwo.com,🛑 全球拦截
  - DOMAIN-SUFFIX,adxmi.com,🛑 全球拦截
  - DOMAIN-SUFFIX,adyun.com,🛑 全球拦截
  - DOMAIN-SUFFIX,adzerk.net,🛑 全球拦截
  - DOMAIN-SUFFIX,agrant.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,agrantsem.com,🛑 全球拦截
  - DOMAIN-SUFFIX,aihaoduo.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,ajapk.com,🛑 全球拦截
  - DOMAIN-SUFFIX,allyes.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,allyes.com,🛑 全球拦截
  - DOMAIN-SUFFIX,amazon-adsystem.com,🛑 全球拦截
  - DOMAIN-SUFFIX,analysys.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,angsrvr.com,🛑 全球拦截
  - DOMAIN-SUFFIX,anquan.org,🛑 全球拦截
  - DOMAIN-SUFFIX,anysdk.com,🛑 全球拦截
  - DOMAIN-SUFFIX,appadhoc.com,🛑 全球拦截
  - DOMAIN-SUFFIX,appads.com,🛑 全球拦截
  - DOMAIN-SUFFIX,appboy.com,🛑 全球拦截
  - DOMAIN-SUFFIX,appdriver.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,appjiagu.com,🛑 全球拦截
  - DOMAIN-SUFFIX,applifier.com,🛑 全球拦截
  - DOMAIN-SUFFIX,appsflyer.com,🛑 全球拦截
  - DOMAIN-SUFFIX,atdmt.com,🛑 全球拦截
  - DOMAIN-SUFFIX,baifendian.com,🛑 全球拦截
  - DOMAIN-SUFFIX,banmamedia.com,🛑 全球拦截
  - DOMAIN-SUFFIX,baoyatu.cc,🛑 全球拦截
  - DOMAIN-SUFFIX,baycode.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,bayimob.com,🛑 全球拦截
  - DOMAIN-SUFFIX,behe.com,🛑 全球拦截
  - DOMAIN-SUFFIX,bfshan.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,biddingos.com,🛑 全球拦截
  - DOMAIN-SUFFIX,biddingx.com,🛑 全球拦截
  - DOMAIN-SUFFIX,bjvvqu.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,bjxiaohua.com,🛑 全球拦截
  - DOMAIN-SUFFIX,bloggerads.net,🛑 全球拦截
  - DOMAIN-SUFFIX,branch.io,🛑 全球拦截
  - DOMAIN-SUFFIX,bsdev.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,bshare.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,btyou.com,🛑 全球拦截
  - DOMAIN-SUFFIX,bugtags.com,🛑 全球拦截
  - DOMAIN-SUFFIX,buysellads.com,🛑 全球拦截
  - DOMAIN-SUFFIX,c0563.com,🛑 全球拦截
  - DOMAIN-SUFFIX,cacafly.com,🛑 全球拦截
  - DOMAIN-SUFFIX,casee.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,cdnmaster.com,🛑 全球拦截
  - DOMAIN-SUFFIX,chance-ad.com,🛑 全球拦截
  - DOMAIN-SUFFIX,chanet.com.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,chartbeat.com,🛑 全球拦截
  - DOMAIN-SUFFIX,chartboost.com,🛑 全球拦截
  - DOMAIN-SUFFIX,chengadx.com,🛑 全球拦截
  - DOMAIN-SUFFIX,chmae.com,🛑 全球拦截
  - DOMAIN-SUFFIX,clickadu.com,🛑 全球拦截
  - DOMAIN-SUFFIX,clicki.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,clicktracks.com,🛑 全球拦截
  - DOMAIN-SUFFIX,clickzs.com,🛑 全球拦截
  - DOMAIN-SUFFIX,cloudmobi.net,🛑 全球拦截
  - DOMAIN-SUFFIX,cmcore.com,🛑 全球拦截
  - DOMAIN-SUFFIX,cnxad.com,🛑 全球拦截
  - DOMAIN-SUFFIX,cnzz.com,🛑 全球拦截
  - DOMAIN-SUFFIX,cnzzlink.com,🛑 全球拦截
  - DOMAIN-SUFFIX,cocounion.com,🛑 全球拦截
  - DOMAIN-SUFFIX,coocaatv.com,🛑 全球拦截
  - DOMAIN-SUFFIX,cooguo.com,🛑 全球拦截
  - DOMAIN-SUFFIX,coolguang.com,🛑 全球拦截
  - DOMAIN-SUFFIX,coremetrics.com,🛑 全球拦截
  - DOMAIN-SUFFIX,cpmchina.co,🛑 全球拦截
  - DOMAIN-SUFFIX,cpx24.com,🛑 全球拦截
  - DOMAIN-SUFFIX,crasheye.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,crosschannel.com,🛑 全球拦截
  - DOMAIN-SUFFIX,ctrmi.com,🛑 全球拦截
  - DOMAIN-SUFFIX,customer-security.online,🛑 全球拦截
  - DOMAIN-SUFFIX,daoyoudao.com,🛑 全球拦截
  - DOMAIN-SUFFIX,datouniao.com,🛑 全球拦截
  - DOMAIN-SUFFIX,ddapp.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,dianjoy.com,🛑 全球拦截
  - DOMAIN-SUFFIX,dianru.com,🛑 全球拦截
  - DOMAIN-SUFFIX,disqusads.com,🛑 全球拦截
  - DOMAIN-SUFFIX,domob.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,domob.com.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,domob.org,🛑 全球拦截
  - DOMAIN-SUFFIX,dotmore.com.tw,🛑 全球拦截
  - DOMAIN-SUFFIX,doubleverify.com,🛑 全球拦截
  - DOMAIN-SUFFIX,doudouguo.com,🛑 全球拦截
  - DOMAIN-SUFFIX,doumob.com,🛑 全球拦截
  - DOMAIN-SUFFIX,duanat.com,🛑 全球拦截
  - DOMAIN-SUFFIX,duiba.com.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,duomeng.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,dxpmedia.com,🛑 全球拦截
  - DOMAIN-SUFFIX,edigitalsurvey.com,🛑 全球拦截
  - DOMAIN-SUFFIX,eduancm.com,🛑 全球拦截
  - DOMAIN-SUFFIX,emarbox.com,🛑 全球拦截
  - DOMAIN-SUFFIX,exosrv.com,🛑 全球拦截
  - DOMAIN-SUFFIX,fancyapi.com,🛑 全球拦截
  - DOMAIN-SUFFIX,feitian001.com,🛑 全球拦截
  - DOMAIN-SUFFIX,feixin2.com,🛑 全球拦截
  - DOMAIN-SUFFIX,flashtalking.com,🛑 全球拦截
  - DOMAIN-SUFFIX,fraudmetrix.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,g1.tagtic.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,gentags.net,🛑 全球拦截
  - DOMAIN-SUFFIX,gepush.com,🛑 全球拦截
  - DOMAIN-SUFFIX,getui.com,🛑 全球拦截
  - DOMAIN-SUFFIX,glispa.com,🛑 全球拦截
  - DOMAIN-SUFFIX,go-mpulse,🛑 全球拦截
  - DOMAIN-SUFFIX,go-mpulse.net,🛑 全球拦截
  - DOMAIN-SUFFIX,godloveme.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,gridsum.com,🛑 全球拦截
  - DOMAIN-SUFFIX,gridsumdissector.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,gridsumdissector.com,🛑 全球拦截
  - DOMAIN-SUFFIX,growingio.com,🛑 全球拦截
  - DOMAIN-SUFFIX,guohead.com,🛑 全球拦截
  - DOMAIN-SUFFIX,guomob.com,🛑 全球拦截
  - DOMAIN-SUFFIX,haoghost.com,🛑 全球拦截
  - DOMAIN-SUFFIX,hivecn.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,hypers.com,🛑 全球拦截
  - DOMAIN-SUFFIX,icast.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,igexin.com,🛑 全球拦截
  - DOMAIN-SUFFIX,il8r.com,🛑 全球拦截
  - DOMAIN-SUFFIX,imageter.com,🛑 全球拦截
  - DOMAIN-SUFFIX,immob.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,inad.com,🛑 全球拦截
  - DOMAIN-SUFFIX,inmobi.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,inmobi.net,🛑 全球拦截
  - DOMAIN-SUFFIX,inmobicdn.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,inmobicdn.net,🛑 全球拦截
  - DOMAIN-SUFFIX,innity.com,🛑 全球拦截
  - DOMAIN-SUFFIX,instabug.com,🛑 全球拦截
  - DOMAIN-SUFFIX,intely.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,iperceptions.com,🛑 全球拦截
  - DOMAIN-SUFFIX,ipinyou.com,🛑 全球拦截
  - DOMAIN-SUFFIX,irs01.com,🛑 全球拦截
  - DOMAIN-SUFFIX,irs01.net,🛑 全球拦截
  - DOMAIN-SUFFIX,irs09.com,🛑 全球拦截
  - DOMAIN-SUFFIX,istreamsche.com,🛑 全球拦截
  - DOMAIN-SUFFIX,jesgoo.com,🛑 全球拦截
  - DOMAIN-SUFFIX,jiaeasy.net,🛑 全球拦截
  - DOMAIN-SUFFIX,jiguang.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,jimdo.com,🛑 全球拦截
  - DOMAIN-SUFFIX,jisucn.com,🛑 全球拦截
  - DOMAIN-SUFFIX,jmgehn.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,jpush.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,jusha.com,🛑 全球拦截
  - DOMAIN-SUFFIX,juzi.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,juzilm.com,🛑 全球拦截
  - DOMAIN-SUFFIX,kejet.com,🛑 全球拦截
  - DOMAIN-SUFFIX,kejet.net,🛑 全球拦截
  - DOMAIN-SUFFIX,keydot.net,🛑 全球拦截
  - DOMAIN-SUFFIX,keyrun.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,kmd365.com,🛑 全球拦截
  - DOMAIN-SUFFIX,krux.net,🛑 全球拦截
  - DOMAIN-SUFFIX,lnk0.com,🛑 全球拦截
  - DOMAIN-SUFFIX,lnk8.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,localytics.com,🛑 全球拦截
  - DOMAIN-SUFFIX,lomark.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,lotuseed.com,🛑 全球拦截
  - DOMAIN-SUFFIX,lrswl.com,🛑 全球拦截
  - DOMAIN-SUFFIX,lufax.com,🛑 全球拦截
  - DOMAIN-SUFFIX,madhouse.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,madmini.com,🛑 全球拦截
  - DOMAIN-SUFFIX,madserving.com,🛑 全球拦截
  - DOMAIN-SUFFIX,magicwindow.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,mathtag.com,🛑 全球拦截
  - DOMAIN-SUFFIX,maysunmedia.com,🛑 全球拦截
  - DOMAIN-SUFFIX,mbai.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,mediaplex.com,🛑 全球拦截
  - DOMAIN-SUFFIX,mediav.com,🛑 全球拦截
  - DOMAIN-SUFFIX,megajoy.com,🛑 全球拦截
  - DOMAIN-SUFFIX,mgogo.com,🛑 全球拦截
  - DOMAIN-SUFFIX,miaozhen.com,🛑 全球拦截
  - DOMAIN-SUFFIX,microad-cn.com,🛑 全球拦截
  - DOMAIN-SUFFIX,miidi.net,🛑 全球拦截
  - DOMAIN-SUFFIX,mijifen.com,🛑 全球拦截
  - DOMAIN-SUFFIX,mixpanel.com,🛑 全球拦截
  - DOMAIN-SUFFIX,mjmobi.com,🛑 全球拦截
  - DOMAIN-SUFFIX,mng-ads.com,🛑 全球拦截
  - DOMAIN-SUFFIX,moad.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,moatads.com,🛑 全球拦截
  - DOMAIN-SUFFIX,mobaders.com,🛑 全球拦截
  - DOMAIN-SUFFIX,mobclix.com,🛑 全球拦截
  - DOMAIN-SUFFIX,mobgi.com,🛑 全球拦截
  - DOMAIN-SUFFIX,mobisage.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,moogos.com,🛑 全球拦截
  - DOMAIN-SUFFIX,mopub.com,🛑 全球拦截
  - DOMAIN-SUFFIX,moquanad.com,🛑 全球拦截
  - DOMAIN-SUFFIX,mpush.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,mxpnl.com,🛑 全球拦截
  - DOMAIN-SUFFIX,myhug.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,mzy2014.com,🛑 全球拦截
  - DOMAIN-SUFFIX,networkbench.com,🛑 全球拦截
  - DOMAIN-SUFFIX,ninebox.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,nylalobghyhirgh.com,🛑 全球拦截
  - DOMAIN-SUFFIX,o2omobi.com,🛑 全球拦截
  - DOMAIN-SUFFIX,oadz.com,🛑 全球拦截
  - DOMAIN-SUFFIX,oneapm.com,🛑 全球拦截
  - DOMAIN-SUFFIX,onetad.com,🛑 全球拦截
  - DOMAIN-SUFFIX,optaim.com,🛑 全球拦截
  - DOMAIN-SUFFIX,optimix.asia,🛑 全球拦截
  - DOMAIN-SUFFIX,optimix.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,optimizelyapis.com,🛑 全球拦截
  - DOMAIN-SUFFIX,overture.com,🛑 全球拦截
  - DOMAIN-SUFFIX,p0y.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,pagechoice.net,🛑 全球拦截
  - DOMAIN-SUFFIX,pingdom.net,🛑 全球拦截
  - DOMAIN-SUFFIX,plugrush.com,🛑 全球拦截
  - DOMAIN-SUFFIX,popin.cc,🛑 全球拦截
  - DOMAIN-SUFFIX,pro.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,publicidad.net,🛑 全球拦截
  - DOMAIN-SUFFIX,publicidad.tv,🛑 全球拦截
  - DOMAIN-SUFFIX,pubmatic.com,🛑 全球拦截
  - DOMAIN-SUFFIX,pubnub.com,🛑 全球拦截
  - DOMAIN-SUFFIX,qcl777.com,🛑 全球拦截
  - DOMAIN-SUFFIX,qiyou.com,🛑 全球拦截
  - DOMAIN-SUFFIX,qtmojo.com,🛑 全球拦截
  - DOMAIN-SUFFIX,quantcount.com,🛑 全球拦截
  - DOMAIN-SUFFIX,qucaigg.com,🛑 全球拦截
  - DOMAIN-SUFFIX,qumi.com,🛑 全球拦截
  - DOMAIN-SUFFIX,qxxys.com,🛑 全球拦截
  - DOMAIN-SUFFIX,reachmax.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,responsys.net,🛑 全球拦截
  - DOMAIN-SUFFIX,revsci.net,🛑 全球拦截
  - DOMAIN-SUFFIX,rlcdn.com,🛑 全球拦截
  - DOMAIN-SUFFIX,rtbasia.com,🛑 全球拦截
  - DOMAIN-SUFFIX,sanya1.com,🛑 全球拦截
  - DOMAIN-SUFFIX,scupio.com,🛑 全球拦截
  - DOMAIN-SUFFIX,shuiguo.com,🛑 全球拦截
  - DOMAIN-SUFFIX,shuzilm.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,similarweb.com,🛑 全球拦截
  - DOMAIN-SUFFIX,sitemeter.com,🛑 全球拦截
  - DOMAIN-SUFFIX,sitescout.com,🛑 全球拦截
  - DOMAIN-SUFFIX,sitetag.us,🛑 全球拦截
  - DOMAIN-SUFFIX,smartmad.com,🛑 全球拦截
  - DOMAIN-SUFFIX,social-touch.com,🛑 全球拦截
  - DOMAIN-SUFFIX,somecoding.com,🛑 全球拦截
  - DOMAIN-SUFFIX,sponsorpay.com,🛑 全球拦截
  - DOMAIN-SUFFIX,stargame.com,🛑 全球拦截
  - DOMAIN-SUFFIX,stg8.com,🛑 全球拦截
  - DOMAIN-SUFFIX,switchadhub.com,🛑 全球拦截
  - DOMAIN-SUFFIX,sycbbs.com,🛑 全球拦截
  - DOMAIN-SUFFIX,synacast.com,🛑 全球拦截
  - DOMAIN-SUFFIX,sysdig.com,🛑 全球拦截
  - DOMAIN-SUFFIX,talkingdata.com,🛑 全球拦截
  - DOMAIN-SUFFIX,talkingdata.net,🛑 全球拦截
  - DOMAIN-SUFFIX,tansuotv.com,🛑 全球拦截
  - DOMAIN-SUFFIX,tanv.com,🛑 全球拦截
  - DOMAIN-SUFFIX,tanx.com,🛑 全球拦截
  - DOMAIN-SUFFIX,tapjoy.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,th7.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,thoughtleadr.com,🛑 全球拦截
  - DOMAIN-SUFFIX,tianmidian.com,🛑 全球拦截
  - DOMAIN-SUFFIX,tiqcdn.com,🛑 全球拦截
  - DOMAIN-SUFFIX,touclick.com,🛑 全球拦截
  - DOMAIN-SUFFIX,trafficjam.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,trafficmp.com,🛑 全球拦截
  - DOMAIN-SUFFIX,tuia.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,ueadlian.com,🛑 全球拦截
  - DOMAIN-SUFFIX,uerzyr.cn,🛑 全球拦截
  - DOMAIN-SUFFIX,ugdtimg.com,🛑 全球拦截
  - DOMAIN-SUFFIX,ugvip.com,🛑 全球拦截
  - DOMAIN-SUFFIX,ujian.cc,🛑 全球拦截
  - DOMAIN-SUFFIX,ukeiae.com,🛑 全球拦截
  - DOMAIN-SUFFIX,umeng.co,🛑 全球拦截
  - DOMAIN-SUFFIX,umeng.com,🛑 全球拦截
  - DOMAIN-SUFFIX,umtrack.com,🛑 全球拦截
  - DOMAIN-SUFFIX,unimhk.com,🛑 全球拦截
  - DOMAIN-SUFFIX,union-wifi.com,🛑 全球拦截
  - DOMAIN-SUFFIX,union001.com,🛑 全球拦截
  - DOMAIN-SUFFIX,unionsy.com