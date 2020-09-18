<template>
  <div class="container pt-4">
    <div>
      <h1>Trade or View you Portfolio</h1>
      <h6>You may Save & Load your data</h6>
      <h6>Click on 'End Day' to begin a New Day!</h6>
      <hr />
      <p>Your Funds: {{ funds }}</p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HomePage',
  computed: {
    ...mapGetters('portfolio', ['funds']),
  },
}
</script>
