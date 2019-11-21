- npm i sequelize-cli
- npm i sequelize
- npm i mysql2

- ./node_modules/.bin/sequelize init 初始化数据库的配置
- ./node_modules/.bin/sequelize db:create 创建数据库
- ./node_modules/.bin/sequelize migration:create --name create-shops-table 新建 migrations下的文件
- ./node_modules/.bin/sequelize migration:create --name add-columns-to-shops-table 新建 migrations下的文件

- ./node_modules/.bin/sequelize db:migrate 执行migrations下面所有文件的up操作 创建表操作
- ./node_modules/.bin/sequelize db:migrate:undo 执行migrations下面的 down部分 这里写的是删除表


- ./node_modules/.bin/sequelize seed:create --name init-shops 初始化 seed下的文件(添加表数据的操作)
- ./node_modules/.bin/sequelize db:seed:all  执行migrations下面所有文件的up操作

- config 数据库配置目录
- migration 数据库迁移目录 会将mysql的表 字段 创建 修改 迁移 全部留下记录
- models 业务模型层 将数据表 映射为一个对象 
  Article 
  Insert into
  new Article({totle: ''})
- seeders 
  测试数据(基础少量数据)

- 离开sql 来到工具

后端依赖
- npm i koa-body
- npm i koa koa-router