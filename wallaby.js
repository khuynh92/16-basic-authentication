module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js',
      '!__test__/**/*.spec.js',
      'index.js',
      'public/*.html',
      'data/*.json',
    ],

    tests: [
      '__test__/**/*.spec.js',
    ],

    testFramework: 'jest',
    env: {
      type: 'node',
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        'presets': [
          'env',
          'react',
          'stage-0',
        ],
        'plugins': [
          'transform-class-properties',
          'transform-decorators',
          'transform-react-constant-elements',
          'transform-react-inline-elements',
        ],
      }),
    },
  };
};