import {
  Stack,
  Row,
  Grid,
  Card,
  CardHeader,
  CardBody,
  H1,
  H2,
  H3,
  Text,
  Stat,
  Table,
  Pill,
  Callout,
  Divider,
  BarChart,
  PieChart,
  useHostTheme,
} from "cursor/canvas";

export default function MedicalDeviceKBProposal() {
  const theme = useHostTheme();

  return (
    <Stack gap={28} style={{ padding: 24 }}>
      <Stack gap={8}>
        <Row gap={8} align="center">
          <Pill tone="info" active size="sm">
            医疗器械行业 · 销售赋能
          </Pill>
          <Pill tone="neutral" size="sm">
            知识库 + AI 助手
          </Pill>
        </Row>
        <H1>医疗器械销售知识库 · 方案与报价</H1>
        <Text tone="secondary">
          面向销售与 CS 团队的"随身专家"——把分散的培训课件、讲师视频和实战话术，
          浓缩成一个能即时回答专业问题的智能助手。
        </Text>
      </Stack>

      <Grid columns={4} gap={12}>
        <Stat value="50 + 50h" label="课件 / 视频时长" />
        <Stat value="~240 万字" label="可检索知识总量" />
        <Stat value="200+ 人" label="销售 + CS 用户" tone="info" />
        <Stat value="钉钉为主" label="主交付形态" tone="success" />
      </Grid>

      <Callout
        tone="info"
        title="一句话方案概述"
      >
        把 50 份 PPT 课件 + 50 段 1 小时培训视频，通过文档解析 / 语音转写 /
        智能切片，灌入向量知识库；再叠加一层医疗合规的大模型问答，
        作为 <Text as="span" weight="semibold">钉钉 AI 助理 + 工作台微应用 + 群机器人</Text>
        交付给 200+ 销售——3 周上线、零审核、原生体验。
        <Text as="span" weight="semibold"> 微信小程序作为可选升级包</Text>
        在 V2 阶段加上，覆盖"销售给客户分享资料"的对外场景。
      </Callout>

      <Stack gap={12}>
        <H2>一、客户痛点与解决路径</H2>
        <Grid columns={3} gap={12}>
          <Card>
            <CardHeader>痛点 1 · 知识太杂</CardHeader>
            <CardBody>
              <Text>
                医疗器械跨设备、跨科室、跨适应症，单产品手册动辄几百页，新人 3
                个月也吃不透。
              </Text>
              <Divider />
              <Text tone="secondary" size="small">
                解法：分层切片 + 语义检索，按"产品 / 科室 / 适应症"
                建立多维索引。
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>痛点 2 · 培训吸收难</CardHeader>
            <CardBody>
              <Text>
                视频 1 小时，回看找不到关键 30 秒；线下集训过后两周遗忘率 70%。
              </Text>
              <Divider />
              <Text tone="secondary" size="small">
                解法：视频自动转写 + 时间戳定位，问完直接跳到讲师讲过的那一段。
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>痛点 3 · 客户现场答不上</CardHeader>
            <CardBody>
              <Text>
                医生当场抛出参数 / 临床证据 / 竞品对比，销售只能"回去查"，
                丢掉订单窗口。
              </Text>
              <Divider />
              <Text tone="secondary" size="small">
                解法：移动端 + 企业微信，3 秒内给出带引用源的回答。
              </Text>
            </CardBody>
          </Card>
        </Grid>
      </Stack>

      <Stack gap={12}>
        <H2>二、产品功能蓝图</H2>
        <Grid columns={2} gap={12}>
          <Card>
            <CardHeader>核心 · 智能问答</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text>
                  自然语言提问，命中后给出"<Text as="span" weight="semibold">答案 + 引用源 + 跳转链接</Text>"。
                </Text>
                <Text tone="secondary" size="small">
                  · 多轮对话，记得上下文
                </Text>
                <Text tone="secondary" size="small">
                  · 引用必须落在原文档 / 视频片段
                </Text>
                <Text tone="secondary" size="small">
                  · 命中不到时主动说"未收录"，绝不编造
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>核心 · 视频精准定位</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text>
                  问"XX 设备的术中操作要点"，直接跳到讲师视频
                  <Text as="span" weight="semibold"> 12:34 </Text>
                  开始播放。
                </Text>
                <Text tone="secondary" size="small">
                  · 自动 ASR（语音转文字）
                </Text>
                <Text tone="secondary" size="small">
                  · 分段索引，秒级定位
                </Text>
                <Text tone="secondary" size="small">
                  · 支持倍速 / 字幕 / 笔记
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>销售场景化辅助</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text>预置医疗器械销售常见 7 类场景。</Text>
                <Text tone="secondary" size="small">
                  · 客户常见 Q&A 库
                </Text>
                <Text tone="secondary" size="small">
                  · 竞品对比表（参数 / 临床 / 价格）
                </Text>
                <Text tone="secondary" size="small">
                  · 话术模板 / 异议处理
                </Text>
                <Text tone="secondary" size="small">
                  · 临床证据清单（带 PubMed / 指南来源）
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>学习与培训</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text>把"知识库"同时变成"训练场"。</Text>
                <Text tone="secondary" size="small">
                  · 个性化学习路径（按角色 / 产品线）
                </Text>
                <Text tone="secondary" size="small">
                  · 每日 5 分钟微测验
                </Text>
                <Text tone="secondary" size="small">
                  · 新人 90 天上手地图
                </Text>
                <Text tone="secondary" size="small">
                  · 销售实战角色扮演（AI 扮演医生）
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>钉钉 AI 助理（内部主入口）</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text>
                  内部协同已经在钉钉——
                  <Text as="span" weight="semibold">直接挂在工作台 + 群机器人。</Text>
                </Text>
                <Text tone="secondary" size="small">
                  · 钉钉斜杠：任何聊天里 / 唤起 AI 助理
                </Text>
                <Text tone="secondary" size="small">
                  · 群机器人：销售群里 @ 机器人，全员可见答案
                </Text>
                <Text tone="secondary" size="small">
                  · 工作台微应用：完整知识库 / 视频 / 学习路径
                </Text>
                <Text tone="secondary" size="small">
                  · 账号 / 部门 / 权限 自动同步钉钉通讯录
                </Text>
                <Text tone="secondary" size="small">
                  · 可触发审批 / 待办 / 日历（订单跟进闭环）
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>微信小程序（V2 可选升级包）</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Row gap={6}>
                  <Pill tone="warning" size="sm">备选</Pill>
                  <Pill tone="neutral" size="sm">V2 加装</Pill>
                </Row>
                <Text>
                  钉钉版稳定运行 3 个月后再上，覆盖
                  <Text as="span" weight="semibold">销售给客户分享资料</Text>
                  的对外场景。
                </Text>
                <Text tone="secondary" size="small">
                  · 复用 V1 后端 API，仅加前端壳
                </Text>
                <Text tone="secondary" size="small">
                  · 产品对比卡片、案例一键转发
                </Text>
                <Text tone="secondary" size="small">
                  · 一次性加装费 ¥15 – 20 万，不影响订阅
                </Text>
                <Text tone="secondary" size="small">
                  · 需 4 – 6 周医疗类目审核
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Grid>
      </Stack>

      <Stack gap={12}>
        <H2>三、系统架构（自下而上 4 层）</H2>
        <Table
          headers={["层级", "组件", "技术选型建议", "作用"]}
          columnAlign={["left", "left", "left", "left"]}
          rows={[
            [
              <Pill tone="info" size="sm" active>L1 数据接入</Pill>,
              "文档解析 / 视频 ASR / 智能切片",
              "PaddleOCR、FunASR、自研切片器",
              "把 PPT / PDF / MP4 变成结构化文本块",
            ],
            [
              <Pill tone="info" size="sm" active>L2 存储</Pill>,
              "向量库 + 对象存储 + 元数据库",
              "Milvus / 阿里云向量版 + OSS + PostgreSQL",
              "存切片向量、原始文件、用户/权限数据",
            ],
            [
              <Pill tone="info" size="sm" active>L3 检索</Pill>,
              "混合检索 + Rerank",
              "BM25 + 向量召回 + bge-reranker",
              "保证医疗术语命中精度",
            ],
            [
              <Pill tone="info" size="sm" active>L4 智能</Pill>,
              "大模型 + Prompt 工程",
              "DeepSeek-V3 / Qwen-Max / GPT-4o（按合规选）",
              "生成有引用、不幻觉的回答",
            ],
            [
              <Pill tone="success" size="sm" active>应用层</Pill>,
              "钉钉 AI 助理 + 工作台微应用 + 群机器人 + PC 后台",
              "钉钉 H5 + 斜杠 SDK + Webhook + Next.js",
              "钉钉 = 200+ 销售唯一入口，PC = 管理员运营（微信 V2 备选）",
            ],
          ]}
        />
      </Stack>

      <Stack gap={12}>
        <H2>四、医疗器械行业的"红线"与加分项</H2>
        <Grid columns={2} gap={12}>
          <Callout tone="warning" title="必须守住的合规红线">
            <Stack gap={4}>
              <Text size="small">
                · 不得生成未经验证的医疗建议或诊断结论
              </Text>
              <Text size="small">
                · 所有回答必须可追溯到原始资料（医疗广告法要求）
              </Text>
              <Text size="small">
                · 临床数据 / 客户信息脱敏存储，符合《数据安全法》
              </Text>
              <Text size="small">
                · 内容审核机制：上架前 SOP + AI 双审
              </Text>
              <Text size="small">
                · 私有化部署优先（数据不出客户内网）
              </Text>
            </Stack>
          </Callout>
          <Callout tone="success" title="行业加分项 + 微信生态打通">
            <Stack gap={4}>
              <Text size="small">
                · 医学术语词典（NMPA / FDA 双语映射）
              </Text>
              <Text size="small">
                · 临床证据等级标注（Ⅰ / Ⅱ / Ⅲ 级）
              </Text>
              <Text size="small">
                · 微信小程序 ICP 备案 + 医疗类目资质审核（约 4–6 周）
              </Text>
              <Text size="small">
                · 与 CRM（销售易 / 纷享销客）打通客户档案
              </Text>
              <Text size="small">
                · 公众号"模板消息 / 订阅消息"做学习提醒
              </Text>
            </Stack>
          </Callout>
        </Grid>
      </Stack>

      <Stack gap={12}>
        <H2>四点五、为什么选纯钉钉（+ 微信延后到 V2）</H2>
        <Text tone="secondary">
          对 200+ 销售的内部知识库场景，
          <Text as="span" weight="semibold">钉钉在 6 个维度全面胜出</Text>。
          先 3 周钉钉上线、跑出真实数据，再决定要不要花 ¥15 – 20 万加微信外延层。
        </Text>
        <Table
          headers={["维度", "钉钉", "微信小程序", "纯钉钉是否够用"]}
          columnAlign={["left", "left", "left", "left"]}
          rowTone={["success", "success", "success", "success", "success", "success", "warning"]}
          rows={[
            [
              "资质审核",
              <Text size="small">零审核，企业认证即可</Text>,
              <Text size="small" tone="tertiary">医疗类目需 4–6 周</Text>,
              <Pill tone="success" size="sm" active>✓ 钉钉够</Pill>,
            ],
            [
              "账号 / 组织",
              <Text size="small">通讯录自动同步部门 / 职级</Text>,
              <Text size="small" tone="tertiary">需自建注册体系</Text>,
              <Pill tone="success" size="sm" active>✓ 钉钉够</Pill>,
            ],
            [
              "智能体框架",
              <Text size="small">AI 助理 / 斜杠原生支持 RAG</Text>,
              <Text size="small" tone="tertiary">完全自建 UI 和能力</Text>,
              <Pill tone="success" size="sm" active>✓ 钉钉够</Pill>,
            ],
            [
              "群聊 @机器人",
              <Text size="small">原生场景，销售群答案沉淀</Text>,
              <Text size="small" tone="tertiary">几乎不可行</Text>,
              <Pill tone="success" size="sm" active>✓ 钉钉够</Pill>,
            ],
            [
              "审批 / 待办联动",
              <Text size="small">原生触发、闭环</Text>,
              <Text size="small" tone="tertiary">无</Text>,
              <Pill tone="success" size="sm" active>✓ 钉钉够</Pill>,
            ],
            [
              "视频学习 / 培训",
              <Text size="small">钉钉 H5 内嵌播放、记进度</Text>,
              <Text size="small" tone="tertiary">小程序也行但更费力</Text>,
              <Pill tone="success" size="sm" active>✓ 钉钉够</Pill>,
            ],
            [
              "对外分享给客户",
              <Text size="small" tone="tertiary">医生 / 客户大多无钉钉</Text>,
              <Text size="small">微信几乎人手一个</Text>,
              <Pill tone="warning" size="sm" active>✗ 需 V2 微信补</Pill>,
            ],
          ]}
        />
        <Grid columns={2} gap={12}>
          <Card>
            <CardHeader>V1 · 纯钉钉（当前方案）</CardHeader>
            <CardBody>
              <Stack gap={8}>
                <Pill tone="success" size="sm" active>
                  3 周上线 · 零审核
                </Pill>
                <Text size="small">
                  钉钉 AI 助理 + 工作台微应用 + 销售群机器人，
                  覆盖 200+ 销售内部所有问答 / 学习 / 培训场景。
                </Text>
                <Divider />
                <Text size="small" weight="semibold">
                  能解决什么：
                </Text>
                <Text size="small" tone="secondary">
                  · 销售在客户现场拿手机钉钉提问
                </Text>
                <Text size="small" tone="secondary">
                  · 群里 @ 机器人，团队共同看答案
                </Text>
                <Text size="small" tone="secondary">
                  · 视频学习、新人培训、知识盲区追踪
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>V2 · 微信小程序（可选加装）</CardHeader>
            <CardBody>
              <Stack gap={8}>
                <Pill tone="warning" size="sm">
                  6 个月后再评估
                </Pill>
                <Text size="small">
                  V1 跑出真实数据后再决定。复用 V1 后端 API，
                  仅加微信小程序前端壳，覆盖对外分享场景。
                </Text>
                <Divider />
                <Text size="small" weight="semibold">
                  什么时候加：
                </Text>
                <Text size="small" tone="secondary">
                  · 销售明确反馈"想给客户发个链接"
                </Text>
                <Text size="small" tone="secondary">
                  · 营销侧想做对外品牌内容
                </Text>
                <Text size="small" tone="secondary">
                  · 一次性加装 ¥15 – 20 万 + 4–6 周类目审核
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Grid>
        <Callout tone="info" title="为什么不一开始就做双端？">
          <Text size="small">
            因为最大的风险不是"客户端不够"，而是"
            <Text as="span" weight="semibold">知识库本身好不好用</Text>"——命中率、引用准确度、销售用不用。
            纯钉钉版用 30% 成本验证 80% 的价值，等真有 200 人在用了再花钱做对外端，
            不会浪费一分钱。
          </Text>
        </Callout>
      </Stack>

      <Stack gap={12}>
        <H2>五、规模与负载估算</H2>
        <Grid columns={2} gap={16}>
          <Card>
            <CardHeader>内容规模（客户已确认）</CardHeader>
            <CardBody>
              <Table
                framed={false}
                headers={["项目", "数量", "折合文本"]}
                columnAlign={["left", "right", "right"]}
                rows={[
                  ["培训课件（PPT/PDF）", "50 份 × ~30 页", "~150 万字"],
                  ["培训视频（MP4）", "50 段 × 1 小时", "~50 万字（ASR 转写）"],
                  ["其他散件（手册/案例）", "预留 20% 增长", "~40 万字"],
                  ["切片后总 chunks", "—", "6,000 – 10,000"],
                  ["向量存储（1024 维）", "—", "约 30 – 50 MB"],
                  ["原始视频存储（OSS）", "50 小时", "约 50 – 80 GB"],
                  ["视频 ASR 处理时长", "一次性", "约 4 – 6 小时（GPU 并行）"],
                ]}
              />
            </CardBody>
          </Card>
          <Card>
            <CardHeader>用户与并发（按 200+ 人测算）</CardHeader>
            <CardBody>
              <Table
                framed={false}
                headers={["维度", "估算值", "备注"]}
                columnAlign={["left", "right", "left"]}
                rows={[
                  ["销售人员", "~150 人", "活跃使用主力"],
                  ["CS / 售后", "~40 人", "复杂问题处理"],
                  ["管理 / 运营", "~15 人", "看板 + 内容管理"],
                  ["日均提问次数", "2,000 – 3,500", "单人 ~10–15 次"],
                  ["峰值 QPS", "10 – 20", "客户拜访高峰段"],
                  ["月度 LLM 调用", "50k – 80k 次", "含缓存命中后净值"],
                ]}
              />
            </CardBody>
          </Card>
        </Grid>
      </Stack>

      <Stack gap={12}>
        <H2>六、成本构成（年化）</H2>
        <Grid columns="3fr 2fr" gap={16}>
          <Card>
            <CardHeader>SaaS 标准版年成本分布（参考）</CardHeader>
            <CardBody>
              <BarChart
                height={240}
                categories={[
                  "LLM 调用",
                  "向量数据库",
                  "云服务器",
                  "存储/CDN",
                  "视频 ASR",
                  "钉钉/微信开发者费",
                  "运维",
                  "内容运营",
                ]}
                series={[
                  {
                    name: "万元 / 年",
                    data: [10, 2.5, 4, 1.5, 0.5, 0.5, 7, 5],
                    tone: "info",
                  },
                ]}
                valueSuffix=" 万"
              />
              <Text tone="tertiary" size="small">
                数据来源：按 200+ 用户、月均 6 万次问答、华东节点公有云价测算（2026 年 5 月）。
                视频 ASR + 钉钉/微信开发者费用为一次性投入摊到首年；
                LLM 按 DeepSeek-V3 / Qwen-Max 国产混合调用估算，全 GPT-4o 约翻 3 倍。
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>开发投入（一次性）</CardHeader>
            <CardBody>
              <Stack gap={8}>
                <Row justify="space-between">
                  <Text>MVP（文档问答 + 基础检索）</Text>
                  <Text weight="semibold">27 – 35 万</Text>
                </Row>
                <Row justify="space-between">
                  <Text tone="secondary" size="small">
                    3 个月 · 3 人团队
                  </Text>
                  <Text tone="secondary" size="small">
                    1 PM + 1 全栈 + 1 算法
                  </Text>
                </Row>
                <Divider />
                <Row justify="space-between">
                  <Text>完整版（含视频 + 移动端）</Text>
                  <Text weight="semibold">60 – 90 万</Text>
                </Row>
                <Row justify="space-between">
                  <Text tone="secondary" size="small">
                    5 – 6 个月 · 4 – 5 人团队
                  </Text>
                  <Text tone="secondary" size="small">
                    +1 前端 +1 算法
                  </Text>
                </Row>
                <Divider />
                <Row justify="space-between">
                  <Text>医疗行业深度定制</Text>
                  <Text weight="semibold">+20 – 30 万</Text>
                </Row>
                <Row justify="space-between">
                  <Text tone="secondary" size="small">
                    合规审核 / 术语库 / CRM 集成
                  </Text>
                  <Text tone="secondary" size="small">
                    +2 个月
                  </Text>
                </Row>
              </Stack>
            </CardBody>
          </Card>
        </Grid>
      </Stack>

      <Stack gap={12}>
        <H2>七、报价方案（三档可选）</H2>
        <Grid columns={3} gap={12}>
          <Card>
            <CardHeader>方案 A · SaaS 标准版（纯钉钉）</CardHeader>
            <CardBody>
              <Stack gap={8}>
                <Pill tone="info" size="sm">
                  最快上线 · 低门槛
                </Pill>
                <Stat value="¥ 8 万" label="一次性实施费" />
                <Stat
                  value="¥ 150 / 人 / 月"
                  label="阶梯订阅（200+ 起）"
                  tone="info"
                />
                <Divider />
                <Text size="small">按 200 人计算</Text>
                <Row justify="space-between">
                  <Text tone="secondary" size="small">
                    年订阅
                  </Text>
                  <Text weight="semibold">¥ 36 万</Text>
                </Row>
                <Row justify="space-between">
                  <Text tone="secondary" size="small">
                    首年合计
                  </Text>
                  <Text weight="semibold">¥ 44 万</Text>
                </Row>
                <Row justify="space-between">
                  <Text tone="secondary" size="small">
                    次年起
                  </Text>
                  <Text weight="semibold">¥ 36 万 / 年</Text>
                </Row>
                <Divider />
                <Text tone="secondary" size="small">
                  含钉钉 AI 助理 + 工作台微应用 + 群机器人，
                  <Text as="span" weight="semibold">3 周上线</Text>。
                </Text>
                <Text tone="tertiary" size="small">
                  V2 加微信小程序：+¥15 – 20 万一次性
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>方案 B · 私有化部署（推荐 · 纯钉钉）</CardHeader>
            <CardBody>
              <Stack gap={8}>
                <Pill tone="success" size="sm" active>
                  数据自主 · 合规优先
                </Pill>
                <Stat value="¥ 75 – 105 万" label="软件买断" tone="info" />
                <Stat value="¥ 18 – 24 万 / 年" label="维护与更新" />
                <Divider />
                <Text size="small">3 年 TCO（总拥有成本）</Text>
                <Row justify="space-between">
                  <Text tone="secondary" size="small">
                    买断（200+ 用户授权）
                  </Text>
                  <Text weight="semibold">¥ 90 万</Text>
                </Row>
                <Row justify="space-between">
                  <Text tone="secondary" size="small">
                    3 年维护
                  </Text>
                  <Text weight="semibold">¥ 63 万</Text>
                </Row>
                <Row justify="space-between">
                  <Text tone="secondary" size="small">
                    3 年合计
                  </Text>
                  <Text weight="semibold">¥ 153 万</Text>
                </Row>
                <Divider />
                <Text tone="secondary" size="small">
                  部署在客户内网，模型可选私有化版本，最贴合医疗合规要求；
                  钉钉 H5 微应用注册到客户企业主体下。
                </Text>
                <Text tone="tertiary" size="small">
                  V2 加微信小程序：+¥15 – 20 万一次性
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>方案 C · 定制旗舰版（纯钉钉）</CardHeader>
            <CardBody>
              <Stack gap={8}>
                <Pill tone="warning" size="sm">
                  深度定制 · 独占功能
                </Pill>
                <Stat value="¥ 130 – 180 万" label="一次性定制" />
                <Stat value="¥ 25 – 30 万 / 年" label="持续服务" />
                <Divider />
                <Text size="small">包含全部 A+B，再加：</Text>
                <Text size="small">· 与销售易 / 纷享销客 CRM 全打通</Text>
                <Text size="small">· 销售实战 AI 角色扮演（钉钉群陪练）</Text>
                <Text size="small">· 独家算法 / 医疗知识图谱</Text>
                <Text size="small">· 钉钉审批 / 待办 / 日历深度联动</Text>
                <Text size="small">· 驻场实施 + SLA 4 小时响应</Text>
                <Divider />
                <Text tone="secondary" size="small">
                  适合战略级客户，把知识库做成销售竞争壁垒。
                </Text>
                <Text tone="tertiary" size="small">
                  V2 加微信小程序：+¥15 – 20 万一次性
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Grid>
      </Stack>

      <Stack gap={12}>
        <H2>八、ROI 视角 · 一个销售一年值多少</H2>
        <Grid columns="2fr 3fr" gap={16}>
          <Card>
            <CardHeader>价值假设（保守）</CardHeader>
            <CardBody>
              <Stack gap={8}>
                <Row justify="space-between">
                  <Text size="small">单销售年配额</Text>
                  <Text weight="semibold">¥ 500 万</Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">提升成单率</Text>
                  <Text weight="semibold">+3 %</Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">单人年增量</Text>
                  <Text weight="semibold" style={{ color: theme.accent.primary }}>
                    ¥ 15 万
                  </Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">150 销售年增量</Text>
                  <Text weight="semibold" style={{ color: theme.accent.primary }}>
                    ¥ 2,250 万
                  </Text>
                </Row>
                <Divider />
                <Text tone="tertiary" size="small">
                  对比方案 B 首年 ¥ 110 万投入 ≈ 20 倍回报；
                  即便折半保守看，也是 10 倍量级。
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>价值分解（投入产出来源占比）</CardHeader>
            <CardBody>
              <PieChart
                size={220}
                donut
                data={[
                  { label: "客户现场即时应答 → 多赢单", value: 45, tone: "success" },
                  { label: "新人上手提速（3 月 → 1 月）", value: 25, tone: "info" },
                  { label: "减少培训重复成本", value: 15, tone: "warning" },
                  { label: "管理者获得真实知识盲区", value: 10 },
                  { label: "竞品对比 / 话术沉淀", value: 5 },
                ]}
              />
            </CardBody>
          </Card>
        </Grid>
      </Stack>

      <Stack gap={12}>
        <H2>九、上线路径（建议 6 个月分阶段）</H2>
        <Table
          headers={["阶段", "周期", "交付内容", "团队", "客户里程碑"]}
          columnAlign={["left", "left", "left", "left", "left"]}
          rowTone={["info", undefined, undefined, "success"]}
          rows={[
            [
              <Text weight="semibold">阶段 1 · MVP + 钉钉</Text>,
              "第 1 – 2 月",
              "文档入库 + 智能问答 + 钉钉 AI 助理上线",
              "3 人",
              "10 名种子销售在钉钉群试用",
            ],
            [
              <Text weight="semibold">阶段 2 · 视频 + 微信</Text>,
              "第 3 – 4 月",
              "视频 ASR + 时间戳定位 + 微信小程序（对外分享）",
              "4 – 5 人",
              "全员 200+ 开放 · 启动效果跟踪",
            ],
            [
              <Text weight="semibold">阶段 3 · 销售场景</Text>,
              "第 5 月",
              "话术模板、竞品对比、临床证据库",
              "4 人",
              "销冠经验沉淀完成",
            ],
            [
              <Text weight="semibold">阶段 4 · 智能化</Text>,
              "第 6 月起",
              "学习路径、AI 角色扮演、ROI 看板",
              "持续运营 2 人",
              "形成数据飞轮",
            ],
          ]}
        />
      </Stack>

      <Stack gap={12}>
        <H2>十、给客户的下一步建议</H2>
        <Grid columns={3} gap={12}>
          <Card>
            <CardHeader>本周 · 内容盘点</CardHeader>
            <CardBody>
              <Text size="small">
                把 50 份课件 + 50 段视频按"产品线 / 重要度"
                打个标，我们做一次免费的内容审计，给出可解析率与切片预估。
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>2 周内 · POC 试点</CardHeader>
            <CardBody>
              <Text size="small">
                选 1 条产品线（10 份资料 + 5 段视频）做小范围 POC，
                3 – 5 名销售试用 2 周，量化命中率、响应时延、满意度。
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>1 个月内 · 方案敲定</CardHeader>
            <CardBody>
              <Text size="small">
                根据 POC 数据，决定走 SaaS / 私有化 / 定制 三档之一，
                签订正式合同进入 MVP 实施。
              </Text>
            </CardBody>
          </Card>
        </Grid>
      </Stack>

      <Callout tone="neutral" title="一句话总结">
        把客户已有的 50 份课件 + 50 小时讲师视频，
        变成住在销售钉钉工作台 + 微信小程序里的 7×24
        专家——首年投入 53 – 110 万，撬动 200+ 销售团队
        <Text as="span" weight="semibold"> 2000 万级业绩增量</Text>。
        钉钉做内部、微信做对外，
        <Text as="span" weight="semibold">销售不用装新 App、客户也能看到产品资料</Text>，
        是医疗器械数字化里见效最快、销售最不抗拒的一类项目。
      </Callout>
    </Stack>
  );
}
