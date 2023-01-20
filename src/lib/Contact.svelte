<script lang="ts">
  import GithubIconRef from "@/assets/github.svg";
  import LinkedInIconRef from "@/assets/linkedin.svg";
</script>

<div class="flex-row full-width name center">
  <h1>Varewyck Tom</h1>
</div>

<div class="flex-row full-width job center">
  <h3>Full Stack Developer</h3>
</div>

<div class="flex-row full-width links center">
  <a href="https://github.com/VareTom" target="_blank" rel="noreferrer">
    <img src={GithubIconRef} alt="GitHub icon">
  </a>
  <a href="https://www.linkedin.com/in/tom-varewyck-26a51a11a/" target="_blank" rel="noreferrer">
    <img src={LinkedInIconRef} alt="LinkedIn icon">
  </a>
</div>

<style lang="scss">
  @import '@/styles/colors';

  .job {
    color: $orange;
  }
  .links {
    margin: 20px 0;
    & > * {
      cursor: pointer;
      height: 35px;
      width: 35px;
      transition: transform ease-in-out .3s;

      &:not(:last-child) {
        margin-right: 40px;
      }

      &:hover {
        transform: scale(1.2);
      }
    }

    img {
      height: 30px;
      width: 30px;
    }
  }
</style>