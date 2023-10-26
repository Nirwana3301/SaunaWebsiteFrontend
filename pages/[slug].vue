<template>
  <main>
    <div v-if="data">
      <div v-if="data.unterseitens?.data[0]">
        <div v-for="(body, index) in data.unterseitens?.data[0].attributes.body" :key="index">
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
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import gql from "graphql-tag";
import { useRoute } from "vue-router";

const route = useRoute();
const slug = route.params.slug;

const GET_PAGE = gql`
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
`;

let { data, error }: any = useAsyncQuery({
    query: GET_PAGE,
    variables: { slug },
    cache: false
  });

useHead({
  htmlAttrs: { lang: 'de' },
  link: [{ rel: 'canonical', href: 'https://mbmobilesauna.de/' }],
  title: slug === 'impressum' ? 'M&B Mobilesauna | Impressum' : slug === 'datenschutz' ? 'M&B Mobilesauna | Datenschutz' : 'M&B Mobilesauna | Home',
  meta: [
    {
      name: "description",
      content: slug === 'impressum' ? 'M&B Mobilesauna | Impressum' : slug === 'datenschutz' ? 'M&B Mobilesauna | Datenschutz' : 'M&B Mobilesauna | Home',
    },
    {
      name: "keywords",
      content: slug === 'impressum' ? 'M&B Mobilesauna | Impressum' : slug === 'datenschutz' ? 'M&B Mobilesauna | Datenschutz' : 'M&B Mobilesauna | Home',
    },
    {
      name: "author",
      content: slug === 'impressum' ? 'M&B Mobilesauna | Impressum' : slug === 'datenschutz' ? 'M&B Mobilesauna | Datenschutz' : 'M&B Mobilesauna | Home',
    }
  ],
})
</script>
