# 创意开发案例笔记

2026-11-08，Edge 浏览器，1000 × 650。分别观察加载后约 2 秒和约 18 秒的画面，再移动指针、按住横移、释放、向下滚动约 540px。窄屏抽样为 390 × 844。相邻帧还包括时间驱动动画；只有画面差异不能证明某个 Shader、框架或输入事件是原因。下表最后一列是我们的实现建议。

奖项以条目对应的**版本**为准。年度页实际呈现分类文字，悬停突出类别，作品名与票数可在页面中核对。年度归档页滚动后露出作品缩略图。[年度获奖页](https://www.awwwards.com/annual-awards/winners) · [年度作品目录](https://www.awwwards.com/websites/sites_of_the_year/)

|现场与奖项证据|看到和操作到的变化|可迁移的机制与实现建议|
|---|---|---|
|[Lando Norris](https://landonorris.com/) · [SOTD 8.18，2025-11-17](https://www.awwwards.com/sites/lando-norris)，年度页列为 Site of the Year 与 Users’ Choice|荧光黄色加载幕之后，白底大幅正面头像占据中心。指针横移前后，脸上的黑色遮片换位；滚动进入暗底签名与大字。窄屏仍用纵向大头像，下一幕签名覆盖头像。|让主题对象贯穿章节。可用独立遮片层随指针改变采样位置，滚动区间则控制明暗切换；给无指针设备预设稳定构图。|
|[Igloo Inc](https://igloo.inc/) · [SOTD 7.92，2024-07-23](https://www.awwwards.com/sites/igloo-inc)|冷灰雪地中的冰屋先闭合，随后砖块拉开，标题在场景上出现。拖动与滚轮前后仍处在同一环境，无法分离开场动画与输入的贡献。|将导航揭示和体块分解安排在同一时间轴；实例化几何体加雾效足以测试构图，先确认轮廓再加反射。|
|[Bruno’s Portfolio](https://bruno-simon.com/) · [SOTD 8.11，2026-01-21](https://www.awwwards.com/sites/brunos-portfolio)，列入月度目录|格点平面中出现环形光圈、树与车辆，旁边是开始提示。输入采样未进入可驾驶阶段；窄屏保留中央岛屿和提示，未测完整移动控制。|先提供一个尺度清晰的世界入口，按显式启动再切换输入所有权。项目链接应同时有 DOM 入口。|
|[Griflan Labs](https://labs.griflan.com/) · [2026-11-03 Nominee](https://www.awwwards.com/sites/griflan-labs)，提名|高视点的透视地面用图片阵列标记作品。横拖后另一列图移至中心，滚轮之后展现更远处的组别；顶部导航留在原位。|相机移动与项目身份分开存储；二维模型可先用投影平面和可寻址列表，点击进入前记住相机位置。|
|[Cuberto](https://cuberto.com/) · [历史版本 SOTD 7.37，2018-06-22](https://www.awwwards.com/sites/cuberto)|当前站白底、居中的机构标题，上方留白给下方叠层媒体。滚动后首屏离开，服务段落与项目内容出现。未核实历史条目里的转场在现版仍存在。|给媒体排定进入顺序，保证服务正文可自然滚动；通过裁切区域与变换控制露出面积。|
|[14islands](https://www.14islands.com/) · [历史版本 SOTD 7.78，2020-06-29](https://www.awwwards.com/sites/14islands)|当前站的 Design 与 Technology 两组大字错开，滚轮将媒体窗口推入视野；窄屏导航收拢成 MENU，作品媒体下直接接文字。|让排版承担第一幕，下一幕把屏幕空间还给作品。视频加载前预留等比区域；文字不依赖播放成功。|
|[Obys](https://obys.agency/) · 本次未核实对应版本奖项|白底细长纵向图带，中央固定取景标记，滚轮后中间作品更替；周围大量留白维持中心焦点。未验证进入项目后的转场。|将选中项对准同一取景窗；CSS mask 配合原生列表，按 Enter 也能进入。|
|[Active Theory](https://activetheory.net/) · 对应版本奖项未核实|黑场中的小型圆环和镜面倒影，前后帧的材质色和角度变化；滚动后看到环的侧面。未隔离自主旋转。|构造一个能被不同姿态识别的对象，镜头转向时保持地平线。可用离屏反射贴图或二维投影近似。|
|[Lusion](https://lusion.co/) · [历史版本 SOTD 7.96，2019-05-20](https://www.awwwards.com/sites/lusion)|本次停在黑底数字与加载条。奖项页列有互动人物与滚动导航的历史片段，没有实际操纵现版人物。|大型场景须有可读入口、超时出口和不依赖 GPU 的作品列表。|
|[Resn](https://resn.co.nz/) · 对应版本奖项未核实|深色开场的中心点与水平线，采样窗口内没有走到作品索引。拖动或滚动没有产生可归因的作品切换。|保留打开索引的显式控件，尤其对慢设备；不要把退出加载幕绑定到不透明的手势。|

## 2025–2026 补充样本

- **Why Zero** — [SOTD 7.73，2026-09-07](https://www.awwwards.com/sites/why-zero)，见 [Site of the Month 目录](https://www.awwwards.com/websites/sites_of_the_month/)。现场覆盖在水面影像上的白色轮廓随按住横移拉长，指针轨迹成为开场的输入。本次未完成闭合笔画。可先用 Canvas 轨迹加闭合距离判断，并提供跳过手势的按钮。[作品](https://why.zero.university/)
- **Extrafazant** — [SOTD 7.24，2026-11-08](https://www.awwwards.com/sites/extrafazant)，见 [Developer 获奖目录](https://www.awwwards.com/websites/developer/)。黑色大字占据白底首屏，按住拖过文字时出现浏览器选区，滚动进入拼贴照片与机构介绍。不要把原生选区误记成自定义光标；这里值得借鉴的是标题到作品证据的节奏。[作品](https://www.extrafazant.nl/)
- **Messenger** — [SOTD 7.92，2025-11-10](https://www.awwwards.com/sites/messenger)，年度页列为 Developer Site of the Year。青绿色平面上的星球、立体字与黄色启动控件形成单一入口。现场拖动与滚轮未越过开始页，角色导航与 NPC 为奖项页描述。可用一个显式启动动作交接浏览器输入，再加载游戏控制器。[作品](https://messenger.abeto.co/)

这些作品仅供分析。材质、移动替代方案和实现路径需要在自己的项目中验证。
