---
title: "阅读指南：如何使用这套文档"
description: "为不同类型读者提供阅读路径。"
sidebar_position: 2
status: "draft"
version: "0.1.0"
updated: "2026-05-12"
---

# 阅读指南：如何使用这套文档

## 1. 如果你是 AI Agent 初学者

建议顺序：

```text
01-agent-foundation
→ 02-llm-prompt-context
→ 03-tool-skill-protocol
→ 04-agent-runtime-engineering
```

重点先理解：

- AI Agent 与 ChatBot 的区别；
- LLM、Prompt、Context 的关系；
- Tool Calling 如何让模型开始行动；
- Skill 如何沉淀能力；
- Agent Loop 为什么必须受控。

## 2. 如果你是后端工程师

建议重点阅读：

```text
03-tool-skill-protocol
→ 04-agent-runtime-engineering
→ 05-semovix-semantic-governance
```

重点关注：

- Tool 输入输出契约；
- Skill Registry；
- Task Engine；
- State Store；
- Checkpoint / Recovery；
- Trace / Replay / Audit；
- 权限与安全。

## 3. 如果你是前端工程师

建议重点阅读：

```text
06-ai-workbench-productization
→ 08-case-studies
→ 09-diagrams
```

重点关注：

- AI Workbench 为什么不能只有聊天窗口；
- 对话区、任务区、结果区、上下文区、审批区如何协同；
- Agent 执行过程如何可视化；
- 用户如何干预、确认、驳回和回放。

## 4. 如果你是产品经理或解决方案架构师

建议重点阅读：

```text
00-preface
→ 01-agent-foundation
→ 05-semovix-semantic-governance
→ 06-ai-workbench-productization
→ 08-case-studies
```

重点关注：

- Semovix 解决什么业务问题；
- 语义层为什么重要；
- 找数问数如何从问答变成可信数据结果；
- 语义治理如何从发现问题变成任务执行；
- Agent 的价值如何通过 ROI 表达。

## 5. 如果你要写公众号文章

建议每篇文章遵循：

```text
问题切入
→ 概念解释
→ 工程化拆解
→ Semovix 落地
→ 案例说明
→ 总结和下一篇预告
```

## 6. 如果你要做内部培训

建议采用四阶段课程：

1. Agent 基础认知；
2. LLM / Prompt / Context；
3. Tool / Skill / Runtime；
4. Semovix 场景与 AI Workbench。
