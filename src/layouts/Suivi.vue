<template>
  <q-layout view="hHh Lpr lff"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-layout-header reveal>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="leftDrawer = !leftDrawer"
        />
        <a href="">
          <img class="logo" alt="Bfit logo" src="~assets/bfit-logo-black.png">
        </a>
        <q-toolbar-title to="/suivi">
          Suivi d'activitée
          <span slot="subtitle">Subtile</span>
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs>
        <q-route-tab slot="title" icon="home" to="/" replace hide="icon" label="Home" />
        <q-route-tab slot="title" icon="fitness_center" to="/suivi" replace hide="icon" label="Suivi d'activitée" />
        <q-route-tab slot="title" icon="directions_run" to="/anatomie" replace hide="icon" label="Anatomie" />
        <q-route-tab slot="title" icon="whatshot" to="/hot" replace label="Actualité" />
      </q-tabs>
    </q-layout-header>

    <!-- (Optional) The Footer -->
    <q-layout-footer>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="leftDrawer = !leftDrawer"
        />
        <q-toolbar-title>
          Footer
          <span slot="subtitle">Subtile</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-footer>
    <q-layout-drawer
      side="left"
      v-model="leftDrawer"
    >
      <q-scroll-area class="fit q-pa-sm">
        <q-list no-border link inset-separator>
          <q-list-header>Menu suivi</q-list-header>
          <q-item to="/suivi/dashboard">
            <q-item-side icon="dashboard" />
            <q-item-main label="Dashbord" sublabel="Accéder a votre tableau de bord" />
          </q-item>
          <q-item to="/suivi/planning">
            <q-item-side icon="today" />
            <q-item-main label="Planning" sublabel="Plannifier vos seances" />
          </q-item>
          <q-item to="/suivi/performance">
            <q-item-side icon="trending_up" />
            <q-item-main label="Performance" sublabel="Suivez vos performances" />
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'LayoutSuivi',
  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>

<style>
.logo {
  max-height: 50px;
}
</style>
