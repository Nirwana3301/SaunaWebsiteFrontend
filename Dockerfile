# build stage frontend
FROM node:18.16.0-alpine as build-stage-frontend
WORKDIR /frontend
COPY mb-sauna-website .


ARG STRAPI_URL

ENV VITE_VUE_APP_STRAPI_API_URL=$STRAPI_URL

RUN npm install
RUN npm run build

# Production stage
FROM node:18.16.0-alpine

WORKDIR /app

COPY --from=build-stage-frontend /frontend/.output /app

ARG STRAPI_URL

ENV VITE_VUE_APP_STRAPI_API_URL=$STRAPI_URL

ENV NODE_ENV=production

CMD node ./server/index.mjs