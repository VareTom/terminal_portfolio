<script lang="ts">

  import { command, previousCommand } from '@/stores';
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  
  // Helpers
  import CommandHelper from "@/utils/command-helper";
  
  let prefix: string = '~/portfolio$';
  let isDisabledInput: boolean = false;
  let inputValue: string = '';

  onMount(() => {

  });

  function onSubmitCommand(event) {
    console.log(event);
    if (event.code === 'ArrowDown') inputValue = '';
    if (event.code === 'ArrowUp' && get(previousCommand)) inputValue = get(previousCommand);
    if (event.code === 'Tab' && event.target.value) {
      // TODO:: predict command
    }
    if (event.code === 'Enter' && event.target.value) {
      previousCommand.set(event.target.value);
      isDisabledInput = true;
    }
  }
</script>

<div class="flex-row full-width prefix-box">
  <span class="prefix">{prefix}</span>
  <input class="input invisible-input" type="text" on:keydown={onSubmitCommand} disabled={isDisabledInput} bind:value={inputValue}>
</div>

<style lang="scss">

  @import '../styles/colors.scss';

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