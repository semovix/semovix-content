# References

本文件用于沉淀 Semovix AI Agent 工程化指南中的主要外部参考资料。

> 说明：引用外部资料时，应优先使用官方文档、官方博客、论文或开源仓库。非官方文章可作为补充，但不建议作为关键结论的唯一来源。

## 1. AI Agent / Agents SDK

### OpenAI Agents SDK

- 类型：官方文档
- 地址：https://developers.openai.com/api/docs/guides/agents
- 关注点：Agent 定义、规划、工具调用、多步骤工作、状态保持。
- 可用于文章：
  - `01-agent-foundation/01-what-is-ai-agent.md`
  - `01-agent-foundation/03-agent-capability-stack.md`
  - `04-agent-runtime-engineering/01-agent-loop.md`

### OpenAI Agents SDK Python

- 类型：官方文档
- 地址：https://openai.github.io/openai-agents-python/agents/
- 关注点：Agent、Runner、tools、guardrails、handoffs、sessions。
- 可用于文章：
  - `03-tool-skill-protocol/01-tool-calling.md`
  - `04-agent-runtime-engineering/04-agent-harness.md`

### OpenAI Agents SDK TypeScript

- 类型：官方文档
- 地址：https://openai.github.io/openai-agents-js/
- 关注点：TypeScript Agent SDK、Agent 基础抽象、生产级 Agent 应用开发。

## 2. Claude / Managed Agents

### Claude Managed Agents Overview

- 类型：官方文档
- 地址：https://platform.claude.com/docs/en/managed-agents/overview
- 关注点：Agent harness、tool execution、runtime、secure environment、long-running work。
- 可用于文章：
  - `04-agent-runtime-engineering/04-agent-harness.md`
  - `04-agent-runtime-engineering/05-state-checkpoint-recovery.md`

### Claude Managed Agents Quickstart

- 类型：官方文档
- 地址：https://platform.claude.com/docs/en/managed-agents/quickstart
- 关注点：创建 Agent、环境设置、Session、Streaming Response。

### Scaling Managed Agents: Decoupling the brain from the body

- 类型：官方工程博客
- 地址：https://www.anthropic.com/engineering/managed-agents
- 关注点：Harness 设计、模型能力与运行环境解耦、长期任务执行。

## 3. MCP / Model Context Protocol

### MCP Specification

- 类型：官方规范
- 地址：https://modelcontextprotocol.io/specification/2025-11-25
- 关注点：Host、Client、Server、Resource、Tool、Prompt、JSON-RPC。
- 可用于文章：
  - `03-tool-skill-protocol/06-mcp-protocol.md`
  - `09-diagrams/semovix-agent-capability-stack.md`

### MCP Transports

- 类型：官方规范
- 地址：https://modelcontextprotocol.io/specification/2025-11-25/basic/transports
- 关注点：stdio、Streamable HTTP、JSON-RPC 消息。
- 注意：正式文档中应优先使用 `stdio / Streamable HTTP` 表述。

### MCP Authorization

- 类型：官方文档
- 地址：https://modelcontextprotocol.io/docs/tutorials/security/authorization
- 关注点：MCP 授权、安全边界、OAuth 相关实践。

## 4. Agent Orchestration / Workflow

### LangGraph

- 类型：官方文档 / 官方站点
- 地址：https://www.langchain.com/langgraph
- 关注点：Agent orchestration、stateful agent、control flow、多 Agent 编排。

### LangChain Agents

- 类型：官方文档
- 地址：https://docs.langchain.com/oss/python/langchain/agents
- 关注点：模型 + 工具、Agent Loop、停止条件、迭代限制。

### Temporal

- 类型：官方文档
- 地址：https://docs.temporal.io/
- 关注点：长时间运行工作流、状态持久化、重试、补偿、可靠执行。

### Prefect

- 类型：官方文档
- 地址：https://docs.prefect.io/
- 关注点：数据流、任务编排、调度、观测。

### Dagster

- 类型：官方文档
- 地址：https://docs.dagster.io/
- 关注点：数据编排、资产管理、任务依赖。

## 5. RAG / Memory / Retrieval

### LlamaIndex

- 类型：官方文档
- 地址：https://docs.llamaindex.ai/
- 关注点：RAG、Index、Retriever、Agent、数据连接器。

### Weaviate

- 类型：官方文档
- 地址：https://weaviate.io/developers/weaviate
- 关注点：向量数据库、混合搜索、语义检索。

### Milvus

- 类型：官方文档
- 地址：https://milvus.io/docs
- 关注点：向量检索、大规模相似度搜索。

## 6. 评测 / 可观测性 / 安全

### OpenTelemetry

- 类型：官方文档
- 地址：https://opentelemetry.io/docs/
- 关注点：Trace、Metrics、Logs、分布式可观测性。

### OWASP Top 10 for LLM Applications

- 类型：安全标准参考
- 地址：https://owasp.org/www-project-top-10-for-large-language-model-applications/
- 关注点：Prompt Injection、敏感信息泄露、工具滥用、供应链风险。

## 7. Semovix 内部参考

以下内容建议根据内部项目逐步补充：

- Semovix 产品定位文档
- Xino IP 与 AI 工作伙伴设定
- AI Workbench 页面设计稿
- Skill 管理页面设计稿
- 找数问数功能合同
- 语义治理功能合同
- Task Engine / Execution Runtime 技术方案
- Trace / Replay / Audit 技术方案

## 8. 引用规范

文章中建议使用以下格式：

```markdown
> 参考：OpenAI Agents SDK 官方文档，说明 Agents 是能够规划、调用工具并保持足够状态完成多步骤工作的应用。
```

或：

```markdown
参考资料：

1. OpenAI Agents SDK, Official Documentation.
2. Model Context Protocol Specification, Official Documentation.
3. Anthropic Claude Managed Agents, Official Documentation.
```
