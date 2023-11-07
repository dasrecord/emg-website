<template>
    <TimeLine :dataUrl="'https://docs.google.com/spreadsheets/d/1cWqQBZCkX9GpzFtxCWHoqFXCHg-ylTVUWlnrdYMzKUI/pubhtml'" />
</template>

<script>
import TimeLine from '@src/components/TimeLine.vue'

export default {
    components: {
        TimeLine
    }
}
</script>