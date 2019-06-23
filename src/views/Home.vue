<template>
  <div id="content">
    <div class="server-blocks">
      <div class="block-header">
        <h1>Login</h1>
      </div>
      <form>
        <div>
          <label>
            Username/Email
            <input type="email">
          </label>
        </div>
        <div>
          <label>
            Password
            <input type="password">
          </label>
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
form > div {
  width: calc(50% - 15px);
  margin-right: 30px;
  &:nth-child(2) {
    margin-right: 0;
  }
}
</style>
