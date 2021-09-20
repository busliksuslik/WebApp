!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(e,t,n,o){let r=document.querySelectorAll(e),a=document.querySelectorAll(t),s=document.querySelector(n);function i(){a.forEach(e=>{e.classList.add("hide"),e.classList.remove("show","fade")}),r.forEach(e=>{e.classList.remove(o)})}function c(e=0){a[e].classList.add("show","fade"),a[e].classList.remove("hide"),r[e].classList.add(o)}i(),c(),s.addEventListener("click",(function(t){const n=t.target;n&&n.classList.contains(e.slice(1))&&r.forEach((e,t)=>{n==e&&(i(),c(t))})}))};function r(e){const t=document.querySelector(e);t.classList.add("hide"),t.classList.remove("show"),document.body.style.overflow=""}function a(e,t){const n=document.querySelector(e);n.classList.add("show"),n.classList.remove("hide"),document.body.style.overflow="hidden",t&&clearInterval(t)}var s=function(e,t,n){const o=document.querySelectorAll(e),s=document.querySelector(t);o.forEach(e=>{e.addEventListener("click",()=>a(t,n))}),s.addEventListener("click",e=>{e.target!==s&&""!=e.target.getAttribute("data-close")||r(t)}),document.addEventListener("keydown",e=>{"Escape"===e.code&&s.classList.contains("show")&&r(t)}),window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(a(t,n),window.removeEventListener("scroll",e))}))};var i=function(e,t){function n(e){return e>=0&&e<10?"0"+e:e}!function(e,t){const o=document.querySelector(e),r=o.querySelector("#days"),a=o.querySelector("#hours"),s=o.querySelector("#minutes"),i=o.querySelector("#seconds"),c=setInterval(l,1e3);function l(){const e=function(e){const t=Date.parse(e)-Date.parse(new Date),n=Math.floor(t/864e5),o=Math.floor(t/1e3%60),r=Math.floor(t/1e3/60%60);return{total:t,days:n,hours:Math.floor(t/36e5%24),minutes:r,seconds:o}}(t);r.innerHTML=n(e.days),a.innerHTML=n(e.hours),s.innerHTML=n(e.minutes),i.innerHTML=n(e.seconds),e.total<=0&&clearInterval(c)}l()}(e,t)};var c=function(){class e{constructor(e,t,n,o,r,a,...s){this.src=e,this.alt=t,this.title=n,this.descr=o,this.price=r,this.classes=s,this.parent=document.querySelector(a),this.transfer=1,this.changeToUSD()}changeToUSD(){this.price=this.price*this.transfer}render(){const e=document.createElement("div");0===this.classes.length?(this.classes="menu__item",e.classList.add(this.classes)):this.classes.forEach(t=>e.classList.add(t)),e.innerHTML=`\n            <img src=${this.src} alt=${this.alt}>\n            <h3 class="menu__item-subtitle">${this.title}</h3>\n            <div class="menu__item-descr">${this.descr}</div>\n            <div class="menu__item-divider"></div>\n            <div class="menu__item-price">\n                <div class="menu__item-cost">Price: </div>\n                <div class="menu__item-total"><span>${this.price}</span> EUR/day</div>\n            </div>`,this.parent.append(e)}}(async function(e){let t=await fetch(e);if(!t.ok)throw new Error(`Could not fetch ${e}, status: ${t.status}`);return await t.json()})("http://localhost:3000/menu").then(t=>{t.forEach(({img:t,altimg:n,title:o,descr:r,price:a})=>{new e(t,n,o,r,a,".menu .container").render()})})};var l=function(){const e=document.querySelector(".calculating__result span");let t,n,o,r,a;function s(){t&&n&&o&&r&&a||(e.textContent="_____"),e.textContent="female"===t?Math.round((447.6+9.2*o+3.1*n-4.3*r)*a*4.18):Math.round((88.36+13.4*o+4.8*n-5.7*r)*a*4.18)}function i(e,t){document.querySelectorAll(e).forEach(e=>{e.classList.remove(t),e.getAttribute("id")===localStorage.getItem("sex")&&e.classList.add(t),e.getAttribute("data-ratio")===localStorage.getItem("ratio")&&e.classList.add(t)})}function c(e,n){const o=document.querySelectorAll(e);o.forEach(e=>{e.addEventListener("click",e=>{e.target.getAttribute("data-ratio")?(a=+e.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+e.target.getAttribute("data-ratio"))):(t=e.target.getAttribute("id"),localStorage.setItem("sex",e.target.getAttribute("id"))),o.forEach(e=>{e.classList.remove(n)}),e.target.classList.add(n),s()})})}function l(e){const t=document.querySelector(e);t.addEventListener("input",()=>{switch(t.value.match(/\D/g)?t.style.border="1px solid red":t.style.border="none",t.getAttribute("id")){case"height":n=+t.value;break;case"weight":o=+t.value;break;case"age":r=+t.value}s()})}localStorage.getItem("sex")?t=localStorage.getItem("sex"):(t="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?a=localStorage.getItem("ratio"):(a=1.375,localStorage.setItem("ratio",1.375)),s(),i("#gender div","calculating__choose-item_active"),i(".calculating__choose_big div","calculating__choose-item_active"),c("#gender div","calculating__choose-item_active"),c(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")};var d=function(e,t){const n=document.querySelectorAll("form"),o="img/form/spinner.svg",s="success",i="error";function c(e){const n=document.querySelector(".modal__dialog");n.classList.add("hide"),a(".modal",t);const o=document.createElement("div");o.classList.add("modal__dialog"),o.innerHTML=`\n            <div class="modal__content">\n                <div class="modal__close" data-close>x</div>\n                <div class="modal__title">${e}</div>\n            </div>\n        `,document.querySelector(".modal").append(o),setTimeout(()=>{o.remove(),n.classList.add("show"),n.classList.remove("hide"),r(".modal")},4e3)}n.forEach(e=>{var t;(t=e).addEventListener("submit",e=>{e.preventDefault();let n=document.createElement("img");n.src=o,n.style.cssText="\n            display: block;\n            margin: 0 auto;",t.insertAdjacentElement("afterend",n);const r=new FormData(t);(async(e,t)=>{let n=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:t});return await n.json()})("http://localhost:3000/requests",JSON.stringify(Object.fromEntries(r.entries()))).then(e=>{console.log(e),c(s),n.remove()}).catch(()=>{c(i)}).finally(()=>{t.reset()})})})};var u=function({container:e,slide:t,nextArrow:n,prevArrow:o,totalCounter:r,currentCounter:a,wrapper:s,field:i}){let c=0,l=1;const d=document.querySelectorAll(t),u=document.querySelector(e),m=document.querySelector(o),h=document.querySelector(n),f=document.querySelector(r),g=document.querySelector(a),y=document.querySelector(s),p=window.getComputedStyle(y).width,v=document.querySelector(i);d.length<10?(f.textContent="0"+d.length,g.textContent="0"+l):(f.textContent=d.length,g.textContent=l),v.style.width=100*d.length+"%",v.style.display="flex",v.style.transition="0.5s all",y.style.overflow="hidden",d.forEach(e=>{e.style.width=p}),u.style.position="relative";const _=document.createElement("ol"),b=[];_.classList.add("carousel-indicators"),_.style.cssText="\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 15;\n        display:flex;\n        justify-content:center;\n        margin-right:15%;\n        margin-left:15%;\n        list-style:none;\n    ",u.append(_);for(let e=0;e<d.length;e++){const t=document.createElement("li");t.setAttribute("data-slide-to",e+1),t.style.cssText="\n            box-sizing: context-box;\n            flex: 0 1 auto;\n            width: 30px;\n            height:6px;\n            margin-right: 3px;\n            margin-left: 3px;\n            cursor: pointer;\n            background-color: #FFF;\n            background-clip: padding-box;\n            border-top:10px solid transparent;\n            border-botom: 10px solid transparent;\n            opacity: .5;\n            transmition: opacity .6s ease;    \n        ",0==e&&(t.style.opacity=1),_.append(t),b.push(t)}function S(e){return+e.replace(/\D/g,"")}h.addEventListener("click",()=>{c==S(p)*(d.length-1)?c=0:c+=S(p),v.style.transform=`translateX(-${c}px)`,l==d.length?l=1:l++,d.length<10?g.textContent="0"+l:g.textContent=l,b.forEach(dot.slide.opacity=".5"),b[l-1].style.opacity=1}),m.addEventListener("click",()=>{0==c?c=S(p)*(d.length-1):c-=S(p),v.style.transform=`translateX(-${c}px)`,1==l?l=d.length:l--,d.length<10?g.textContent="0"+l:g.textContent=l,b.forEach(e=>e.style.opacity=".5"),b[l-1].style.opacity=1}),b.forEach(e=>{e.addEventListener("click",e=>{const t=e.target.getAttribute("data-slide-to");l=t,c=S(p)*(t-1),v.style.transform=`translateX(-${c})`,d.length<10?g.textContent="0"+l:g.textContent=l,b.forEach(e=>e.style.opacity=".5"),b[l-1].style.opacity=1})})};window.addEventListener("DOMContentLoaded",(function(){const e=setTimeout(()=>a(".modal",e),5e4);o(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),s("[data-modal]",".modal",e),i(".timer","2021-10-31"),c(),l(),d("form",e),u({container:".offer__slider",slide:".offer__slide",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"})}))}]);
//# sourceMappingURL=bundle.js.map