(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{150:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(184),r=a.n(i),l=a(183),d=a(154),c=a(196),p=a.n(c),s=a(153),u=a(161),m=s.c.div.withConfig({displayName:"MealPreview__Item",componentId:"sc-1oroap4-0"})(["width:265px;height:375px;background-color:#FFFFF8;border:1px solid #000;flex:none;border-width:2px;border-style:solid;border-color:#606060 #303030 #303030 #606060;border-radius:5px;box-shadow:2px 2px 2px 2px #D0D0D0;display:flex;flex-direction:column;margin:10px;"]),g=Object(s.c)(function(e){return o.a.createElement(p.a,e)}).withConfig({displayName:"MealPreview__HeroImage",componentId:"sc-1oroap4-1"})(["max-width:100%;border-radius:3px 3px 0px 0px;"]),x=s.c.h1.withConfig({displayName:"MealPreview__Title",componentId:"sc-1oroap4-2"})(["background-color:#303080;width:100%;text-align:left;font-family:Arial;font-size:1.5rem;color:white;margin:0;padding:3px 13px;"]),f=s.c.div.withConfig({displayName:"MealPreview__Description",componentId:"sc-1oroap4-3"})(["padding:10px;"]),h=s.c.div.withConfig({displayName:"MealPreview__LastUpdate",componentId:"sc-1oroap4-4"})(["margin-top:auto;font-size:0.75rem;color:#606060;padding-left:10px;"]),b=Object(s.c)(function(e){return o.a.createElement(d.a,e)}).withConfig({displayName:"MealPreview__CTA",componentId:"sc-1oroap4-5"})(["display:block;width:70px;margin:19px auto;text-align:center;text-decoration:none;border-top:1px solid #333;border-left:1px solid #333;border-right:2px solid #000;border-bottom:2px solid #000;background-color:#F7F7F7;padding:3px;border-radius:14px;&:active{border-top:2px solid #000;border-left:2px solid #000;border-right:1px solid #333;border-bottom:1px solid #333;padding:3px;}"]),w=function(e){var t=e.meal,a=e.locale,n=Object(u.getMessage)(a),i=Object(u.getFormatDistanceToNow)(a);return o.a.createElement(m,null,o.a.createElement(g,{resolutions:t.heroImage.resolutions}),o.a.createElement(x,null,t.title),o.a.createElement(f,{dangerouslySetInnerHTML:{__html:t.shortDescription.childMarkdownRemark.html}}),o.a.createElement(h,null,n("LAST_UPDATED")," ",i(new Date(t.updatedAt),{locale:a})," ",n("AGO")),o.a.createElement(b,{to:"/"+a+"/meal/"+t.slug},n("VIEW")))};a.d(t,"pageQuery",function(){return y});var v=s.c.div.withConfig({displayName:"templates__ItemWrapper",componentId:"sc-2zdqdp-0"})(["display:flex;padding:20px;overflow-x:hidden;flex-wrap:wrap;background-color:#fff;max-width:1180px;@media (max-width:610px){max-width:328px;}@media (min-width:611px) and (max-width:895px){max-width:610px;}@media (min-width:896px) and (max-width:1180px){max-width:895px;}"]),y=(t.default=function(e){var t=e.location,a=e.pageContext,n=e.data;return o.a.createElement(l.a,{location:t},console.log(n.allContentfulMeal.edges[0].node),o.a.createElement(r.a,{title:n.site.siteMetadata.title}),o.a.createElement(v,null,n.allContentfulMeal.edges.map(function(e){var t=e.node;return o.a.createElement(w,{key:t.slug,meal:t,locale:a.locale})})))},"3696491577")},154:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=a(5),r=a.n(i),l=a(35),d=a.n(l);a.d(t,"a",function(){return d.a}),a.d(t,"b",function(){return l.navigate});a(155),o.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func},155:function(e,t,a){var n;e.exports=(n=a(158))&&n.default||n},158:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),o=a.n(n),i=a(5),r=a.n(i),l=a(61),d=function(e){var t=e.location,a=e.pageResources;return a?o.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};d.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=d},161:function(e,t,a){var n=a(217).default,o={"en-NZ":a(171),"nl-NL":a(172)},i={"en-NZ":a(188),"nl-NL":a(193)};e.exports={languages:[{locale:"en-NZ",label:"🇳🇿 English"},{locale:"nl-NL",label:"🇳🇱 Nederlands"}],defaultLocale:"en-NZ",getMessage:function(e){return function(t){return o[e][t]}},getFormatDistanceToNow:function(e){return function(t){return n(t,{locale:i[e]})}}}},170:function(e){e.exports={data:{site:{siteMetadata:{languages:[{locale:"en-NZ",label:"🇳🇿 English"},{locale:"nl-NL",label:"🇳🇱 Nederlands"}]}}}}},171:function(e,t){e.exports={LAST_UPDATED:"Last updated",AGO:"ago",VIEW:" View",LANGUAGE:"Language"}},172:function(e,t){e.exports={LAST_UPDATED:"Laatst bijgewerkt",AGO:"geleden",VIEW:"Kijk",LANGUAGE:"Taal"}},183:function(e,t,a){"use strict";a(90),a(36);var n=a(186),o=a.n(n),i=(a(91),a(60),a(37),a(187),a(0)),r=a.n(i),l=a(154),d=a(153),c=a(170),p=a(161),s=d.c.div.withConfig({displayName:"LanguageSelector__Selector",componentId:"sc-3v000y-0"})(["font-size:1rem;width:150px;position:relative;display:flex;padding:10px;border:1px solid #333;& a{text-decoration:none;}&:hover{background-color:white;border-top:1px solid #333;border-left:1px solid #333;border-right:2px solid #000;}"]),u=d.c.span.withConfig({displayName:"LanguageSelector__SelectorLabel",componentId:"sc-3v000y-1"})(["width:100%;&::after{content:'\\25BC';margin-left:10px;float:right;}",":hover &::after{content:'\\25B2';}"],s),m=d.c.div.withConfig({displayName:"LanguageSelector__Items",componentId:"sc-3v000y-2"})(["display:none;position:absolute;margin-top:30px;background-color:white;width:150px;margin-left:-11px;z-index:99999;border-top:1px solid #EEE;border-left:1px solid #333;border-right:2px solid #000;border-bottom:2px solid #000;",":hover &{display:block;}"],s),g=d.c.div.withConfig({displayName:"LanguageSelector__Item",componentId:"sc-3v000y-3"})(["padding:10px;"]),x=function(e){var t=e.currentLocale,a=Object(p.getMessage)(t),n=c.data;return r.a.createElement(s,null,r.a.createElement(u,null,a("LANGUAGE")),r.a.createElement(m,null,n.site.siteMetadata.languages.map(function(e){var t=e.label,a=e.locale;return r.a.createElement(g,{key:a},r.a.createElement(l.a,{to:"/"+a+"/"},t))})))};a(194),a(195);function f(){var e=o()(["\n    @media (min-width: ","px) and (max-width: ","px) {\n      ",";\n    }\n  "]);return f=function(){return e},e}var h=d.c.div.withConfig({displayName:"layout__Container",componentId:"sc-1vv9g87-0"})(["display:flex;width:100%;justify-content:center;"]),b=d.c.nav.withConfig({displayName:"layout__Navigation",componentId:"sc-1vv9g87-1"})(["display:flex;justify-content:space-between;height:20vh;max-height:100px;font-size:1.25rem;"]),w=d.c.div.withConfig({displayName:"layout__NavigationItem",componentId:"sc-1vv9g87-2"})(["display:inline-flex;align-items:center;margin:0 1em;"]),v={phone:[0,480],tablet:[481,768],landscape:[769,1024],desktop:[1025,1280]},y=Object.keys(v).reduce(function(e,t){return e[t]=function(){return Object(d.b)(f(),v[t][0],v[t][1],d.b.apply(void 0,arguments))},e},{}),E=Object.assign({},y);t.a=function(e){var t=e.location,a=e.children,n=t.pathname.split("/")[1];return r.a.createElement(d.a,{theme:E},r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null,r.a.createElement(w,null,r.a.createElement(l.a,{to:"/"+n+"/"},"Home")),r.a.createElement(w,null,r.a.createElement(x,{currentLocale:n}))),r.a.createElement(h,null,a)))}}}]);
//# sourceMappingURL=component---src-templates-index-js-362492fc8f288ed2fbcd.js.map