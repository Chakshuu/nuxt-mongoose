import{d as r,a5 as l,H as u,M as n,ac as p,l as m}from"./entry.DgfZmQT1.js";import{_ as f}from"./MDCSlot.1RtvxZR1.js";import{u as d,f as _}from"./node.V6KjywBy.js";const y=()=>({unwrap:d,flatUnwrap:_}),h={primary:"heroicons-outline:check",info:"heroicons-outline:information-circle",success:"heroicons-outline:check-circle",warning:"heroicons-outline:exclamation",danger:"heroicons-outline:exclamation-circle"},w=r({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:a=>["primary","info","success","warning","danger"].includes(a)}},setup(a){const o=l(),{flatUnwrap:s,unwrap:t}=y(),c=u(()=>a.icon||h[a.type]);return()=>{const i=s((o.default&&o.default())??[],["ul"]).map(e=>t(e,["li"]));return n("ul",i.map(e=>n("li",[n("span",{class:`list-icon ${a.type}`},n(p,{name:c.value,class:"icon"})),n("span",n(f,{use:()=>e}))])))}}}),S=m(w,[["__scopeId","data-v-d3fc0e8f"]]);export{S as default};
