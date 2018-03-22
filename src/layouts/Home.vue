<template>
  <q-layout> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-layout-header>
      <q-toolbar>
        <q-toolbar-title>
          Header
          <span slot="subtitle">Subtile</span>
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs>
        <q-route-tab slot="title" icon="home" to="/home" replace hide="icon" label="Home" />
        <q-route-tab slot="title" icon="fitness_center" to="/suivi" replace hide="icon" label="Suivi d'activitée" />
        <q-route-tab slot="title" icon="directions_run" to="/anatomie" replace hide="icon" label="Anatomie" />
        <q-route-tab slot="title" icon="whatshot" to="/hot" replace label="Hot" />
      </q-tabs>
    </q-layout-header>
    <!-- (Optional) The Footer -->
    <q-layout-footer>
      <q-toolbar>
        <q-toolbar-title>
          Footer
          <span slot="subtitle">Subtile</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-footer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',
  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>

<style>
</style>
