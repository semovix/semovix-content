# Tool 设计模板

## 1. Tool 基本信息

| 字段 | 内容 |
|---|---|
| Tool Name | 待补充 |
| Tool ID | 待补充 |
| Version | 0.1.0 |
| Owner | 待补充 |
| Status | draft / testing / published / deprecated |

## 2. Tool 描述

### 一句话说明

```text
这个 Tool 用于……
```

### 适用场景

- 场景 1：
- 场景 2：

## 3. 输入参数

```json
{
  "type": "object",
  "properties": {},
  "required": []
}
```

## 4. 输出结构

```json
{
  "type": "object",
  "properties": {},
  "required": []
}
```

## 5. 错误类型

| 错误码 | 错误说明 | 是否可重试 | 处理建议 |
|---|---|---|---|
| TOOL_TIMEOUT | 工具调用超时 | 是 | 重试或降级 |
| PERMISSION_DENIED | 权限不足 | 否 | 提示申请权限 |
| INVALID_ARGUMENT | 参数错误 | 否 | 要求模型修正参数 |

## 6. 权限边界

- 可访问资源：
- 禁止访问资源：
- 是否涉及敏感数据：
- 是否需要用户确认：
- 是否需要审计：

## 7. 调用限制

| 限制项 | 配置 |
|---|---|
| Timeout | 待补充 |
| Retry | 待补充 |
| Rate Limit | 待补充 |
| Idempotency | 待补充 |

## 8. 审计字段

建议记录：

- tool_name
- tool_version
- caller_agent
- session_id
- task_id
- input_hash
- output_hash
- status
- latency_ms
- error_code
- created_at

## 9. 测试用例

| Case ID | 输入 | 期望输出 | 说明 |
|---|---|---|---|
| CASE-001 | 待补充 | 待补充 | 待补充 |
