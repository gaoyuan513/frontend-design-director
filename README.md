# Frontend Design Director

一个可安装的 Codex Skill，帮助团队从用户任务推导页面结构、视觉方向和实现方案。适用于新建 Web 应用与现有项目改版。Skill 按需读取参考资料，自身没有运行时依赖。

## 在 Windows 11 安装

在此仓库根目录打开 PowerShell。以下命令将当前提交安装到本机 Codex 的用户级 skills 目录，并在同名安装存在时停止。

```powershell
$base = if ($env:CODEX_HOME) { $env:CODEX_HOME } else { Join-Path $HOME '.codex' }
$dest = Join-Path $base 'skills/frontend-design-director'
if (Test-Path -LiteralPath $dest) { throw "同名 Skill 已存在：$dest" }
New-Item -ItemType Directory -Path $dest -ErrorAction Stop | Out-Null
$archive = Join-Path ([IO.Path]::GetTempPath()) ("frontend-design-" + [guid]::NewGuid() + ".zip")
git archive --format=zip "--output=$archive" HEAD
if ($LASTEXITCODE) { throw "git archive failed" }
Expand-Archive -LiteralPath $archive -DestinationPath $dest
Remove-Item -LiteralPath $archive
```

重启 Codex，在目标项目的新对话中使用下面任一提示词。也可用自然语言提出界面设计或改版需求，由 Codex 选择 Skill。

## 三个调用示例

- $frontend-design-director 把当前 React 官网升级为 Awwwards 风格的创意官网。保留联系表单和作品深链，用手机和键盘走完作品浏览与联系流程。
- $frontend-design-director 把现有 AI Agent 项目改造成专业工作台。先追踪启动、流式日志、取消与重试，再实现运行列表与详情，验证刷新后选中状态。
- $frontend-design-director 把现有作品集改造成可拖拽的空间画廊。保留详情 URL，提供键盘和列表入口，测试触控、减弱动态及返回定位。

## 目录与维护

|路径|用途|
|---|---|
|[SKILL.md](SKILL.md)|触发说明、项目分析、增量实现、浏览器复验|
|[设计模式](references/design-styles.md)|六类模式的选择依据和验收标准|
|[参考库入口](references/design-sources.md)|奖项与创意、网页案例、产品 UI、实际网站、技术组件五类，共 38 个来源|
|[交互模式](references/interaction-patterns.md) 与 [质量清单](references/quality-checklist.md)|手势、反馈、回退和功能回归|
|[Token 示例](assets/design-tokens.example.json)|可按项目调整的语义颜色、字体、间距、网格和动态设置|
|[agents/openai.yaml](agents/openai.yaml)|Codex 界面元数据|

新增参考时，将链接、访问范围和设计建议加入对应分类。新增风格时，补充主任务、布局选择和可观察的验收条件。修改入口后用 skill-creator 的 quick_validate.py 校验，并复跑上述三个场景。

## English

Frontend Design Director is a reusable Codex skill for building web interfaces and redesigning existing projects. It selects among experimental, editorial, product, workspace, spatial gallery and Swiss directions based on the primary user task. Each direction connects to references, implementation choices and browser checks.

Run the PowerShell installation block from a local checkout, restart Codex and mention `$frontend-design-director` in your project. For example, ask it to redesign an agent console while preserving cancellation and retry, or build a gallery with deep-linked details and keyboard access.
