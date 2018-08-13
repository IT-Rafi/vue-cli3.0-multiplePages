# hello-cli3
vue-cli3初试配置

devServer的proxy配置，解决了多个不同域名的跨域请求

更改了url-loader默认小于4kb图片转base64问题

解决了路由默认title问题
问题：默认打开页面路由没有用发生变化，所以title会取到package.json的name作为页面title
路由meta配置的title只有路由发生变化才会设置title

所以设置了一个全局的title.js来管理所有页面的title
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
