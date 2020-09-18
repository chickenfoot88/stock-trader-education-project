<template>
  <div>
    <the-header />
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TheHeader from '@/components/TheHeader'

export default {
  components: {
    TheHeader,
  },
}
</script>
<style></style>
