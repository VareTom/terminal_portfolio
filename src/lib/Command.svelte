<script lang="ts">

  import { command, previousCommands } from '@/stores';
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  
  // Helpers
  import CommandHelper from "@/utils/command-helper";
  
  let prefix: string = '~/portfolio$';
  let isDisabledInput: boolean = false;
  let inputValue: string = '';
  let previousCommandIndex: number = 0;

  onMount(() => {

  });

  function onSubmitCommand(event) {
    if (event.code === 'ArrowDown') {
      const historyCommands: string[] = get(previousCommands);
      if (historyCommands.length > 0 && previousCommandIndex >= 0) {
        previousCommandIndex--;
        inputValue = previousCommandIndex <= historyCommands.length ? historyCommands[previousCommandIndex] : '';
      }
    }
    if (event.code === 'ArrowUp') {
      const historyCommands: string[] = get(previousCommands);
      if (historyCommands.length > 0) { //
        inputValue = previousCommandIndex <= historyCommands.length ? historyCommands[previousCommandIndex] : historyCommands[historyCommands.length-1];
        previousCommandIndex++;
      }
    }

    if (event.code === 'Tab' && event.target.value) {
      // TODO:: predict command
    }
    if (event.code === 'Enter' && event.target.value) {
      command.set(event.target.value);
      isDisabledInput = true;
    }
  }
</script>

<div class="flex-row full-width prefix-box">
  <span class="prefix">{prefix}</span>
  <input class="input invisible-input" type="text" on:keydown={onSubmitCommand} disabled={isDisabledInput} bind:value={inputValue}>
</div>

<style lang="scss">

  @import '@/styles/colors.scss';

  .prefix-box {
    display: flex;
    align-items: center;
    margin: 15px 0 5px;
    height: 15px;

    .prefix {
      color: $orange;
    }

    .invisible-input {
      background: none;
      border: none;
      margin-left: 10px;
      outline: none;
      caret-color: $font-color;
      color: $font-color;
      text-decoration: none;
      font-size: 16px;
      font-family: $font;
  
      &:focus {
        outline: none;
      }
    }
  }

</style>