
// Store
import { command, previousCommands, currentDirectory } from '@/stores';
import {get} from "svelte/store";

// Components
import Command from "@/lib/Command.svelte";
import Error from "@/lib/Error.svelte";
import Welcome from "@/lib/Welcome.svelte";
import Help from "@/lib/Help.svelte";
import Directories from "@/lib/Directories.svelte";
import Contact from "@/lib/Contact.svelte";
import History from "@/lib/History.svelte";
import Skills from "@/lib/Skills.svelte";
import Formations from "@/lib/Formations.svelte";
import Experiences from "@/lib/Experiences.svelte";

export default class CommandHelper {
  static onExecute(command: string): void {
    const directory: string = get(currentDirectory);
    switch (command) {
      case '/help':
        new Help({ target: document.getElementById('content') });
        break;
      case 'reset':
        this.onInit();
        break;
      case 'clear':
        this.onClearTerminal();
        break;
      case 'ls':
        if (directory) {
          new Experiences({ target: document.getElementById('content') });
        } else {
          new  Directories({ target: document.getElementById('content') });
        }
        break;
      case 'ls Experiences':
      case 'ls experiences':
        new Experiences({ target: document.getElementById('content') });
        break;
      case 'history':
        new History({ target: document.getElementById('content') });
        break;
      case 'cat Contact':
      case 'cat contact':
        new Contact({ target: document.getElementById('content') });
        break;
      case 'cat Formations':
      case 'cat formations':
        new Formations({ target: document.getElementById('content') });
        break;
      case 'cd Experiences':
      case 'cd experiences':
        currentDirectory.set(command.split(' ').reverse()[0]);
        break;
      case 'cd':
      case 'cd ..':
        currentDirectory.set('');
        break;
      case 'cat LanguageSkills':
      case 'cat languageSkills':
      case 'cat languageskills':
        this.onShowSkills(true);
        break;
      case 'cat SoftSkills':
      case 'cat softSkills':
      case 'cat softskills':
        this.onShowSkills(false);
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
    if (currentCommand) previousCommands.update((commands: string[]) => commands.length > 0 ? [...commands, currentCommand] : [currentCommand]);
    command.set('');
    this.onToggleInputFocus();
  }

  static onToggleInputFocus(): void {
    const commandInputs: NodeListOf<HTMLElement> = document.querySelectorAll('.input');
    commandInputs[commandInputs.length - 1].focus();
  }

  static onShowSkills(isLanguageToDisplay: boolean): void {
    new Skills({ target: document.getElementById('content'), props: {isLanguageToDisplay: isLanguageToDisplay} });
  }
}