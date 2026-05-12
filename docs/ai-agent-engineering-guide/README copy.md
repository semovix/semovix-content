# Semovix AI Agent 工程化指南

> 从模型调用到企业级智能执行平台

本目录用于沉淀 Semovix 在 AI Agent、Skill、Harness、MCP、语义治理、AI Workbench 等方向的技术文章、架构图、案例和方法论。

这不是一套泛泛介绍 AI Agent 概念的文章集，而是一套面向 **AI Agent 工程师、企业应用开发者、产品架构师、解决方案团队** 的工程化知识库。它的目标是帮助读者从“会调用大模型 API”，逐步成长为能够设计、开发、调试、治理企业级智能执行系统的工程师。

## 1. 核心定位

Semovix 关注的不只是大模型对话能力，而是企业场景中的完整闭环：

```text
数据 Data
→ 语义 Semantic
→ 知识 Knowledge
→ 任务 Task
→ 执行 Execution
→ 结果 Artifact
→ 沉淀 Learning
```

因此，本指南的核心主题是：

```text
让 AI 不只是回答问题，
而是理解业务、调用工具、推进任务、沉淀知识、接受治理。
```

## 2. 适合读者

| 读者 | 重点关注 |
|---|---|
| AI Agent 工程师 | Agent Loop、Tool Calling、Skill、Runtime、Evaluation |
| 后端工程师 | Task Engine、Harness、状态持久化、工具服务封装、审计 |
| 前端工程师 | AI Workbench、任务可视化、执行过程呈现、人机协同 |
| 产品经理 | Agent 场景、任务闭环、语义治理、用户信任机制 |
| 解决方案架构师 | 企业场景落地、语义层、权限、安全、ROI |
| 企业数字化负责人 | AI Agent 如何进入业务流程并产生可审计价值 |

## 3. 内容结构

本知识库分为 11 个部分：

1. `00-preface/`：系列定位、阅读指南、学习路径、Semovix 总览
2. `01-agent-foundation/`：Agent 基础认知
3. `02-llm-prompt-context/`：LLM、Prompt、Context 基础
4. `03-tool-skill-protocol/`：Tool、Skill、MCP 连接能力
5. `04-agent-runtime-engineering/`：Agent Runtime 工程化
6. `05-semovix-semantic-governance/`：Semovix 语义治理场景
7. `06-ai-workbench-productization/`：AI Workbench、评测、安全与产品化
8. `07-engineer-growth-path/`：AI Agent 工程师成长路线
9. `08-case-studies/`：场景案例库
10. `09-diagrams/`：图解与信息图管理
11. `10-templates/`：文章、图解、Skill、Tool、案例模板

## 4. 推荐阅读路线

### 路线 A：从零学习 AI Agent

```text
00-preface
→ 01-agent-foundation
→ 02-llm-prompt-context
→ 03-tool-skill-protocol
→ 04-agent-runtime-engineering
```

### 路线 B：理解 Semovix 产品能力

```text
00-preface/03-semovix-overview.md
→ 05-semovix-semantic-governance
→ 06-ai-workbench-productization
→ 08-case-studies
```

### 路线 C：做内部研发对齐

```text
03-tool-skill-protocol
→ 04-agent-runtime-engineering
→ 05-semovix-semantic-governance
→ 09-diagrams
→ 10-templates
```

### 路线 D：做内容运营与公众号发布

```text
01-agent-foundation
→ 02-llm-prompt-context
→ 03-tool-skill-protocol
→ 05-semovix-semantic-governance
→ 06-ai-workbench-productization
```

## 5. 文档状态说明

每篇文章建议使用 Front Matter 管理状态：

```yaml
status: draft | reviewing | published | archived
version: 0.1.0
updated: 2026-05-12
```

状态含义：

| 状态 | 含义 |
|---|---|
| `draft` | 草稿，占位或初稿 |
| `reviewing` | 正在内部评审 |
| `published` | 可对外发布 |
| `archived` | 已归档，不再维护 |

## 6. 文档维护原则

1. **先讲清楚概念，再讲工程实现。**
2. **所有结论尽量给出来源或案例。**
3. **避免把趋势判断写成行业定论。**
4. **所有 Semovix 相关内容要能映射到产品能力。**
5. **架构图、流程图、信息图必须单独沉淀源文件。**
6. **文章要能复用于 GitHub、官网、公众号、客户方案和内部培训。**

## 7. 核心认知

```text
真正的 AI Agent 开发，不是让模型更会聊天，
而是构建一个可执行、可审计、可恢复、可协作的智能任务系统。

核心挑战不只在 Prompt，
而在 Context、State、Tool、Workflow、Runtime、Evaluation 与 Human Collaboration。
```
