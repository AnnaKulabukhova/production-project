export type BuildMode = 'production' | 'development'

export type BuildPaths = {
    entry: string,
    html: string,
    build: string
    src: string
}

export interface BuildEnv {
    mode: BuildMode,
    port: number
    apiUrl: string
}

export interface BuildOptions {
    mode: BuildMode,
    paths: BuildPaths,
    isDev: boolean
    port: number
    apiUrl: string,
    project: 'storybook' | 'jest' | 'frontend'
}