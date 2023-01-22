import { writable, type Writable } from 'svelte/store';

export const command: Writable<string> = writable('');
export const previousCommand: Writable<string> = writable('');

export const currentDirectory: Writable<string> = writable(''); // TODO:: to analyse