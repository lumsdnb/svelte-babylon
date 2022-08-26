import type { Vector3 } from 'babylonjs';
import { writable } from 'svelte/store';

export const my_store = writable<boolean>(false);
export const slider = writable<number>(0);