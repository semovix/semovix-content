# Agent Runtime 工程化

解释生产级 Agent 的受控闭环、任务引擎、运行时、状态恢复与可观测性。

## 目录

- [Agent Loop：为什么生产级 Agent 必须是受控闭环？](01-agent-loop.md)
- [Planning：Agent 如何把复杂目标拆成可执行任务？](02-planning-task-decomposition.md)
- [Task Engine：企业级 Agent 为什么需要任务引擎？](03-task-engine.md)
- [Agent Harness：让 Agent 稳定运行的控制系统](04-agent-harness.md)
- [State、Checkpoint 与 Recovery](05-state-checkpoint-recovery.md)
- [Trace、Replay 与 Audit：执行过程为什么必须可看、可回放、可审计？](06-trace-replay-audit.md)

## 写作要求

1. 每篇文章都要先说明“解决什么问题”。
2. 概念解释必须服务于工程落地，避免泛泛而谈。
3. 需要明确对应 Semovix / Xino / AI Workbench 的能力映射。
4. 需要补充可画图的结构，方便后续生成公众号配图、官网图或培训图。
5. 涉及外部项目和技术事实时，应补充到根目录 `REFERENCES.md`。
