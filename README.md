# PAsistant · 医疗器械销售知识库 AI 助手

把企业沉睡的培训资料(课件 + 讲师视频)变成住在销售钉钉里的 7×24 合规专家,
帮助销售在客户现场即时调取产品参数、临床证据、竞品对比和成熟话术。

---

## 项目背景

**客户**:医疗器械企业
**目标用户**:200+ 销售 + CS 团队
**核心媒介**:钉钉(AI 助理 / 工作台微应用 / 群机器人)
**已有素材**:约 50 份培训课件(PPT/PDF) + 约 50 段 1 小时讲师视频(≈ 240 万字可检索知识)

### 核心痛点
1. 知识太杂 — 跨设备 / 科室 / 适应症,新人 3 个月难独立
2. 培训吸收难 — 视频看完就忘,两周遗忘率 70%
3. 客户现场答不上 — 错过下单窗口、影响专业形象
4. 销冠经验沉不下来 — 人走经验走,战斗力难复制

---

## 关键决策(截至目前)

| 维度 | 决策 | 理由 |
|---|---|---|
| 交付形态 | **钉钉为主**,微信小程序作为 V2 可选加装包 | 零审核、AI 助理原生、组织架构自动同步;微信留给"对外发资料给客户"场景 |
| 商业方案 | **方案 A · SaaS** | 小团队的最佳选择:上线快、共享底座、边际成本低、可平行扩客户 |
| 用户规模 | 200+ 人 | 销售 ~150 + CS ~40 + 管理 ~15 |
| 报价 | 标准价首年 ¥44 万;**首发案例客户价首年 ¥36.8 万**(订阅 8 折) | 用案例 + 6 个月共建换后续销售弹药 |
| 风险兜底 | POC 命中率 ≥85% 不达标 **100% 退款** | 把风险前置,降低客户决策门槛 |

---

## 设计文档索引(`design/canvases/`)

以下 5 份是 Cursor Canvas 源文件(`.canvas.tsx`)。
**注意**:这些文件只有放在 Cursor 的 `canvases/` 专属目录下才能渲染成实时画布;
这里存放的是项目存档副本。如需查看渲染效果,把对应文件复制回
`~/.cursor/projects/Users-siangj-Workspace-opensource/canvases/` 即可。

| 文件 | 角色 | 受众 | 用途 |
|---|---|---|---|
| `medical-device-kb-proposal.canvas.tsx` | 内部讨论稿 | 团队 | 含完整技术架构、规模估算、客户对话技巧 |
| `medical-device-kb-client-pitch.canvas.tsx` | 对外提案稿(完整) | 客户业务负责人 | 产品设计 + 优势 + ABC 三档价格,15-20 分钟讲解 |
| `medical-device-kb-executive-brief.canvas.tsx` | 决策层简报 | 客户 CEO/VP/CIO | 5 分钟拍板,聚焦 ROI + 合规 |
| `medical-device-kb-team-execution.canvas.tsx` | 团队执行路线图 | 我方团队 | 6 个月 GTM、单客户经济模型、3 年财务 |
| `medical-device-kb-saas-proposal.canvas.tsx` | SaaS 方案老板版 | 客户老板 | **方案 A 专属**,主推这份:消除上云顾虑 + 零风险 + 首发案例客户优惠 |

### 推荐使用顺序
1. 客户老板会议 → `medical-device-kb-saas-proposal.canvas.tsx`(5 分钟拍板)
2. 业务负责人对接 → `medical-device-kb-client-pitch.canvas.tsx`(讲细节)
3. 我方内部执行 → `medical-device-kb-team-execution.canvas.tsx`

---

## 目录结构

```
PAsistant/
├── README.md                  # 本文件 · 项目总览 + 设计索引
└── design/
    └── canvases/              # 5 份 Cursor Canvas 设计稿
        ├── medical-device-kb-proposal.canvas.tsx
        ├── medical-device-kb-client-pitch.canvas.tsx
        ├── medical-device-kb-executive-brief.canvas.tsx
        ├── medical-device-kb-team-execution.canvas.tsx
        └── medical-device-kb-saas-proposal.canvas.tsx
```

---

## 下一步待办

- [ ] 起草 POC 协议草稿(85% 命中率验收条款、付款节奏、退款条件)
- [ ] 写"首发案例客户"合作协议(案例公开权 + 6 个月共建条款)
- [ ] 钉钉应用申请清单(开发者认证、所需资质、申请流程)
- [ ] 多租户数据隔离架构图(说服客户接受 SaaS 的技术证据)
- [ ] 把 `client-pitch` 推荐方案从 B 改为 A,保持对外口径一致
# PAsistant
