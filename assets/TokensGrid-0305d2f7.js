var l=Object.defineProperty;var i=(r,n)=>l(r,"name",{value:n,configurable:!0});import{a as t,j as e}from"./jsx-runtime-0c613784.js";function s({tokens:r,hasPxValue:n=!1}){return t("table",{className:"tokens-grid",children:[e("thead",{children:t("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Value"}),n&&e("th",{children:"Rem"})]})}),e("tbody",{children:Object.entries(r).map(([d,a])=>t("tr",{children:[e("td",{children:d}),e("td",{children:a}),n&&t("td",{children:[Number(a.replace("px",""))*.0625,"rem"]})]},d))})]})}i(s,"TokensGrid");try{s.displayName="TokensGrid",s.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasPxValue:{defaultValue:{value:"false"},description:"",name:"hasPxValue",required:!1,type:{name:"boolean"}}}}}catch{}export{s as T};
//# sourceMappingURL=TokensGrid-0305d2f7.js.map
