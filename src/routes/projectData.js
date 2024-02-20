import dogBeanie from "$lib/assets/images/dog-beanie-640w.jpg"
import purse from "$lib/assets/images/purse-640w.jpg"
import jacket from "$lib/assets/images/jacket-640w.jpg"
import shoes from "$lib/assets/images/shoes-640w.jpg"
console.log(dogBeanie)

export const projects = [
  {
    src: dogBeanie,
    link: "/01-sign-up",
    name: "Sign Up Page",
    description: "A sign up page for a website",
  },
  {
    src: purse,
    link: "/ui-lab/2",
    name: "Another Project",
    description: "Some important words about this project",
  },
  {
    src: jacket,
    link: "/ui-lab/3",
    name: "This is my 3rd Project",
    description: "This is a something something",
  },
  {
    src: shoes,
    link: "/ui-lab/4",
    name: "A Longer Title for my 4th Project",
    description: "This si a very complicated something or other",
  },
]
