# Skill 设计模板

## 1. Skill 基本信息

| 字段 | 内容 |
|---|---|
| Skill Name | 待补充 |
| Skill ID | 待补充 |
| Version | 0.1.0 |
| Owner | 待补充 |
| Status | draft / testing / published / deprecated |
| Tags | 待补充 |
| Business Domain | 待补充 |

## 2. Skill 定义

### 2.1 一句话说明

```text
这个 Skill 用于……
```

### 2.2 适用场景

- 场景 1：
- 场景 2：
- 场景 3：

### 2.3 不适用场景

- 不适用场景 1：
- 不适用场景 2：

## 3. 输入输出契约

### 3.1 Input Schema

```json
{
  "type": "object",
  "properties": {},
  "required": []
}
```

### 3.2 Output Schema

```json
{
  "type": "object",
  "properties": {},
  "required": []
}
```

## 4. 执行步骤

| Step | 名称 | 说明 | 依赖 Tool | 是否需要审批 |
|---|---|---|---|---|
| 1 | 待补充 | 待补充 | 待补充 | 否 |
| 2 | 待补充 | 待补充 | 待补充 | 否 |

## 5. 工具依赖

| Tool | 用途 | 权限要求 | 失败处理 |
|---|---|---|---|
| 待补充 | 待补充 | 待补充 | 待补充 |

## 6. 上下文依赖

- System Context：
- User Context：
- Task Context：
- Semantic Context：
- Retrieved Context：
- Memory Context：

## 7. 权限声明

| 权限 | 是否需要 | 说明 |
|---|---|---|
| 读取数据资产 | 待补充 | 待补充 |
| 查询指标口径 | 待补充 | 待补充 |
| 创建治理任务 | 待补充 | 待补充 |
| 发送通知 | 待补充 | 待补充 |

## 8. 失败处理

| 错误类型 | 处理策略 |
|---|---|
| 输入不完整 | 追问用户 |
| 工具超时 | 重试 / 降级 |
| 权限不足 | 提示申请权限 |
| 结果不可信 | 请求人工确认 |

## 9. 评测用例

| Case ID | 输入 | 期望输出 | 评测点 |
|---|---|---|---|
| CASE-001 | 待补充 | 待补充 | 待补充 |

## 10. 发布清单

- [ ] 输入输出契约已定义
- [ ] 工具依赖已确认
- [ ] 权限边界已确认
- [ ] 失败处理已定义
- [ ] 评测用例已通过
- [ ] Trace 字段已接入
- [ ] 文档已完成
