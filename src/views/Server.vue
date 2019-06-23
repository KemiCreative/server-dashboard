<template>
  <div id="content">
    <div id="servers" class="server-blocks">
      <div class="block-header">
        <h3>Server: {{ server }}</h3>
      </div>
    </div>

    <div id="sites">
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
import { getSites } from "@/functions/getSites";
import { db } from "@/config";
export default {
  data() {
    return {
      results: [],
      sites: [],
      server: this.$route.params.id
    };
  },
  methods: {},
  mounted() {
    getSites(this.server).then(sites => {
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