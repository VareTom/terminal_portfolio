<script lang="ts">
  interface Directory {
    name: string;
  }

  const directories: Directory[] = [
    {name: 'Experiences'},
    {name: 'Formations'},
    {name: 'Contact'},
    {name: 'LanguageSkills'},
    {name: 'SoftSkills'}
  ];

</script>

<div class="flex-row full-width directories">
  {#each directories as directory }
    <p class="directory">{directory.name}</p>
  {/each}
</div>

<style lang="scss">

  .directories {
    display: flex;
    flex-wrap: nowrap;

    .directory {
      color: blue;

      &:not(:last-child) {
        margin-right: 40px;
      }
    }
  }
</style>