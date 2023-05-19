import { writable } from "svelte/store";

export const token = writable(null)
export const userData = writable({
  user: null,
  isLoggedin: false,
});
