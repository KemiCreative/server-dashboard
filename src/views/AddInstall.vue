<template>
  <div id="content">
    <div class="server-blocks">
      <div class="block-header">
        <h1>Add New Install</h1>
      </div>
      <form>
        <div>
          <label>
            Install
            <input type="text" name="name" v-model="name">
          </label>
        </div>
        <div>
          <label>
            Site Name
            <input type="text" name="spinup" v-model="spinup">
          </label>
        </div>
        <div>
          <label>Select Server</label>
          <select name="ip" v-model="ip" @change="onChange($event)">
            <option value>Please Select One</option>
            <option
              v-for="(server, index) in results"
              :key="index"
              :value="server.networks.v4[0].ip_address"
              :data-sid="server.id"
            >{{ server.name }} - {{ server.networks.v4[0].ip_address }}</option>
          </select>
          <input type="hidden" name="sid" v-model="sid">
        </div>
        <div>
          <button @click.prevent="addInstall">Add Site</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { getServers } from "@/functions/getServers";
import { db } from "@/config";

export default {
  data() {
    return {
      results: [],
      ip: "",
      name: "",
      spinup: "",
      sid: ""
    };
  },
  methods: {
    addInstall() {
      db.collection("installs")
        .doc(this.name)
        .set({
          ip: this.ip,
          name: this.name,
          spinup: this.spinup,
          sid: this.sid
        })
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    },
    onChange(event) {
      const theTarget =
        event.target.options[event.target.options.selectedIndex].dataset;
      this.sid = theTarget.sid;
      this.ip = event.target.value;
      console.log(this.ip);
      console.log(this.sid);
    }
  },
  mounted() {
    getServers.then(data => {
      this.results = data;
    });
  }
};
</script>
<style lang="scss">
form {
  div {
    &:nth-child(1),
    &:nth-child(2) {
      width: calc(50% - 15px);
      margin-right: 30px;
    }
    &:nth-child(2) {
      margin-right: 0;
    }
    &:nth-child(3) {
      width: 100%;
      select {
        margin-top: 10px;
        width: 100%;
        height: 43px;
        font-size: 16px;
      }
    }
  }
}
</style>

