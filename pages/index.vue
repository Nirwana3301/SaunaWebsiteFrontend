<template>
  <main>
    <div v-for="(body, index) in data?.homepage?.data.attributes.body" :key="index">
      <div v-if="body.__typename === 'ComponentContentTypeCtLandingSection'">
        <ContentTypeLandingSection :body="body" :pos="index" />
      </div>
      <div v-if="body.__typename === 'ComponentContentTypeCtCustomersCounter'">
        <ContentTypeCustomerCounter :body="body" :pos="index" />
      </div>
      <div v-if="body.__typename === 'ComponentContentTypeCtGallery'">
        <ContentTypeGallery :body="body" :pos="index" />
      </div>
      <div v-if="body.__typename === 'ComponentContentTypeCtServices'">
        <ContentTypeServices :body="body" :pos="index" />
      </div>
      <div v-if="body.__typename === 'ComponentContentTypeCtText'">
        <ContentTypeText :body="body" :pos="index" />
      </div>
      <div v-if="body.__typename === 'ComponentContentTypeCtSales'">
        <ContentTypeSales :body="body" :pos="index" />
      </div>
      <div v-if="body.__typename === 'ComponentContentTypeCtInBetween'">
        <ContentTypeInBetween :body="body" :pos="index" />
      </div>
      <div v-if="body.__typename === 'ComponentContentTypeCtRentMe'">
        <ContentTypeRentMe :body="body" :pos="index" />
      </div>
    </div>
    <ContactForm />
  </main>
</template>

<script setup lang="ts">
import gql from "graphql-tag";

const GET_HOMEPAGE = gql`
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
`;


const { data } : any = await useAsyncQuery({
  query: GET_HOMEPAGE,
  cache: false
})

useHead({
  htmlAttrs: { lang: 'de' },
  link: [{ rel: 'canonical', href: 'https://mbmobilesauna.de/' }],
});
</script>
