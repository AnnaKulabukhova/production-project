import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import type { BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import CircularDependencyPlugin from 'circular-dependency-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

// ProgressPlugin - Позволяет настроить способ отображения хода выполнения во время компиляции.
// HotModuleReplacementPlugin - позволяет обновлять модули на лету без перезагрузки страницы. Обеспечивает инфраструктуру для горячей перезагрузки модулей (HMR)
// react-refresh-webpack-plugin - для обеспечения поддержки горячей перезагрузки компонентов React. предоставлять улучшенную поддержку HMR для React-компонентов.
// DefinePlugin - Заменяет переменные другими значениями или выражениями во время компиляции
// BundleAnalyzerPlugin - показывает какие пакеты имеются и сколько они весят
//  CircularDependencyPlugin Помогает избавляться от кольцевых зависимостей
// ForkTsCheckerWebpackPlugin - запускает проверку типов TypeScript в отдельном процессе(не влияет на скорость сборки основного кода).
//  CopyPlugin - Копирует отдельные файлы или целые каталоги, которые уже существуют, в каталог сборки.
export const buildPlugins = ({ paths, isDev, apiUrl, project }: BuildOptions): webpack.WebpackPluginInstance[] => {
  const isProd = !isDev

  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin(
      {
        __IS_DEV__: JSON.stringify(isDev),
        __API__: JSON.stringify(apiUrl),
        __PROJECT__: JSON.stringify(project)
      }
    ),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true
        },
        mode: 'write-references'
      }
    })
  ]

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin())
    plugins.push(new webpack.HotModuleReplacementPlugin())
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false
    }))
  }

  if (isProd) {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }))
    plugins.push(new CopyPlugin({
      patterns: [
        { from: 'public/locales', to: 'build/buildLocales' }
      ]
    }))
  }
  return plugins
}
