import{d as r,a4 as l,J as u,O as e,a2 as p,aa as _,l as m}from"./entry.fa7b6eb8.js";import d from"./ContentSlot.4065919d.js";const f={primary:"heroicons-outline:check",info:"heroicons-outline:information-circle",success:"heroicons-outline:check-circle",warning:"heroicons-outline:exclamation",danger:"heroicons-outline:exclamation-circle"},y=r({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:n=>["primary","info","success","warning","danger"].includes(n)}},setup(n){const a=l(),{flatUnwrap:o,unwrap:s}=_(),i=u(()=>n.icon||f[n.type]);return()=>{const c=o((a.default&&a.default())??[],["ul"]).map(t=>s(t,["li"]));return e("ul",c.map(t=>e("li",[e("span",{class:`list-icon ${n.type}`},e(p,{name:i.value,class:"icon"})),e("span",e(d,{use:()=>t}))])))}}});const x=m(y,[["__scopeId","data-v-6109395b"]]);export{x as default};
