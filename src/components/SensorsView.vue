<template>
  <div>
    <h2>Sensors</h2>

    <ul>
      <li v-for="sensor in sensors" :key="sensor.id">
        <md-card md-with-hover>
          <md-ripple>
            <div @click="edit(sensor.id)">
              <md-card-content>
                <div class="md-layout">
                  <div class="md-layout-item md-size-10 is-active">
                    <i v-if="sensor.isActive" class="material-icons sensor-active">check_circle</i>
                    <i v-if="!sensor.isActive" class="material-icons sensor-inactive">cancel</i>
                  </div>
                  <div class="md-layout-item description">{{ sensor.description }}</div>
                  <div class="md-layout-item md-size-10 sampling-period">
                    <i class="material-icons">history</i>
                    {{ sensor.samplingPeriod }}&apos;
                  </div>
                </div>
              </md-card-content>
            </div>
          </md-ripple>
        </md-card>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  padding: 0;
}

li {
  list-style-type: none;
}

li + li {
  margin-top: 10px;
}

.md-card {
  margin: 2px;
  cursor: pointer;
}

.md-card-content {
  padding: 8px 0;
}

.md-layout-item {
  padding: 8px 16px;
}

.md-layout-item .material-icons {
  font-size: 18px;
  vertical-align: text-bottom;
}

.md-layout-item + .md-layout-item {
  border-left: 1px solid #ddd;
}

.is-active {
  text-align: center;
}

.description {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.sampling-period {
  color: #999;
}

.sensor-active {
  color: #448aff;
}

.sensor-inactive {
  color: #ff5252;
}
</style>

<script>
import * as axios from 'axios';

export default {
  name: 'SensorsView',
  data: function () {
    return {
      sensors: null
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

      axios.get('/api/v1/sensors', conf).then(res => {
        this.sensors = res.data;
      });
    },
    edit: function (id) {
      this.$router.push({ path: `/sensors/${id}` });
    }
  }
}
</script>
