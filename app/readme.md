## app目录配置

**app-为主要的逻辑代码目录**

router -> middleware -> controller -> service -> controller(响应数据)

#### app/router

`Router` 也称之为 `路由`，用于描述请求 `URL` 和具体承担执行动作的 [Controller](https://eggjs.github.io/zh/guide/controller.html) 的对应关系

是请求的分发出口

#### app/middleware

服务中间件：

一个 HTTP 请求进来后，会执行一系列的处理，然后返回响应给用户。

这个过程就像一条管道，管道的每一个切面逻辑，我们称之为 `Middleware`，也叫 `中间件`

使用：

由于中间件是洋葱模型的一部分，因此**需要应用开发者显式挂载，决定它们的顺序**

#### app/controller

`Controller` 负责**解析用户的输入，处理后返回相应的结果**

<`Controller` 其实就是一个特殊的 [Middleware](https://eggjs.github.io/zh/guide/middleware.html)，它在洋葱模型的最里面>

Controller 仅负责 HTTP 层的相关处理逻辑，不要包含太多业务逻辑。

获取用户通过 HTTP 传递过来的请求参数。
校验、组装参数。
调用 Service 进行业务处理。
必要时处理转换 Service 的返回结果，如渲染模板。
通过 HTTP 将结果响应给用户

#### app/Service

框架会默认挂载到 `ctx.service` 上，对应的 Key 为文件名的驼峰格式

`Service` 是在复杂业务场景下用于做业务逻辑封装的一个抽象层：

- 保持 `Controller` 中的逻辑更加简洁。
- 保持业务逻辑的独立性，抽象出来的 `Service` 可以被多个 `Controller` 重复调用。
- 将逻辑和展现分离，更容易编写测试用例。

场景举例：

- 复杂数据的处理，如从数据库获取信息后，需经过一定的规则计算，才能返回用户显示。
- 第三方服务的调用，如调用后端微服务的接口

#### app/view

