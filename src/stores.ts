import { writable, type Writable } from 'svelte/store';

export const command: Writable<string> = writable('');