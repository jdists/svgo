import svgo = require('svgo')
import * as jdistsUtil from 'jdists-util'
import * as jsyaml from 'js-yaml'
interface ISvgoAttrs extends jdistsUtil.IAttrs {
  /**
   * 插件
   */
  extend?: string
}
/**
 * svgo 模板渲染
 *
 * @param content 文本内容
 * @param attrs 属性
 * @param attrs.extend 扩展插件的函数
 * @param scope 作用域
 * @param scope.execImport 导入数据
 * @return 返回渲染后的结果
 * @example processor():base
  ```js
  let attrs = {}
  let scope = {}
  let text = `<svg width='200' height='200' fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" x="0px" y="0px"><title>Bean bag</title><g data-name="Layer 2"><g data-name="Layer 1"><path d="M15.07,7.28c-.39-.35-.8-.72-1.22-1.13A8.9,8.9,0,0,1,12.28,3.5C11.5,1.78,10.69,0,8.5,0,.61,0,0,7.27,0,9.5v1C0,14.71,2.42,18,5.5,18h7A5.38,5.38,0,0,0,18,12.5C18,9.9,16.58,8.63,15.07,7.28ZM12.5,17h-7C3,17,1,14.14,1,10.5v-1C1,6.94,1.73,1,8.5,1c1.47,0,2,1.11,2.87,2.92a9.61,9.61,0,0,0,1.78,2.94c.42.42.85.81,1.25,1.17a18,18,0,0,1,1.35,1.3c-.51,1.28-2,2.23-4.35,2.69a3.89,3.89,0,0,1-3.07-.53A7,7,0,0,1,6,7.42L5,7.58A7.86,7.86,0,0,0,7.76,12.3a4.58,4.58,0,0,0,2.66.81A6,6,0,0,0,11.6,13c2.36-.46,4-1.44,4.82-2.77A4.33,4.33,0,0,1,17,12.5,4.35,4.35,0,0,1,12.5,17Z"/></g></g></svg>`
  processor(text, attrs, scope).then(function (reply) {
    console.log(reply)
    // > <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M15.07 7.28c-.39-.35-.8-.72-1.22-1.13a8.9 8.9 0 0 1-1.57-2.65C11.5 1.78 10.69 0 8.5 0 .61 0 0 7.27 0 9.5v1C0 14.71 2.42 18 5.5 18h7a5.38 5.38 0 0 0 5.5-5.5c0-2.6-1.42-3.87-2.93-5.22zM12.5 17h-7C3 17 1 14.14 1 10.5v-1C1 6.94 1.73 1 8.5 1c1.47 0 2 1.11 2.87 2.92a9.61 9.61 0 0 0 1.78 2.94c.42.42.85.81 1.25 1.17a18 18 0 0 1 1.35 1.3c-.51 1.28-2 2.23-4.35 2.69a3.89 3.89 0 0 1-3.07-.53A7 7 0 0 1 6 7.42l-1 .16a7.86 7.86 0 0 0 2.76 4.72 4.58 4.58 0 0 0 2.66.81A6 6 0 0 0 11.6 13c2.36-.46 4-1.44 4.82-2.77A4.33 4.33 0 0 1 17 12.5a4.35 4.35 0 0 1-4.5 4.5z"/></svg>
    // * done
  }).catch(function (err) {
    console.error(err)
  })
  ```
 * @example processor():space
  ```js
  let attrs = {}
  let scope = {}
  let text = `    <svg width='200' height='200' fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" x="0px" y="0px"><title>Bean bag</title><g data-name="Layer 2"><g data-name="Layer 1"><path d="M15.07,7.28c-.39-.35-.8-.72-1.22-1.13A8.9,8.9,0,0,1,12.28,3.5C11.5,1.78,10.69,0,8.5,0,.61,0,0,7.27,0,9.5v1C0,14.71,2.42,18,5.5,18h7A5.38,5.38,0,0,0,18,12.5C18,9.9,16.58,8.63,15.07,7.28ZM12.5,17h-7C3,17,1,14.14,1,10.5v-1C1,6.94,1.73,1,8.5,1c1.47,0,2,1.11,2.87,2.92a9.61,9.61,0,0,0,1.78,2.94c.42.42.85.81,1.25,1.17a18,18,0,0,1,1.35,1.3c-.51,1.28-2,2.23-4.35,2.69a3.89,3.89,0,0,1-3.07-.53A7,7,0,0,1,6,7.42L5,7.58A7.86,7.86,0,0,0,7.76,12.3a4.58,4.58,0,0,0,2.66.81A6,6,0,0,0,11.6,13c2.36-.46,4-1.44,4.82-2.77A4.33,4.33,0,0,1,17,12.5,4.35,4.35,0,0,1,12.5,17Z"/></g></g></svg>`
  processor(text, attrs, scope).then(function (reply) {
    console.log(reply)
    // >     <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M15.07 7.28c-.39-.35-.8-.72-1.22-1.13a8.9 8.9 0 0 1-1.57-2.65C11.5 1.78 10.69 0 8.5 0 .61 0 0 7.27 0 9.5v1C0 14.71 2.42 18 5.5 18h7a5.38 5.38 0 0 0 5.5-5.5c0-2.6-1.42-3.87-2.93-5.22zM12.5 17h-7C3 17 1 14.14 1 10.5v-1C1 6.94 1.73 1 8.5 1c1.47 0 2 1.11 2.87 2.92a9.61 9.61 0 0 0 1.78 2.94c.42.42.85.81 1.25 1.17a18 18 0 0 1 1.35 1.3c-.51 1.28-2 2.23-4.35 2.69a3.89 3.89 0 0 1-3.07-.53A7 7 0 0 1 6 7.42l-1 .16a7.86 7.86 0 0 0 2.76 4.72 4.58 4.58 0 0 0 2.66.81A6 6 0 0 0 11.6 13c2.36-.46 4-1.44 4.82-2.77A4.33 4.33 0 0 1 17 12.5a4.35 4.35 0 0 1-4.5 4.5z"/></svg>
    // * done
  }).catch(function (err) {
    console.error(err)
  })
  ```
 * @example processor():throw
  ```js
  let attrs = {}
  let scope = {}
  processor('<svg>>>', attrs, scope).then(function () {
  }).catch(function (err) {
    console.log(!!err)
    // > true
    // * done
  })
  ```
 * @example processor():extend
  ```js
  let attrs = {
    extend: `
      plugins.push({
        removeTitle: false,
      })
    `
  }
  let scope = {
    execImport: function (importion) {
      return importion
    },
  }
  let text = `<svg width='200' height='200' fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" x="0px" y="0px"><title>Bean bag</title><g data-name="Layer 2"><g data-name="Layer 1"><path d="M15.07,7.28c-.39-.35-.8-.72-1.22-1.13A8.9,8.9,0,0,1,12.28,3.5C11.5,1.78,10.69,0,8.5,0,.61,0,0,7.27,0,9.5v1C0,14.71,2.42,18,5.5,18h7A5.38,5.38,0,0,0,18,12.5C18,9.9,16.58,8.63,15.07,7.28ZM12.5,17h-7C3,17,1,14.14,1,10.5v-1C1,6.94,1.73,1,8.5,1c1.47,0,2,1.11,2.87,2.92a9.61,9.61,0,0,0,1.78,2.94c.42.42.85.81,1.25,1.17a18,18,0,0,1,1.35,1.3c-.51,1.28-2,2.23-4.35,2.69a3.89,3.89,0,0,1-3.07-.53A7,7,0,0,1,6,7.42L5,7.58A7.86,7.86,0,0,0,7.76,12.3a4.58,4.58,0,0,0,2.66.81A6,6,0,0,0,11.6,13c2.36-.46,4-1.44,4.82-2.77A4.33,4.33,0,0,1,17,12.5,4.35,4.35,0,0,1,12.5,17Z"/></g></g></svg>`
  processor(text, attrs, scope).then(function (reply) {
    console.log(reply)
    // > <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><title>Bean bag</title><path d="M15.07 7.28c-.39-.35-.8-.72-1.22-1.13a8.9 8.9 0 0 1-1.57-2.65C11.5 1.78 10.69 0 8.5 0 .61 0 0 7.27 0 9.5v1C0 14.71 2.42 18 5.5 18h7a5.38 5.38 0 0 0 5.5-5.5c0-2.6-1.42-3.87-2.93-5.22zM12.5 17h-7C3 17 1 14.14 1 10.5v-1C1 6.94 1.73 1 8.5 1c1.47 0 2 1.11 2.87 2.92a9.61 9.61 0 0 0 1.78 2.94c.42.42.85.81 1.25 1.17a18 18 0 0 1 1.35 1.3c-.51 1.28-2 2.23-4.35 2.69a3.89 3.89 0 0 1-3.07-.53A7 7 0 0 1 6 7.42l-1 .16a7.86 7.86 0 0 0 2.76 4.72 4.58 4.58 0 0 0 2.66.81A6 6 0 0 0 11.6 13c2.36-.46 4-1.44 4.82-2.77A4.33 4.33 0 0 1 17 12.5a4.35 4.35 0 0 1-4.5 4.5z"/></svg>
    // * done
  }).catch(function (err) {
    console.error(err)
  })
  ```
 * @example processor():content is null
  ```js
  let attrs = {}
  let scope = {}
  console.log(processor(null, attrs, scope))
  // > null
  ```
 */
export = (function (content: string, attrs: ISvgoAttrs, scope: jdistsUtil.IScope): string | Promise<string> {
  if (!content) {
    return content
  }
  let plugins = [{
    cleanupIDs: {
      remove: false
    }
  }, {
    removeUnknownsAndDefaults: {
      keepDataAttrs: false,
    }
  }]
  let extend = null
  if (attrs.extend) {
    extend = jdistsUtil.buildFunction(scope.execImport(attrs.extend), 'plugins')
    extend(plugins)
  }
  return (new svgo({
    plugins: plugins
  }) as any).optimize(content).then((svg) => {
    let match = content.match(/^[^\n\S]+/)
    let space = match ? match[0] : ''
    return Promise.resolve(space + svg.data)
  })
}) as jdistsUtil.IProcessor