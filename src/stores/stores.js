import { readable } from 'svelte/store';

export let tutorials = readable([
  {
    heading: 'Part 1',
    subheading: 'Introduction to Digital Accessiblity',
    destination: 'part-1',
    slides:
      'https://docs.google.com/presentation/d/17DG8LYOM50N_KjbiikeJRbCeNpTg4nKEGiZWT1v-T1U/edit?usp=sharing',
    resources: [
      {
        name: 'Exercise 1: Rating',
        type: 'Exercise',
        href: '#'
      },
      {
        name: 'Exercise 2: Complete the Form',
        type: 'Exercise',
        href: 'https://forms.gle/h4xzHHTsZJoUgs1t6'
      },
      {
        type: 'Resource',
        name: 'WCAG Quick Reference Guide',
        href: 'https://www.w3.org/WAI/WCAG21/quickref/'
      },
      {
        type: 'Resource',
        name: "Deque's Screen Reader Keyboard Shortcuts and Gestures",
        href: 'https://dequeuniversity.com/screenreaders/'
      },
      {
        type: 'Resource',
        name: 'Getting started with Chrome Dev Tools',
        href: 'https://developer.chrome.com/docs/devtools/open/'
      },
      {
        type: 'Exercise',
        name: 'Exercise 3: Using A11y Scanners & Dev Tools',
        href: 'https://googlechromelabs.github.io/friendpurr/friendpurr.html'
      },
      {
        type: 'Tool',
        name: 'Axe Dev Tool: Chrome',
        href: 'https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd'
      },
      {
        type: 'Tool',
        name: 'Axe Dev Tool: Firefox',
        href: 'https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/'
      },
      {
        type: 'Tool',
        name: 'WAVE Browser Extension',
        href: 'https://wave.webaim.org/extension/'
      },
      {
        type: 'Tool',
        name: 'Accessibility Insights',
        href: 'https://accessibilityinsights.io/downloads/'
      }
    ]
  },
  {
    heading: 'Part 2',
    subheading: 'Key Areas of Focus',
    destination: 'part-2',
    slides:
      'https://docs.google.com/presentation/d/1Njf3JG9P86uCoHWk8jyYNMIAqlt07gm2mCWzu9jXYlw/edit?usp=sharing',
    resources: [
      {
        type: 'Exercise',
        name: 'Exercise 1: Color',
        href: 'https://codepen.io/cordellia-so5/pen/rNKMVae'
      },
      {
        type: 'Resource',
        name: 'Color: WebAIM Overview',
        href: 'https://webaim.org/articles/contrast/'
      },
      {
        type: 'Resource',
        name: 'Color: ACT Testing Text Contrast',
        href: 'https://www.w3.org/WAI/standards-guidelines/act/rules/afw4f7/proposed/'
      },
      {
        type: 'Tool',
        name: 'Color Contrast Finder',
        href: 'https://app.contrast-finder.org/?lang=en'
      },
      {
        type: 'Exercise',
        name: 'Exercise 2: Understanding prefers-color-scheme',
        href: 'https://codepen.io/MrGrigri/pen/XQmWBv'
      },
      {
        type: 'Exercise',
        name: 'Exercise 3: Understanding prefers-reduced-motion',
        href: 'https://codepen.io/chriscoyier/pen/xxOdvxR'
      },
      {
        type: 'News',
        name: "Redesigns that weren't Inclusive",
        href: 'https://knitting.craftgossip.com/ravelrys-new-look-knocked-for-accessibility-issues/2020/06/27/'
      },
      {
        type: 'Resource',
        name: 'WebAIM: Seizures and Motion',
        href: 'https://webaim.org/articles/seizure/'
      },
      {
        type: 'Resource',
        name: 'Moz: prefers-reduced-motion',
        href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion'
      },
      {
        type: 'Exercise',
        name: 'Exercise 4: Alternative Text',
        href: 'https://codepen.io/cordellia-so5/pen/ZERpGoL'
      },
      {
        type: 'Example',
        name: 'Example of a Transcript',
        href: 'https://www.wellesnet.com/the-war-of-the-worlds-radio-script/'
      },
      {
        type: 'Example',
        name: 'Example of Captions',
        href: 'https://www.oyez.org/cases/1966/395'
      },
      {
        type: 'Example',
        name: 'Example of Audio Descriptions',
        href: 'https://webaim.org/techniques/captions/media/audiodesc.mp3'
      },
      {
        type: 'Tool',
        name: 'WAI Alt Text Decision Tree',
        href: 'https://www.w3.org/WAI/tutorials/images/decision-tree/'
      },
      {
        type: 'News',
        name: 'Understanding the Impact of Alt Text on SEO',
        href: 'https://moz.com/learn/seo/alt-text'
      },
      {
        type: 'Exercise',
        name: 'Exercise 5: Practicing Zoom and Reflow',
        href: 'https://www.washington.edu/accesscomputing/AU/before.html'
      },
      {
        type: 'News',
        name: 'Understanding the Difference between Resize and Reflow',
        href: 'https://yatil.net/blog/resize-text-reflow'
      },
      {
        type: 'Excercise',
        name: 'Excerise 6: Practicing with the Keyboard',
        href: '#'
      },
      {
        type: 'Resource',
        name: 'Getting started with Keyboard Accessibility',
        href: 'https://webaim.org/techniques/keyboard/'
      },
      {
        type: 'Excercise',
        name: 'Excercise 7: Practiing with Forms',
        href: 'https://codepen.io/cordellia-so5/pen/mdKrEdN'
      },
      {
        type: 'Resource',
        name: 'Making Disabled Buttons more Accessible.',
        href: 'https://css-tricks.com/making-disabled-buttons-more-inclusive'
      },
      {
        type: 'Resource',
        name: 'Creating Accessible Forms',
        href: 'https://webaim.org/techniques/forms/controls'
      },
      {
        type: 'Excercise',
        name: 'Excercise 8: Chaos!',
        href: 'https://userinyerface.com/game.html'
      }
    ]
  },
  {
    heading: 'Part 3',
    subheading: 'Great Expectations',
    destination: 'part-3',
    slides:
      'https://docs.google.com/presentation/d/13rtFsVgNjaxTbmOcCP1uAGuCxTzmd-XPEARhsBSsGSE/edit?usp=sharing',
    resources: [
      {
        type: 'Excercise',
        name: 'Exercise 1: Details Expectations',
        href: 'https://codepen.io/cordellia-so5/pen/bGKVdwW'
      },
      {
        type: 'Excerise',
        name: 'Exercise 2: WAI-ARIA: Introduction to Landmarks',
        href: 'https://www.w3.org/WAI/ARIA/apg/example-index/landmarks/index.html '
      },
      {
        type: 'Resource',
        name: 'Moz: All Semantic Elements',
        href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element'
      },
      {
        type: 'Excercise',
        name: 'Excercise 3: Seimantic Details (Disclosure)',
        href: 'https://codepen.io/cordellia-so5/pen/ExRVaOR'
      },
      {
        type: 'Excercise',
        name: 'Excercise 4: WAI-ARIA Details',
        href: 'https://codepen.io/cordellia-so5/pen/NWzGPLr'
      },
      {
        type: 'Resource',
        name: 'WAI-ARIA Patters Guide',
        href: 'https://www.w3.org/WAI/ARIA/apg/patterns/'
      },
      {
        type: 'Excercise',
        name: 'Excercise 5: ARIA errors',
        href: 'https://codepen.io/cordellia-so5/pen/LYrNOJG'
      },
      {
        type: 'Tool',
        name: 'W3C Validator',
        href: 'https://validator.w3.org/nu/'
      },
      {
        type: 'Resource',
        name: 'ARIA and HTML element compatability',
        href: 'https://www.w3.org/TR/html-aria/'
      }
    ]
  },
  {
    heading: 'Part 4',
    subheading: 'Best Practices',
    destination: 'part-4',
    slides:
      'https://docs.google.com/presentation/d/1IycGcLgkkwz6FGoNIu3s-MGYsyD9gR_qBQDSZqh48EI/edit?usp=sharing',
    resources: [
      {
        type: 'Tool',
        name: '@axe-core Github',
        href: 'https://github.com/dequelabs/axe-core-npm'
      },
      {
        type: 'Tool',
        name: 'Jest-Axe Github',
        href: 'https://github.com/NickColley/jest-axe'
      },
      {
        type: 'Tool',
        name: 'Lighthouse CLI Github',
        href: 'https://github.com/GoogleChrome/lighthouse-ci'
      },
      {
        type: 'Resource',
        name: 'WCAG Guide to Developing an Accessibilty Statement',
        href: 'https://www.w3.org/WAI/planning/statements/'
      },
      {
        type: 'Excercise',
        name: 'Accessibility Conformance Testing',
        href: 'https://nomouse.org/'
      },
      {
        type: 'Resource',
        name: 'A11y Overlay Fact Sheet',
        href: 'https://overlayfactsheet.com/'
      },
      {
        type: 'Resource',
        name: 'ACT Guidelines',
        href: 'https://www.w3.org/WAI/standards-guidelines/act/rules/'
      },
      {
        type: 'Resource',
        name: 'A11y Project Checklist',
        href: 'https://www.a11yproject.com/checklist/'
      }
    ]
  }
]);

export const tutorialTitle = readable({
  heading: 'Usability for everyone:',
  subheading: 'Are you excluding some users from accessing your website?',
  destination: ''
});
