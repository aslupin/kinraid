"use strict";var precacheConfig=[["/kinraid/index.html","edffac1a162da6aefdecc50eec521d8d"],["/kinraid/static/css/main.b1efa7fa.css","dad815bcea9c3537d4ec89391b2d3b67"],["/kinraid/static/js/main.baba3495.js","b194b8107520fe3c0724c2115bd6e389"],["/kinraid/static/media/banner.479d486e.png","479d486e0627f85260452ca91c376fc3"],["/kinraid/static/media/bg.fa5735cd.png","fa5735cd101e57e2462c9ebbbd9c249a"],["/kinraid/static/media/fork.26321d3d.png","26321d3d7918804edd5cfb7c1c8619de"],["/kinraid/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/kinraid/static/media/ogimg.a6b00ac1.png","a6b00ac19459a49957d03c9b59de2de6"],["/kinraid/static/media/random.8c1a22b3.png","8c1a22b36507ba7cd18a2deafea0d6a2"],["/kinraid/static/media/spoon.b86d334c.png","b86d334c8777de64891bc4778f762fa4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(n){return n.redirected?("body"in n?Promise.resolve(n.body):n.blob()).then(function(e){return new Response(e,{headers:n.headers,status:n.status,statusText:n.statusText})}):Promise.resolve(n)},createCacheKey=function(e,n,t,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(n){return t.every(function(e){return!e.test(n[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],a=new URL(n,self.location),r=createCacheKey(a,hashParamName,t,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var e=new Request(n,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+n+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(n,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(n){return n.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return n.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(n){if("GET"===n.request.method){var e,t=stripIgnoredUrlParameters(n.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,a),e=urlsToCacheKeys.has(t));var r="/kinraid/index.html";!e&&"navigate"===n.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],n.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&n.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',n.request.url,e),fetch(n.request)}))}});