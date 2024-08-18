npm install @babel/preset-env @babel/preset-react babel-loader react-app-polyfill --save --legacy-peer-deps
npm install --save-dev @babel/plugin-proposal-private-property-in-object --legacy-peer-deps

babel.config.js
-----------IE11のみ----------------
module.exports = {
  presets: [
    ["@babel/preset-env", {
      targets: {
        ie: "11"
      },
      useBuiltIns: "entry",
      corejs: 3
    }],
    "@babel/preset-react"
  ],
  plugins: ["@babel/plugin-proposal-private-property-in-object"]
};
----------------------------------

×　edgeまで対応するとできなかった！
×-------------IE/Edge--------------
×　module.exports = {
×　  presets: [
× 　   ['@babel/preset-env', {
× 　     targets: {
× 　       browsers: ['last 2 versions', 'ie >= 11'],
× 　     },
× 　     useBuiltIns: 'usage',
× 　     corejs: 3
× 　   }],
× 　   '@babel/preset-react'
× 　 ]
×　};
×----------------------------------

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'core-js/stable';

import ReactDom from 'react-dom';


ReactDom.render(



document.getElementbyId('root');
);
npm install

bowserslist
 production
 
  "ie 11"
  
 development

  "ie 11"
 


package.json
  "dependencies": {
    "react": "17.0.2",
    "react-dom": "17.0.2",

npm install

ad grid 追加（デザイン）
npm install --save ag-grid-react ag-grid-community --legacy-peer-deps

○ materialUI v4
npm install @material-ui/core@4 --legacy-peer-deps 
npm install @material-ui/icons@4 --legacy-peer-deps 
npm install @material-ui/styles@4 --legacy-peer-deps 

× materialUI v5 IEモードでは使えないものがある　×××××××××
npm install @mui/material@5 --legacy-peer-deps
npm install @emotion/react@latest --legacy-peer-deps     ←V5がないため最新指定
npm install @emotion/styled@latest --legacy-peer-deps    ←V5がないため最新指定
npm install @mui/x-data-grid@5 --legacy-peer-deps