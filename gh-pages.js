import { publish } from 'gh-pages';

publish(
 'docs', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/cordelliay/a11yTest.git',
  user: {
   name: 'cordelliay', // update to use your name
   email: 'cordelliay@hotmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);