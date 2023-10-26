import{_ as M,a as b,b as g,c as B,d as f,e as k,f as S,g as H}from"./ContentTypeRentMe.e942e0c5.js";import{f as x,g as z,h as I,u as w,o as t,c as n,i as r,F as G,r as $,j as o,b as i}from"./entry.1dda4d19.js";import{g as A}from"./index.b71b658e.js";const D={key:0},q={key:0},F={key:0},L={key:1},R={key:2},E={key:3},N={key:4},O={key:5},V={key:6},j={key:7},Z=x({__name:"[slug]",setup(P){const s=z().params.slug,_=A`
  query pages($slug: String) {
    unterseitens(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          slug
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
`;let{data:l,error:J}=I({query:_,variables:{slug:s},cache:!1});return w({htmlAttrs:{lang:"de"},link:[{rel:"canonical",href:"https://mbmobilesauna.de/"}],title:s==="impressum"?"M&B Mobilesauna | Impressum":s==="datenschutz"?"M&B Mobilesauna | Datenschutz":"M&B Mobilesauna | Home",meta:[{name:"description",content:s==="impressum"?"M&B Mobilesauna | Impressum":s==="datenschutz"?"M&B Mobilesauna | Datenschutz":"M&B Mobilesauna | Home"},{name:"keywords",content:s==="impressum"?"M&B Mobilesauna | Impressum":s==="datenschutz"?"M&B Mobilesauna | Datenschutz":"M&B Mobilesauna | Home"},{name:"author",content:s==="impressum"?"M&B Mobilesauna | Impressum":s==="datenschutz"?"M&B Mobilesauna | Datenschutz":"M&B Mobilesauna | Home"}]}),(K,U)=>{var p,u;const m=M,c=b,d=g,C=B,y=f,T=k,h=S,v=H;return t(),n("main",null,[r(l)?(t(),n("div",D,[(p=r(l).unterseitens)!=null&&p.data[0]?(t(),n("div",q,[(t(!0),n(G,null,$((u=r(l).unterseitens)==null?void 0:u.data[0].attributes.body,(e,a)=>(t(),n("div",{key:a},[e.__typename==="ComponentContentTypeCtLandingSection"?(t(),n("div",F,[i(m,{body:e,pos:a},null,8,["body","pos"])])):o("",!0),e.__typename==="ComponentContentTypeCtCustomersCounter"?(t(),n("div",L,[i(c,{body:e,pos:a},null,8,["body","pos"])])):o("",!0),e.__typename==="ComponentContentTypeCtGallery"?(t(),n("div",R,[i(d,{body:e,pos:a},null,8,["body","pos"])])):o("",!0),e.__typename==="ComponentContentTypeCtServices"?(t(),n("div",E,[i(C,{body:e,pos:a},null,8,["body","pos"])])):o("",!0),e.__typename==="ComponentContentTypeCtText"?(t(),n("div",N,[i(y,{body:e,pos:a},null,8,["body","pos"])])):o("",!0),e.__typename==="ComponentContentTypeCtSales"?(t(),n("div",O,[i(T,{body:e,pos:a},null,8,["body","pos"])])):o("",!0),e.__typename==="ComponentContentTypeCtInBetween"?(t(),n("div",V,[i(h,{body:e,pos:a},null,8,["body","pos"])])):o("",!0),e.__typename==="ComponentContentTypeCtRentMe"?(t(),n("div",j,[i(v,{body:e,pos:a},null,8,["body","pos"])])):o("",!0)]))),128))])):o("",!0)])):o("",!0)])}}});export{Z as default};
