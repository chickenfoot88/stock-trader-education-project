<template>
  <div>
    <the-header />
    <div
      v-if="error.length"
      class="alert alert-danger"
      role="alert"
    >{{ error }}</div>
    <transition name="slide-vertical" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script>
import TheHeader from '@/components/TheHeader'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      error: '',
    }
  },
  computed: {
    ...mapState('auth', ['user']),

    isUserExist() {
      return this.user.localId
    },
  },
  async created() {
    if (!this.isUserExist) {
      try {
        await this.signInAnon()
      } catch (error) {
        this.error = 'An error occurred. Please, try again later.'
      }
    }

    await this.fetchStocks()
    this.loadData()
  },
  methods: {
    ...mapActions('stocks', {
      setStocks: 'SET_STOCKS',
    }),

    ...mapActions('portfolio', {
      loadData: 'LOAD_DATA',
    }),

    ...mapActions('auth', {
      signInAnon: 'SIGN_IN_ANON',
      refreshToken: 'REFRESH_TOKEN',
    }),

    async fetchStocks() {
      const { body } = await this.$http.get('stocks.json')
      this.setStocks(body)
    },
  },
}
</script>
<style>
.slide-vertical-enter-active {
  animation: slide-down 0.3s ease-out;
}

.slide-vertical-leave-active {
  animation: slide-up 0.3s ease-out;
}

@keyframes slide-down {
  from {
    transform: translateY(-100px);
    opacity: 0.2;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100px);
    opacity: 0.2;
  }
}
</style>
