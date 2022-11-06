import { readable } from 'svelte/store';

export let tutorials = readable([
  {
    heading: 'Part 1',
    subheading: 'Introduction to Digital Accessiblity',
    destination: 'part-1',
    slides: ''
  },
  {
    heading: 'Part 2',
    subheading: 'Key Areas of Focus',
    destination: 'part-2',
    slides: ''
  },
  {
    heading: 'Part 3',
    subheading: 'Great Expectations',
    destination: 'part-3',
    slides: ''
  },
  {
    heading: 'Part 4',
    subheading: 'Best Practices',
    destination: 'part-4',
    slides: ''
  }
]);

export const tutorialTitle = readable({
  heading: 'Usability for everyone:',
  subheading: 'Are you excluding some users from accessing your website?',
  destination: ''
});
