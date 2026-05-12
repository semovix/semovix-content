# Contributing

本文档用于规范 Semovix AI Agent 工程化指南的写作、评审、发布和维护流程。

## 1. 内容原则

### 1.1 面向工程落地

文章不只解释概念，还要说明：

- 这个概念解决什么问题；
- 在 Agent 系统中处于哪一层；
- 在 Semovix / Xino / AI Workbench 中如何落地；
- 与 Tool、Skill、Workflow、Harness、MCP、Evaluation 的关系是什么。

### 1.2 避免过度营销化

避免使用没有依据的绝对化表达，例如：

- “行业已经完全共识”；
- “所有企业都会采用”；
- “这是唯一正确方案”。

推荐表达：

- “一种常见工程实践是……”；
- “在企业级 Agent 场景中，通常需要……”；
- “本文建议采用……”；
- “在 Semovix 的语义治理场景中，可落地为……”。

### 1.3 所有技术事实尽量有来源

涉及 OpenAI、Anthropic、MCP、LangGraph、AutoGen、CrewAI、Temporal 等外部项目时，需要在 `REFERENCES.md` 或文章末尾补充来源。

### 1.4 Semovix 内容必须可映射产品能力

如果文章中提到 Semovix，应尽量说明对应模块：

- AI Workbench
- Xino
- Skill Registry
- Task Engine
- Execution Runtime
- Semantic Layer
- Knowledge Network
- Trace / Replay / Audit
- Human-in-the-loop

## 2. 文件命名规则

### 2.1 文章命名

使用编号 + 英文短横线命名：

```text
01-what-is-ai-agent.md
02-agent-vs-chatbot-vs-copilot.md
03-agent-capability-stack.md
```

### 2.2 图片命名

图片统一放在 `assets/images/` 下：

```text
主题-用途-版本.png
```

示例：

```text
ai-agent-knowledge-map-2026-v1.png
skill-runtime-architecture-v1.png
find-data-agent-flow-v1.png
```

### 2.3 图源码命名

Mermaid 源文件放在 `assets/diagrams/mermaid/`：

```text
agent-loop-controlled-flow-v1.mmd
skill-runtime-architecture-v1.mmd
```

Excalidraw 源文件放在 `assets/diagrams/excalidraw/`。

## 3. Front Matter 规范

每篇文章建议包含：

```yaml
---
title: "文章标题"
description: "一句话描述文章解决的问题。"
sidebar_position: 1
tags:
  - AI Agent
  - Semovix
  - Xino
category: "Agent 基础认知"
status: "draft"
version: "0.1.0"
updated: "2026-05-12"
---
```

## 4. 文章标准结构

所有正式文章建议使用：

```markdown
# 标题

## 1. 这篇文章解决什么问题
## 2. 核心结论
## 3. 核心概念
## 4. 为什么传统方式不够
## 5. Agent 工程化视角
## 6. Semovix 中如何落地
## 7. 一个具体案例
## 8. 架构图 / 流程图
## 9. 常见误区
## 10. 本篇总结
## 11. 下一篇预告
```

## 5. 评审清单

提交前检查：

- [ ] 文章是否有明确问题意识？
- [ ] 是否解释了概念、工程价值和落地方式？
- [ ] 是否避免无依据的绝对化表达？
- [ ] 是否与 Semovix 能力有明确映射？
- [ ] 是否补充必要来源？
- [ ] 图示是否清晰、可复用？
- [ ] 是否使用统一术语？
- [ ] 是否适合转为公众号、官网或培训内容？

## 6. 发布流程

建议流程：

```text
draft
→ internal review
→ technical review
→ product review
→ published
→ maintenance
```

## 7. 版本维护

当文章出现以下变更时，需要更新版本号：

- 大幅调整结构：升级 `MINOR`；
- 修正事实错误：升级 `PATCH`；
- 内容方向整体重写：升级 `MAJOR`；
- 仅修正文案错别字：可只更新 `updated` 日期。
