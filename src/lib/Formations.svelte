<script lang="ts">
  interface Formation {
    title: string;
    duration: string;
    description: string;
  }

  const formations: Formation[] = [
    {title: 'Bachelor', duration: 'September 2017 - June 2020', description: 'IT @ EPHEC'}
  ];
</script>

<div class="flex-row formations">
  {#each formations as formation}
    <div class="flex-column full-width formation">
      <div class="flex-row title">{formation.title}</div>
      <div class="flex-row duration">{formation.duration}</div>
      <div class="flex-row description">{formation.description}</div>
    </div>
  {/each}
</div>

<style lang="scss">
  @import '@/styles/colors';

  .formations {
    margin: 10px;
    width: calc(100% - 20px);

    flex-wrap: wrap;
    gap: 20px;

    .formation {
      .title {
        color: $directory-color;
        font-size: 18px;
      }
      .duration {
        color: $orange;
      }
      .description {
        font-size: 14px;
      }
    }
  }
</style>