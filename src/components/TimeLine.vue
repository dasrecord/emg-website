<template>
    <div id="timeline-embed"></div>
</template>

<script>
export default {
    mounted() {
        // Use the TL object
        var timeline = new TL.Timeline('timeline-embed', '');
    }
}
</script>