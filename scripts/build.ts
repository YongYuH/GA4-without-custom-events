import linaria from '@linaria/esbuild'
import { build, BuildOptions } from 'esbuild'
import path from 'path'

const prod = process.env.NODE_ENV === 'production'

const buildOptions: BuildOptions = {
  bundle: true,
  entryPoints: [path.resolve(__dirname, '..', 'src/index.tsx')],
  outdir: path.resolve(__dirname, '..', 'dist'),
  sourcemap: true,
  plugins: [
    linaria({
      sourceMap: prod,
    }),
  ],
}

const buildApp = async () => {
  try {
    await build(buildOptions)
  } catch (e) {
    process.exit(1)
  }
}

buildApp()
