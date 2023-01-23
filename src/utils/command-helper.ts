
// Store
import { command, previousCommands } from '@/stores';

// Components
import Command from "@/lib/Command.svelte";
import Error from "@/lib/Error.svelte";
import Welcome from "@/lib/Welcome.svelte";
import Help from "@/lib/Help.svelte";
import Directories from "@/lib/Directories.svelte";
import Contact from "@/lib/Contact.svelte";
import Languages from "@/lib/Languages.svelte";
import History from "@/lib/History.svelte";

export default class CommandHelper {
  static onExecute(command: string): void {
    switch (command) {
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
      case 'history':
        this.onShowHistory();
        break;
      case 'cat Contact':
      case 'cat contact':
        this.onShowPersonalInfos();
        break;
      case 'cat Formations':
      case 'cat formations':
        this.onShowFormation();
        break;
      case 'cat LanguageSkills':
      case 'cat languageSkills':
        this.onShowLanguageSkills();
        break;
      case 'cat SoftSkills':
      case 'cat softSkills':
        this.onShowSoftSkills();
        break;
      default:
        new Error({
          target: document.getElementById('content'),
          props: { message: `bash: ${command}: command not found` }
        });
        break;
    }
    this.onResetCommandLine(command);
  }

  static onHelp(): void {
    new Help({ target: document.getElementById('content') });
  }

  static onInit(isResetNeeded?: boolean): void {
    this.onClearTerminal();
    new Welcome({ target: document.getElementById('content') });
    if (isResetNeeded) this.onResetCommandLine();
  }

  static onClearTerminal(): void {
    document.getElementById('content').innerHTML = '';
  }

  static onResetCommandLine(currentCommand?: string): void {
    new Command({ target: document.getElementById('content') });

    if (currentCommand) previousCommands.update((commands: string[]) => [...commands, currentCommand]);

    command.set('');
    this.onToggleInputFocus();
  }

  static onToggleInputFocus(): void {
    const commandInputs: NodeListOf<HTMLElement> = document.querySelectorAll('.input');
    commandInputs[commandInputs.length - 1].focus();
  }

  static onShowDirectory(): void {
    new Directories({ target: document.getElementById('content') });
  }

  static onShowPersonalInfos(): void {
    new Contact({ target: document.getElementById('content') });
  }

  static onShowLanguageSkills(): void {
    new Languages({ target: document.getElementById('content') });
  }

  static onShowFormation(): void {
    console.log('show formations');
  }

  static onShowSoftSkills(): void {
    console.log('show soft skills');
  }

  static onShowHistory(): void {
    new History({ target: document.getElementById('content') });
  }
}