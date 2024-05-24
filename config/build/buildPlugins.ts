import HtmlWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"
import { BuildOptions } from "./types/config"
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';


// HotModuleReplacementPlugin - позволяет обновлять модули на лету без перезагрузки страницы. Обеспечивает инфраструктуру для горячей перезагрузки модулей (HMR)
// react-refresh-webpack-plugin - для обеспечения поддержки горячей перезагрузки компонентов React. предоставлять улучшенную поддержку HMR для React-компонентов. 
// DefinePlugin - Заменяет переменные другими значениями или выражениями во время компиляции
// BundleAnalyzerPlugin - показывает какие пакеты имеются и сколько они весят
export const buildPlugins = ({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] => {
  // [isDev && new ReactRefreshWebpackPlugin()].filter(Boolean)
  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({ __IS_DEV__: JSON.stringify(isDev) }),
  ]

  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin())
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }))
  }
  return plugins
}