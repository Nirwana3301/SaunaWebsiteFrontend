<template>
    <section>
        <div class="p-10 sm:p-20 sm:pt-40">
            <Headline :headline="body.title" />
            <div v-for="(text, index) in body.basetext" :key="index">
                <div class="mt-10">
                    <h2 class="text-2xl font-bold">{{ text.headline }}</h2>
                    <div class="mt-5 markdown" v-html="content"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Headline from "./elements/Headline.vue";
import MarkdownIt from 'markdown-it';


const props = defineProps<{
    body: any;
    pos: number;
}>();

const content = ref()

onMounted(() => {
    const md = new MarkdownIt({ html: true });
    content.value = md.render(props.body.basetext[0].content)
})

</script>

<style>
.markdown h1 {
    font-weight: bold;
    margin-top: 20px;
    font-size: 30px;
}

.markdown h2 {
    font-weight: bold;
    margin-top: 20px;
    font-size: 25px;
}

.markdown h3 {
    font-weight: bold;
    margin-top: 20px;
    font-size: 20px;
}

.markdown ul {
    margin-top: 20px;
    margin-left: 20px;
    font-size: 20px;
}

.markdown li::before {
    content: "• ";
}

.markdown li {
    margin-top: 10px;
}

.markdown p {
    font-size: 20px;
}

.markdown a {
    color: #4c8579;
}

.markdown a:hover {
    text-decoration: underline;
    color: #4c8579;
}
</style>