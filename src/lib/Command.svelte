<script lang="ts">

  import { command, previousCommands, currentDirectory } from '@/stores';
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  
  // Helpers
  import {Constants} from "@/utils/constants";
  
  let prefix: string = '';
  let isDisabledInput: boolean = false;
  let inputValue: string = '';
  let previousCommandIndex: number = 0;

  onMount(() => {
    let initialPrefix: string = '~/portfolio';
    const directory: string = get(currentDirectory);
    prefix = directory ? `${initialPrefix}/${directory}$`: initialPrefix + '$';
  });

  function onSubmitCommand(event) {
    const historyCommands: string[] = get(previousCommands);
    if (event.code === 'ArrowDown' && historyCommands.length > 0 && previousCommandIndex >= 0) {
      previousCommandIndex--;
      inputValue = previousCommandIndex > 0 ? historyCommands[historyCommands.length - previousCommandIndex] : '';
    }
    if (event.code === 'ArrowUp' && historyCommands.length > 0) {
      if (previousCommandIndex < historyCommands.length) previousCommandIndex++;
      inputValue = previousCommandIndex <= historyCommands.length ? historyCommands[historyCommands.length - previousCommandIndex] : historyCommands[0];
    }

    if (event.code === 'Tab' && event.target.value) {
      let command: string = event.target.value;
      if (Constants.availablesCommands.indexOf(command.split('')[0]) !== 0) {
        console.log(event.target.value)
      }
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