"use strict";var precacheConfig=[["/index.html","f76687ab39be8e59f4a458d45954d776"],["/static/css/main.fbdd1229.css","d73baea0732ded881d617d8468c18848"],["/static/media/avatar.f1d71f77.jpg","f1d71f777331fd7e3de116edf4ee3b67"],["/static/media/bg.e5241971.jpg","e52419719dd0c4c8b172136f0b625008"],["/static/media/bg2.84378183.jpg","843781834b1db2908f08d921c6460c81"],["/static/media/bg3.e76de24b.jpg","e76de24b6d8ab5e920bb4d49241ad15f"],["/static/media/bg7.b08234a2.jpg","b08234a2b7e8e4fb2e3c4e713252021c"],["/static/media/landing.08e18cb9.jpg","08e18cb904f0f3c6dd9e3d4ed72e0eca"],["/static/media/mighty.ab2d9879.png","ab2d9879293488aa7b3b1c98ebcdf6c1"],["/static/media/parallaxbg.11a2670a.jpg","11a2670afc70256cc25b60b53f8b04c7"],["/static/media/ppa.8de561bf.png","8de561bfb366b5667a9bf89e089c2293"],["/static/media/profile.090a5aab.jpg","090a5aabae505f67ee0981613d02ee05"],["/static/media/sign.cf8b686b.jpg","cf8b686b294041d0925f4e745b1fabb9"],["/static/media/studio-5.332c9501.jpg","332c9501b2c7a38944e82e97e87ec8c9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});