<template>
  <div>
    <h2>Sensors</h2>
  </div>
</template>

<script>
import * as axios from 'axios';

export default {
  name: 'SensorsView',
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

      console.log('headers', config.headers);

      axios.get('/api/v1/sensors', config).then(res => {
        console.log(res);
      });
    }
  }
}
</script>

<style scoped>
</style>
