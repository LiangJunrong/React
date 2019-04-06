React 系列 - Demo Two - TodoList 升级
===

> Create by **jsliang** on **2019-3-26 10:23:47**  
> Recently revised in **2019-4-6 10:32:50**

我们对 TodoList 进行了 Redux 升级：

* 安装依赖：`npm i`
* 开发模式：`npm start`
* 打包模式： `npm build`

同时，我们拥有三个分支：

* `Redux-Thunk`：使用 redux-thunk 中间件进行接口管理
* `Redux-Saga`：使用 redux-saga 中间件进行接口管理
* `React-Redux`：使用 react-redux 进行 React 与 Redux 的管理调配

如果是 GitHub 上，可以切换分支进行查看；

如果是本地，也可以切换查看。

需要了解更多，请看：

* [jsliang 的文档库](https://github.com/LiangJunrong/document-library)

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。