<template>
  <q-page padding>
    <main-objective> </main-objective>
    <schedule-objective> </schedule-objective>
  </q-page>
</template>

<script>
import MainObjective from '../components/objective/MainObjective'
import ScheduleObjective from '../components/objective/ScheduleObjective'
export default {
  name: 'PageDashBoard',
  components: {
    MainObjective,
    ScheduleObjective
  }
}
</script>

<style>
</style>
