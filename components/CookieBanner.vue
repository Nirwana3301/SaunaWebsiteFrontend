<template>
    <section>
        <div id="cookieConsent"
            class="fixed bottom-0 z-[999] p-5 m-6 text-white bg-black rounded-xl border-1 border-green-primary backdrop-blur-lg bg-opacity-60"
            v-if="showCookieBanner">
            <h2 class="mb-4 text-sm md:text-xl font-bold">Cookie-Präferenzen</h2>
            <p class="mb-4 text-sm md:text-lg">
                Wir verwenden Cookies, um Ihnen ein optimales Nutzererlebnis auf unserer
                Webseite zu bieten. Eines dieser Cookies ist Google Analytics, ein
                Webanalysedienst von Google Inc. Durch die Verwendung von Google
                Analytics können wir das Nutzerverhalten auf unserer Webseite
                analysieren und verbessern.
            </p>
            <p class="mb-6 text-xs md:text-lg">
                Google Analytics verwendet Cookies, um Informationen über die
                Nutzung unserer Webseite zu sammeln. Diese Informationen werden
                anonymisiert und aggregiert, bevor sie an Google übermittelt werden.
                Google verwendet diese Informationen, um uns Berichte über das
                Nutzerverhalten auf unserer Webseite zu erstellen. Durch die Nutzung
                unserer Webseite stimmen Sie der Verwendung von Google Analytics und
                anderen Cookies zu. Wenn Sie keine Cookies akzeptieren möchten,
                können Sie die Einstellungen in Ihrem Browser entsprechend anpassen.
                Bitte beachten Sie jedoch, dass die Deaktivierung von Cookies die
                Funktionalität unserer Webseite beeinträchtigen kann. Weitere
                Informationen über die Verwendung von Cookies und den Schutz Ihrer
                Daten finden Sie in unserer Datenschutzerklärung.
            </p>
            <button aria-label="acceptCookies" class="p-2 mr-4 text-white rounded-md buttonBackground" @click="acceptCookies()">Akzeptieren</button>
            <button aria-label="dismissCookies" class="text-white hover:underline" @click="dismissCookies()">Ablehnen</button>
        </div>
    </section>
</template>
  
<script setup lang="ts">
const { gtag, grantConsent, revokeConsent } = useGtag()

let showCookieBanner = ref(true)

const cookieConsent = useCookie('consent',
    {
        maxAge: 7884000
    }
)


const acceptCookies = () => {
    cookieConsent.value = 'allow'
    grantConsent()
    showCookieBanner.value = false
}

const dismissCookies = () => {
    cookieConsent.value = 'not allow'
    revokeConsent()
    showCookieBanner.value = false
}


if (cookieConsent.value === 'allow') {
    showCookieBanner.value = false
}

</script>
  
<style scoped>
.buttonBackground {
    background: linear-gradient(90deg, #4E6E58 0%, #4C8577 100%);
    opacity: 0.8;
    transition: opacity 0.2s ease-in-out;
}

.buttonBackground:hover {
    opacity: 1;
}
</style>
  