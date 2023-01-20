<script lang="ts">
  interface Command {
    name: string;
    text: string;
  }

  const commands: Command [] = [
    {name: '/help', text: 'Display available commands.'},
    {name: '/reset', text: 'Reset the terminal with the initial state.'},
    {name: 'clear', text: 'Remove all previous lines in the terminal.'},
    {name: 'la', text: 'Display a list of files and sub-directories in the current directory.'},
    // {name: 'ls -la', text: 'Display a vertical list of files and sub-directories in the current directory.'},
    {name: 'cd', text: 'Change current working directory.'},
  ]

</script>

<div class="flex-column full-width">
  <p class="title">Command list :</p>

  {#each commands as command }
    <div class="flex-row full-width command">
      <!-- <div class="flex-column">-</div> -->
      <div class="flex-column name">- {command.name} : </div>
      <div class="flex-column text">{command.text}</div>
      <p class="command-list">
        
      </p>
    </div>
  {/each}

</div>

<style lang="scss">

  .command {
    margin: 5px 10px;
    padding-left: 10px;
    font-size: 12px;
    // display: flex;
    // justify-content: space-between;

    .name {
      width: 80px;
      margin-inline: 10px;
    }

    .text {
      white-space: break-spaces;
    }
  }
</style>