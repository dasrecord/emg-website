<template>
  <div class="typeform-embed">
    <div
      data-tf-widget="RIiQi0S2"
      data-tf-opacity="0"
      data-tf-hide-headers
      data-tf-inline-on-mobile
      data-tf-iframe-props="title=Artist Intake"
      data-tf-transitive-search-params
      data-tf-disable-scroll
      data-tf-auto-resize
      data-tf-medium="snippet"
      style="width: 100%; height: 100%"
    ></div>
  </div>
</template>

<script>
export default {
  mounted() {
    let script = document.createElement('script')
    script.src = '//embed.typeform.com/next/embed.js'
    script.async = true
    document.body.appendChild(script)
  }
}
</script>
