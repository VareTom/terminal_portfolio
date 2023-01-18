<script lang="ts">

  import { command } from '@/stores';
  
  const prefix: string = '~/portfolio$';
  let isDisabledInput: boolean = false;

  function onSubmitCommand(event) {
    if (event.code === 'Enter' && event.target.value) {
      command.set(event.target.value);
      isDisabledInput = true;
    }
  }
</script>

<div class="flex-row full-width prefix-box">
  <span class="prefix">{prefix}</span>
  <input class="input invisible-input" type="text" on:keydown={onSubmitCommand} disabled={isDisabledInput}>
</div>

<style lang="scss">

  @import '../styles/colors.scss';

  .prefix-box {
    display: flex;
    align-items: center;
    margin: 15px 0;
    height: 15px;

    .prefix {
      color: orange;
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