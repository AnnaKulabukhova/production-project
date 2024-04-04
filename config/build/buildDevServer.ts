import { BuildOptions } from "./types/config";
import  type {Configuration as DevServerConfiguration} from 'webpack-dev-server'

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
    return {
        open: true,
        port: options.port,
        historyApiFallback: true
    }
}