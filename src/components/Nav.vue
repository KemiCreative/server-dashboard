<template>
  <span class="navbar">
    <div id="logo">
      <router-link to="/">
        <img src="../assets/kemi-creative.png">
      </router-link>
    </div>
    <span id="my-account-navbar" class style>
      <span id="top-links">
        <router-link to="/servers">Dashboard</router-link>
      </span>
      <span id="my-account">
        <ul class="navbar-nav navbar-auth d-none d-md-flex d-lg-flex">
          <li class="nav-item dropdown" :class="{ active: myaccount }">
            <a
              id="navbarDropdown"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              class="nav-link dropdown-toggle"
              @click.prevent="showAccount"
            >
              Michael Schut
              <span
                data-v-578f9343
                role="img"
                class="spinup-avatar rounded-circle ml-2"
                style="width: 32px; height: 32px; background-image: url(&quot;https://www.gravatar.com/avatar/cdd07029c7de50cc3cb2f2be26489426?s=300&amp;d=mm&quot;);"
              ></span>
              <svg
                height="12"
                viewBox="0 0 18 18"
                width="12"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <path
                    id="a"
                    d="m3.40382081 13.4939064-1.47430828-1.3514492 7.23715414-7.89507725 7.23715413 7.89507725-1.4743083 1.3514492-5.76284583-6.28674089z"
                  ></path>
                  <mask id="b" fill="#fff">
                    <use fill="none" xlink:href="#a"></use>
                  </mask>
                </defs>
                <g fill="none" fill-rule="evenodd">
                  <use
                    fill="#bbb"
                    fill-rule="nonzero"
                    transform="matrix(1 0 0 -1 0 17.741286)"
                    xlink:href="#a"
                  ></use>
                  <g fill="#bbb" mask="url(#b)">
                    <path d="m0 0h233v233h-233z" transform="translate(-155 -108)"></path>
                  </g>
                </g>
              </svg>
            </a>
            <ul aria-labelledby="navbarDropdown" class="dropdown-menu dropdown-menu-right">
              <li>
                <a
                  href="https://spinupwp.app/logout"
                  onclick="event.preventDefault();document.getElementById('logout-form').submit();"
                  class="dropdown-item logout"
                >Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      </span>
    </span>
  </span>
</template>
<script>
export default {
  data() {
    return {
      myaccount: false
    };
  },
  methods: {
    showAccount() {
      this.myaccount = !this.myaccount;
    }
  }
};
</script>
<style lang="scss" scoped>
.navbar {
  width: 100%;
  box-shadow: 0 0 2px #ccc;
  display: flex;
  background-color: #fff;
  align-items: center;
  position: relative;
  #logo {
    min-width: 300px;
    width: 15%;
    // min-width: 200px;
    flex: 0 0 auto;
    border-right: 1px solid #ccc;
    margin-right: 30px;
    padding: 20px;
    max-width: 400px;
  }
  #my-account-navbar {
    flex: 1 1 auto;
    display: flex;
    #top-links {
      flex: 1 1 auto;
      text-align: left;
      a {
        height: 100%;
        padding: 20px;
        display: inline-block;
      }
    }
    #my-account {
      position: relative;
      width: 15%;
      > ul {
        border-left: 1px solid #ccc;
        padding: 20px;
        margin-bottom: 0;
      }
      li ul {
        display: none;
      }
      li.active {
        ul {
          display: block;
          position: absolute;
          top: 100%;
          right: 0;
          padding: 20px;
          width: 100%;
          background-color: #fff;
          box-shadow: 0 0 2px #ccc;
        }
      }
    }
    #navbarDropdown {
    }
  }
}
</style>
