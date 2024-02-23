/**************************************
[rewrite_local]

^http[s]?:\/\/.+\/api(\/video\/report_item?|\/live\/room\/detail?|\/video\/related?|\/video\/detail|\/social\/posts_info).*$ url script-request-header https://raw.githubusercontent.com/ppmm52111/QX/main/byjm.js

[mitm]
hostname = *.99.98.6

***************************************/
var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);JScriptCodeDom.CodeParseException: Unexcepted Token : Semicolon , Requires QuoteEnd , Line 6, Char 1 ---> System.Exception: Unexcepted Token : Semicolon , Requires QuoteEnd
   at JScriptCodeDom.CodeParser.ReadAndCheckToken(CodeTokenType equalto)
   at JScriptCodeDom.CodeParser.ContinueExpressionCore(CodeExpression leftexp, Boolean allowcommer, Boolean parsingFunctionStatement)
   at JScriptCodeDom.CodeParser.ContinueExpression(CodeExpression leftexp, Boolean allowcommer, Boolean parsingFunctionStatement)
   at JScriptCodeDom.CodeParser.InternalParseStatementCore(Boolean forClass)
   at JScriptCodeDom.CodeParser.InternalParseStatement(Boolean forClass)
   at JScriptCodeDom.CodeParser.ParseStatement(Boolean forClass)
   at JScriptCodeDom.CodeParser.ParseBlock()
   at JScriptCodeDom.CodeParser.Parse(String code, String filename, Int32 lineoffset, Boolean keeplinenum)
   --- End of inner exception stack trace ---
   at JScriptCodeDom.CodeParser.Parse(String code, String filename, Int32 lineoffset, Boolean keeplinenum)
   at ProtectorV1.Protect(String[] codes)
   at ProtectorV1.Protect(String code)
   at ASP.javascript_obfuscator_aspx.ProcessWithV1()
