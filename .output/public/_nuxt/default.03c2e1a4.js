import{u as C,J as N,K as L,L as R,M as I,f as w,N as D,B as A,O as E,o as _,c as b,P as F,k as U,s as K,Q as P,R as T,i as S,a as u,_ as $,q as j,h as q,t as M,F as O,r as V,H as z,j as G,b as k,S as H}from"./entry.1dda4d19.js";import{g as W}from"./index.b71b658e.js";import{B as Q}from"./Button.dca804d7.js";import"./nuxt-link.56cb699c.js";function B(a,n){return a||(a={}),a._resolver=n,a}function J(a){return B(a,"webPage")}function X(a){return B(a,"webSite")}let y=null;function Y(a){if(!(typeof window<"u"&&(y===null&&!window.document.querySelector("#schema-org-graph")&&(y=!0),!y)))return C({script:[{type:"application/ld+json",id:"schema-org-graph",key:"schema-org-graph",nodes:a}]},{mode:y?"all":"server"})}function Z(a){const n=N().public["nuxt-seo-kit"];return i=>{const l=n.trailingSlash?L(i):R(i);return a?I(l,n.siteUrl):l}}function ee(a){return a=a.replaceAll("-"," "),a.replace(/\w\S*/g,n=>n.charAt(0).toUpperCase()+n.substr(1).toLowerCase())}const te=w({__name:"SeoKit",props:{siteUrl:{},siteName:{},siteDescription:{},siteImage:{},titleSeparator:{},language:{}},setup(a){const n=a,i=N().public,l=D(),s=["siteName","siteDescription","siteImage","siteUrl","titleSeparator","trailingSlash","language"],e=A(()=>{const t={};for(const r of s)i[r]&&(t[r]=i[r]);const o={};for(const r of s)n[r]&&(o[r]=n[r]);return{...t,...l.site,...o}}),c=E().currentRoute,g=Z(!0);function x(){var p,m,d,f,h;const t=[{property:"og:url",content:g(((p=c.value)==null?void 0:p.path)||"/")},{property:"og:locale",content:e.value.language}];e.value.siteName&&t.push({property:"og:site_name",content:e.value.siteName});let o=((d=(m=c.value)==null?void 0:m.meta)==null?void 0:d.image)||e.value.siteImage;typeof o=="string"&&(o.startsWith("/")&&(o=g(o)),t.push({property:"og:image",content:o}));const r=((h=(f=c.value)==null?void 0:f.meta)==null?void 0:h.description)||e.value.siteDescription;return r&&t.push({name:"description",content:r}),t}return C({templateParams:{siteName:()=>e.value.siteName,siteDescription:()=>e.value.siteDescription,siteImage:()=>e.value.siteImage,siteUrl:()=>e.value.siteUrl,titleSeparator:()=>e.value.titleSeparator,trailingSlash:()=>e.value.trailingSlash,language:()=>e.value.language},htmlAttrs:{lang:()=>e.value.language},title:()=>{var r,p,m,d,f;if(typeof((p=(r=c.value)==null?void 0:r.meta)==null?void 0:p.title)=="string")return(d=(m=c.value)==null?void 0:m.meta)==null?void 0:d.title;const o=(((f=c.value)==null?void 0:f.path)||"/").split("/").pop();return o?ee(o):null},link:[{rel:"canonical",href:()=>{var t;return g(((t=c.value)==null?void 0:t.path)||"/")}}],meta:x}),Y([X({name:()=>{var t;return((t=e.value)==null?void 0:t.siteName)||""},inLanguage:()=>{var t;return((t=e.value)==null?void 0:t.language)||""},description:()=>{var t;return((t=e.value)==null?void 0:t.siteDescription)||""}}),J()]),(t,o)=>(_(),b("div"))}}),ae={class:"absolute top-0 z-40 w-full h-20 bg-green-primary"},ne={class:"absolute top-0 z-50 w-full h-20 border-b-[1px] customGradient border-green-primary"},re={class:"flex w-full h-full px-8 tablet:px-20"},oe={class:"flex items-center justify-end flex-1"},se=w({__name:"NavBar",setup(a){const n=F(),i=U(n.currentRoute.value.path);K(()=>{n.afterEach((s,e)=>{i.value=s.path})});const l=s=>{const e=document.getElementById(s);e==null||e.scrollIntoView({behavior:"smooth"})};return(s,e)=>(_(),b("nav",null,[P(u("div",ae,null,512),[[T,S(i)!=="/"]]),u("div",ne,[u("div",re,[u("button",{"aria-label":"navLink",class:"mr-6 text-white bg-transparent hover:underline",onClick:e[0]||(e[0]=v=>s.$router.push("/"))},"Home"),u("button",{"aria-label":"navLink",class:"mr-6 text-white bg-transparent hover:underline hidden sm:block",onClick:e[1]||(e[1]=v=>l("serviceSection"))},"Leistungen"),u("button",{"aria-label":"navLink",class:"text-white bg-transparent hover:underline hidden sm:block",onClick:e[2]||(e[2]=v=>l("gallerySection"))},"Galerie"),u("div",oe,[u("button",{"aria-label":"navLink",class:"p-2 px-6 text-white rounded-md bg-green-akzent-base",onClick:e[3]||(e[3]=v=>l("contactFormSection"))},"Kontakt")])])])]))}});const ie=$(se,[["__scopeId","data-v-e707677a"]]),le={key:0,class:"px-4 py-4 text-white bg-black sm:px-20"},ue={class:"flex"},ce={class:"flex w-full text-sm"},pe={class:"flex justify-end w-full text-sm"},me=w({__name:"Footer",async setup(a){let n,i;const l=W`
  query Footer {
    footer {
      data {
        id
        attributes {
          logo {
            data {
              id
              attributes {
                url
                alternativeText
              }
            }
          }
          companyname
          rechlichelinks {
            id
            label
            url
            style
            unterseiten {
              data {
                id
                attributes {
                  title
                  slug
                }
              }
            }
          }
        }
      }
    }
  }
`,{data:s,error:e}=([n,i]=j(()=>q(l)),n=await n,i(),n);return(v,c)=>{var g,x,t,o,r,p,m,d,f;return(g=S(s))!=null&&g.footer?(_(),b("footer",le,[u("div",ue,[u("div",ce,M((r=(o=(t=(x=S(s))==null?void 0:x.footer)==null?void 0:t.data)==null?void 0:o.attributes)==null?void 0:r.companyname)+" © 2023 ",1),u("div",pe,[(_(!0),b(O,null,V((f=(d=(m=(p=S(s))==null?void 0:p.footer)==null?void 0:m.data)==null?void 0:d.attributes)==null?void 0:f.rechlichelinks,h=>(_(),z(Q,{key:h.id,button:h,"aria-label":"footerLink",class:"mr-2"},null,8,["button"]))),128))])])])):G("",!0)}}}),de={};function fe(a,n){const i=te,l=ie,s=me;return _(),b("div",null,[k(i),k(l),H(a.$slots,"default"),k(s)])}const be=$(de,[["render",fe]]);export{be as default};
