<template>
    <div id='timeline-embed' style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
    props: {
        dataUrl: {
            type: String,
            required: true
        }
    },
    mounted() {
        new TL.Timeline('timeline-embed', this.dataUrl)
    }
}
</script>

<style scoped>
/* Add your styles here */
</style>