<template>
  <div>
    <tab-performance class="padItem"></tab-performance>
    <chart-performance class="padItem"></chart-performance>
  </div>
</template>

<script>
import TabPerformance from './../components/TabPerformance'
import ChartPerformance from './../components/ChartPerformance'
export default {
  name: 'PagePerformance',
  components: {
    TabPerformance,
    ChartPerformance
  }
}
</script>

<style>
  .padItem {
    padding: 2.5rem 2.5rem;
  }
</style>
