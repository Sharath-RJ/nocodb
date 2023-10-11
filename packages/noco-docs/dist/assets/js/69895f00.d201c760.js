"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[4289],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>f});var l=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,l,r=function(e,t){if(null==e)return{};var i,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=l.createContext({}),s=function(e){var t=l.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},d=function(e){var t=s(e.components);return l.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(i),u=r,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||a;return i?l.createElement(f,n(n({ref:t},d),{},{components:i})):l.createElement(f,n({ref:t},d))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,n=new Array(a);n[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:r,n[1]=o;for(var s=2;s<a;s++)n[s]=i[s];return l.createElement.apply(null,n)}return l.createElement.apply(null,i)}u.displayName="MDXCreateElement"},37087:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var l=i(87462),r=(i(67294),i(3905));const a={title:"Decimal",description:"This article explains how to create & work with a Decimal field.",tags:["Fields","Field types","Numerical types","Decimal"],keywords:["Fields","Field types","Numerical types","Decimal","Create decimal field"]},n=void 0,o={unversionedId:"fields/field-types/numerical/decimal",id:"fields/field-types/numerical/decimal",title:"Decimal",description:"This article explains how to create & work with a Decimal field.",source:"@site/docs/070.fields/040.field-types/020.numerical/020.decimal.md",sourceDirName:"070.fields/040.field-types/020.numerical",slug:"/fields/field-types/numerical/decimal",permalink:"/fields/field-types/numerical/decimal",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/070.fields/040.field-types/020.numerical/020.decimal.md",tags:[{label:"Fields",permalink:"/tags/fields"},{label:"Field types",permalink:"/tags/field-types"},{label:"Numerical types",permalink:"/tags/numerical-types"},{label:"Decimal",permalink:"/tags/decimal"}],version:"current",sidebarPosition:20,frontMatter:{title:"Decimal",description:"This article explains how to create & work with a Decimal field.",tags:["Fields","Field types","Numerical types","Decimal"],keywords:["Fields","Field types","Numerical types","Decimal","Create decimal field"]},sidebar:"tutorialSidebar",previous:{title:"Number",permalink:"/fields/field-types/numerical/number"},next:{title:"Percent",permalink:"/fields/field-types/numerical/percent"}},c={},s=[{value:"Create a decimal field",id:"create-a-decimal-field",level:2},{value:"Similar numerical fields",id:"similar-numerical-fields",level:2}],d={toc:s},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,l.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Decimal")," field type is used to store decimal values. Use cases include storing ",(0,r.kt)("inlineCode",{parentName:"p"},"salary"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"price"),", etc. NocoDB supports precision of upto 8 digits."),(0,r.kt)("h2",{id:"create-a-decimal-field"},"Create a decimal field"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("inlineCode",{parentName:"li"},"+")," icon to the right of ",(0,r.kt)("inlineCode",{parentName:"li"},"Fields header")),(0,r.kt)("li",{parentName:"ol"},"On the dropdown modal, enter the field name (Optional)."),(0,r.kt)("li",{parentName:"ol"},"Select the field type as ",(0,r.kt)("inlineCode",{parentName:"li"},"Decimal")," from the dropdown."),(0,r.kt)("li",{parentName:"ol"},"Configure ",(0,r.kt)("inlineCode",{parentName:"li"},"Precision"),"- NocoDB supports upto 8 digits of precision."),(0,r.kt)("li",{parentName:"ol"},"Set default value for the field (Optional)."),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Save Field")," button.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:i(1972).Z,width:"2878",height:"1360"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Default decimal precision is 1 digit"))),(0,r.kt)("h2",{id:"similar-numerical-fields"},"Similar numerical fields"),(0,r.kt)("p",null,"Following are the other numerical fields available in NocoDB, with some custom add-on features."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/fields/field-types/numerical/number"},"Number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/fields/field-types/numerical/percent"},"Percent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/fields/field-types/numerical/currency"},"Currency"))))}m.isMDXComponent=!0},1972:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/decimal-8e66d00b5270b1f38775d7e71d46975a.png"}}]);