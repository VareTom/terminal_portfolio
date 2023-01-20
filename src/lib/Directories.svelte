<script lang="ts">
  interface Entry {
    name: string;
    isDirectory: boolean
  }

  const entries: Entry[] = [
    {name: 'Contact', isDirectory: false},
    {name: 'Formations', isDirectory: false},
    {name: 'Experiences', isDirectory: true},
    {name: 'SoftSkills', isDirectory: false},
    {name: 'LanguageSkills', isDirectory: false}
  ];

</script>

<div class="flex-row full-width directories">
  {#each entries as entry }
    <p class="entry" class:directory="{entry.isDirectory}">{entry.name}</p>
  {/each}
</div>

<style lang="scss">
  @import '../styles/colors.scss';

  .directories {
    display: flex;
    flex-wrap: wrap;

    .entry {
      &:not(:last-child) {
        margin-right: 40px;
      }
    }

    .directory {
      color: blue;
    }
  }
</style>