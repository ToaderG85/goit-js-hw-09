const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let r=null;t.addEventListener("click",e=>{t.setAttribute("disabled","true");let o=document.querySelector("body");r=setInterval(()=>{let t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;o.style.backgroundColor=t},1e3)}),e.addEventListener("click",e=>{t.removeAttribute("disabled"),clearInterval(r)});
//# sourceMappingURL=01-color-switcher.76cc8de2.js.map
