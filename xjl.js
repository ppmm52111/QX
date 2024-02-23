/**************************************
[rewrite_local]
http:\/\/xjl\.h12345\.net:99\/user\/userlogin url script-response-body https://raw.githubusercontent.com/ppmm52111/QX/main/xjl.js
[mitm]
hostname = xjl.h12345.net

***************************************/
var objc = JSON.parse($response.body);
objc = {
  xFYZhG1opJOkJHnsa+z6xYFXiANuOcZQNOwuULi3+IVdP1XDcyO7nVxLR3bYJjN3jySASNNqPn7A3wGwvKOfdZcwrF+735aocXLLuhW5xic9Lly6UOuMTAGLOKBRvymNFwfcFXXYyJXaauJP2jhlWLhnr+WLECTxWTi7Tze12n69bXEaFQZtb+aiPJWd7nbGY9bsm0j9GMqouRFGrLXk1j1S6o2LwIOGHNYBAjT2ERRQgHIRN2pNhnsVcuvo4ko/HO6hFbPSrfLaAPJQ2WdvU6ZKlLmHfXxnWlj/Z5wYRO/GinEDY6Xglaj5TeksWQ7wP8LSiXwSiAAJqx31/U4mLj03uNoDI+skcjxxp73aj5JnLVCtaEFX38boiGksYThaAqfErOfXYFUMeW6sn1yJ6vOAHhH6azVNrhMHkgDb7fS0E13ixiTVLQJ27lI8BV4TwuH1PPzszdrLQqb/+xQoy7cib6Jl0ZRBQTnYdORDhJRoATsaFFmKvpX/qYCYhgKI
}


$done({body : JSON.stringify(objc)});
