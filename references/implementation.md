# 实现资源

访问记录限于公开首页文本，未实测视觉和交互。后四栏是本地设计建议，不能用来判断来源网站的字体、配色或技术栈。

|来源与访问状态|研究重点与适用场景|候选布局|字色方向|交互试验|可能实现|
|---|---|---|---|---|---|
|[ui.shadcn.com](https://ui.shadcn.com/) · 可读|可组合表单与弹层|表单与对话框|语义主题变量|关闭恢复焦点|项目兼容的 UI primitives|
|[reactbits.dev](https://reactbits.dev/) · 可读|局部动效的独立原型|局部标题动效|动态字保持可读|减弱动态转静态|按需导入 React 组件|
|[ui.aceternity.com](https://ui.aceternity.com/) · 可读|研究单个交互组件|单个互动展示区|控制背景效果对比|触控回退|React 与 CSS|
|[magicui.design](https://magicui.design/) · 可读|比较动画组件的可读性|状态变化演示|复用品牌强调色|忙碌时保留标签|局部动画组件|
|[21st.dev](https://21st.dev/) · 可读|按任务挑选组件候选|组件候选对照|迁移到现有主题|检查全部状态|查许可和依赖|
|[motion.dev](https://motion.dev/) · 可读|状态切换与进入退出|进入退出与位置变化|沿用项目主题|中断后从当前位置继续|Motion|
|[gsap.com](https://gsap.com/) · 可读|多段编排与时间轴|叙事时间轴|文本始终可读取|离开页面销毁时间轴|GSAP context|
|[threejs.org](https://threejs.org/) · 可读|确需深度的三维场景|场景与 HTML 控件|标签保持独立对比|无 GPU 显示索引|Three.js|
|[r3f.docs.pmnd.rs](https://r3f.docs.pmnd.rs/) · 未取得可分析正文|React 内的三维场景生命周期|React 场景组件|文字说明留在 DOM|卸载释放资源|React Three Fiber|
|[lenis.dev](https://lenis.dev/) · 可读|滚动插值与原生输入协调|滚动章节|字号随视口适配|保留原生键盘与触控|Lenis 按需启用|
