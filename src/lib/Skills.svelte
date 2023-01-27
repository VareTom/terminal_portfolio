<script lang="ts">
  import {onMount} from "svelte";

  interface Skill {
    name: string;
    level: number | string;
  }

  const languages: Skill[] = [
    {name: 'French', level: 'Mother tongue'},
    {name: 'English', level: 'Notions'}
  ]

  const soft: Skill[] = [
    {name: 'Angular', level: 2.5},
    {name: 'NodeJs', level: 2},
    {name: 'Ionic', level: 1.5},
    {name: 'Python', level: 1.5},
    {name: 'NestJs', level: 1},
    {name: 'Linux', level: 4},
    {name: 'Docker', level: 2},
    {name: 'Azure', level: 1 }
  ]

  let skills: Skill[] = [];

  export let isLanguageToDisplay: boolean;

  onMount(() => {
    skills = isLanguageToDisplay ? languages: soft;
  })

</script>

<div class="skills">
  {#each skills as skill }
    <div class="flex-row full-width skill">
      <p>- {skill.name} :
        <span class="level">
          {skill.level}
          {#if !isLanguageToDisplay} {skill.level > 1 ? 'years': 'year'} {/if}
        </span>
      </p>
    </div>
  {/each}
</div>

<style lang="scss">
  @import '@/styles/colors';

  .skills {
    margin: 10px 0;
    .skill {
      margin: 5px 0;

      .level {
        color: $orange;
      }
    }
  }
</style>

