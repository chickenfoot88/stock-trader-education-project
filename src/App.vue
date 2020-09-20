<template>
  <div>
    <the-header />
    <transition name="slide-vertical" mode="out-in">
      <router-view />
    </transition>
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
