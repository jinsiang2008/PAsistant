import {
  Stack,
  Row,
  Grid,
  Card,
  CardHeader,
  CardBody,
  H1,
  H2,
  Text,
  Stat,
  Table,
  Pill,
  Callout,
  Divider,
  BarChart,
  useHostTheme,
} from "cursor/canvas";

export default function MedicalDeviceKBSaaSProposal() {
  const theme = useHostTheme();

  return (
    <Stack gap={32} style={{ padding: 32, maxWidth: 1100 }}>
      <Stack gap={12}>
        <Row gap={8} align="center">
          <Pill tone="success" size="sm" active>
            SaaS 方案 · 推荐
          </Pill>
          <Pill tone="info" size="sm">
            钉钉原生 · 3 周上线
          </Pill>
          <Pill tone="warning" size="sm">
            不达标退款
          </Pill>
        </Row>
        <H1>¥ 44 万首年，让 200+ 销售拥有 7×24 在线的合规专家</H1>
        <Text size="body" tone="secondary">
          把贵司 50 份课件 + 50 小时讲师视频，
          变成住在销售钉钉里的 AI 助理——
          <Text as="span" weight="semibold">
            {" "}
            订阅模式、无需大笔预算、不满意可随时停、命中率不达标 100% 退款
          </Text>
          。
        </Text>
      </Stack>

      <Grid columns={4} gap={16}>
        <Stat value="¥ 44 万" label="首年总投入" />
        <Stat value="3 周" label="MVP 上线" tone="info" />
        <Stat value="~ 20×" label="预期首年 ROI" tone="success" />
        <Stat value="0 风险" label="不达标 100% 退款" tone="success" />
      </Grid>

      <Stack gap={14}>
        <H2>一、决策摘要 · 一页说清投入产出</H2>
        <Grid columns={2} gap={16}>
          <Card>
            <CardHeader>当前隐性成本（每年）</CardHeader>
            <CardBody>
              <Stack gap={10}>
                <Row justify="space-between">
                  <Text size="small">新人 3 月才独立见客户</Text>
                  <Text weight="semibold">¥ 200 万+</Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">老带新占用销冠时间</Text>
                  <Text weight="semibold">¥ 150 万+</Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">现场答不上丢单（估 1%）</Text>
                  <Text weight="semibold">¥ 500 万+</Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">培训视频重复观看 / 遗忘</Text>
                  <Text weight="semibold">¥ 100 万+</Text>
                </Row>
                <Divider />
                <Row justify="space-between">
                  <Text size="small" weight="semibold">
                    合计（保守）
                  </Text>
                  <Text
                    weight="bold"
                    style={{ fontSize: 18 }}
                  >
                    ¥ 950 万 / 年
                  </Text>
                </Row>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>方案带来的增量（每年）</CardHeader>
            <CardBody>
              <Stack gap={10}>
                <Row justify="space-between">
                  <Text size="small">成单率 +3%（150 销售）</Text>
                  <Text
                    weight="semibold"
                    style={{ color: theme.accent.primary }}
                  >
                    ¥ 2,250 万
                  </Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">新人上手 3 月 → 1 月</Text>
                  <Text
                    weight="semibold"
                    style={{ color: theme.accent.primary }}
                  >
                    ¥ 200 万
                  </Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">销冠时间释放</Text>
                  <Text
                    weight="semibold"
                    style={{ color: theme.accent.primary }}
                  >
                    ¥ 150 万
                  </Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">培训成本下降</Text>
                  <Text
                    weight="semibold"
                    style={{ color: theme.accent.primary }}
                  >
                    ¥ 80 万
                  </Text>
                </Row>
                <Divider />
                <Row justify="space-between">
                  <Text size="small" weight="semibold">
                    合计（保守）
                  </Text>
                  <Text
                    weight="bold"
                    style={{ color: theme.accent.primary, fontSize: 18 }}
                  >
                    ¥ 2,680 万 / 年
                  </Text>
                </Row>
              </Stack>
            </CardBody>
          </Card>
        </Grid>
        <Callout tone="success" title="净收益与回收周期">
          <Text>
            年化净收益 ≈
            <Text as="span" weight="semibold"> ¥ 2,636 万 </Text>
            (¥ 2,680 万 - ¥ 44 万 首年投入)，
            <Text as="span" weight="semibold">投资回收周期约 6 天</Text>。
            即便所有假设打 5 折，仍是
            <Text as="span" weight="semibold"> 10 倍量级 ROI</Text>。
          </Text>
        </Callout>
      </Stack>

      <Stack gap={14}>
        <H2>二、为什么 SaaS 是您的最佳选择</H2>
        <Grid columns={3} gap={12}>
          <Card>
            <CardHeader>1. 不用一次性大笔预算</CardHeader>
            <CardBody>
              <Text size="small">
                ¥ 44 万首年 vs 私有化 ¥ 90 万买断，
                <Text as="span" weight="semibold">
                  {" "}
                  预算压力降低 50%
                </Text>
                ，按月付订阅、现金流友好。
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>2. 不满意可随时停</CardHeader>
            <CardBody>
              <Text size="small">
                合同保障
                <Text as="span" weight="semibold">
                  {" "}
                  3 个月不续费即终止
                </Text>
                ，所有数据 24 小时内导出，
                避免"花大钱买个用不起来的系统"。
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>3. 永远是最新版</CardHeader>
            <CardBody>
              <Text size="small">
                大模型升级、新功能上线
                <Text as="span" weight="semibold">
                  {" "}
                  自动享受，无需付升级费
                </Text>
                ——不像一次性买断版，3 年后就过时。
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>4. 不占用贵司 IT 资源</CardHeader>
            <CardBody>
              <Text size="small">
                <Text as="span" weight="semibold">不占贵司服务器、不占运维时间</Text>
                ，由我们专业团队 7×24 维护——
                贵司 IT 团队精力留给核心业务系统。
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>5. 数据可一键导出</CardHeader>
            <CardBody>
              <Text size="small">
                合同明确
                <Text as="span" weight="semibold">
                  {" "}
                  数据所有权属于贵司 + 标准格式导出
                </Text>
                ——任何时候想自建、想换供应商，
                都不会被锁定。
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>6. 未来可平滑升级私有化</CardHeader>
            <CardBody>
              <Text size="small">
                如未来贵司需要数据 100% 内网部署，
                <Text as="span" weight="semibold">
                  {" "}
                  已付订阅可 100% 抵扣
                </Text>
                ，提供 8 折升级私有化部署——
                现在选 SaaS 不是死胡同。
              </Text>
            </CardBody>
          </Card>
        </Grid>
      </Stack>

      <Stack gap={14}>
        <H2>三、医疗数据上云 · 4 道安全防线</H2>
        <Text tone="secondary">
          这是医疗器械客户最关心的问题，我们的回答是
          <Text as="span" weight="semibold">
            {" "}
            ：合规水平不亚于您内网，并把保障写进合同
          </Text>
          。
        </Text>
        <Grid columns={2} gap={16}>
          <Card>
            <CardHeader>L1 · 基础设施</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small" weight="semibold">阿里云金融云服务（FinCloud）</Text>
                <Text size="small" tone="secondary">
                  · 通过国家等保三级备案
                </Text>
                <Text size="small" tone="secondary">
                  · 数据加密传输（HTTPS）+ 加密存储（AES-256）
                </Text>
                <Text size="small" tone="secondary">
                  · 同区域三副本 + 异地灾备
                </Text>
                <Text size="small" tone="secondary">
                  · 物理机房通过 ISO27001 / SOC2 认证
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>L2 · 数据租户隔离</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small" weight="semibold">
                  贵司数据独立 namespace + 独立加密 key
                </Text>
                <Text size="small" tone="secondary">
                  · 与其他客户数据物理隔离
                </Text>
                <Text size="small" tone="secondary">
                  · 模型调用时只读取贵司 namespace
                </Text>
                <Text size="small" tone="secondary">
                  · 客户 / 患者信息脱敏存储
                </Text>
                <Text size="small" tone="secondary">
                  · 不与他人共享、不用于模型训练
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>L3 · 内容合规</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small" weight="semibold">
                  回答必带引用源 · 绝不"创作"
                </Text>
                <Text size="small" tone="secondary">
                  · AI 不自由生成医疗信息
                </Text>
                <Text size="small" tone="secondary">
                  · 所有回答可追溯到贵司原始资料
                </Text>
                <Text size="small" tone="secondary">
                  · 内容上架 AI 双审 + 人工 SOP
                </Text>
                <Text size="small" tone="secondary">
                  · 符合医疗广告法 + 器械经营规范
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>L4 · 审计与监管</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small" weight="semibold">
                  全量操作日志 · 监管检查可追溯
                </Text>
                <Text size="small" tone="secondary">
                  · 每条问答留存日志 6 年
                </Text>
                <Text size="small" tone="secondary">
                  · 可追溯到具体销售 / 时间 / 内容
                </Text>
                <Text size="small" tone="secondary">
                  · 监管检查时可一键导出审计报告
                </Text>
                <Text size="small" tone="secondary">
                  · 5 年内容合规法律责任由我方承担
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Grid>
      </Stack>

      <Stack gap={14}>
        <H2>四、方案 A · SaaS 报价（透明）</H2>
        <Grid columns={2} gap={16}>
          <Card>
            <CardHeader>标准报价</CardHeader>
            <CardBody>
              <Stack gap={10}>
                <Pill tone="info" size="sm">
                  公开价格
                </Pill>
                <Row justify="space-between">
                  <Text size="small">实施费（一次性）</Text>
                  <Text weight="semibold">¥ 8 万</Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">订阅价</Text>
                  <Text weight="semibold">¥ 150 / 人 / 月</Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">年订阅（200 人）</Text>
                  <Text weight="semibold">¥ 36 万 / 年</Text>
                </Row>
                <Divider />
                <Row justify="space-between">
                  <Text size="small" weight="semibold">首年合计</Text>
                  <Text weight="bold" style={{ fontSize: 18 }}>¥ 44 万</Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">次年起</Text>
                  <Text weight="semibold">¥ 36 万 / 年</Text>
                </Row>
                <Divider />
                <Text size="small" tone="secondary">
                  3 年总投入 ¥ 116 万 · 含所有维护和升级
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>"首发案例客户"特别条件</CardHeader>
            <CardBody>
              <Stack gap={10}>
                <Pill tone="success" size="sm" active>
                  独享 · 20% 折扣 + 终身权益
                </Pill>
                <Row justify="space-between">
                  <Text size="small">实施费（一次性）</Text>
                  <Text weight="semibold">¥ 8 万</Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">订阅价（8 折）</Text>
                  <Text weight="semibold" style={{ color: theme.accent.primary }}>
                    ¥ 120 / 人 / 月
                  </Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">年订阅（200 人）</Text>
                  <Text weight="semibold">¥ 28.8 万 / 年</Text>
                </Row>
                <Divider />
                <Row justify="space-between">
                  <Text size="small" weight="semibold">首年合计</Text>
                  <Text
                    weight="bold"
                    style={{ color: theme.accent.primary, fontSize: 18 }}
                  >
                    ¥ 36.8 万
                  </Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">次年起（终身锁定）</Text>
                  <Text weight="semibold">¥ 28.8 万 / 年</Text>
                </Row>
                <Divider />
                <Text size="small" tone="secondary">
                  <Text as="span" weight="semibold">3 年节省 ¥ 21.6 万</Text>
                  ，且未来 5 年内所有新功能免费升级。
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Grid>
        <Callout tone="info" title="首发案例客户的交换条件">
          <Stack gap={4}>
            <Text size="small">
              · 允许我方将贵司作为
              <Text as="span" weight="semibold"> 行业首发案例</Text>
              （脱敏后）对外公开宣传
            </Text>
            <Text size="small">
              · 接受 6 个月深度共建期，
              <Text as="span" weight="semibold"> 优先开发贵司需要的定制功能</Text>
            </Text>
            <Text size="small">
              · 每季度提供 1 次产品反馈会议（远程，1 小时）
            </Text>
            <Text size="small">
              · 我方派 1 名工程师在贵司初期上线 2 周，
              <Text as="span" weight="semibold"> 现场支持销售</Text>
            </Text>
          </Stack>
        </Callout>
      </Stack>

      <Stack gap={14}>
        <H2>五、零风险保障 · POC 安全网</H2>
        <Text tone="secondary">
          您不会"花大钱看到没效果"——我们把所有风险前置到 POC 阶段，
          <Text as="span" weight="semibold">不达标 100% 退款</Text>。
        </Text>
        <Table
          headers={["步骤", "时间", "动作", "付款", "退出机制"]}
          columnAlign={["left", "left", "left", "left", "left"]}
          rowTone={[undefined, "info", undefined, "success"]}
          rows={[
            [
              <Text weight="semibold">1. 内容审计</Text>,
              "本周",
              "我方上门评估 50 份课件 + 5 段视频抽样",
              <Text weight="semibold" tone="secondary">免费</Text>,
              "评估后您可终止，无任何费用",
            ],
            [
              <Text weight="semibold">2. POC 试点</Text>,
              "第 2 – 4 周",
              "1 条产品线 · 5 名销售真实使用 2 周",
              <Text weight="semibold">¥ 3 万</Text>,
              <Text weight="semibold" style={{ color: theme.accent.primary }}>
                命中率 ≥ 85% 不达标 100% 退款
              </Text>,
            ],
            [
              <Text weight="semibold">3. 签约</Text>,
              "第 5 周",
              "POC 通过后签订正式合同",
              <Text weight="semibold">实施费 ¥ 8 万</Text>,
              "POC 费 ¥ 3 万可 100% 抵扣",
            ],
            [
              <Text weight="semibold">4. 全员上线</Text>,
              "第 6 – 8 周",
              "200+ 销售全员开放使用",
              <Text weight="semibold">订阅按月付</Text>,
              "3 个月不续费即终止，数据可导出",
            ],
          ]}
        />
        <Callout tone="success" title="3 重保险">
          <Stack gap={4}>
            <Text size="small">
              <Text as="span" weight="semibold">保险 1：</Text>
              内容审计阶段免费，没把握的话当前止步零成本
            </Text>
            <Text size="small">
              <Text as="span" weight="semibold">保险 2：</Text>
              POC 命中率 85% 不达标
              <Text as="span" weight="semibold"> 100% 退款</Text>
              ，不签主合同
            </Text>
            <Text size="small">
              <Text as="span" weight="semibold">保险 3：</Text>
              主合同期内 3 个月不续费即终止，
              <Text as="span" weight="semibold"> 数据 24 小时内导出</Text>
            </Text>
          </Stack>
        </Callout>
      </Stack>

      <Stack gap={14}>
        <H2>六、3 年投资回报模型</H2>
        <Card>
          <CardHeader>累计投入 vs 累计收益（按首发案例客户价）</CardHeader>
          <CardBody>
            <BarChart
              height={260}
              categories={["第 1 年", "第 2 年", "第 3 年"]}
              series={[
                {
                  name: "累计投入（万元）",
                  data: [36.8, 65.6, 94.4],
                  tone: "warning",
                },
                {
                  name: "累计收益（万元）",
                  data: [2680, 5630, 8880],
                  tone: "success",
                },
              ]}
              valueSuffix=" 万"
            />
            <Text tone="tertiary" size="small">
              假设：成单率 +3%（保守）、新人提速 2 个月、销冠时间释放、销售稳定 150 人。
              第 2 年起收益增长来自数据飞轮（销冠经验沉淀 + 知识库覆盖更全）。
              <Text as="span" weight="semibold">
                {" "}
                3 年累计净收益 ≈ ¥ 8,786 万，ROI ~ 94×
              </Text>
              。
            </Text>
          </CardBody>
        </Card>
      </Stack>

      <Stack gap={14}>
        <H2>七、为什么选择我们</H2>
        <Grid columns={3} gap={12}>
          <Card>
            <CardHeader>医疗器械专精</CardHeader>
            <CardBody>
              <Text size="small">
                团队具备医疗 RAG 落地经验，
                内置医学术语词典 / 临床证据等级 / 适应症结构化——
                通用知识库工具难以提供这种行业深度。
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>钉钉深度原生</CardHeader>
            <CardBody>
              <Text size="small">
                不是另做一个 App，
                直接挂在贵司销售已用的钉钉 AI 助理 + 工作台 + 群机器人——
                <Text as="span" weight="semibold">销售接受度比独立 App 高 3 倍</Text>。
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>小团队 · 直接对接</CardHeader>
            <CardBody>
              <Text size="small">
                我方核心团队
                <Text as="span" weight="semibold"> 直接对接贵司业务负责人</Text>
                ——
                不会被中间商 / 销售层级隔开，
                需求响应 24 小时内反馈。
              </Text>
            </CardBody>
          </Card>
        </Grid>
      </Stack>

      <Callout tone="info" title="一句话决策摘要">
        <Stack gap={8}>
          <Text>
            首年投入
            <Text as="span" weight="semibold"> ¥ 36.8 万</Text>
            （首发案例客户价），撬动
            <Text as="span" weight="semibold"> ¥ 2,680 万 / 年</Text>
            业绩增量与培训成本下降，
            <Text as="span" weight="semibold"> 6 天回本</Text>。
            POC 命中率 85% 不达标
            <Text as="span" weight="semibold"> 100% 退款</Text>
            ——
            您只需要承担"试一下"的时间成本，没有金钱风险。
          </Text>
          <Divider />
          <Text size="small" tone="secondary">
            决策动作：本周拍板启动免费内容审计，2 周内开始 POC，6 周内全员上线。
          </Text>
        </Stack>
      </Callout>

      <Stack gap={10}>
        <Divider />
        <Row justify="space-between" align="center">
          <Stack gap={2}>
            <Text size="small" weight="semibold">建议下一步</Text>
            <Text size="small" tone="secondary">
              本周内联系我方启动免费内容审计 · 无任何费用承诺
            </Text>
          </Stack>
          <Row gap={12}>
            <Pill tone="info" size="sm">方案有效期 30 天</Pill>
            <Pill tone="success" size="sm">首发案例客户名额 · 限 3 家</Pill>
            <Pill tone="neutral" size="sm">2026 年 5 月</Pill>
          </Row>
        </Row>
      </Stack>
    </Stack>
  );
}
