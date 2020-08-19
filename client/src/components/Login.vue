<template>
  <div class='card login-container'>
    <header class='card-header'>
      <p class='card-header-title is-size-3'>Login</p>
    </header>
    <div class='card-content'>
      <div class='content'>
        <div class='icon-container has-text-centered'>
          <figure class='image is-128x128 is-marginless'>
            <img class='brandIcon' src='https://bulma.io/images/placeholders/128x128.png' />
          </figure>
        </div>
        <!-- Section for custom login -->
        <!-- <div class='field'>
          <label class='label'>E-Mail</label>
          <div class='control has-icons-left'>
            <input class='input' type='email' placeholder='Your E-Mail Adress' />
            <span class='icon is-small is-left'>
              <i class='fas fa-envelope'></i>
            </span>
          </div>
        </div>
        <div class='field'>
          <label class='label'>Password</label>
          <div class='control has-icons-left'>
            <input class='input' type='password' placeholder='Enter Your Password'>
            <span class='icon is-small is-left'>
              <i class='fas fa-lock'></i>
            </span>
          </div>
        </div>
      </div>
        <h2><span>or</span></h2>-->
        <div class='section'>
          <a class='button is-danger' id='googleLogin' href="http://localhost:3000/auth/google" target="_blank">
            <span class='icon is-small mr-1'>
              <i class='fab fa-google is-left'></i>
            </span>Log In With Google
          </a>
        </div>
      </div>
    </div>
    <!-- <footer class='card-footer'>
      <button class='is-success button' id='loginBtn'>Login</button>
    </footer>-->
  </div>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>
.login-container {
  width: 400px;
  margin-top: 50px;
}
#loginBtn {
  margin: 0 auto;
}

h2 {
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin: 10px 0 20px;
}

h2 span {
  background: #fff;
  padding: 0 10px;
}
#googleLogin {
  width: 100%;
}
.icon-container {
  width: 128px;
  margin: 0 auto;
}
</style>
