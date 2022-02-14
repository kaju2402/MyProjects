//const wt =require('./mg.js')
//console.log(wt)

const minify = import(minify);
//import {minify} from 'minify';
const options = {
 html: {
   removeAttributeQuotes: false,
   removeOptionalTags: false
  },	
};

minify('./file.js',options)
 .then(console.log)
 .catch(console.error);