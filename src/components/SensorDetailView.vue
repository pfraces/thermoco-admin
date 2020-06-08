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
                  min="0"
                  v-model="sensor.samplingPeriod"
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
.title {
  display: flex;
  align-items: center;
}

.title h2 {
  flex: 1;
}

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
  data: () => ({
    sensor: {
      description: null,
      samplingPeriod: null,
      isActive: null
    }
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

      axios.get(`/api/v1/sensors/${this.$route.params.id}`, config).then(res => {
        this.sensor = res.data;
      });
    }
  }
}
</script>
