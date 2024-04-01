import { writable } from "svelte/store"
import type { Writable } from "svelte/store"

export const gitHubUser = writable({})
export const userList: Writable<
  Array<{
    login: string
    avatar_url: string
    name: string
    location: string
    bio: string
    html_url: string
    repoData: Array<{
      name: string
      description: string
      html_url: string
      language: string
    }>
  }>
> = writable([])
