<script lang="ts">
  import { onMount } from "svelte";
  import { previousCommands } from '@/stores';
  import { get } from "svelte/store";
  
  let commands: string[] = [];

  onMount(() => {
    commands = get(previousCommands);
      console.log(commands)
    //commands = commands.reverse();
  })

</script>

<div class="flex-column commands">
  {#if commands.length > 0}
    {#each commands as command }
      <div class="flex-row full-width command">{command}</div>
    {/each}
  {:else}
    <p class="no-history">No history yet!</p>
  {/if}
</div>

<style lang="scss">
  .commands {
    & > * {
      margin-bottom: 5px;
    }

  }
</style>