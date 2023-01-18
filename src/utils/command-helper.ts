import { command } from '@/stores';

// Components
import Command from "@/lib/Command.svelte";
import Error from "@/lib/Error.svelte";
import Welcome from "@/lib/Welcome.svelte";

export default class CommandHelper {
  static onExecute(command: string): void {
    switch(command) {
      case '/help':
        console.log("/help command inserted!");
        break;
      case '/reset':
        this.onInit();
        break;
      case 'clear':
        console.log("clear command inserted!");
        this.onClearTerminal();
        break;
      case 'ls':
        console.log("ls command");
        this.onShowDirectory(false);
        break;
      case 'ls -la':
        console.log("ls command");
        this.onShowDirectory(true);
        break;
      default:
        new Error({
          target: document.getElementById('content'), 
          props: {message: `bash: ${command}: command not found`}
        });
        break;
    }
    this.onResetCommandLine();
  }

  static onInit(isResetNeeded?: boolean): void {
    this.onClearTerminal();
    new Welcome({target: document.getElementById('content')});
    if (isResetNeeded) this.onResetCommandLine();
  }

  static onClearTerminal(): void {
    document.getElementById('content').innerHTML = '';
  }

  static onResetCommandLine(): void {
    new Command({target: document.getElementById('content')});
    command.set('');
    this.onToggleInputFocus();
  }

  static onToggleInputFocus(): void {
    const commandInputs: NodeListOf<HTMLElement> = document.querySelectorAll('.input');
    commandInputs[commandInputs.length - 1].focus();
  }

  static onShowDirectory(isList: boolean): void {
    this.onResetCommandLine();
  }
}