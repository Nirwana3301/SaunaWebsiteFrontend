<template>
  <footer class="px-4 py-4 text-white bg-black sm:px-20" v-if="data?.footer">
    <div class="flex">
      <div class="flex w-full text-sm">
        {{ data?.footer?.data?.attributes?.companyname }} &copy; 2023
      </div>
      <div class="flex justify-end w-full text-sm">
        <Button v-for="link in data?.footer?.data?.attributes?.rechlichelinks" :key="link.id" :button="link"
        aria-label="footerLink"
          class="mr-2" />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import gql from "graphql-tag";
import Button from "./elements/Button.vue";

const GET_FOOTER = gql`
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
`;

const { data, error }: any = await useAsyncQuery(GET_FOOTER);
</script>
<style scoped></style>
