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
  LineChart,
  useHostTheme,
} from "cursor/canvas";

export default function MedicalDeviceKBTeamExecution() {
  const theme = useHostTheme();

  return (
    <Stack gap={32} style={{ padding: 28, maxWidth: 1200 }}>
      <Stack gap={10}>
        <Row gap={8} align="center">
          <Pill tone="success" size="sm" active>
            方案 A · SaaS
          </Pill>
          <Pill tone="info" size="sm">
            小团队落地路线图
          </Pill>
          <Pill tone="neutral" size="sm">
            内部规划
          </Pill>
        </Row>
        <H1>3 人团队，6 个月跑通方案 A</H1>
        <Text size="body" tone="secondary">
          作为小团队，方案 A SaaS 是
          <Text as="span" weight="semibold">唯一正确</Text>
          的商业模式：上线快、无驻场、共享底座、订阅可预期。
          这份是给团队自己看的：技术架构、人员配置、单客户经济、3 年财务。
        </Text>
      </Stack>

      <Grid columns={4} gap={16}>
        <Stat value="3 人" label="核心团队" />
        <Stat value="6 个月" label="跑通首单" tone="info" />
        <Stat value="80%" label="单客户毛利" tone="success" />
        <Stat value="¥ 44 万" label="首客户首年收入" tone="success" />
      </Grid>

      <Stack gap={14}>
        <H2>一、为什么方案 A 是小团队的最佳选择</H2>
        <Grid columns={3} gap={12}>
          <Card>
            <CardHeader>1. 上线快 · 现金流好</CardHeader>
            <CardBody>
              <Text size="small">
                3 周可交付 MVP，
                <Text as="span" weight="semibold">付款周期短</Text>，
                现金流压力小；订阅模式让收入可预测，避免靠大单度日。
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>2. 共享底座 · 边际成本低</CardHeader>
            <CardBody>
              <Text size="small">
                一份多租户底座，第 2 个客户接入只需 1-2 周；
                <Text as="span" weight="semibold">客户越多越赚</Text>，
                毛利从 70% 拉到 85%+。
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>3. 不锁团队 · 可平行扩客户</CardHeader>
            <CardBody>
              <Text size="small">
                无需驻场 / 内网部署，
                <Text as="span" weight="semibold">3 人团队同时服务 5-10 个客户</Text>
                完全可行；方案 B 一个项目就吃掉团队半年。
              </Text>
            </CardBody>
          </Card>
        </Grid>
        <Callout tone="warning" title="方案 B / C 现阶段不要碰">
          <Text size="small">
            私有化 / 定制旗舰对小团队是
            <Text as="span" weight="semibold">现金流陷阱</Text>——
            一个项目就吃掉所有人 3-6 个月、占用全部 GPU、需要驻场，
            而且交付完不挣钱、维护责任 5 年。
            <Text as="span" weight="semibold">先用方案 A 跑通 5-10 个客户、跑出 PMF</Text>
            ，再考虑接方案 B 大单。
          </Text>
        </Callout>
      </Stack>

      <Stack gap={14}>
        <H2>二、3 人团队配置 · 角色与工作量</H2>
        <Table
          headers={["角色", "核心职责", "前 3 月工作量", "稳态工作量", "成本"]}
          columnAlign={["left", "left", "left", "left", "right"]}
          rows={[
            [
              <Text weight="semibold">产品 / PM</Text>,
              "客户对接、需求拆解、内容运营、交付管理",
              "100% 客户接入 + 文档整理",
              "60% 客户运营 + 40% 内容",
              "¥ 30 万 / 年",
            ],
            [
              <Text weight="semibold">全栈工程师</Text>,
              "钉钉 H5 / Web 后台 / 后端 API / DevOps",
              "100% 平台开发",
              "70% 迭代 + 30% 客户问题",
              "¥ 40 万 / 年",
            ],
            [
              <Text weight="semibold">算法 / AI 工程师</Text>,
              "RAG 引擎、文档切片、视频 ASR、Prompt 调优",
              "100% 核心引擎",
              "50% 优化 + 50% 客户调优",
              "¥ 45 万 / 年",
            ],
            [
              <Text weight="semibold">客户运营（兼职 / 外包）</Text>,
              "客户培训、内容审核、答疑、收款",
              "0.3 人 · 跟单",
              "0.5 人 · 兼职",
              "¥ 10 万 / 年",
            ],
            [
              <Text weight="semibold">合计</Text>,
              "—",
              "3 全职 + 0.3 兼职",
              "3 全职 + 0.5 兼职",
              <Text weight="semibold">¥ 125 万 / 年</Text>,
            ],
          ]}
        />
      </Stack>

      <Stack gap={14}>
        <H2>三、单客户经济模型（这家医疗器械作为种子）</H2>
        <Grid columns={2} gap={16}>
          <Card>
            <CardHeader>收入端 · 首年 ¥ 44 万</CardHeader>
            <CardBody>
              <Stack gap={8}>
                <Row justify="space-between">
                  <Text size="small">实施费（一次性）</Text>
                  <Text weight="semibold">¥ 8 万</Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">订阅费 ¥ 150/人/月 × 200</Text>
                  <Text weight="semibold">¥ 36 万 / 年</Text>
                </Row>
                <Divider />
                <Row justify="space-between">
                  <Text size="small" weight="semibold">首年合计</Text>
                  <Text
                    weight="bold"
                    style={{ color: theme.accent.primary, fontSize: 18 }}
                  >
                    ¥ 44 万
                  </Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">次年起 ARR</Text>
                  <Text weight="semibold">¥ 36 万 / 年</Text>
                </Row>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>成本端 · 首年 ¥ 9 万</CardHeader>
            <CardBody>
              <Stack gap={8}>
                <Row justify="space-between">
                  <Text size="small">实施人工（15 人天 × ¥2000）</Text>
                  <Text weight="semibold">¥ 3 万</Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">云服务（阿里云 ECS + 存储）</Text>
                  <Text weight="semibold">¥ 1.5 万 / 年</Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">LLM API（DeepSeek + 百炼）</Text>
                  <Text weight="semibold">¥ 2 万 / 年</Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">向量库 + ASR + CDN</Text>
                  <Text weight="semibold">¥ 1.5 万 / 年</Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">客户运营时间分摊</Text>
                  <Text weight="semibold">¥ 1 万 / 年</Text>
                </Row>
                <Divider />
                <Row justify="space-between">
                  <Text size="small" weight="semibold">首年合计</Text>
                  <Text
                    weight="bold"
                    style={{ color: theme.text.primary, fontSize: 18 }}
                  >
                    ¥ 9 万
                  </Text>
                </Row>
              </Stack>
            </CardBody>
          </Card>
        </Grid>
        <Callout tone="success" title="单客户毛利 ~80%">
          <Text>
            <Text as="span" weight="semibold">首年毛利 = ¥ 35 万（80%）</Text>，
            <Text as="span" weight="semibold">次年毛利 = ¥ 30 万（83%）</Text>。
            云成本不是按客户线性增长——多租户共享底座，
            <Text as="span" weight="semibold">第 5 个客户接入时单客户成本会降到 ¥ 6 万 / 年</Text>
            ，毛利能拉到 85%+。
          </Text>
        </Callout>
      </Stack>

      <Stack gap={14}>
        <H2>四、6 个月 Go-to-Market 路径</H2>
        <Table
          headers={["周次", "里程碑", "技术 / 产品", "客户 / 商务", "收入"]}
          columnAlign={["left", "left", "left", "left", "right"]}
          rowTone={[
            "info",
            undefined,
            undefined,
            "success",
            undefined,
            undefined,
            "success",
          ]}
          rows={[
            [
              <Text weight="semibold">W1 – 2</Text>,
              "底座搭建",
              "多租户架构 + 钉钉 OAuth + 文档解析",
              "签 POC 协议（医疗器械客户）",
              "¥ 3 万（POC）",
            ],
            [
              <Text weight="semibold">W3 – 4</Text>,
              "MVP 内测",
              "RAG 问答 + 钉钉 AI 助理 + 基础后台",
              "客户 5 人种子销售试用",
              "—",
            ],
            [
              <Text weight="semibold">W5 – 6</Text>,
              "POC 验收",
              "命中率调优至 85%+ · 修 bug",
              "POC 总结 · 签正式合同",
              "¥ 8 万 + 首月订阅",
            ],
            [
              <Text weight="semibold">W7 – 8</Text>,
              "全员上线",
              "工作台微应用 + 群机器人 + 视频 ASR",
              "200+ 销售全员开放使用",
              "稳定订阅",
            ],
            [
              <Text weight="semibold">W9 – 12</Text>,
              "稳定 + 拓客",
              "数据看板 + 学习路径 + 第 2 客户接入",
              "用首客户案例开发 2-3 个新客户",
              "¥ 9 万 / 月",
            ],
            [
              <Text weight="semibold">W13 – 16</Text>,
              "复制扩张",
              "把首客户经验抽象成模板",
              "第 2 客户签约 · 第 3 客户 POC",
              "¥ 12 万 / 月",
            ],
            [
              <Text weight="semibold">W17 – 24</Text>,
              "PMF 验证",
              "迭代 + 性能优化",
              "3 客户稳定 · 第 4 个准备签约",
              "¥ 15 万+ / 月",
            ],
          ]}
        />
      </Stack>

      <Stack gap={14}>
        <H2>五、轻量技术架构（小团队能扛得住）</H2>
        <Text tone="secondary">
          原则：
          <Text as="span" weight="semibold">凡是大厂 PaaS 能解决的，绝不自建</Text>。
          团队精力 100% 留给业务逻辑和客户调优。
        </Text>
        <Table
          headers={["层级", "选型", "理由", "成本"]}
          columnAlign={["left", "left", "left", "right"]}
          rows={[
            [
              <Pill tone="info" size="sm" active>计算</Pill>,
              "阿里云 ECS（2 台 4C8G）",
              "够 5-10 客户用，免运维",
              "~ ¥ 8000 / 月",
            ],
            [
              <Pill tone="info" size="sm" active>大模型</Pill>,
              "DeepSeek-V3 API + 百炼 Qwen 混合",
              <Text size="small">国产合规 · 按量付费 · 不自部署</Text>,
              "按调用计费",
            ],
            [
              <Pill tone="info" size="sm" active>向量库</Pill>,
              "阿里云 DashVector",
              "全托管 · 不用维护 Milvus 集群",
              "~ ¥ 500 / 月",
            ],
            [
              <Pill tone="info" size="sm" active>语音转写</Pill>,
              "阿里云 录音文件识别极速版",
              "1 元 / 小时 · 50 小时 ¥ 50 一次性",
              "几乎零",
            ],
            [
              <Pill tone="info" size="sm" active>存储</Pill>,
              "阿里云 OSS + CDN",
              "视频托管 + 防盗链",
              "~ ¥ 300 / 月",
            ],
            [
              <Pill tone="success" size="sm" active>钉钉接入</Pill>,
              "钉钉 H5 + AI 助理开放接口",
              <Text size="small" weight="semibold">免审核 · 智能体框架原生</Text>,
              "免费",
            ],
            [
              <Pill tone="info" size="sm" active>后端</Pill>,
              "FastAPI / Next.js（团队最熟）",
              "开发快 · 部署轻",
              "—",
            ],
            [
              <Pill tone="warning" size="sm">监控</Pill>,
              "阿里云 ARMS + Sentry",
              "异常告警 · 不自建监控栈",
              "~ ¥ 200 / 月",
            ],
          ]}
        />
        <Callout tone="info" title="3 个不要">
          <Stack gap={4}>
            <Text size="small">
              ·
              <Text as="span" weight="semibold"> 不要自建 Milvus / Elasticsearch</Text>
              ——用云托管，省下 1 个 SRE 工资
            </Text>
            <Text size="small">
              ·
              <Text as="span" weight="semibold"> 不要自部署大模型</Text>
              ——GPU 成本 + 运维成本远超 API 费用
            </Text>
            <Text size="small">
              ·
              <Text as="span" weight="semibold"> 不要做多云 / 跨区</Text>
              ——单云够用，未来需要再说
            </Text>
          </Stack>
        </Callout>
      </Stack>

      <Stack gap={14}>
        <H2>六、3 年财务预测</H2>
        <Grid columns="3fr 2fr" gap={16}>
          <Card>
            <CardHeader>收入 vs 成本（万元）</CardHeader>
            <CardBody>
              <BarChart
                height={280}
                categories={["第 1 年", "第 2 年", "第 3 年"]}
                series={[
                  {
                    name: "收入",
                    data: [88, 290, 550],
                    tone: "success",
                  },
                  {
                    name: "成本（团队 + 云）",
                    data: [140, 200, 280],
                    tone: "warning",
                  },
                  {
                    name: "净利",
                    data: [-52, 90, 270],
                    tone: "info",
                  },
                ]}
                valueSuffix=" 万"
              />
              <Text tone="tertiary" size="small">
                假设：客户数 2 / 8 / 15；团队第 1 年 3 人 → 第 3 年 5 人；
                客户续费率 90%；
                <Text as="span" weight="semibold">第 14 个月开始单月盈利</Text>。
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>关键经营指标</CardHeader>
            <CardBody>
              <Stack gap={10}>
                <Row justify="space-between">
                  <Text size="small">单客户 ACV</Text>
                  <Text weight="semibold">¥ 36 万 / 年</Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">单客户 LTV（3 年）</Text>
                  <Text weight="semibold">¥ 100 万+</Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">单客户毛利（稳态）</Text>
                  <Text
                    weight="semibold"
                    style={{ color: theme.accent.primary }}
                  >
                    85%
                  </Text>
                </Row>
                <Divider />
                <Row justify="space-between">
                  <Text size="small">CAC（获客成本）</Text>
                  <Text weight="semibold">¥ 5 万 / 客户</Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">CAC 回收周期</Text>
                  <Text weight="semibold">2 个月</Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">LTV / CAC</Text>
                  <Text
                    weight="semibold"
                    style={{ color: theme.accent.primary }}
                  >
                    20×
                  </Text>
                </Row>
                <Divider />
                <Row justify="space-between">
                  <Text size="small">现金流转正</Text>
                  <Text weight="semibold">第 14 个月</Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">第 3 年净利率</Text>
                  <Text
                    weight="semibold"
                    style={{ color: theme.accent.primary }}
                  >
                    49%
                  </Text>
                </Row>
              </Stack>
            </CardBody>
          </Card>
        </Grid>
      </Stack>

      <Stack gap={14}>
        <H2>七、怎么说服这家医疗器械客户接受 SaaS</H2>
        <Text tone="secondary">
          客户的本能反应是 "医疗数据上云不安全"。
          我们需要主动解释——并且
          <Text as="span" weight="semibold">把保障写进合同</Text>。
        </Text>
        <Grid columns={2} gap={12}>
          <Card>
            <CardHeader>客户可能的 4 个疑虑</CardHeader>
            <CardBody>
              <Stack gap={10}>
                <Stack gap={2}>
                  <Text size="small" weight="semibold">"医疗数据放云端安全吗？"</Text>
                  <Text size="small" tone="secondary">
                    我们用阿里云金融云 + 独立租户隔离，
                    数据加密存储、传输 HTTPS，符合等保二级。
                  </Text>
                </Stack>
                <Divider />
                <Stack gap={2}>
                  <Text size="small" weight="semibold">"如果你们倒闭怎么办？"</Text>
                  <Text size="small" tone="secondary">
                    合同明确数据导出权 + 代码 escrow 托管，
                    任何时候可一键导出所有数据。
                  </Text>
                </Stack>
                <Divider />
                <Stack gap={2}>
                  <Text size="small" weight="semibold">"AI 答错了责任谁担？"</Text>
                  <Text size="small" tone="secondary">
                    回答必带引用源 · 不创作医疗信息；
                    合同约定保险条款 + 5 年内容审核责任。
                  </Text>
                </Stack>
                <Divider />
                <Stack gap={2}>
                  <Text size="small" weight="semibold">"如果以后想私有化？"</Text>
                  <Text size="small" tone="secondary">
                    SaaS → 私有化 提供 8 折升级路径，
                    已支付订阅可抵扣买断费。
                  </Text>
                </Stack>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>我方的 5 个反向卖点</CardHeader>
            <CardBody>
              <Stack gap={8}>
                <Row gap={6}>
                  <Pill tone="success" size="sm" active>1</Pill>
                  <Text size="small">
                    <Text as="span" weight="semibold">不用一次性大投入</Text>
                    ——SaaS 一年 44 万比方案 B 一次性 90 万压力小 60%
                  </Text>
                </Row>
                <Row gap={6}>
                  <Pill tone="success" size="sm" active>2</Pill>
                  <Text size="small">
                    <Text as="span" weight="semibold">不满意可随时停</Text>
                    ——3 个月不续费的退出机制写进合同
                  </Text>
                </Row>
                <Row gap={6}>
                  <Pill tone="success" size="sm" active>3</Pill>
                  <Text size="small">
                    <Text as="span" weight="semibold">永远是最新版</Text>
                    ——大模型升级、新功能自动享受，无需付升级费
                  </Text>
                </Row>
                <Row gap={6}>
                  <Pill tone="success" size="sm" active>4</Pill>
                  <Text size="small">
                    <Text as="span" weight="semibold">不需要客户的 IT 资源</Text>
                    ——不占贵司服务器、不占运维时间
                  </Text>
                </Row>
                <Row gap={6}>
                  <Pill tone="success" size="sm" active>5</Pill>
                  <Text size="small">
                    <Text as="span" weight="semibold">先用再交订阅费</Text>
                    ——POC 不满意不签约，签约后按月付
                  </Text>
                </Row>
              </Stack>
            </CardBody>
          </Card>
        </Grid>
        <Callout tone="info" title="价格弹性：首单可以让多少">
          <Text size="small">
            首客户作为
            <Text as="span" weight="semibold">案例客户</Text>，
            可以给到 8 折（订阅价 ¥ 120/人/月，年订阅约 ¥ 28.8 万），
            交换条件：
            <Text as="span" weight="semibold">允许我们对外公开案例 + 接受 6 个月深度共建</Text>。
            首年净收入 ¥ 36.8 万，毛利依然 75%+，
            <Text as="span" weight="semibold">用案例换后续 5 个客户的销售弹药</Text>。
          </Text>
        </Callout>
      </Stack>

      <Stack gap={14}>
        <H2>八、风险与应对</H2>
        <Table
          headers={["风险", "可能性", "影响", "应对方案"]}
          columnAlign={["left", "center", "center", "left"]}
          rows={[
            [
              <Text weight="semibold">客户坚持要私有化</Text>,
              <Pill tone="warning" size="sm">中</Pill>,
              <Pill tone="warning" size="sm">高</Pill>,
              "提供 VPC 部署选项（介于 SaaS 和私有化之间，加 30%）",
            ],
            [
              <Text weight="semibold">命中率达不到 85%</Text>,
              <Pill tone="info" size="sm">低</Pill>,
              <Pill tone="warning" size="sm">高</Pill>,
              "POC 阶段先验证 · 内容审计可预判 · 不达标退款",
            ],
            [
              <Text weight="semibold">首客户付款慢</Text>,
              <Pill tone="warning" size="sm">中</Pill>,
              <Pill tone="warning" size="sm">中</Pill>,
              "合同分阶段：签约 30% · POC 通过 30% · 上线 40%",
            ],
            [
              <Text weight="semibold">单客户依赖太重</Text>,
              <Pill tone="warning" size="sm">中</Pill>,
              <Pill tone="warning" size="sm">高</Pill>,
              "首单上线同时开发 2-3 个种子客户管线",
            ],
            [
              <Text weight="semibold">大模型 API 涨价 / 受限</Text>,
              <Pill tone="info" size="sm">低</Pill>,
              <Pill tone="info" size="sm">低</Pill>,
              "多模型抽象层 · 可切换 DeepSeek / Qwen / 智谱",
            ],
            [
              <Text weight="semibold">钉钉政策变化</Text>,
              <Pill tone="info" size="sm">低</Pill>,
              <Pill tone="warning" size="sm">中</Pill>,
              "Web 端 + 飞书 / 企微备用入口，避免单平台绑定",
            ],
          ]}
        />
      </Stack>

      <Stack gap={14}>
        <H2>九、立即行动清单</H2>
        <Grid columns={3} gap={12}>
          <Card>
            <CardHeader>本周（决策周）</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small">· 确认 3 人团队到位（PM + 全栈 + 算法）</Text>
                <Text size="small">· 申请阿里云账号 + 钉钉开发者认证</Text>
                <Text size="small">· 和医疗器械客户敲定免费内容审计时间</Text>
                <Text size="small">· 起草 POC 协议（¥ 3 万、85% 命中率验收）</Text>
                <Text size="small">· 申请 DeepSeek + 百炼 API key</Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>下周（启动周）</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small">· 完成客户内容审计（50 份课件 + 5 段视频抽样）</Text>
                <Text size="small">· 签 POC 协议、收 ¥ 3 万首付</Text>
                <Text size="small">· 搭建多租户基础架构（一周内出 demo）</Text>
                <Text size="small">· 拉客户种子销售群（5 人）</Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>本月（MVP 周）</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small">· 完成钉钉 AI 助理 MVP</Text>
                <Text size="small">· 50 份课件全部入库 · 命中率冲到 80%</Text>
                <Text size="small">· 种子销售 5 人开始真实使用</Text>
                <Text size="small">· 同步对接 1 - 2 个潜在客户管线</Text>
              </Stack>
            </CardBody>
          </Card>
        </Grid>
      </Stack>

      <Callout tone="success" title="一句话总结（给团队）">
        <Text>
          方案 A SaaS 对小团队是
          <Text as="span" weight="semibold">独一无二的正确选择</Text>——
          首单 ¥ 44 万首年收入、80% 毛利、第 14 个月现金流转正、第 3 年净利 ¥ 270 万。
          <Text as="span" weight="semibold">
            {" "}
            关键是：用这家医疗器械客户跑通方法论，再去复制 5-10 个客户
          </Text>
          ，而不是把所有精力压在一个大单上。
        </Text>
      </Callout>
    </Stack>
  );
}
