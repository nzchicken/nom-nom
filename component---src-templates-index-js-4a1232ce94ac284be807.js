(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{173:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(216),o=a.n(n),l=a(215),d=a(177),s=a(274),c=a.n(s),u=a(175),f=a(184),p=u.default.div.withConfig({displayName:"MealPreview__Item",componentId:"bil6t8-0"})(["width:265px;height:375px;background-color:#FFFFF8;border:1px solid #000;flex:none;border-width:2px;border-style:solid;border-color:#606060 #303030 #303030 #606060;border-radius:5px;box-shadow:2px 2px 2px 2px #D0D0D0;display:flex;flex-direction:column;margin:10px;"]),g=Object(u.default)(function(e){return i.a.createElement(c.a,e)}).withConfig({displayName:"MealPreview__HeroImage",componentId:"bil6t8-1"})(["max-width:100%;border-radius:3px 3px 0px 0px;"]),m=u.default.h1.withConfig({displayName:"MealPreview__Title",componentId:"bil6t8-2"})(["background-color:#303080;width:100%;text-align:left;font-family:Arial;font-size:1.5rem;color:white;margin:0;padding:3px 13px;"]),h=u.default.div.withConfig({displayName:"MealPreview__Description",componentId:"bil6t8-3"})(["padding:10px;"]),b=u.default.div.withConfig({displayName:"MealPreview__LastUpdate",componentId:"bil6t8-4"})(["margin-top:auto;font-size:0.75rem;color:#606060;padding-left:10px;"]),x=Object(u.default)(function(e){return i.a.createElement(d.a,e)}).withConfig({displayName:"MealPreview__CTA",componentId:"bil6t8-5"})(["display:block;width:70px;margin:19px auto;text-align:center;text-decoration:none;border-top:1px solid #333;border-left:1px solid #333;border-right:2px solid #000;border-bottom:2px solid #000;background-color:#F7F7F7;padding:3px;border-radius:14px;&:active{border-top:2px solid #000;border-left:2px solid #000;border-right:1px solid #333;border-bottom:1px solid #333;padding:3px;}"]),y=function(e){var t=e.meal,a=e.locale,r=Object(f.getMessage)(a);return i.a.createElement(p,null,i.a.createElement(g,{resolutions:t.heroImage.resolutions}),i.a.createElement(m,null,t.title),i.a.createElement(h,{dangerouslySetInnerHTML:{__html:t.shortDescription.childMarkdownRemark.html}}),i.a.createElement(b,null,Object(f.formatDateDistanceToNow)(a,new Date(t.updatedAt))),i.a.createElement(x,{to:"/"+a+"/meal/"+t.slug},r("VIEW")))};a.d(t,"pageQuery",function(){return w});var v=u.default.div.withConfig({displayName:"templates__ItemWrapper",componentId:"m0txi6-0"})(["display:flex;padding:20px;overflow-x:hidden;flex-wrap:wrap;background-color:#fff;max-width:1180px;@media (max-width:610px){max-width:328px;}@media (min-width:611px) and (max-width:895px){max-width:610px;}@media (min-width:896px) and (max-width:1180px){max-width:895px;}"]),w=(t.default=function(e){var t=e.location,a=e.pageContext,r=e.data;return i.a.createElement(l.a,{location:t},i.a.createElement(o.a,{title:r.site.siteMetadata.title}),i.a.createElement(v,null,r.allContentfulMeal.edges.map(function(e){var t=e.node;return i.a.createElement(y,{key:t.slug,meal:t,locale:a.locale})})))},"29820102")},177:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(14),o=a.n(n),l=a(59),d=a.n(l);a.d(t,"a",function(){return d.a}),a.d(t,"b",function(){return l.navigate});a(178),i.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},178:function(e,t,a){var r;e.exports=(r=a(183))&&r.default||r},183:function(e,t,a){"use strict";a.r(t);a(23);var r=a(0),i=a.n(r),n=a(14),o=a.n(n),l=a(85),d=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},184:function(e,t,a){var r=a(249).default,i={"en-NZ":a(200),"nl-NL":a(201)},n={"en-NZ":a(220),"nl-NL":a(225)},o=function(e){return function(t){return i[e][t]}};e.exports={languages:[{locale:"en-NZ",label:"🇳🇿 English"},{locale:"nl-NL",label:"🇳🇱 Nederlands"}],defaultLocale:"en-NZ",getMessage:o,formatDateDistanceToNow:function(e,t){var a=o(e);return a("LAST_UPDATED")+" "+r(t,{locale:n[e]})+" "+a("AGO")}}},198:function(e){e.exports={data:{site:{siteMetadata:{languages:[{locale:"en-NZ",label:"🇳🇿 English"},{locale:"nl-NL",label:"🇳🇱 Nederlands"}]}}}}},200:function(e,t){e.exports={LAST_UPDATED:"Last updated",AGO:"ago",VIEW:" View",LANGUAGE:"Language"}},201:function(e,t){e.exports={LAST_UPDATED:"Laatst bijgewerkt",AGO:"geleden",VIEW:"Kijk",LANGUAGE:"Taal"}},215:function(e,t,a){"use strict";a(36),a(23);var r=a(182),i=a.n(r),n=(a(30),a(22),a(12),a(45),a(0)),o=a.n(n),l=a(177),d=a(175),s=a(198),c=a(184),u=d.default.div.withConfig({displayName:"LanguageSelector__Selector",componentId:"sc-14ykzzc-0"})(["font-size:1rem;width:150px;position:relative;display:flex;padding:10px;border:1px solid #333;& a{text-decoration:none;}&:hover{background-color:white;border-top:1px solid #333;border-left:1px solid #333;border-right:2px solid #000;}"]),f=d.default.span.withConfig({displayName:"LanguageSelector__SelectorLabel",componentId:"sc-14ykzzc-1"})(["width:100%;&::after{content:'\\25BC';margin-left:10px;float:right;}",":hover &::after{content:'\\25B2';}"],u),p=d.default.div.withConfig({displayName:"LanguageSelector__Items",componentId:"sc-14ykzzc-2"})(["display:none;position:absolute;margin-top:30px;background-color:white;width:150px;margin-left:-11px;z-index:99999;border-top:1px solid #EEE;border-left:1px solid #333;border-right:2px solid #000;border-bottom:2px solid #000;",":hover &{display:block;}"],u),g=d.default.div.withConfig({displayName:"LanguageSelector__Item",componentId:"sc-14ykzzc-3"})(["padding:10px;"]),m=function(e){var t=e.currentLocale,a=e.path,r=Object(c.getMessage)(t),i=s.data;return o.a.createElement(u,null,o.a.createElement(f,null,r("LANGUAGE")),o.a.createElement(p,null,i.site.siteMetadata.languages.map(function(e){var t=e.label,r=e.locale;return o.a.createElement(g,{key:r},o.a.createElement(l.a,{to:"/"+r+"/"+a},t))})))};a(226),a(227);function h(){var e=i()(["\n    @media (min-width: ","px) and (max-width: ","px) {\n      ",";\n    }\n  "]);return h=function(){return e},e}var b=d.default.div.withConfig({displayName:"Layout__Container",componentId:"sc-1mluxn0-0"})(["display:flex;width:100%;justify-content:center;"]),x=d.default.nav.withConfig({displayName:"Layout__Navigation",componentId:"sc-1mluxn0-1"})(["display:flex;justify-content:space-between;height:20vh;max-height:100px;font-size:1.25rem;"]),y=d.default.div.withConfig({displayName:"Layout__NavigationItem",componentId:"sc-1mluxn0-2"})(["display:inline-flex;align-items:center;margin:0 1em;"]),v={phone:[0,480],tablet:[481,768],landscape:[769,1024],desktop:[1025,1280]},w=Object.keys(v).reduce(function(e,t){return e[t]=function(){return Object(d.css)(h(),v[t][0],v[t][1],d.css.apply(void 0,arguments))},e},{}),E=Object.assign({},w);t.a=function(e){var t=e.location,a=e.children,r=t.pathname.substring(1).split("/"),i=r.shift(),n=r.join("/");return o.a.createElement(d.ThemeProvider,{theme:E},o.a.createElement(o.a.Fragment,null,o.a.createElement(x,null,o.a.createElement(y,null,o.a.createElement(l.a,{to:"/"+i+"/"},"Home")),o.a.createElement(y,null,o.a.createElement(m,{currentLocale:i,path:n}))),o.a.createElement(b,null,a)))}},274:function(e,t,a){"use strict";a(30),a(22),a(12),a(61),a(126),a(275);var r=a(17);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),o=r(a(67)),l=r(a(128)),d=r(a(129)),s=r(a(0)),c=r(a(14)),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),g=function(e){var t=u(e),a=f(t);return p[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,x=new WeakMap;function y(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return s.default.createElement(s.default.Fragment,{key:t},r&&s.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),s.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function v(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return s.default.createElement("source",{key:t,media:a,srcSet:r})})}function E(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return s.default.createElement("source",{key:t,media:a,srcSet:r})})}function S(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(x.has(e.target)){var t=x.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),x.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),x.set(e,t)),function(){a.unobserve(e),x.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",s=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)}).join("")+"<img "+s+o+l+a+r+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},N=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=s.default.createElement(_,(0,d.default)({src:t},i));return a.length>1?s.default.createElement("picture",null,r(a),n):n},_=s.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return s.default.createElement("img",(0,d.default)({sizes:a,srcSet:r,src:i},p,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});_.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!m&&b&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=s.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,l=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,x=e.Tag,v=e.itemProp,S=e.loading,L=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,d.default)({opacity:O?1:0,transition:z?"opacity "+b+"ms":"none"},l),C="boolean"==typeof h?"lightgray":h,R={transitionDelay:b+"ms"},T=(0,d.default)({opacity:this.state.imgLoaded?0:1},z&&R,l,f),j={title:t,alt:this.state.isVisible?"":a,style:T,className:p};if(g){var V=g,M=V[0];return s.default.createElement(x,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},s.default.createElement(x,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),C&&s.default.createElement(x,{title:t,style:(0,d.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&R)}),M.base64&&s.default.createElement(N,{src:M.base64,spreadProps:j,imageVariants:V,generateSources:E}),M.tracedSVG&&s.default.createElement(N,{src:M.tracedSVG,spreadProps:j,imageVariants:V,generateSources:w}),this.state.isVisible&&s.default.createElement("picture",null,y(V),s.default.createElement(_,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:L})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,d.default)({alt:a,title:t,loading:S},M,{imageVariants:V}))}}))}if(m){var P=m,A=P[0],D=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:A.width,height:A.height},n);return"inherit"===n.display&&delete D.display,s.default.createElement(x,{className:(r||"")+" gatsby-image-wrapper",style:D,ref:this.handleRef,key:"fixed-"+JSON.stringify(A.srcSet)},C&&s.default.createElement(x,{title:t,style:(0,d.default)({backgroundColor:C,width:A.width,opacity:this.state.imgLoaded?0:1,height:A.height},z&&R)}),A.base64&&s.default.createElement(N,{src:A.base64,spreadProps:j,imageVariants:P,generateSources:E}),A.tracedSVG&&s.default.createElement(N,{src:A.tracedSVG,spreadProps:j,imageVariants:P,generateSources:w}),this.state.isVisible&&s.default.createElement("picture",null,y(P),s.default.createElement(_,{alt:a,title:t,width:A.width,height:A.height,sizes:A.sizes,src:A.src,crossOrigin:this.props.crossOrigin,srcSet:A.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:L})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,d.default)({alt:a,title:t,loading:S},A,{imageVariants:P}))}}))}return null},t}(s.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),k=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});O.propTypes={resolutions:z,sizes:k,fixed:c.default.oneOfType([z,c.default.arrayOf(z)]),fluid:c.default.oneOfType([k,c.default.arrayOf(k)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var C=O;t.default=C},275:function(e,t,a){"use strict";a(276)("fixed",function(e){return function(){return e(this,"tt","","")}})},276:function(e,t,a){var r=a(6),i=a(10),n=a(37),o=/"/g,l=function(e,t,a,r){var i=String(n(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-templates-index-js-4a1232ce94ac284be807.js.map