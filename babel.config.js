// module.exports = {
//     presets: [
//       ['@babel/preset-env', {
//         targets: {
//           browsers: ['last 2 versions', 'ie >= 11'],
//         },
//         useBuiltIns: 'usage',
//         corejs: 3
//       }],
//       '@babel/preset-react'
//     ]
//   };
module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        ie: '11',
      },
      useBuiltIns: 'usage',
      corejs: 3,
    }],
    '@babel/preset-react',
  ],
};
