<template>
  <q-page padding>
    <q-table
      :data="tableData"
      :columns="columns"
      :selection="selection"
      :selected.sync="selected"
      :filter="filter"
      :loading="loading"
      :dark="dark"
      row-key="name"
      color="secondary"
      :class="tableClass"
    >
      <q-tr slot="top-row" slot-scope="props">
        <q-td colspan="100%">
          <strong>Extra top row</strong>
        </q-td>
      </q-tr>

      <q-tr slot="bottom-row" slot-scope="props">
        <q-td colspan="100%">
          <strong>Extra bottom row</strong>
        </q-td>
      </q-tr>
      <template slot="top-left" slot-scope="props">
        <q-search
          hide-underline
          color="secondary"
          v-model="filter"
          class="col-6"
          :dark="dark"
        />
        <q-select
          color="secondary"
          v-model="separator"
          :dark="dark"
          :options="[
            { label: 'Horizontal', value: 'horizontal' },
            { label: 'Vertical', value: 'vertical' },
            { label: 'Cell', value: 'cell' },
            { label: 'None', value: 'none' }
          ]"
          hide-underline
        />
        <q-btn
          flat round dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
          :dark="dark"
        />
      </template>
      <div slot="top-right" slot-scope="props" class="column">
        <q-table-columns
          :dark="dark"
          color="secondary"
          class="q-mr-sm"
          v-model="visibleColumns"
          :columns="columns"
        />
        <q-toggle
          v-model="loading"
          label="Loading state"
          color="secondary"
          :dark="dark"
          class="q-mb-sm"
        />
        <q-toggle
          v-model="dark"
          label="On dark background"
          color="secondary"
          :dark="dark"
        />
      </div>
    </q-table>
  </q-page>
</template>

<script>
import tableData from 'assets/table-data'
export default {
  data () {
    return {
      tableData,
      columns: [
        { name: 'desc', required: true, label: 'Dessert (100g serving)', align: 'left', field: 'name', sortable: true },
        { name: 'calories', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
        { name: 'protein', label: 'Protein (g)', field: 'protein' },
        { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      filter: '',
      visibleColumns: ['desc', 'fat', 'carbs', 'protein', 'sodium', 'calcium', 'iron'],
      separator: 'horizontal',
      selection: 'multiple',
      selected: [
        // initial selection
        { name: 'Ice cream sandwich' }
      ],
      pagination: {
        page: 2
      },
      paginationControl: { rowsPerPage: 3, page: 1 },
      loading: false,
      dark: true,
      selectedSecond: [
        { name: 'Eclair' }
      ]
    }
  },
  watch: {
    'paginationControl.page' (page) {
      this.$q.notify({
        color: 'secondary',
        message: `Navigated to page ${page}`,
        actions: page < 4
          ? [{
            label: 'Go to last page',
            handler: () => {
              this.paginationControl.page = 4
            }
          }]
          : null
      })
    }
  },
  computed: {
    tableClass () {
      if (this.dark) {
        return 'bg-black'
      }
    }
  },
  methods: {
    deleteRow () {
      this.$q.notify({
        color: 'secondary',
        icon: 'delete',
        message: `Will delete the selected row${this.selectedSecond.length > 1 ? 's' : ''} later, ok?`
      })
    }
  }
}
</script>

<style>
</style>
