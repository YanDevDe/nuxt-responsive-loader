const DEFAULT_RESPONSIVE_LOADER_OPTIONS = {
  name: 'img/[hash:7]-[width].[ext]',
  min: 640,
  max: 1080,
  steps: 5,
  placeholder: false,
  quality: 65
}

const setupResponsiveLoader = options => config => {
  /* Add a new rule which is responsible for png/jpg/gif/webp files */
  config.module.rules.push({
    test: /\.(png|jpe?g|gif|webp)$/,
    loader: 'responsive-loader',
    options: options || DEFAULT_RESPONSIVE_LOADER_OPTIONS
  })
}

export default function nuxtResponsiveLoader() {
  const { responsiveLoader: userOptions } = this.options
  this.extendBuild(setupResponsiveLoader(userOptions))
}

module.exports.meta = require('../package.json')
