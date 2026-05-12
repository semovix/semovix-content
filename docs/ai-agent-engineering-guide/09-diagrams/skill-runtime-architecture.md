---
title: "Skill Runtime 架构"
description: "用于解释 Skill 如何注册、选择、执行、追踪、评测。"
status: "draft"
version: "0.1.0"
updated: "2026-05-12"
---

# Skill Runtime 架构

## 1. 图的用途

用于解释 Skill 如何注册、选择、执行、追踪、评测。

## 2. 推荐比例

21:9 横版架构图。

## 3. 适合放在哪些文章

- 待补充。

## 4. 图中必须包含的模块

- 用户 / 输入；
- Xino / Agent；
- Context；
- Tool / Skill；
- Task / Workflow；
- Runtime / Harness；
- Result / Artifact；
- Trace / Replay / Audit；
- Knowledge Network。

## 5. Mermaid 草稿

```mermaid
flowchart LR
    A[输入] --> B[理解] --> C[规划] --> D[执行] --> E[结果] --> F[沉淀]
```

## 6. 图片生成 Prompt 草稿

```text
请生成一张高信息密度、百科全书式、教材讲义式的信息图。
主题：Skill Runtime 架构
风格：专业技术白皮书、结构化知识树、扁平化图标、中文清晰、适合打印与学习。
要求：层次清晰、模块边界明确、箭头逻辑清楚、字体清晰、小字可读。
比例：21:9 横版架构图。
```

## 7. 版本记录

| 版本 | 日期 | 说明 |
|---|---|---|
| v0.1 | 2026-05-12 | 初始化占位稿 |
