import path from 'path';
import fs from 'fs';
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from 'vite-plugin-dts';

const moveFunc = (format, basePath) => {
  const formatMap = { es: 'mjs', cjs: 'js' }
  const distPath = `${basePath}/janus-ui/index.${formatMap[format]}`
  const movePath = `${basePath}/index.${formatMap[format]}`
  fs.copyFileSync(distPath, movePath)
  const content = fs.readFileSync(movePath, 'utf-8');
  const updatedContent = content.replace(/(\.\.\/)/g, './');
  fs.writeFileSync(movePath, updatedContent, 'utf8');
  fs.rmSync(distPath)
  fs.rmdirSync(`${basePath}/janus-ui`)
}

const moveFilePlugin = () => {
  return {
    name: 'moveFile',
    async writeBundle (options, bundle) {
      const distPath = path.resolve(__dirname, '../packages/janus-ui/es')
      const distLibPath = path.resolve(__dirname, '../packages/janus-ui/lib')
      console.log(distPath, 'distPath', __dirname)
      options.format === 'es' ? moveFunc(options.format, distPath) : moveFunc(options.format, distLibPath)
    },
    generateBundle(options, bundle) {
      const entries = Object.entries(bundle);
      const prefix = 'packages/'
      entries.forEach(([fileName, fileInfo]) => {
        if (fileName.startsWith(prefix)) {
          const newPath = fileName.slice(prefix.length);
          console.log(newPath, 'newPath')
          delete bundle[fileName];
          fileInfo.fileName = newPath;
          bundle[newPath] = fileInfo;
        }
      })
    }
  }
}
export default defineConfig({
  build: {
    //打包文件目录
    outDir: "../packages/janus-ui",
    rollupOptions: {
      //忽略打包vue文件
      external: ["vue", '@vueuse/core', '@vue/shared', '@janus-c/icons-vue'],
      input: ["../packages/janus-ui/index.ts"],
      output: [
        {
          //打包格式
          format: "es",
          //打包后文件名
          entryFileNames: "[name].mjs",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: '../packages/janus-ui/es'
        },
        {
          //打包格式
          format: "cjs",
          //打包后文件名
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: '../packages/janus-ui/lib'
        },
      ],
    },
    lib: {
      entry: "./index.ts"
    },
  },
  plugins: [
    vue(),
    dts({
      outDir: ['../packages/janus-ui/es', '../packages/janus-ui/lib'],
    }),
    moveFilePlugin()
  ]
});

