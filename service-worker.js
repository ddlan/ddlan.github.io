"use strict";var precacheConfig=[["/index.html","af00d3298389c5bbfb99f988fb22e2a6"],["/static/css/main.58617174.css","53444124f624c73c69b80440af714ad5"],["/static/js/main.fa6e7139.js","39391557134c641ba84c86dd7f89c070"],["/static/media/DannyLanResume.8991a075.pdf","8991a075524da0cf25d86da5ddedf2a1"],["/static/media/NightBallCrop2.5df4660d.mp4","5df4660de50a05a4dcdef75ecfb7ceab"],["/static/media/altocumulus.d28156a5.jpg","d28156a570b488de567b96ba85bc5356"],["/static/media/appstore.d6e7a43c.png","d6e7a43c56338b660ce5dfdb5c6dbf9d"],["/static/media/backtotop.5756eccd.png","5756eccddaa2c978f2f3f1b8800d69e5"],["/static/media/cheesewheel.08c92a17.png","08c92a17c145994671583ee8728e0bf8"],["/static/media/darkenedmacbook.f457c34e.jpg","f457c34e288b243d40ffe921fda864b9"],["/static/media/googleplay.9b3106b9.png","9b3106b925ac8d9bab8d8c7d0a13a094"],["/static/media/horses.48e14d64.jpg","48e14d6400d05e1d3763fee6672dabef"],["/static/media/incitebanner.2516846a.xcf","2516846a7bcb0ee5115537ed7c7b57b9"],["/static/media/incitebanner.508dca24.png","508dca24ef4f3c168a79eeeceb91d4ad"],["/static/media/inprogress.26d94a5f.jpg","26d94a5f417315b62e9899fd2269dc09"],["/static/media/linkedin2crop.dc0b3d5a.jpg","dc0b3d5ace241f4b8a4f1d48fc30a278"],["/static/media/loologo.f2c40397.jpg","f2c4039779acf64e9019c3347bb6cf7f"],["/static/media/macbookcoffee.84806cc8.jpg","84806cc852069746454c3c91dc1794f3"],["/static/media/macbookhands.8f77bb0a.jpg","8f77bb0a58708393b186e1bcb4655529"],["/static/media/macbookoriginal.3b7485d5.jpg","3b7485d5c60edfc539fa836065240557"],["/static/media/macbookoriginalcrop.8d1f0c49.jpg","8d1f0c49d129dbd164d12dfb7919a178"],["/static/media/newmacbook.49281d55.jpeg","49281d55045a4c2ff0887f16956286c9"],["/static/media/nightcover.4c84cbe5.png","4c84cbe5107432adadaec60ea2ef8c08"],["/static/media/nightcover2.76696778.png","76696778ae23b74bca6292f8a5c3194f"],["/static/media/sfcool.5b670e29.jpg","5b670e29ad1498178e038eb0981a4fce"],["/static/media/sfcoolcrop.c51d5ede.jpg","c51d5ede7612e5dcc88988aba25807e6"],["/static/media/sfnormal.be0b226a.jpg","be0b226a833e41fe179d91fc94cc3409"],["/static/media/sfnormalcrop.da2bca8f.jpg","da2bca8fbdf8d7cb685ed1f22adcdf38"],["/static/media/smalleruke.84c854a7.jpg","84c854a726cb55ac0b54619cb5ee4412"],["/static/media/update2.9cfd2f13.PNG","9cfd2f1341755dccc946a81612ef866f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});
