import{h as z,_ as U,a as L,b as H,c as G,d as O,e as R,f as D,g as q}from"./ContentTypeRentMe.e942e0c5.js";import{f as I,k as r,o as l,c as a,a as t,t as S,n as N,i as j,l as F,j as d,b as o,m as K,d as A,q as P,u as Q,F as J,r as Y,h as W}from"./entry.1dda4d19.js";import{B as X}from"./Button.dca804d7.js";import{g as Z}from"./index.b71b658e.js";import"./nuxt-link.56cb699c.js";const ee=""+new URL("maps.74da4a36.png",import.meta.url).href,te=""+new URL("tiktok.ca5d6262.png",import.meta.url).href,ne=""+new URL("instagram.bd9d1254.png",import.meta.url).href,oe={class:"sm:mb-4 mb-2"},le={class:"w-full"},ae=["for"],se=["type","id","value","readonly"],re=["type","id","value","readonly"],ie={key:0,class:"text-xs text-red-600"},V=I({__name:"InputField",props:{id:{},type:{},placeholder:{},modelValue:{},error:{},debounce:{type:Boolean},readonly:{type:Boolean},isTextarea:{type:Boolean}},emits:["update:modelValue"],setup(w,{emit:i}){const y=w,m=r(),h=r(),f=i;let g=!1;const _=e=>{const c=e.target;y.debounce==!0?(g||setTimeout(()=>{f("update:modelValue",c.value),g=!1},800),g=!0):f("update:modelValue",c.value)};return(e,c)=>(l(),a("div",oe,[t("div",le,[t("label",{ref_key:"refLabel",ref:m,class:"mb-2 text-md sm:text-xl text-black",for:e.id},S(e.placeholder),9,ae),e.isTextarea?d("",!0):(l(),a("input",{key:0,class:N(["w-full p-2 bg-gray-100 rounded-xl",[e.error?" !border-red-600":""]]),type:e.type?e.type:"text",id:e.id,value:e.modelValue,onInput:_,ref_key:"refInput",ref:h,readonly:"readonly"in e?e.readonly:j(F)},null,42,se)),e.isTextarea?(l(),a("textarea",{key:1,class:N(["w-full p-2 bg-gray-100 h-[300px] sm:h-[420px] rounded-xl",[e.error?" !border-red-600":""]]),type:e.type?e.type:"text",id:e.id,value:e.modelValue,onInput:_,ref_key:"refInput",ref:h,readonly:"readonly"in e?e.readonly:j(F)},null,42,re)):d("",!0)]),e.error?(l(),a("div",ie,S(e.error),1)):d("",!0)]))}}),ue={class:"flex flex-row"},de={class:"mr-4"},ce={class:"w-24 text-xl font-extrabold text-right smw-32 sm:text-2xl font-baskerville decoration-green-primary"},pe=t("div",{class:"sm:h-[5px] h-[3px] rounded-lg bg-green-primary"},null,-1),me={class:"flex items-center justify-center sm:text-xl"},k=I({__name:"ContactData",props:{title:{},content:{}},setup(w){const i=w;return(y,m)=>(l(),a("div",ue,[t("div",de,[t("h3",ce,S(i.title),1),pe]),t("p",me,S(i.content),1)]))}}),_e={id:"contactFormSection"},ve={key:0},ye={key:1},fe={class:"w-full h-full p-8 xl:p-20"},he={class:"justify-center w-full h-full xl:flex m-auto"},ge={class:"flex flex-col h-full m-auto xl:w-1/2 gap-14 items-center xl:items-start"},be={class:"flex flex-col gap-4"},Ce={class:"flex flex-col gap-4"},xe=t("div",{class:"flex flex-row gap-4 w-full h-96 xl:w-[540px] xl:h-[540px]"},[t("img",{title:"MapImage",loading:"lazy",class:"w-full h-full object-cover",src:ee,alt:"map"})],-1),Te={class:"w-full mt-10 xl:w-1/2 xl:mt-0"},ke={class:"flex"},we=["checked"],$e={for:"privacy",class:"mb-2 text-sm sm:text-base sm:mb-0"},Ve={key:0,class:"text-red-500 text-sm"},Se={class:"flex items-center justify-center w-full gap-10 mt-10 md:mt-20 flex-wrap"},Be={class:"flex items-center justify-center w-14 h-14 p-2 scale-100 hover:scale-110 transition-all duration-200"},Me=t("img",{title:"InstagrammImage",loading:"lazy",class:"w-full h-full object-center",src:ne,alt:"facebook"},null,-1),Ie=[Me],Ee="110e3757-28bd-4d53-b150-930f356482ab",Ne=I({__name:"ContactForm",setup(w){const i=r(""),y=r(""),m=r(""),h=r(""),f=r(""),g=r(""),_=r(""),e=r(""),c=r(""),$=r(""),b=r(!1),x=r(""),T=r(!1),C=r(!1),E=r({label:"Absenden",style:"primary"}),B=()=>{let v=!1;return i.value.length<3?(y.value="Bitte geben Sie einen gültigen Namen ein.",v=!0):y.value="",m.value.length<3?(h.value="Bitte geben Sie eine gültige E-Mail Adresse ein.",v=!0):h.value="",f.value.length<3?(g.value="Bitte geben Sie eine gültige Telefonnummer ein.",v=!0):g.value="",_.value.length<3?(e.value="Bitte geben Sie ein gültiges Anliegen ein.",v=!0):e.value="",c.value.length<3?($.value="Bitte geben Sie eine gültige Nachricht ein.",v=!0):$.value="",b.value?x.value="":(x.value="Bitte bestätigen Sie unsere Datenschutzbestimmungen.",v=!0),console.log("here"),v},M=async()=>{if(console.log("here"),B())return;(await(await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:Ee,name:i.value,phone:f.value,issue:_.value,email:m.value,message:c.value})})).json()).success?(C.value=!0,i.value="",m.value="",f.value="",_.value="",c.value="",b.value=!1,C.value=!0,T.value=!1):(C.value=!0,T.value=!0)},s=()=>{window.open("https://instagram.com/mobil_sauna?igshid=MzMyNGUyNmU2YQ==","_blank")},p=()=>{window.open("https://www.tiktok.com/@mobil_sauna?_t=8flRBCcv0Fd&_r=1","_blank")};return(v,n)=>(l(),a("div",_e,[C.value?(l(),a("div",{key:0,class:N(["fixed left-[50%] transform -translate-x-1/2 w-2/3 sm:w-max top-2 z-50 flex flex-col items-center justify-center h-20 rounded-lg text-white p-5 font-bold",T.value?"bg-red-500":"bg-green-500"])},[T.value?(l(),a("p",ve,"Nachricht konnte nicht gesendet werden.")):(l(),a("p",ye,"Nachricht wurde gesendet.")),t("button",{class:"mt-2 px-2 bg-white rounded-lg text-primary font-bold text-black","aria-label":"close modal",onClick:n[0]||(n[0]=u=>C.value=!1)},"Ok")],2)):d("",!0),t("div",fe,[o(z,{class:"mb-10",headline:"Kontakt"}),t("div",he,[t("div",ge,[t("div",be,[o(k,{title:"Name:",content:"Oleg Babunov"}),o(k,{title:"E-Mail:",content:"babunov.2016@mail.ru"}),o(k,{title:"Telefon:",content:"+49 163 7044945"})]),t("div",Ce,[o(k,{title:"Name:",content:"Maier Alexander"}),o(k,{title:"E-Mail:",content:"maieralex252@gmail.com"}),o(k,{title:"Telefon:",content:"+49 176 83404930"})]),xe]),t("div",Te,[t("form",{onSubmit:n[8]||(n[8]=K(u=>M(),["prevent"]))},[o(V,{id:"name",modelValue:i.value,"onUpdate:modelValue":n[1]||(n[1]=u=>i.value=u),error:y.value,placeholder:"Name",type:"text"},null,8,["modelValue","error"]),o(V,{id:"email",modelValue:m.value,"onUpdate:modelValue":n[2]||(n[2]=u=>m.value=u),error:h.value,placeholder:"E-Mail",type:"email"},null,8,["modelValue","error"]),o(V,{id:"phone",modelValue:f.value,"onUpdate:modelValue":n[3]||(n[3]=u=>f.value=u),error:g.value,placeholder:"Telefon",type:"tel"},null,8,["modelValue","error"]),o(V,{id:"issue",modelValue:_.value,"onUpdate:modelValue":n[4]||(n[4]=u=>_.value=u),error:e.value,placeholder:"Betreff",type:"text"},null,8,["modelValue","error"]),o(V,{id:"message",modelValue:c.value,"onUpdate:modelValue":n[5]||(n[5]=u=>c.value=u),error:$.value,placeholder:"Nachricht",type:"text",isTextarea:""},null,8,["modelValue","error"]),t("div",ke,[t("input",{class:"mr-4",type:"checkbox",name:"privacy",id:"privacy",checked:b.value,onChange:n[6]||(n[6]=u=>b.value=!b.value)},null,40,we),t("label",$e,[A(" Hiermit bestätigen Sie unsere Datenschutzbestimmungen. Mehr Informationen finden Sie in der "),t("span",{class:"underline cursor-pointer hover:text-primary",onClick:n[7]||(n[7]=u=>v.$router.push("/datenschutz"))}," Datenschutzerklärung"),A(". ")])]),x.value?(l(),a("p",Ve,S(x.value),1)):d("",!0),o(X,{button:E.value,type:"submit",class:"mt-4","aria-label":"privacyError"},null,8,["button"])],32)])]),t("div",Se,[t("div",Be,[t("img",{title:"FacebookImage",loading:"lazy",class:"w-full h-full object-center",onClick:n[9]||(n[9]=u=>p()),src:te,alt:"facebook"})]),t("div",{class:"flex items-center justify-center w-14 h-14 p-2 scale-100 hover:scale-110 transition-all duration-200",onClick:n[10]||(n[10]=u=>s())},Ie)])])]))}}),je={key:0},Fe={key:1},Ae={key:2},ze={key:3},Ue={key:4},Le={key:5},He={key:6},Ge={key:7},Pe=I({__name:"index",async setup(w){let i,y;const m=Z`
   query Homepage {
    homepage {
      data {
        id
        attributes {
          body {
            __typename
            ... on ComponentContentTypeCtLandingSection {
              id
              title
              landingDesc : description
              images {
                data {
                  id
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
            link {
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
            __typename
            ... on ComponentContentTypeCtGallery {
              id
              galleryHeadline : headline
              GalleryImage {
                id
                title
                image {
                  data {
                    id
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
              }
            }
            __typename
            ... on ComponentContentTypeCtServices {
              id
              servicesHeadline : headline
              Card {
                title
                description
                icon {
                  data {
                    id
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
              }
            }
            __typename
            ... on ComponentContentTypeCtCustomersCounter {
              id
              titleOne
              descOne
              titleTwo
              descTwo
              titleThree
              descThree
              titleFour
              descFour
            }
            __typename
            ... on ComponentContentTypeCtText {
              id
              title
              basetext {
                id
                headline
                content
              }
            }
            __typename
            ... on ComponentContentTypeCtSales {
              id
              salesHeadline : headline
              sale {
                id
                title
                cover {
                  data {
                    id
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
                price 
                description
                vb
                topseller
                images {
                  data {
                    id
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
              }
            }
            __typename
            ... on ComponentContentTypeCtInBetween {
              id
             inBetweenHeadline : headline
              subheadline
              isActive
            }
            __typename
            ... on ComponentContentTypeCtRentMe {
              id
              headline
              cover {
                data {
                  id
                  attributes {
                    url
                    name
                    alternativeText
                    caption
                  }
                }
              }
              isActive
              description {
                id
                headline
                content
              }
            }
          }
        }
      }
    }
  }
`,{data:h}=([i,y]=P(()=>W({query:m,cache:!1})),i=await i,y(),i);return Q({htmlAttrs:{lang:"de"},link:[{rel:"canonical",href:"https://mbmobilesauna.de/"}]}),(f,g)=>{var B,M;const _=U,e=L,c=H,$=G,b=O,x=R,T=D,C=q,E=Ne;return l(),a("main",null,[(l(!0),a(J,null,Y((M=(B=j(h))==null?void 0:B.homepage)==null?void 0:M.data.attributes.body,(s,p)=>(l(),a("div",{key:p},[s.__typename==="ComponentContentTypeCtLandingSection"?(l(),a("div",je,[o(_,{body:s,pos:p},null,8,["body","pos"])])):d("",!0),s.__typename==="ComponentContentTypeCtCustomersCounter"?(l(),a("div",Fe,[o(e,{body:s,pos:p},null,8,["body","pos"])])):d("",!0),s.__typename==="ComponentContentTypeCtGallery"?(l(),a("div",Ae,[o(c,{body:s,pos:p},null,8,["body","pos"])])):d("",!0),s.__typename==="ComponentContentTypeCtServices"?(l(),a("div",ze,[o($,{body:s,pos:p},null,8,["body","pos"])])):d("",!0),s.__typename==="ComponentContentTypeCtText"?(l(),a("div",Ue,[o(b,{body:s,pos:p},null,8,["body","pos"])])):d("",!0),s.__typename==="ComponentContentTypeCtSales"?(l(),a("div",Le,[o(x,{body:s,pos:p},null,8,["body","pos"])])):d("",!0),s.__typename==="ComponentContentTypeCtInBetween"?(l(),a("div",He,[o(T,{body:s,pos:p},null,8,["body","pos"])])):d("",!0),s.__typename==="ComponentContentTypeCtRentMe"?(l(),a("div",Ge,[o(C,{body:s,pos:p},null,8,["body","pos"])])):d("",!0)]))),128)),o(E)])}}});export{Pe as default};
