import{H as n,F as d}from"./footer-BoHAyPPh.js";import{P as i,h as m}from"./poisk-BT3zW-DS.js";import{r as s,b as l,c as p,n as f}from"./card-CxY2UlxO.js";function u(e){const r=document.createElement("div");return r.classList.add("cart"),r.innerHTML=`
    <img src="${e.image}" alt="${e.name}">
    <a href="${e.link}">${e.name}</a>
  `,r}const a=document.querySelector(".search-wrapper");a&&a.appendChild(i());const c=document.querySelector("header");c&&c.replaceWith(n());const o=document.querySelector("footer");o&&o.replaceWith(d());const t=document.querySelector(".category");t&&t.prepend(m());s(l.slice(0,8),".cards",u);s(f.slice(0,1),".recommended-cards",p);
