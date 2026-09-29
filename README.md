# Hello World

一个无需构建步骤的响应式静态页面，可部署到阿里云 OSS、ECS 或容器服务。

## 本地预览

```bash
python3 -m http.server 8080
```

访问 <http://localhost:8080>。

## 部署到阿里云 OSS

1. 创建 OSS Bucket，并启用“静态页面”功能。
2. 将默认首页设置为 `index.html`。
3. 上传 `index.html`、`styles.css` 和 `script.js` 到 Bucket 根目录。
4. 使用 Bucket 静态网站域名访问；正式环境建议绑定自定义域名并开启 HTTPS/CDN。

如果已配置 `ossutil`，可以执行：

```bash
ossutil cp index.html oss://YOUR_BUCKET/ -f
ossutil cp styles.css oss://YOUR_BUCKET/ -f
ossutil cp script.js oss://YOUR_BUCKET/ -f
```

## 部署到阿里云 ECS / 容器服务

```bash
docker build -t hello-world .
docker run -d --name hello-world -p 80:80 hello-world
```
