(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{175:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(286),o=a(204),r=a.n(o),c=a(176),d=a(192),p=a(179),s=a(215),u=a.n(s),m=c.default.div.withConfig({displayName:"MealInspiration__Item",componentId:"d2kwtg-0"})(["width:300px;height:300px;flex:none;display:flex;position:relative;"]),f=Object(c.default)(function(e){return i.a.createElement(u.a,e)}).withConfig({displayName:"MealInspiration__HeroImage",componentId:"d2kwtg-1"})(["max-width:100%;max-height:100%;perspective:1px;"]),g=c.default.h1.withConfig({displayName:"MealInspiration__Title",componentId:"d2kwtg-2"})(["display:none;position:absolute;width:100%;color:white;bottom:2rem;margin:0;padding:0.25rem;background-color:rgba(0,0,0,0.6);",":hover &{display:block;}"],m),x=function(e){var t=e.meal,a=e.locale;return i.a.createElement(m,null,i.a.createElement(p.a,{to:"/"+a+"/meal/"+t.slug+"/"},i.a.createElement(f,{resolutions:t.heroImage.resolutions}),i.a.createElement(g,null,t.title)))},h=a(181);a.d(t,"pageQuery",function(){return b});var w=c.default.div.withConfig({displayName:"inspiration__Wrapper",componentId:"sc-1h2cqip-0"})(["display:flex;padding:20px;overflow-x:hidden;flex-wrap:wrap;background-color:#fff;max-width:calc(40px + 5 * 300px);@media (max-width:calc(40px + 2 * 300px)){max-width:calc(40px + 1 * 300px);}@media (min-width:calc(40px + 2 * 300px)) and (max-width:calc(40px + 3 * 300px)){max-width:calc(40px + 2 * 300px);}@media (min-width:calc(40px + 3 * 300px)) and (max-width:calc(40px + 4 * 300px)){max-width:calc(40px + 3 * 300px);}@media (min-width:calc(40px + 4 * 300px)) and (max-width:calc(40px + 5 * 300px)){max-width:calc(40px + 4 * 300px);}"]),b=(t.default=function(e){var t=e.pageContext,a=e.data,n=Object(h.b)(t.locale),o=Object(l.shuffle)(a.allContentfulMeal.edges);return i.a.createElement(d.a,{pageContext:t},i.a.createElement(r.a,{title:a.site.siteMetadata.title+" | "+n("INSPIRATION")}),i.a.createElement(w,null,o.map(function(e){var a=e.node;return i.a.createElement(x,{key:a.slug,meal:a,locale:t.locale})})))},"3812290120")},179:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(13),o=a.n(l),r=a(59),c=a.n(r);a.d(t,"a",function(){return c.a}),a.d(t,"b",function(){return r.navigate});a(180),i.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},180:function(e,t,a){var n;e.exports=(n=a(182))&&n.default||n},181:function(e,t,a){"use strict";a.d(t,"b",function(){return c}),a.d(t,"a",function(){return d});var n=a(356),i=a(187),l=a(188),o={"en-NZ":i,"nl-NL":l},r={"en-NZ":a(207),"nl-NL":a(211)},c=function(e){return function(t){return o[e][t]}},d=function(e,t){var a=c(e);return a("LAST_UPDATED")+" "+Object(n.a)(t,{locale:r[e]})+" "+a("AGO")}},182:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),i=a.n(n),l=a(13),o=a.n(l),r=a(83),c=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},187:function(e){e.exports={LAST_UPDATED:"Last updated",AGO:"ago",VIEW:" View",LANGUAGE:"Language",HOME:"Home",INSPIRATION:"Inspiration"}},188:function(e){e.exports={LAST_UPDATED:"Laatst bijgewerkt",AGO:"geleden",VIEW:"Kijk",LANGUAGE:"Taal",HOME:"Start",INSPIRATION:"Inspiratie"}},189:function(e){e.exports={data:{site:{siteMetadata:{defaultLocale:"en-NZ",languages:[{locale:"en-NZ",label:"🇳🇿 English"},{locale:"nl-NL",label:"🇳🇱 Nederlands"}]}}}}},192:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(179),o=a(176),r=a(183),c=a(354),d=a(355),p=a(181),s=a(189),u=o.default.div.withConfig({displayName:"LanguageSelector__Selector",componentId:"eip4fc-0"})(["font-size:1rem;width:150px;position:relative;display:flex;padding:10px;border:1px solid #333;& a{text-decoration:none;}&:hover{background-color:white;border-top:1px solid #333;border-left:1px solid #333;border-right:2px solid #000;}"]),m=o.default.span.withConfig({displayName:"LanguageSelector__SelectorLabel",componentId:"eip4fc-1"})(["width:100%;&::after{content:'\\25BC';margin-left:10px;float:right;}",":hover &::after{content:'\\25B2';}"],u),f=o.default.div.withConfig({displayName:"LanguageSelector__Items",componentId:"eip4fc-2"})(["display:none;position:absolute;margin-top:30px;background-color:white;width:150px;margin-left:-11px;z-index:99999;border-top:1px solid #eee;border-left:1px solid #333;border-right:2px solid #000;border-bottom:2px solid #000;",":hover &{display:block;}"],u),g=o.default.div.withConfig({displayName:"LanguageSelector__Item",componentId:"eip4fc-3"})(["padding:10px;"]),x=function(e){var t=e.currentLocale,a=e.currentUrl,n=s.data,o=Object(p.b)(t);return i.a.createElement(u,null,i.a.createElement(m,null,o("LANGUAGE")),i.a.createElement(f,null,n.site.siteMetadata.languages.map(function(e){var t=e.label,n=e.locale;return i.a.createElement(g,{key:n},i.a.createElement(l.a,{to:"/"+n+"/"+a},t))})))},h=(a(212),o.default.div.withConfig({displayName:"Layout__Container",componentId:"sc-1dswee-0"})(["display:flex;width:100%;justify-content:center;",""],Object(r.mb)({mobile:0,tablet:4,desktop:5}))),w=o.default.nav.withConfig({displayName:"Layout__Navigation",componentId:"sc-1dswee-1"})(["display:flex;justify-content:space-between;height:20vh;max-height:100px;font-size:1.25rem;"]),b=o.default.div.withConfig({displayName:"Layout__NavigationItem",componentId:"sc-1dswee-2"})(["display:inline-flex;align-items:center;margin:0 1em;"]),I=Object(o.default)(function(e){return i.a.createElement(l.a,e)}).withConfig({displayName:"Layout__NavigationLink",componentId:"sc-1dswee-3"})(["display:inline-flex;align-items:center;text-decoration:none;"]),E=o.default.div.withConfig({displayName:"Layout__NavigationSpacer",componentId:"sc-1dswee-4"})(["display:inline-flex;width:100%;"]),y=Object(o.default)(c.a).withConfig({displayName:"Layout__HomeIcon",componentId:"sc-1dswee-5"})(["width:1em;height:1em;margin-right:6px;"]),v=Object(o.default)(d.a).withConfig({displayName:"Layout__InspirationIcon",componentId:"sc-1dswee-6"})(["width:1em;height:1em;margin-right:6px;"]),N={};t.a=function(e){var t=e.pageContext,a=e.children,n=t.locale,l=t.url,r=Object(p.b)(n);return i.a.createElement(o.ThemeProvider,{theme:N},i.a.createElement(i.a.Fragment,null,i.a.createElement(w,null,i.a.createElement(b,null,i.a.createElement(I,{to:"/"+n+"/"},i.a.createElement(y,null),r("HOME"))),i.a.createElement(b,null,i.a.createElement(I,{to:"/"+n+"/inspiration"},i.a.createElement(v,null),r("INSPIRATION"))),i.a.createElement(E,null),i.a.createElement(b,null,i.a.createElement(x,{currentLocale:n,currentUrl:l}))),i.a.createElement(h,null,a)))}}}]);
//# sourceMappingURL=component---src-templates-inspiration-tsx-6beeef57c5b73be05c06.js.map