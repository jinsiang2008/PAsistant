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

export default function MedicalDeviceKBClientPitch() {
  const theme = useHostTheme();

  return (
    <Stack gap={32} style={{ padding: 28 }}>
      <Stack gap={10}>
        <Row gap={8} align="center">
          <Pill tone="info" size="sm" active>
            医疗器械行业 · 销售赋能
          </Pill>
          <Pill tone="neutral" size="sm">
            钉钉原生 AI 助理
          </Pill>
          <Pill tone="success" size="sm">
            3 周上线
          </Pill>
        </Row>
        <H1>把贵司的培训知识，装进每个销售的钉钉</H1>
        <Text tone="secondary" size="body">
          让 200+ 销售在客户现场、在路上、在群聊里，
          一句话就能调出产品参数、临床证据、竞品对比和成熟话术——
          AI 助理 7×24 在线，回答必带引用源，绝不"创作"医疗信息。
        </Text>
      </Stack>

      <Grid columns={4} gap={12}>
        <Stat value="3 周" label="MVP 上线" tone="success" />
        <Stat value="< 2 秒" label="平均回答时延" tone="info" />
        <Stat value="200+" label="覆盖销售 + CS 用户" />
        <Stat value="100%" label="回答可追溯到原文" tone="success" />
      </Grid>

      <Callout tone="info" title="为什么是钉钉 + AI 助理这个组合">
        <Text size="small">
          贵司销售已经在用钉钉协同，
          <Text as="span" weight="semibold">
            {" "}
            不需要装新 App、不需要培训销售用工具
          </Text>
          ——
          AI 助理可以挂在工作台、可以在销售群里 @ 召唤、可以在钉钉斜杠里直接问。
          配合贵司已有的 50 份课件 + 50 小时讲师视频，
          构成一个真正"住在销售工作流里"的专家系统。
        </Text>
      </Callout>

      <Stack gap={14}>
        <H2>一、销售团队的 4 个真实痛点</H2>
        <Grid columns={2} gap={12}>
          <Card>
            <CardHeader>痛点 1 · 新人 3 个月才独立</CardHeader>
            <CardBody>
              <Text>
                医疗器械跨设备、跨科室、跨适应症，单产品手册几百页。
                新人入职后 3 个月很难独立见客户，
                <Text as="span" weight="semibold">
                  {" "}
                  老带新成本高、销冠精力被拖住。
                </Text>
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>痛点 2 · 培训视频看完就忘</CardHeader>
            <CardBody>
              <Text>
                讲师视频 1 小时，关键 30 秒销售记不住；
                两周遗忘率 70%。
                <Text as="span" weight="semibold">
                  {" "}
                  讲师辛苦讲、销售反复学，效率低、成本高。
                </Text>
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>痛点 3 · 客户现场答不上</CardHeader>
            <CardBody>
              <Text>
                医生抛出参数 / 临床证据 / 竞品对比，销售只能说"回去查"，
                <Text as="span" weight="semibold">
                  {" "}
                  错过下单窗口、影响专业形象。
                </Text>
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>痛点 4 · 销冠经验沉不下来</CardHeader>
            <CardBody>
              <Text>
                销冠的话术、应对、客户洞察都在他脑子里和聊天记录里，
                <Text as="span" weight="semibold">
                  {" "}
                  人一走经验就带走，团队战斗力很难复制。
                </Text>
              </Text>
            </CardBody>
          </Card>
        </Grid>
      </Stack>

      <Stack gap={14}>
        <H2>二、销售的一天 · 使用场景示意</H2>
        <Text tone="secondary">
          知识库不是一个独立 App——而是融进销售的钉钉日常里。
        </Text>
        <Table
          headers={["时段", "场景", "用法", "解决的痛点"]}
          columnAlign={["left", "left", "left", "left"]}
          rows={[
            [
              <Text weight="semibold">8:30 早会</Text>,
              "钉钉工作台推送",
              "今日学习卡片：1 段 3 分钟微视频 + 3 道小测",
              "持续学习、防遗忘",
            ],
            [
              <Text weight="semibold">10:00 拜访路上</Text>,
              "钉钉斜杠提问",
              "/ XX 设备对老年患者的禁忌症？",
              "现场临阵磨枪",
            ],
            [
              <Text weight="semibold">11:00 客户现场</Text>,
              "医生提问",
              "AI 给出答案 + 引用源 + 视频跳转到讲师那一句",
              "现场专业应答",
            ],
            [
              <Text weight="semibold">14:00 销售群</Text>,
              "群里 @ 机器人",
              "@小医 这台仪器和 XX 竞品对比？团队全员可见答案",
              "群里答案沉淀、团队共学",
            ],
            [
              <Text weight="semibold">16:00 复盘</Text>,
              "工作台微应用",
              "保存今天的问答到个人笔记 / 分享给同事",
              "经验沉淀、可复用",
            ],
            [
              <Text weight="semibold">月底</Text>,
              "管理者看板",
              "高频问题热度图 + 知识盲区报告 + 学习进度",
              "管理者发现真实问题",
            ],
          ]}
        />
      </Stack>

      <Stack gap={14}>
        <H2>三、6 大核心能力</H2>
        <Grid columns={3} gap={12}>
          <Card>
            <CardHeader>智能问答（带引用）</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small">
                  自然语言提问，回答必带"
                  <Text as="span" weight="semibold">原文出处 + 跳转链接</Text>"。
                </Text>
                <Text tone="secondary" size="small">
                  · 多轮对话，记得上下文
                </Text>
                <Text tone="secondary" size="small">
                  · 命中不到时主动说"未收录"
                </Text>
                <Text tone="secondary" size="small">
                  · 绝不"创作"医疗信息
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>视频精准定位</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small">
                  问 "术中操作要点"，直接跳到讲师视频
                  <Text as="span" weight="semibold"> 12:34 </Text>
                  开始播放。
                </Text>
                <Text tone="secondary" size="small">
                  · 50 小时视频全部可搜
                </Text>
                <Text tone="secondary" size="small">
                  · 字幕 / 倍速 / 笔记
                </Text>
                <Text tone="secondary" size="small">
                  · 学习进度自动同步
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>销售场景模板</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small">
                  预置 7 类医疗器械销售常见场景。
                </Text>
                <Text tone="secondary" size="small">
                  · 客户常见 Q&A 库
                </Text>
                <Text tone="secondary" size="small">
                  · 竞品对比表（参数 / 临床 / 价格）
                </Text>
                <Text tone="secondary" size="small">
                  · 话术模板 / 异议处理
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>新人学习路径</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small">
                  新人入职第 1 天就有 90 天上手地图。
                </Text>
                <Text tone="secondary" size="small">
                  · 按角色 / 产品线推荐
                </Text>
                <Text tone="secondary" size="small">
                  · 每日 5 分钟微测验
                </Text>
                <Text tone="secondary" size="small">
                  · AI 扮演医生陪练
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>群机器人 + 经验沉淀</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small">
                  销售群里 @ 机器人，所有人都能看答案，
                  优质问答自动入库。
                </Text>
                <Text tone="secondary" size="small">
                  · 销冠经验自动沉淀
                </Text>
                <Text tone="secondary" size="small">
                  · 一人提问、全员受益
                </Text>
                <Text tone="secondary" size="small">
                  · 边用边丰富知识库
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>管理者数据看板</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small">
                  让业务负责人第一次看见"销售真正在问什么"。
                </Text>
                <Text tone="secondary" size="small">
                  · 高频问题热度图 = 客户真实关切
                </Text>
                <Text tone="secondary" size="small">
                  · 知识盲区报告 = 培训改进方向
                </Text>
                <Text tone="secondary" size="small">
                  · 销售活跃度 / 学习进度
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Grid>
      </Stack>

      <Stack gap={14}>
        <H2>四、我们和市面"通用知识库"不一样的 5 个点</H2>
        <Grid columns={2} gap={12}>
          <Card>
            <CardHeader>1. 医疗器械专精</CardHeader>
            <CardBody>
              <Text size="small">
                内置医学术语词典（NMPA / FDA 双语映射）、
                临床证据等级标注（Ⅰ / Ⅱ / Ⅲ 级）、
                适应症 / 禁忌症结构化。
              </Text>
              <Divider />
              <Text size="small" tone="secondary">
                通用 ChatGPT 会"自由创作"医疗信息——
                <Text as="span" weight="semibold">这是医疗销售的红线</Text>。
                我们的回答必须落到贵司自己的资料上。
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>2. 钉钉深度原生</CardHeader>
            <CardBody>
              <Text size="small">
                不是另做一个 App，而是钉钉 AI 助理 + 工作台 + 群机器人
                三个入口同时上线，销售不需要切换任何工具。
              </Text>
              <Divider />
              <Text size="small" tone="secondary">
                <Text as="span" weight="semibold">销售用户接受度</Text>
                ——比独立 App 高 3 倍。
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>3. 视频精准定位</CardHeader>
            <CardBody>
              <Text size="small">
                贵司讲师视频 50 小时全部可搜，
                问完直接跳到那一句话的时间戳。
              </Text>
              <Divider />
              <Text size="small" tone="secondary">
                市面通用知识库多停留在文档检索，
                <Text as="span" weight="semibold">视频内容能精准搜的极少</Text>。
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>4. 数据 100% 私有</CardHeader>
            <CardBody>
              <Text size="small">
                方案 B 私有化部署，模型和数据全部部署到贵司机房，
                客户 / 患者信息脱敏存储。
              </Text>
              <Divider />
              <Text size="small" tone="secondary">
                符合《数据安全法》《医疗器械经营质量管理规范》，
                <Text as="span" weight="semibold">通过等保备案</Text>。
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>5. 边用边沉淀（数据飞轮）</CardHeader>
            <CardBody>
              <Text size="small">
                销售在群里 @ 机器人产生的优质问答、
                销冠的话术、客户应对——全部沉淀回知识库。
              </Text>
              <Divider />
              <Text size="small" tone="secondary">
                <Text as="span" weight="semibold">用得越多，越聪明</Text>——
                这是私有化部署带来的独特优势。
              </Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>6. 微信小程序可选加装</CardHeader>
            <CardBody>
              <Text size="small">
                V1 钉钉版稳定后，可选加装微信小程序，
                覆盖"销售把资料发给医生 / 客户"的对外场景。
              </Text>
              <Divider />
              <Text size="small" tone="secondary">
                复用 V1 后端，仅需 ¥15 – 20 万追加，
                <Text as="span" weight="semibold">弹性扩展</Text>。
              </Text>
            </CardBody>
          </Card>
        </Grid>
      </Stack>

      <Stack gap={14}>
        <H2>五、合规与安全保证</H2>
        <Grid columns={3} gap={12}>
          <Card>
            <CardHeader>合规</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small">· 回答必带引用源，不创作</Text>
                <Text size="small">· 内容上架 SOP + AI 双审</Text>
                <Text size="small">· 符合医疗广告法</Text>
                <Text size="small">· 客户 / 患者数据脱敏</Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>安全</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small">· HTTPS + 钉钉企业级链路</Text>
                <Text size="small">· 权限按部门 / 职级分级</Text>
                <Text size="small">· 全量操作审计日志</Text>
                <Text size="small">· 私有化版数据不出内网</Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>资质</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small">· 等保三级备案（方案 B）</Text>
                <Text size="small">· 钉钉应用安全审核</Text>
                <Text size="small">· 模型可选国产合规版</Text>
                <Text size="small">· 软件著作权登记</Text>
              </Stack>
            </CardBody>
          </Card>
        </Grid>
      </Stack>

      <Stack gap={14}>
        <H2>六、价格方案（200+ 用户）</H2>
        <Grid columns={3} gap={12}>
          <Card>
            <CardHeader>方案 A · SaaS 标准版</CardHeader>
            <CardBody>
              <Stack gap={10}>
                <Pill tone="info" size="sm">
                  最快上线 · 低门槛
                </Pill>
                <Stat value="¥ 44 万" label="首年合计" tone="info" />
                <Divider />
                <Row justify="space-between">
                  <Text size="small">实施费（一次性）</Text>
                  <Text weight="semibold">¥ 8 万</Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">订阅（200 人）</Text>
                  <Text weight="semibold">¥ 36 万 / 年</Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">次年起</Text>
                  <Text weight="semibold">¥ 36 万 / 年</Text>
                </Row>
                <Divider />
                <Text size="small" tone="secondary">
                  · 数据托管在云端
                </Text>
                <Text size="small" tone="secondary">
                  · 共享底座 · 3 周上线
                </Text>
                <Text size="small" tone="secondary">
                  · 适合：先验证、快速试错
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>方案 B · 私有化部署（推荐）</CardHeader>
            <CardBody>
              <Stack gap={10}>
                <Pill tone="success" size="sm" active>
                  推荐 · 数据自主 · 合规优先
                </Pill>
                <Stat value="¥ 90 万" label="软件买断" tone="success" />
                <Divider />
                <Row justify="space-between">
                  <Text size="small">买断（200+ 授权）</Text>
                  <Text weight="semibold">¥ 75 – 105 万</Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">年维护</Text>
                  <Text weight="semibold">¥ 18 – 24 万</Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">3 年 TCO</Text>
                  <Text weight="semibold">¥ 153 万</Text>
                </Row>
                <Divider />
                <Text size="small" tone="secondary">
                  · 部署在贵司机房
                </Text>
                <Text size="small" tone="secondary">
                  · 模型 + 数据 100% 私有
                </Text>
                <Text size="small" tone="secondary">
                  · 适合：长期使用、合规要求高
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>方案 C · 定制旗舰版</CardHeader>
            <CardBody>
              <Stack gap={10}>
                <Pill tone="warning" size="sm">
                  深度定制 · 独占功能
                </Pill>
                <Stat value="¥ 150 万" label="一次性定制" />
                <Divider />
                <Row justify="space-between">
                  <Text size="small">定制开发</Text>
                  <Text weight="semibold">¥ 130 – 180 万</Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">年服务</Text>
                  <Text weight="semibold">¥ 25 – 30 万</Text>
                </Row>
                <Divider />
                <Text size="small" tone="secondary">
                  在方案 B 基础上叠加：
                </Text>
                <Text size="small" tone="secondary">
                  · CRM 全打通（销售易 / 纷享）
                </Text>
                <Text size="small" tone="secondary">
                  · 销售陪练 / 医疗知识图谱
                </Text>
                <Text size="small" tone="secondary">
                  · 驻场实施 · SLA 4 小时
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Grid>
        <Callout tone="neutral" title="共同选项 · 微信小程序加装包">
          <Text size="small">
            任意方案均可在 V2（V1 上线 3 个月后）追加微信小程序，覆盖"销售把资料发给客户"
            的对外场景：
            <Text as="span" weight="semibold">一次性 ¥ 15 – 20 万</Text>
            ，复用钉钉版后端，
            <Text as="span" weight="semibold">不影响订阅 / 年费</Text>。
            是否要做，根据 V1 真实使用情况再决定。
          </Text>
        </Callout>
      </Stack>

      <Stack gap={14}>
        <H2>七、对贵司业绩的价值（保守估算）</H2>
        <Grid columns="2fr 3fr" gap={16}>
          <Card>
            <CardHeader>核心 ROI 测算</CardHeader>
            <CardBody>
              <Stack gap={10}>
                <Row justify="space-between">
                  <Text size="small">单销售年配额</Text>
                  <Text weight="semibold">¥ 500 万</Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">现场临阵磨枪带来成单率提升</Text>
                  <Text weight="semibold">+3 %</Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">单人年增量</Text>
                  <Text weight="semibold" style={{ color: theme.accent.primary }}>
                    ¥ 15 万
                  </Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">150 销售合计</Text>
                  <Text weight="semibold" style={{ color: theme.accent.primary }}>
                    ¥ 2,250 万
                  </Text>
                </Row>
                <Divider />
                <Row justify="space-between">
                  <Text size="small">方案 B 首年投入</Text>
                  <Text weight="semibold">¥ 110 万</Text>
                </Row>
                <Row justify="space-between">
                  <Text size="small">首年 ROI</Text>
                  <Text weight="semibold" style={{ color: theme.accent.primary }}>
                    ~ 20 倍
                  </Text>
                </Row>
                <Text tone="tertiary" size="small">
                  即使保守折半，也是 10 倍量级。
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>价值来源分布</CardHeader>
            <CardBody>
              <PieChart
                size={220}
                donut
                data={[
                  {
                    label: "客户现场即时应答 → 多赢单",
                    value: 45,
                    tone: "success",
                  },
                  {
                    label: "新人上手提速（3 月 → 1 月）",
                    value: 25,
                    tone: "info",
                  },
                  {
                    label: "减少培训重复成本",
                    value: 15,
                    tone: "warning",
                  },
                  {
                    label: "管理者获得真实知识盲区",
                    value: 10,
                  },
                  {
                    label: "销冠经验沉淀 / 复制",
                    value: 5,
                  },
                ]}
              />
            </CardBody>
          </Card>
        </Grid>
      </Stack>

      <Stack gap={14}>
        <H2>八、6 个月实施路径</H2>
        <Table
          headers={["阶段", "时间", "交付内容", "客户里程碑"]}
          columnAlign={["left", "left", "left", "left"]}
          rowTone={["info", undefined, undefined, "success"]}
          rows={[
            [
              <Text weight="semibold">阶段 1 · MVP 上线</Text>,
              "第 1 – 2 月",
              "文档入库 + 智能问答 + 钉钉 AI 助理",
              "10 名种子销售试用、命中率达标",
            ],
            [
              <Text weight="semibold">阶段 2 · 视频 + 群机器人</Text>,
              "第 3 – 4 月",
              "视频精准定位 + 销售群机器人",
              "全员 200+ 开放使用",
            ],
            [
              <Text weight="semibold">阶段 3 · 销售场景化</Text>,
              "第 5 月",
              "话术模板 + 竞品对比 + 临床证据库",
              "销冠经验沉淀完成",
            ],
            [
              <Text weight="semibold">阶段 4 · 智能化 + 飞轮</Text>,
              "第 6 月起",
              "学习路径 + AI 陪练 + 管理者看板",
              "形成数据飞轮、持续优化",
            ],
          ]}
        />
      </Stack>

      <Stack gap={14}>
        <H2>九、下一步建议</H2>
        <Grid columns={3} gap={12}>
          <Card>
            <CardHeader>第 1 周 · 内容审计（免费）</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small">
                  我方派 1 名工程师上门 / 远程，
                  对贵司 50 份课件 + 50 段视频做一次内容评估。
                </Text>
                <Divider />
                <Text size="small" tone="secondary">
                  输出：可解析率、切片预估、命中率预测、改进建议。
                  <Text as="span" weight="semibold">免费交付。</Text>
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>第 2 – 3 周 · POC 试点</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small">
                  选 1 条产品线（10 份资料 + 5 段视频），
                  3 – 5 名销售在钉钉真实使用 2 周。
                </Text>
                <Divider />
                <Text size="small" tone="secondary">
                  评估指标：命中率、响应时延、销售满意度。
                  <Text as="span" weight="semibold">收取 ¥ 3 万 POC 费用，可抵扣正式合同。</Text>
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>第 4 周 · 方案敲定</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small">
                  基于 POC 真实数据，
                  双方共同决定走 A / B / C 哪档。
                </Text>
                <Divider />
                <Text size="small" tone="secondary">
                  签订正式合同，启动 MVP 实施，
                  <Text as="span" weight="semibold">第 7 周开始全员上线。</Text>
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Grid>
      </Stack>

      <Callout tone="info" title="一句话价值主张">
        <Text>
          把贵司沉睡的 50 份课件 + 50 小时讲师视频，
          变成住在销售钉钉里的 7×24 专家。
          <Text as="span" weight="semibold">
            {" "}
            首年投入 ¥ 44 – 110 万，撬动 200+ 销售团队
            ¥ 2000 万级业绩增量
          </Text>
          ——是医疗器械数字化里见效最快、销售最不抗拒的项目。
        </Text>
      </Callout>

      <Stack gap={6}>
        <Divider />
        <Row justify="space-between" align="center">
          <Text size="small" tone="tertiary">
            本方案有效期 30 天 · 价格含税
          </Text>
          <Text size="small" tone="tertiary">
            2026 年 5 月
          </Text>
        </Row>
      </Stack>
    </Stack>
  );
}
