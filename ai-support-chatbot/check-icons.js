const icons = require('lucide-react');
const names = Object.keys(icons);
const social = names.filter(n => /link|git|share|extern|globe2|network/i.test(n));
console.log('Social-like icons:', social.join(', '));
console.log('Total:', names.length);
// Check specific ones
['Linkedin', 'Github', 'Share2', 'ExternalLink', 'Globe', 'Link2'].forEach(n => {
  console.log(n + ':', !!icons[n]);
});
