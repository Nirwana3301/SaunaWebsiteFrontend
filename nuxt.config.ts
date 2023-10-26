// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width,initial-scale=1",
      title: "M&B Mobilesauna - Verkauf von hochwertigen mobilen Saunen",
      link: [
        { rel: "icon", type: "image/svg", href: "/favicon.svg" },
      ],
      titleTemplate: "M&B Mobilesauna - Sauna ganz nah bei dir",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "M&B Mobilesauna bietet hochwertige mobile Saunen, Fasssaunen, Saunafässer und Saunahäuser zum Verkauf. Entdecken Sie Ihre persönliche Wellness-Oase mit unseren maßgeschneiderten Saunalösungen.",
        },
        {
          hid: "og:title",
          name: "og:title",
          content: "M&B Mobilesauna - Verkauf von hochwertigen mobilen Saunen",
        },
        {
          hid: "og:locale",
          name: "og:locale",
          content: "de_DE",
        },
        {
          hid: "og:image",
          name: "og:image",
          content: "https://mbmobilesauna.de/favicon.svg",
        },
        {
          hid: "og:url",
          name: "og:url",
          content: "https://mbmobilesauna.de/",
        },
        {
          hid: "og:type",
          name: "og:type",
          content: "website",
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: "M&B Mobilesauna",
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "M&B Mobilesauna bietet hochwertige mobile Saunen, Fasssaunen, Saunafässer und Saunahäuser zum Verkauf. Entdecken Sie Ihre persönliche Wellness-Oase mit unseren maßgeschneiderten Saunalösungen.",
        },
        {
          name: "keywords",
          content:
            "mobile Sauna, Fasssauna, Saunafass, Saunahaus, Sauna, Saunabau, mobile Sauna kaufen, mobile Sauna Holzofen, mobile Sauna Elektroofen, individuelle Saunen, Sauna Wellness, Sauna im Garten, Sauna online bestellen, Sauna Angebote, Saunaraum, Saunazubehör, Sauna Design, mobile Sauna Deutschland, mobile Sauna Preise, mobile Sauna Installation, mobile Sauna Lieferung, Sauna Gesundheit, mobile Sauna Entspannung, Sauna Erholung, mobile Sauna Qualität, Sauna Shop, Sauna Experten, mobile Sauna Hersteller, mobile Sauna Verkauf, mobile Sauna M&B, mobile Sauna Fichte, mobile Sauna sibirische Fichte, mb mobile sauna, mbmobilesauna, sauna, sauna, infrarotkabine, fasssauna, sauna kaufen, gartensauna, infrarotsauna, sauna zubehör, therme bayern, saunen, saunaofen, saunafass, saunaofen holz, fasssauna kaufen, außensauna, aussensauna, sauna für zuhause, sauna fuer zuhause, saunen für zuhause, outdoor sauna, thermen bayern, gartensauna mit holzofen, saunatür, saunatüren, sauna holzofen, saunafass kaufen, saunahaus, sauna garten, gartensauna mit vorraum, sauna außen, sauna für garten, therme fürth, mobile sauna, sauna bausatz, thermen in bayern, saunahaus garten, sauna holz, saunaofen 9 kw, garten sauna, russische sauna, gartenhaus mit sauna, innensauna, schönste therme bayern, saunahütte, außensauna mit holzofen, aussensauna abverkauf, saunaofen mit steuerung, sauna im garten, therme nähe nürnberg, sauna draußen, zeltsauna, saunabeleuchtung, außensauna abverkauf, sauna für 2 personen, sauna 2 personen, sauna innen, therme in bayern, saunahaus mit vorraum, aussensauna kaufen, sauna set, ecksauna, sauna restposten, sauna bayern, gartensauna kaufen, fasssauna mit vorraum, sauna kaufen garten, sauna außenbereich, außensauna kaufen, saunaofen kaufen, sauna für den garten, sauna kaufen in der nähe, sauna ausstellungsstück abverkauf, saune, fasssauna mit holzofen komplett kaufen, sauna für draußen, sauna kaufen indoor, sauna glasfront, sauna kaufen outdoor, saunabedarf, gartensauna komplettset, outdoor sauna kaufen, glasfront, gartensauna mit holzofen aus polen, therme oberbayern, gartensauna mit vorraum und dusche, saunaofen holz komplettset, sauna mit holzofen kaufen, sauna indoor, sauna zubehör set, gartensauna holzofen, sauna fass, saunahaus mit holzofen, gartensauna mit holzofen komplett, gartensauna bausatz, was kostet eine sauna, sauna mit vorraum, sauna bausatz outdoor, sauna aussen, massivholzsauna, sauna zubehör shop, sauna abverkauf, sauna outdoor kaufen, holzofen sauna garten, saunaholz kaufen, sauna ausstellung, sauna mit glasfront, sauna holzofen kaufen, dampfsauna selber bauen, aussensauna garten, kristall therme bayern, outdoor sauna mit holzofen, fasssauna garten, innensauna kaufen, fertigsauna, sauna für garten mit holzofen, saunahäuschen, sauna artikel, fasssauna kaufen mit holzofen, fertig sauna, saunaofen 6 kw mit externer steuerung, sauna außen kaufen, schönste thermen bayern, gartensauna mit vorraum 70 mm, sauna für aussen, temperaturfühler sauna, saunaofen stromverbrauch, mobil sauna, fassauna kaufen, zeltsauna selber bauen, kleine sauna für 2 personen, beste sauna bayern, fasssauna holz, sauna., holz für sauna kaufen, ausensauna, gartensauna günstig, holzsauna kaufen, sauna komplettset, holzofen sauna gebraucht, was kostet eine sauna im garten, infrarotkabine wie oft, sauna mit 230 volt ofen, innensauna glasfront, fass-sauna, sauna für außen, ecksauna mit glasfront, beste saunalandschaft, einbausauna 4 personen, sauna innenraum, saunahaus im garten, aussensauna günstig, karibu saunasteuerung, aussen sauna kaufen, innenraum sauna, ofen sauna, innensauna mit ofen, sauna größe 4 personen, sauna im fass, sauna garten kaufen, fasssaunen, bayern sauna, sauna wandverkleidung, sauna 2x2m mit ofen, sauna innenbereich, saunabau in der nähe, innensauna 4 personen, aussensauna modern, sauna bausatz mit holzofen, saunahäuser garten, wandaufbau außensauna, mobile sauna genehmigung, innensauna mit glasfront, gartensaun, sauna 4 personen innen, ecksauna garten, gartensauna mit holzofen bausatz, fasssauna angebote, sauna für innenbereich, stromverbrauch sauna pro stunde, campingsauna, gartensauna mit vorraum modern, gartensauna 4 personen, sauna holzfass, sauna und infrarotkabine, fasssauna günstig kaufen, kleine sauna mit dusche, sauna mit vorraum für garten, saunahaus garten mit dusche, gartensauna mit vordach, infrarotkabine was ist das, finnische sauna mit holzofen, sauna fertig kaufen, mobile dampfsauna test, banja ofen, draußen sauna, fass sauna hersteller, fürthermare aufgussplan, mobile sauna zelt, glasfront sauna, sauna garten mit holzofen, infrarotsauna mit liegen, 230 volt sauna, sauna online, saunaofen 230v 9kw, sauna online shop, sauna onlineshop, infrarotkabine außen, außensauna mit holzofen kaufen, außensauna komplett set, sauna 2 personen außen, sauna auf stelzen, gartensauna panoramafenster, infrarotkabine mit sauna, saunaofen 230v 9 kw, fertigsauna kaufen, kleine sauna für garten, finnische sauna garten, dampfsauna aussen, was kostet eine sauna für zuhause, gartensauna preis, heimsauna stromverbrauch, sauna für 3 personen, sauna für zuhause 4 personen, therme in den bergen bayern, saunahütte garten, aussensauna mit holzofen, sauna mit glas, infrarotkabine im schlafzimmer, gartensauna mit vorraum günstig, sauna größe 2 personen, gartensauna mit vorraum und ofen, saunaofen freistehend, sauna eck, sauna aus polen kaufen, holz 24 sauna, saunahaus mit vorraum und terrasse, außensauna mit ofen, sauna kaufen für garten, gartensauna preise, fasssauna außen, sauna günstig kaufen mit ofen, saunawelt 24, mobile banja, sauna komplettset kaufen, dampfsauna für den garten, saunaöfen, sauna haus garten, gartensauna mit holzofen und dusche, sauna outdoor mit vorraum, russische banja in Deutschland, saunaoffen, mobilesauna, infrarotkabinen für kleinsten Raum, kleine innensauna, sauna draussen, holzofen für sauna kaufen, gartensauna mit glasfront, sauna fenster nach außen, sauna holzofen garten, saunahaus mit vordach, suche sauna, ecksauna glasfront, gartensauna bausatz mit holzofen, holzsauna außen, gartenhütte mit sauna, holz-fasssauna, sauna glaselemente, saunafass mit Elektroofen, sauna fertig, gartensauna mit Aufbau, gartensauna Angebot, aussensauna mit Panoramafenster, einbausauna kaufen, gartensauna vorraum, infrarot und sauna Kombi, saunahäuschen für den garten, mobiba ofen",
        },
        {
          name: "author",
          content: "M&B Mobilesauna",
        },
        {
          name: "publisher",
          content: "M&B Mobilesauna",
        },
      ],
    },
  },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  pages: true,
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/apollo",
    "nuxt-simple-robots",
    "nuxt-simple-sitemap",
    "nuxt-gtag",

  ],
  extends: ["nuxt-seo-kit"],
  css: ["assets/index.css"],
  apollo: {
    clients: {
      default: {
        httpEndpoint: `https://strapi.mbmobilesauna.de/graphql`,
        browserHttpEndpoint: `https://strapi.mbmobilesauna.de/graphql`,
        connectToDevTools: false,
      },
    },
  },
  gtag: {
    id: "G-4895GTEF9C",
    initialConsent: false,
  },
});
