module.exports = {
  presets: [
    'next/babel',
    [
      '@emotion/babel-preset-css-prop',
      {
        autoLabel: true,
        labelFormat: '[local]',
      },
    ],
  ],
  plugins: ['emotion'],
}