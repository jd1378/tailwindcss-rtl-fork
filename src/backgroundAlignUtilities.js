const utilities = () => ({
  '[dir="rtl"] .bg-start': { 'background-position': 'right' },
  '[dir="rtl"] .bg-end': { 'background-position': 'left' },
  '[dir="ltr"] .bg-start': { 'background-position': 'left' },
  '[dir="ltr"] .bg-end': { 'background-position': 'right'},
});

module.exports = utilities;
