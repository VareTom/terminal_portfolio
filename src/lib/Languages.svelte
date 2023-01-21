<script lang="ts">
  interface Language {
    name: string;
    level: string;
  }

  const languages: Language[] = [
    {name: 'French', level: 'Mother tongue'},
    {name: 'English', level: 'Notions'}
  ]
</script>

<div class="languages">
  {#each languages as language }
    <div class="flex-row full-width language">
      <p>- {language.name} : <span class="level">{language.level}</span></p>
    </div>
  {/each}
</div>


<style lang="scss">
  @import '@/styles/colors';

  .languages {
    margin: 10px 0;
    .language {
      margin: 5px 0;

      .level {
        color: $orange;
      }
    }
  }
</style>