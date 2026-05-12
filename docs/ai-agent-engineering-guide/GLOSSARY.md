# Glossary

本文件用于统一 Semovix AI Agent 工程化指南中的术语。

## A

### AI Agent

能够围绕目标进行理解、规划、执行、评估和恢复的智能系统。它通常具备上下文管理、工具调用、任务状态、执行循环和人机协同能力。

### Agent Loop

Agent 的运行闭环。生产环境中的 Agent Loop 不应是无限循环，而应是有目标、有预算、有边界、有终止条件、有恢复机制的受控闭环。

推荐结构：

```text
Observe → Plan → Act → Evaluate → Recover / Stop
```

### Agentic System

由多个 Agent、工具、工作流、运行时和治理能力组成的复杂系统，通常用于企业级任务执行。

### AI Workbench

面向用户的人机协作工作台，不只是聊天窗口，还包括任务计划、执行状态、结果交付、上下文展示、审批、回放和审计。

## C

### ChatBot

主要用于对话问答的 AI 应用，通常以单次或多轮文本交互为主，不一定具备工具调用、任务规划和执行闭环。

### Checkpoint

任务执行过程中的状态保存点，用于恢复、回放、审计或人工接管。

### Context

模型在某一时刻可见的信息集合，包括系统指令、用户输入、任务状态、工具返回、检索内容、记忆和运行时状态。

### Context Engineering

组织、选择、压缩、路由和治理上下文的工程方法。它关注的是模型在当前任务中应该看到什么信息，而不只是提示词如何写。

## E

### Evaluation

对 Agent 行为和结果的评测体系，包括任务完成率、工具调用正确率、计划质量、RAG 命中率、幻觉率、成本、延迟和恢复能力等。

## G

### Guardrails

用于约束 Agent 行为的规则、策略和安全机制，包括输入过滤、权限控制、工具限制、输出检查和合规策略。

## H

### Harness

Agent 的运行控制层。它通常包括 Agent Loop、Tool Runtime、State Store、Scheduler、Sandbox、Permission、Trace、Guardrails、Human Approval 和 Recovery 等能力。

### Human-in-the-loop

人参与 Agent 关键决策的机制，包括审批、驳回、修改计划、接管执行和结果确认。

## K

### Knowledge Network

企业知识网络，用于组织数据资产、语义资产、指标、字段、血缘、规则、任务、负责人和历史决策之间的关系。

## L

### LLM

Large Language Model，大语言模型。本文档中把 LLM 定位为 Agent 的推理内核，而不是完整执行系统。

## M

### MCP

Model Context Protocol，用于连接 AI 应用、外部工具和数据源的开放协议。它包含 Host、Client、Server、Resource、Tool、Prompt、Transport 等核心概念。

### Memory

Agent 的记忆系统，包括 Working Memory、Session Memory、Long-term Memory、Episodic Memory、Semantic Memory 和 User Preference Memory。

## P

### Planning

Agent 将复杂目标拆解为可执行任务、步骤和依赖关系的能力。

### Prompt

给模型的指令、上下文或行为约束。Prompt Engineering 关注如何定义模型行为，Context Engineering 关注模型应看到什么信息。

## R

### RAG

Retrieval-Augmented Generation，检索增强生成。用于从外部知识库检索相关上下文，帮助模型生成基于证据的结果。

### Replay

对 Agent 执行过程进行回放，用于调试、审计、复盘和用户信任建设。

### Runtime

Agent 执行环境，包括任务调度、工具执行、状态管理、沙箱、日志、权限和恢复机制。

## S

### Semantic Asset

语义资产，是对数据表、字段、指标、口径、维度、业务规则、数据血缘等进行业务语义化组织后的资产。

### Semantic Layer

语义层，用于把底层数据结构转化为业务可理解、Agent 可使用的语义表达。

### Skill

可复用任务能力包。通常由能力说明、输入输出契约、执行步骤、工具依赖、模板资源、权限声明、失败处理、评测用例和版本管理组成。

### Skill Registry

技能注册表，用于管理 Skill 的名称、描述、标签、版本、依赖、权限、输入输出契约和评测用例。

### Skill Runtime

技能运行时，负责 Skill 的加载、选择、执行、状态维护、追踪、重试、审查和更新。

## T

### Task Engine

任务引擎，用于管理任务、步骤、状态、依赖、事件、重试、审批、产物和审计。

### Tool

Agent 可调用的原子能力，例如搜索、查询数据库、执行代码、读取文件、发送邮件等。

### Tool Calling

模型选择并调用外部工具的能力，通常结合 JSON Schema、Function Calling、参数校验和结果解析实现。

### Trace

Agent 执行过程中的链路追踪，包括 Prompt、Context、Tool Call、Tool Result、State Change、Token Cost、Error 和 Approval 等。

## X

### Xino

Semovix 中的企业级 AI 工作伙伴角色。它不只是聊天助手，而是能够理解业务、调用工具、推进任务、展示依据并接受治理的智能执行伙伴。
