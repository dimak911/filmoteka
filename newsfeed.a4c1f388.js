!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},i=t.parcelRequire7dbb;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in s){var t=s[e];delete s[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){s[e]=t},t.parcelRequire7dbb=i),i("i8Q71");var o=i("dIxxU");const a=/[0-9]/g,r=(new Date).toISOString().slice(0,10).match(a).join(""),c=function(){const e=new Date;return new Date(e.getFullYear(),e.getMonth(),e.getDate()-7).toISOString().slice(0,10)}().match(a).join("");const l="https://static01.nyt.com/";(async function(t){try{return(await e(o).get(t)).data.response}catch(e){console.error(e)}})(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=movie&begin_date=${c}&end_date=${r}&fq=Movies&page=0&sort=relevance&api-key=7V2Mdku3K6jAwbEoNcKctzHC7q7RRQcQ`).then((e=>{!function(e){const t=e.map((e=>function(e){const{byline:{original:t="Anonymous"},pub_date:n,headline:{main:s},source:i,snippet:o,web_url:a,multimedia:r,lead_paragraph:c}=e,u=r.find((e=>/blog/.test(e.subtype)));let d="";d=u?l+u.url:"https://picsum.photos/400/300";return`<li class="news-item-card">\n            <img class="news-item-image" src="${d}" alt="${o}" loading="lazy">            \n            <div class="news-item-content-wrapper">\n                <h2 class="news-item-title">${s}</h2>\n                <p class="news-item-description"><b>Overview: </b>${o}</p>\n                <p class="news-item-content">${c}</p>\n                <a class="news-item-btn" href="${a}" target="_blank"><button type="button" class="news-btn">Read more</button></a>\n                <p class="news-item-source"><b>Source: </b>${i}</p>\n                <p class="news-item-author"><b>Author: </b>${t}</p>\n                <p class="news-item-date"><b>Published At: </b>${n}</p>\n            </div>\n          </li>`}(e))).join("");document.querySelector(".newsfeed").insertAdjacentHTML("beforeend",t)}(e.docs)})),i("ghnK3"),i("23Ajj")}();
//# sourceMappingURL=newsfeed.a4c1f388.js.map
