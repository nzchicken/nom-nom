(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"7xvl":function(t,e,a){"use strict";function n(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function r(t){n(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function o(t,e){n(2,arguments);var a=r(t),o=r(e),i=a.getTime()-o.getTime();return i<0?-1:i>0?1:i}function i(t,e){n(2,arguments);var a=r(t),o=r(e),i=a.getFullYear()-o.getFullYear(),s=a.getMonth()-o.getMonth();return 12*i+s}function s(t,e){n(2,arguments);var a=r(t),s=r(e),u=o(a,s),f=Math.abs(i(a,s));a.setMonth(a.getMonth()-u*f);var c=o(a,s)===-u,m=u*(f-c);return 0===m?0:m}function u(t,e){n(2,arguments);var a=r(t),o=r(e);return a.getTime()-o.getTime()}function f(t,e){n(2,arguments);var a=u(t,e)/1e3;return a>0?Math.floor(a):Math.ceil(a)}a.d(e,"a",(function(){return b}));var c=a("1izz"),m=a("zMQz"),l={date:Object(m.a)({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Object(m.a)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Object(m.a)({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},d=a("0HXF"),h=a("J9JN"),M=a("WYsD"),D={code:"en-US",formatDistance:c.a,formatLong:l,formatRelative:d.a,localize:h.a,match:M.a,options:{weekStartsOn:0,firstWeekContainsDate:1}};function g(t){return function(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var a in e=e||{})e.hasOwnProperty(a)&&(t[a]=e[a]);return t}({},t)}function p(t){return t.getTime()%6e4}function w(t){var e=new Date(t.getTime()),a=Math.ceil(e.getTimezoneOffset());return e.setSeconds(0,0),6e4*a+(a>0?(6e4+p(e))%6e4:p(e))}function v(t,e,a){n(2,arguments);var i=a||{},u=i.locale||D;if(!u.formatDistance)throw new RangeError("locale must contain formatDistance property");var c=o(t,e);if(isNaN(c))throw new RangeError("Invalid time value");var m,l,d=g(i);d.addSuffix=Boolean(i.addSuffix),d.comparison=c,c>0?(m=r(e),l=r(t)):(m=r(t),l=r(e));var h,M=f(l,m),p=(w(l)-w(m))/1e3,v=Math.round((M-p)/60);if(v<2)return i.includeSeconds?M<5?u.formatDistance("lessThanXSeconds",5,d):M<10?u.formatDistance("lessThanXSeconds",10,d):M<20?u.formatDistance("lessThanXSeconds",20,d):M<40?u.formatDistance("halfAMinute",null,d):M<60?u.formatDistance("lessThanXMinutes",1,d):u.formatDistance("xMinutes",1,d):0===v?u.formatDistance("lessThanXMinutes",1,d):u.formatDistance("xMinutes",v,d);if(v<45)return u.formatDistance("xMinutes",v,d);if(v<90)return u.formatDistance("aboutXHours",1,d);if(v<1440){var b=Math.round(v/60);return u.formatDistance("aboutXHours",b,d)}if(v<2520)return u.formatDistance("xDays",1,d);if(v<43200){var y=Math.round(v/1440);return u.formatDistance("xDays",y,d)}if(v<86400)return h=Math.round(v/43200),u.formatDistance("aboutXMonths",h,d);if((h=s(l,m))<12){var T=Math.round(v/43200);return u.formatDistance("xMonths",T,d)}var S=h%12,X=Math.floor(h/12);return S<3?u.formatDistance("aboutXYears",X,d):S<9?u.formatDistance("overXYears",X,d):u.formatDistance("almostXYears",X+1,d)}function b(t,e){return n(1,arguments),v(t,Date.now(),e)}}}]);
//# sourceMappingURL=c7e5373078dbd60e824baf8b36dbf40269bf0419-3883c9e36e88b23235a6.js.map