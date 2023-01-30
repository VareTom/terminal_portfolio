<script lang="ts">
  interface Command {
    name: string;
    text: string;
  }

  const commands: Command [] = [
    {name: '/help', text: 'Display available commands.'},
    {name: 'reset', text: 'Reset the terminal with the initial state.'},
    {name: 'clear', text: 'Remove all previous lines in the terminal.'},
    {name: 'ls', text: 'Display a list of files and sub-directories in the current directory.'},
    {name: 'cd', text: 'Change current working directory.'},
    {name: 'cat', text: 'Display the content of an entry.'},
    {name: 'history', text: 'Display all inserted commands.'}
  ]

</script>

<div class="flex-column full-width">
  <p class="title">Command list :</p>

  {#each commands as command }
    <div class="flex-row command">
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
    width: calc(100% - 20px);
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