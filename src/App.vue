<template>
  <div class="app">
    <CandidatCard />
    <div class="container">
      <h1 class="app_title">My Candidates</h1>
    </div>
    <Home />
  </div>
</template>

<script>
const Home = () => import('./pages/Home')
const CandidatCard = () => import('./components/CandidatCard')

export default {
  name: 'app',
  components: {
    Home,
    CandidatCard
  }
}
</script>

<style lang="scss">
.app_title {
  margin-top: 40px;
  margin-bottom: 20px;
}
</style>
