<template>
  <footer class="footer-container">
    <div class="footer-wrapper">
      <div class="footer-social-section-wrapper">
        <div class="brand">
          <h5>
            <router-link to="/">Fxblog</router-link>
          </h5>
        </div>
        <div class="social-section">
          <a href="mailto:270295484@qq.com" target="_blank">
            <i class="icon icon-mail" style="font-size: 30px;"></i>
          </a>
          <a href="https://github.com/fxtahe" target="_blank">
            <i class="icon icon-github" style="font-size: 30px;"></i>
          </a>
        </div>
      </div>
      <div class="footer-copyright-section-wrapper">
        <span class="copyright">
          © 2020
          <span class="logo">Fxblog</span>
        </span>
        . All Right Reserved.
        <div class="record-number">♥</div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: $index-normal;
}
.footer-social-section-wrapper {
  padding: 50px 0 30px;
  text-align: center;
  .brand {
    h5 {
      text-align: center;
      font-size: 45px;
      margin-bottom: 15px;
      @media (max-width: 500px) {
        font-size: 30px;
      }
    }
  }
  .social-section {
    a {
      background-color: var(--navbar-backgroup-color);
      height: 50px;
      width: 50px;
      border-radius: 50px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
      margin-top: 15px;
      &:hover {
        background: var(--link-color);
        color: var();
      }
    }
  }
}
.footer-copyright-section-wrapper {
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  max-width: 600px;
  margin: 0 auto;
  padding: 25px 30px;
  text-align: center;
  letter-spacing: 0.7px;
  color: var(--font-color-light);

  .copyright {
    font-weight: $font-weight-bold;

    .logo {
      color: var(--font-color-dark);
    }
  }
}

.record-number {
  margin-top: 10px;
}
</style>
