<template>
  <div>
    <div class="title">
      <h2>
        Sensor
        <span class="sensor-id">#{{ $route.params.id }}</span>
      </h2>
      <md-button class="md-raised md-accent">Delete</md-button>
    </div>

    <form novalidate @submit.prevent="update">
      <md-card>
        <md-card-content>
          <md-switch
            v-model="sensor.isActive"
            class="md-primary"
          >{{ sensor.isActive ? 'Enabled' : 'Disabled' }}</md-switch>

          <md-field>
            <label for="description">Description</label>
            <md-textarea name="description" id="description" v-model="sensor.description" />
          </md-field>

          <div class="md-layout">
            <div class="md-layout-item md-size-30">
              <md-field class="sampling-period">
                <label for="sampling-period">Sampling period (in minutes)</label>
                <md-input
                  name="sampling-period"
                  id="sampling-period"
                  type="number"
                  min="5"
                  v-model.number="sensor.samplingPeriod"
                />
              </md-field>
            </div>
          </div>
        </md-card-content>

        <md-card-actions>
          <md-button type="submit" class="md-raised md-primary">Update</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<style scoped>
.sensor-id {
  color: #999;
}

.md-card {
  margin: 2px;
}
</style>

<script>
import * as axios from 'axios';

export default {
  name: 'SensorDetailView',
  data: function () {
    return {
      sensor: {
        id: this.$route.params.id,
        description: null,
        samplingPeriod: null,
        isActive: null
      }
    };
  },
  created: function () {
    this.fetchData();
  },
  methods: {
    authHeaders: function () {
      return {
        'Authorization': `Bearer ${this.$store.state.accessToken}`
      };
    },
    fetchData: function () {
      const conf = { headers: this.authHeaders() };

      axios.get(`/api/v1/sensors/${this.sensor.id}`, conf).then(res => {
        this.sensor = res.data;
      });
    },
    update: function () {
      const conf = { headers: this.authHeaders() };
      const data = { ...this.sensor };

      axios.put(`/api/v1/sensors/${this.sensor.id}`, data, conf).then(res => {
        this.sensor = res.data;
        this.$router.push({ path: '/sensors' });
      });
    }
  }
}
</script>
