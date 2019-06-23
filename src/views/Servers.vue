<template>
  <div id="content">
    <div id="servers" class="server-blocks">
      <div class="block-header">
        <h3>Servers</h3>
      </div>
      <ul>
        <li class="header-row">
          <span>Server Name</span>
          <span>Server IP</span>
          <span>Server Disk Storage(GB)</span>
          <span>Server Memory(MB)</span>
          <span>Virtual CPUs</span>
        </li>
        <li v-for="(server, index) in results" :key="index" :data-id="server.id">
          <span>
            <router-link :to="'/server/'+server.id">
              <strong>{{ server.name }}</strong>
            </router-link>
          </span>
          <span>
            <router-link :to="'/server/'+server.id">
              <em>{{ server.networks.v4[0].ip_address }}</em>
            </router-link>
          </span>
          <span>
            <router-link :to="'/server/'+server.id">{{ server.disk }} GB</router-link>
          </span>
          <span>
            <router-link :to="'/server/'+server.id">{{ server.memory }} MB</router-link>
          </span>
          <span>
            <router-link :to="'/server/'+server.id">{{server.vcpus }}</router-link>
          </span>
        </li>
      </ul>
    </div>

    <div v-if="sites" id="sites">
      <div class="server-blocks">
        <div class="block-header">
          <h3>Sites</h3>
          <router-link to="/addinstall">Add Site</router-link>
        </div>
        <ul>
          <li class="header-row">
            <span>Install Name</span>
          </li>
          <li v-for="(site, index) in sites" :key="index">
            <strong>{{ site }}</strong>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getServers } from "@/functions/getServers";
import { getSites } from "@/functions/getSites";
import { db } from "@/config";
export default {
  data() {
    return {
      results: [],
      sites: []
    };
  },
  methods: {},
  mounted() {
    getServers.then(data => {
      this.results = data;
    });

    getSites().then(sites => {
      this.sites = sites;
    });
  }
};
</script>

<style lang="scss">
.server-blocks {
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 100%;
      padding: 10px 20px;
      display: flex;
      padding-top: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid #ccc;
      cursor: pointer;
      @media only screen and (max-width: 1024px) {
        flex-wrap: wrap;
      }
      &.header-row {
        background-color: #f5f5f5;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid rgb(145, 145, 145);
        padding-top: 25px;
        padding-bottom: 25px;
        cursor: default;
        span {
          font-weight: bold;
        }
      }
      span {
        width: 25%;
        flex: 1 1 auto;
        @media only screen and (max-width: 1024px) {
          width: 100%;
          margin-bottom: 5px;
        }
      }
      strong {
        color: #df7600;
        &:hover {
          color: #c46800;
        }
      }
    }
  }
}
</style>