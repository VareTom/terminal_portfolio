import { command } from '@/stores';

// Components
import Command from "@/lib/Command.svelte";
import Error from "@/lib/Error.svelte";
import Welcome from "@/lib/Welcome.svelte";
import Help from "@/lib/Help.svelte";
import Directories from "@/lib/Directories.svelte";
import Contact from "@/lib/Contact.svelte";

export default class CommandHelper {
  static onExecute(command: string): void {
    switch(command) {
      case '/help':
        this.onHelp();
        break;
      case 'reset':
        this.onInit();
        break;
      case 'clear':
        this.onClearTerminal();
        break;
      case 'ls':
        this.onShowDirectory();
        break;
      case 'cat contact':
        this.onShowPersonalInfos();
        break;
      // case 'ls -la':
      //   console.log("ls command");
      //   this.onShowDirectory(true);
      //   break;
      default:
        new Error({
          target: document.getElementById('content'), 
          props: {message: `bash: ${command}: command not found`}
        });
        break;
    }
    this.onResetCommandLine();
  }

  static onHelp(): void {
    new Help({target: document.getElementById('content')});
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

  static onShowDirectory(): void {
    new Directories({target: document.getElementById('content')});
  }

  static onShowPersonalInfos(): void {
    new Contact({target: document.getElementById('content')});
  }
}