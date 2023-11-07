<template>
    <div id="timeline-embed"></div>
</template>

<script>
export default {
    mounted() {
        // Use the TL object
        var timeline = new TL.Timeline('timeline-embed', 'https://docs.google.com/spreadsheets/d/1cWqQBZCkX9GpzFtxCWHoqFXCHg-ylTVUWlnrdYMzKUI/pubhtml');
    }
}
</script>