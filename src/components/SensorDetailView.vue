<template>
  <div>
    <div class="title">
      <h2>
        <span v-if="!id">New</span>
        Sensor
        <span v-if="id" class="sensor-id">#{{ id }}</span>
      </h2>
      <md-button v-if="id" @click="deleteSensor(id)" class="md-raised md-accent">Delete</md-button>
    </div>

    <form novalidate @submit.prevent="submit">
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
          <md-button type="submit" class="md-raised md-primary">{{ id ? 'Update' : 'Create' }}</md-button>
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
  props: {
    id: Number
  },
  data: function () {
    return {
      sensor: {
        id: this.id || null,
        isActive: false,
        description: "",
        samplingPeriod: 5
      }
    };
  },
  created: function () {
    if (this.id) {
      this.fetchData();
    }
  },
  methods: {
    authHeaders: function () {
      return {
        'Authorization': `Bearer ${this.$store.state.accessToken}`
      };
    },
    fetchData: function () {
      const conf = { headers: this.authHeaders() };

      axios.get(`/api/v1/sensors/${this.id}`, conf).then(res => {
        this.sensor = res.data;
      });
    },
    submit: function () {
      if (this.id) {
        this.updateSensor(this.id);
      } else {
        this.createSensor();
      }
    },
    createSensor: function () {
      const conf = { headers: this.authHeaders() };
      const data = { ...this.sensor };

      axios.post(`/api/v1/sensors`, data, conf).then(() => {
        this.$router.push({ path: '/sensors' });
      });
    },
    updateSensor: function (id) {
      const conf = { headers: this.authHeaders() };
      const data = { ...this.sensor };

      axios.put(`/api/v1/sensors/${id}`, data, conf).then(() => {
        this.$router.push({ path: '/sensors' });
      });
    },
    deleteSensor: function (id) {
      const conf = { headers: this.authHeaders() };

      axios.delete(`/api/v1/sensors/${id}`, conf).then(() => {
        this.$router.push({ path: '/sensors' });
      });
    }
  }
}
</script>
