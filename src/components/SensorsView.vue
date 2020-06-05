<template>
  <div>
    <h2>Sensors</h2>

    <ul>
      <li v-for="sensor in sensors" :key="sensor.id">{{ sensor.description }}</li>
    </ul>
  </div>
</template>

<script>
import * as axios from 'axios';

export default {
  name: 'SensorsView',
  data: () => ({
    sensors: null
  }),
  created: function () {
    this.fetchData();
  },
  methods: {
    fetchData: function () {
      const config = {
        headers: {
          'Authorization': `Bearer ${this.$store.state.accessToken}`
        }
      };

      axios.get('/api/v1/sensors', config).then(res => {
        this.sensors = res.data;
      });
    }
  }
}
</script>

<style scoped>
</style>
