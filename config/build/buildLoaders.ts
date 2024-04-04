import MiniCssExtractPlugin from "mini-css-extract-plugin"
import  webpack  from "webpack"
import { BuildOptions } from "./types/config"


export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
    
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {loader: 'css-loader',
            options: {
                modules:{
                     auto: (resourcePath: string) => Boolean(resourcePath.includes('.module')),
                localIdentName: options.isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                },
               
            }
        },

            "sass-loader",
        ],
    }
    return [ typescriptLoader, cssLoader]
}