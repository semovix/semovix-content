# Semovix 品牌 SVG 资源包

本资源包基于你提供的品牌图 `品牌logo.png` 生成，用于直接替换 Docusaurus 站点中的 Semovix 品牌资源。

## 1. 文件说明

| 文件 | 用途 |
|---|---|
| `svg/logo.svg` | 彩色横版完整 Logo，适合浅色背景导航栏、首页、页脚 |
| `svg/logo-dark.svg` | 白色横版完整 Logo，适合深色背景 |
| `svg/brand-mark.svg` | 左侧图形标识，适合小尺寸品牌露出 |
| `svg/brand-mark-dark.svg` | 白色图形标识，适合深色背景 |
| `svg/avatar.svg` | 圆形头像版，适合作者头像、站点品牌头像 |
| `svg/favicon.svg` | Favicon 候选版本 |

## 2. Docusaurus 直接替换位置

可将 `website-static-replacement/` 下的文件直接复制到你的站点：

```text
website/static/img/semovix/logo.svg
website/static/img/semovix/logo-dark.svg
website/static/img/semovix/brand-mark.svg
website/static/img/semovix/avatar.svg
website/static/img/favicon.svg
```

## 3. 配置建议

### 导航栏 Logo

```ts
logo: {
  alt: 'Semovix Logo',
  src: 'img/semovix/logo.svg',
  srcDark: 'img/semovix/logo-dark.svg',
},
```

### Favicon

```ts
favicon: 'img/favicon.svg',
```

## 4. 说明

- 为保证品牌形态与原图完全一致，本次 SVG 采用 **高保真透明裁切 + SVG 包装** 的方式生成，避免在缺少原始矢量标准稿时重绘导致品牌失真。
- 该版本可直接用于网站 Logo、博客作者头像、站点图形标识等场景。
- 若后续需要 **完全可编辑的路径级矢量版本**，建议提供原始 AI / EPS / PDF / SVG 标准稿，或另行制作精细路径描摹版。
