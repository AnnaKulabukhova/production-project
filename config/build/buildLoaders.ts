import webpack from "webpack"
import { BuildOptions } from "./types/config"
import { buildCssLoader } from "./loaders/buildCssLoader"
import { buildBabelLoader } from "./loaders/buildBabelLoader"


export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options

  const svgLoader = {
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
  }

  const cssLoader = buildCssLoader(isDev)

  const babelLoader = buildBabelLoader(isDev)

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }


  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }
  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader]
}