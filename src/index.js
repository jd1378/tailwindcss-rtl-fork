const plugin = require("tailwindcss/plugin");
 
const floatUtilities = require("./floatUtilities"); 
const clearUtilities = require("./clearUtilities"); 
const textAlignUtilities = require("./textAlignUtilities");
const transformOriginUtilities = require("./transformOriginUtilities");
const spaceUtilities = require("./spaceUtilities");
const divideUtilities = require("./divideUtilities");
const backgroundAlignUtilities = require('./backgroundAlignUtilities');

module.exports = plugin((helpers) => {
  const { addUtilities, variants } = helpers; 
  borderRadiusUtilities(helpers);
  addUtilities(clearUtilities(helpers), variants("clear"));
  addUtilities(floatUtilities(helpers), variants("float")); 
  addUtilities(textAlignUtilities(helpers), variants("textAlign"));
  addUtilities(transformOriginUtilities(), variants("transformOrigin"));
  spaceUtilities(helpers);
  divideUtilities(helpers);
  addUtilities(backgroundAlignUtilities(), variants('backgroundPosition'));
});
