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

export default function MedicalDeviceKBExecutiveBrief() {
  const theme = useHostTheme();

  return (
    <Stack gap={36} style={{ padding: 32, maxWidth: 1100 }}>
      <Stack gap={12}>
        <Row gap={8} align="center">
          <Pill tone="info" size="sm" active>
            Executive Brief
          </Pill>
          <Pill tone="neutral" size="sm">
            医疗器械 · 销售赋能
          </Pill>
        </Row>
        <H1>用 110 万撬动 2000 万业绩</H1>
        <Text size="body" tone="secondary">
          一份专为医疗器械销售设计的 AI 知识库——把贵司沉睡的培训资料，
          变成 200+ 销售口袋里的合规专家。
          <Text as="span" weight="semibold"> 3 周上线、3 个月见效、20 倍 ROI。</Text>
        </Text>
      </Stack>

      <Grid columns={4} gap={16}>
        <Stat value="¥ 110 万" label="首年总投入" />
        <Stat value="~ 20×" label="预期首年 ROI" tone="success" />
        <Stat value="3 周" label="MVP 上线" tone="info" />
        <Stat value="100 %" label="数据私有 · 等保三级" tone="success" />
      </Grid>

      <Stack gap={14}>
        <H2>一、决策摘要</H2>
        <Grid columns={2} gap={16}>
          <Card>
            <CardHeader>当前隐性成本（每年）</CardHeader>
            <CardBody>
              <Stack gap={10}>
                <Row justify="space-between">
                  <Text size="small">新人 3 月才独立见客户</Text>
                  <Text weight="semibold" style={{ color: theme.text.primary }}>
                    ¥ 200 万+
                  </Text>
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
                  <Text size="small" weight="semibold">合计（保守）</Text>
                  <Text
                    weight="bold"
                    style={{ color: theme.text.primary, fontSize: 18 }}
                  >
                    ¥ 950 万 / 年
                  </Text>
                </Row>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>本方案带来的增量（每年）</CardHeader>
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
        <Callout tone="success" title="净收益">
          <Text>
            年化净收益 ≈
            <Text as="span" weight="semibold"> ¥ 2,570 万 </Text>
            (¥ 2,680 万 - ¥ 110 万 首年投入)，
            <Text as="span" weight="semibold">投资回收周期约 15 天</Text>。
            即便所有假设打 5 折，仍是 10 倍量级 ROI。
          </Text>
        </Callout>
      </Stack>

      <Stack gap={14}>
        <H2>二、为什么是现在做</H2>
        <Grid columns={3} gap={12}>
          <Card>
            <CardHeader>技术成熟拐点</CardHeader>
            <CardBody>
              <Text size="small">
                2025 年起国产大模型成本已降至 GPT-4 的 1/10，
                医疗 RAG 命中率达 90%+，
                <Text as="span" weight="semibold">
                  {" "}
                  企业级落地的最佳窗口期。
                </Text>
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>竞品已经在行动</CardHeader>
            <CardBody>
              <Text size="small">
                头部医疗器械集团（迈瑞、联影、东软等）
                2025 年起陆续上线销售 AI 助手，
                <Text as="span" weight="semibold">
                  {" "}
                  落后 6 个月 = 落后一个销售周期。
                </Text>
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>合规窗口期</CardHeader>
            <CardBody>
              <Text size="small">
                国家药监局 2026 年起对医疗信息 AI 监管趋严，
                <Text as="span" weight="semibold">
                  {" "}
                  自建合规知识库
                </Text>
                比依赖通用 AI 更安全。
              </Text>
            </CardBody>
          </Card>
        </Grid>
      </Stack>

      <Stack gap={14}>
        <H2>三、投资方案 · 三档对比</H2>
        <Table
          headers={[
            "维度",
            "方案 A · SaaS",
            "方案 B · 私有化（推荐）",
            "方案 C · 旗舰定制",
          ]}
          columnAlign={["left", "center", "center", "center"]}
          rowTone={[
            undefined,
            undefined,
            "success",
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
          ]}
          rows={[
            [
              <Text weight="semibold">首年总投入</Text>,
              <Text weight="semibold">¥ 44 万</Text>,
              <Text weight="semibold" style={{ color: theme.accent.primary }}>
                ¥ 110 万
              </Text>,
              <Text weight="semibold">¥ 175 万</Text>,
            ],
            [
              "3 年总拥有成本",
              "¥ 116 万",
              <Text style={{ color: theme.accent.primary }}>¥ 153 万</Text>,
              "¥ 240 万",
            ],
            [
              "数据所有权",
              <Pill tone="warning" size="sm">云端托管</Pill>,
              <Pill tone="success" size="sm" active>100% 私有</Pill>,
              <Pill tone="success" size="sm" active>100% 私有</Pill>,
            ],
            [
              "合规等级",
              "二级",
              <Text weight="semibold">等保三级</Text>,
              <Text weight="semibold">等保三级 + 行业资质</Text>,
            ],
            [
              "上线周期",
              "3 周",
              "6 – 8 周",
              "10 – 12 周",
            ],
            [
              "退出 / 切换成本",
              "低（停订阅即可）",
              "中（数据导出）",
              "中（数据导出）",
            ],
            [
              "适合场景",
              "先验证、内部试点",
              <Text weight="semibold">长期使用 + 合规优先</Text>,
              "战略级 · 多产品线 · 多区域",
            ],
            [
              "推荐度",
              <Pill tone="neutral" size="sm">可考虑</Pill>,
              <Pill tone="success" size="sm" active>推荐</Pill>,
              <Pill tone="info" size="sm">高阶选项</Pill>,
            ],
          ]}
        />
        <Callout tone="info" title="为什么推荐方案 B（私有化部署）">
          <Stack gap={4}>
            <Text size="small">
              1.
              <Text as="span" weight="semibold"> 数据 100% 留在贵司机房</Text>
              ——医疗器械行业合规底线，监管检查时可直接说明。
            </Text>
            <Text size="small">
              2. <Text as="span" weight="semibold">3 年 TCO 比 SaaS 仅多 ¥ 37 万</Text>
              ，却换来数据自主权 + 等保三级 + 无限扩展。
            </Text>
            <Text size="small">
              3.
              <Text as="span" weight="semibold"> 形成数据飞轮</Text>
              ——销售在群里 @ 机器人产生的问答全部沉淀回贵司知识库，越用越值钱。
            </Text>
          </Stack>
        </Callout>
      </Stack>

      <Stack gap={14}>
        <H2>四、合规与风险管控（决策层关注重点）</H2>
        <Grid columns={2} gap={16}>
          <Card>
            <CardHeader>四道合规防线</CardHeader>
            <CardBody>
              <Stack gap={8}>
                <Row gap={8} align="start">
                  <Pill tone="success" size="sm" active>L1</Pill>
                  <Stack gap={2}>
                    <Text size="small" weight="semibold">回答必带引用源</Text>
                    <Text size="small" tone="secondary">
                      AI 不"自由创作"医疗信息，所有回答可追溯到贵司原始资料。
                    </Text>
                  </Stack>
                </Row>
                <Divider />
                <Row gap={8} align="start">
                  <Pill tone="success" size="sm" active>L2</Pill>
                  <Stack gap={2}>
                    <Text size="small" weight="semibold">内容上架双审</Text>
                    <Text size="small" tone="secondary">
                      AI 初筛 + 人工 SOP 复审，符合医疗广告法和器械经营规范。
                    </Text>
                  </Stack>
                </Row>
                <Divider />
                <Row gap={8} align="start">
                  <Pill tone="success" size="sm" active>L3</Pill>
                  <Stack gap={2}>
                    <Text size="small" weight="semibold">数据物理隔离</Text>
                    <Text size="small" tone="secondary">
                      私有化部署，数据 / 模型 / 推理 全部在贵司机房，不出内网。
                    </Text>
                  </Stack>
                </Row>
                <Divider />
                <Row gap={8} align="start">
                  <Pill tone="success" size="sm" active>L4</Pill>
                  <Stack gap={2}>
                    <Text size="small" weight="semibold">全量审计 + 等保三级</Text>
                    <Text size="small" tone="secondary">
                      每条问答留存日志，监管检查 / 内部审计可追溯到具体销售。
                    </Text>
                  </Stack>
                </Row>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>主要风险 + 应对</CardHeader>
            <CardBody>
              <Stack gap={10}>
                <Stack gap={4}>
                  <Row gap={6} align="center">
                    <Pill tone="warning" size="sm">风险 1</Pill>
                    <Text size="small" weight="semibold">销售不用</Text>
                  </Row>
                  <Text size="small" tone="secondary">
                    应对：钉钉原生接入，
                    <Text as="span" weight="semibold">不增加任何新工具</Text>；
                    每月使用数据透明，未达标可退款。
                  </Text>
                </Stack>
                <Divider />
                <Stack gap={4}>
                  <Row gap={6} align="center">
                    <Pill tone="warning" size="sm">风险 2</Pill>
                    <Text size="small" weight="semibold">回答不准</Text>
                  </Row>
                  <Text size="small" tone="secondary">
                    应对：POC 阶段先验证命中率（目标 85%+），
                    <Text as="span" weight="semibold">不达标不签约</Text>。
                  </Text>
                </Stack>
                <Divider />
                <Stack gap={4}>
                  <Row gap={6} align="center">
                    <Pill tone="warning" size="sm">风险 3</Pill>
                    <Text size="small" weight="semibold">监管变化</Text>
                  </Row>
                  <Text size="small" tone="secondary">
                    应对：合规模块持续更新，纳入维护合同；
                    <Text as="span" weight="semibold">5 年法律责任兜底</Text>。
                  </Text>
                </Stack>
                <Divider />
                <Stack gap={4}>
                  <Row gap={6} align="center">
                    <Pill tone="warning" size="sm">风险 4</Pill>
                    <Text size="small" weight="semibold">供应商绑死</Text>
                  </Row>
                  <Text size="small" tone="secondary">
                    应对：知识库数据格式开放，
                    <Text as="span" weight="semibold">合同允许随时导出</Text>，无锁定。
                  </Text>
                </Stack>
              </Stack>
            </CardBody>
          </Card>
        </Grid>
      </Stack>

      <Stack gap={14}>
        <H2>五、3 年财务模型（方案 B · 私有化）</H2>
        <Card>
          <CardHeader>累计投入 vs 累计收益</CardHeader>
          <CardBody>
            <BarChart
              height={260}
              categories={["第 1 年", "第 2 年", "第 3 年"]}
              series={[
                {
                  name: "累计投入（万元）",
                  data: [110, 130, 153],
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
              假设：成单率 +3%（保守）、新人提速 2 个月、销冠时间释放、销售人数稳定 150 人。
              第 2 年起收益增长来自数据飞轮（销冠经验沉淀 + 知识库覆盖更全）。
            </Text>
          </CardBody>
        </Card>
      </Stack>

      <Stack gap={14}>
        <H2>六、4 步决策路径（建议时间表）</H2>
        <Table
          headers={["步骤", "时间", "动作", "决策点", "投入"]}
          columnAlign={["left", "left", "left", "left", "left"]}
          rowTone={[undefined, undefined, undefined, "success"]}
          rows={[
            [
              <Text weight="semibold">1. 内容审计</Text>,
              "本周",
              "我方上门评估 50 份课件 + 50 段视频可用性",
              "确认知识库可行性",
              <Text weight="semibold" tone="secondary">免费</Text>,
            ],
            [
              <Text weight="semibold">2. POC 试点</Text>,
              "第 2 – 4 周",
              "1 条产品线、5 名销售、真实使用 2 周",
              "命中率 ≥ 85% 才签约",
              <Text weight="semibold">¥ 3 万（抵扣）</Text>,
            ],
            [
              <Text weight="semibold">3. 合同签订</Text>,
              "第 5 周",
              "选定方案 A / B / C，签订正式合同",
              "立项 · 预算到位",
              <Text weight="semibold">付款 30%</Text>,
            ],
            [
              <Text weight="semibold">4. 全员上线</Text>,
              "第 6 – 12 周",
              "MVP → 视频 → 销售场景 → 智能化",
              "数据飞轮启动",
              <Text weight="semibold">分阶段付款</Text>,
            ],
          ]}
        />
      </Stack>

      <Stack gap={14}>
        <H2>七、决策一句话</H2>
        <Callout tone="info">
          <Stack gap={8}>
            <Text>
              这是一个 <Text as="span" weight="semibold">最低 20 倍 ROI、最快 15 天回本</Text>
              的项目；
              <Text as="span" weight="semibold">最大风险是 3 周内不做决定</Text>
              ——
              因为同行已经在做，落后 6 个月 = 一个销售周期。
            </Text>
            <Divider />
            <Text size="small" tone="secondary">
              我们承担前期内容审计的成本，并以 POC 命中率 85% 为签约前提——
              如果不达标，您不付一分钱主合同款。
            </Text>
          </Stack>
        </Callout>
      </Stack>

      <Stack gap={10}>
        <Divider />
        <Row justify="space-between" align="center">
          <Stack gap={2}>
            <Text size="small" weight="semibold">建议下一步</Text>
            <Text size="small" tone="secondary">
              本周内启动免费内容审计 · 联系销售 / 项目负责人
            </Text>
          </Stack>
          <Row gap={12}>
            <Pill tone="info" size="sm">方案有效期 30 天</Pill>
            <Pill tone="neutral" size="sm">2026 年 5 月</Pill>
          </Row>
        </Row>
      </Stack>
    </Stack>
  );
}
