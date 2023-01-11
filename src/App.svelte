<script lang="ts">
  const prefix: string = '~$';
</script>

<main class="full-height full-width flex-row center main">
  <div class="flex-column terminal">
    <div class="full-width header">
      <div class="close-button"></div>
      <div class="close-button"></div>
      <div class="close-button"></div>
      <div class="flex-row full-height center title">
        <p>Varewyck Tom - Terminal Portfolio</p>
      </div>
    </div>
    <div class="content">
      {prefix}  coucou
    </div>
  </div>
</main>

<style lang="scss">
  @import './styles/colors';

  .main {

    .terminal {
      width: 50vw;
      height: auto;
      
      border-radius: 12px;
      background: $bg-dark;

      .header {
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        height: 30px;
        background: $bg-light;
        position: relative;

        .title {
          p {
            text-align: center;
          }
        }

        .close-button {
          height: 10px;
          width: 10px;
          border-radius: 50%;
          position: absolute;
          top: 10px;
          left: 10px;

          &:nth-child(1) {
            background: $close-color;
          }
          &:nth-child(2) {
            background: $minimize-color;
            left: 30px;
          }
          &:nth-child(3) {
            background: $fullscreen-color;
            left: 50px;
          }
        }
      }

      .content {
        min-height: 200px;
        padding: 10px 15px;
      }
    }

  }


  @media screen and (max-width: 600px) {
    .terminal {
      width: calc(100% - 20px) !important;
      margin: 10px !important;
    }
  }

  @media screen and (min-width: 601px) and (max-width: 750px) {
    .terminal {
      width: 75vw !important;
      margin: 10px !important;
    }
  }
</style>