import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { PenTool, FileText, BarChart3, Users, Bot, Database } from "lucide-react";

import { ReactNode } from "react";

type Education = {
  school: string;
  href: string;
  degree: string;
  logoUrl?: string;
  start: string;
  end: string;
};

type Hackathon = {
  title: string;
  dates: string;
  location: string;
  description: string;
  image?: string;
  links?: { title: string; href: string; icon: ReactNode }[];
};

type Work = {
  company: string;
  href: string;
  badges: string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string | null;
  description: string;
};

export const DATA = {
  name: "林迈",
  initials: "LM",
  url: "https://linmai.dev",
  location: "北京",
  locationLink: "https://www.google.com/maps/place/beijing",
  description:
    "求职意向：产品经理。热爱洞察用户需求，擅长将复杂问题拆解为可落地的产品方案。",
  summary:
    "我是林迈，一名热爱产品设计的在校生。擅长从用户视角出发，结合数据与逻辑进行需求分析、原型设计与产品文档撰写。具备 AI 工具提效、数据分析和用户增长实战经验，正在寻找产品经理实习机会，期待在真实业务场景中持续成长。",
  avatarUrl: "/me.png",
  skills: [
    { name: "产品工具：墨刀 / 原型制作 / PRD 撰写 / 竞品分析 / 用户体验地图", icon: PenTool },
    { name: "AI 提效：ChatGPT / Codex / Vibe Coding", icon: Bot },
    { name: "数据基础：Excel 数据分析 / SQL 基础查询", icon: Database },
    { name: "运营增长：社群冷启动 / 用户转化漏斗 / SOP 标准化", icon: Users },
    { name: "文档协作：产品文档 / 流程标准化 / 需求拆解", icon: FileText },
    { name: "分析能力：数据驱动 / 用户研究 / 结构化复盘", icon: BarChart3 },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "首页" },
    { href: "/blog", icon: NotebookIcon, label: "博客" },
  ],
  contact: {
    email: "3469251337@qq.com",
    tel: "18960205957",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/far-current",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/linmai",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "发送邮件",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [] as Work[],
  education: [] as Education[],
  projects: [
    {
      title: "AI 简历功能优化 PRD",
      href: "https://lcni7ve7ymzp.feishu.cn/wiki/OjLiw5242iPt0WkJpgTcNGZgnZd",
      dates: "2026",
      active: true,
      description:
        "在 1222 万毕业生的求职压力下，我尝试回答一个问题：AI 简历工具到底该帮用户写什么？通过 3 次深度访谈和 23 份问卷，我发现核心矛盾不是'写不出来'，而是'写不到点上'。因此 PRD 没有追逐大模型炫技，而是围绕'诊断—建议—匹配—反馈'设计闭环：先帮用户理解 HR 视角，再给出可落地的优化动作，最后通过投递数据反哺迭代。同时补充了 5 款竞品分析与假设性商业化路径，验证产品可持续性。", 
      technologies: [
        "PRD 撰写",
        "用户访谈",
        "问卷调研",
        "竞品分析",
        "商业化分析",
      ],
      links: [
        {
          type: "PRD 文档",
          href: "https://lcni7ve7ymzp.feishu.cn/wiki/OjLiw5242iPt0WkJpgTcNGZgnZd",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "原型图",
          href: "https://design.gemcoder.com/#/edit?appuuid=1947960876556353536&version=0&projectname=%E4%BA%A7%E5%93%81%E6%B5%81%E7%A8%8B%E5%9B%BE",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ai-resume-prd.png",
      video: "",
    },
    {
      title: "滴滴出行 KANO 模型验证",
      href: "https://lcni7ve7ymzp.feishu.cn/wiki/Q7dcwKOVeiV7yjkLimschCpxn2c",
      dates: "2026",
      active: true,
      description:
        "产品资源有限时，'做什么'比'做多少'更重要。我以滴滴出行为例，用 KANO 模型对 8 个候选功能进行需求分类。通过设计 8×2 维度问卷、生成 100 份模拟数据并计算 Better-Worse 系数，我识别出哪些功能是用户'必须有'的底线、哪些是'有了更好'的差异化点、哪些只是'可有可无'的伪需求。最终输出功能优先级建议，演示如何用数据支撑需求取舍，避免拍脑袋决策。",
      technologies: [
        "KANO 模型",
        "问卷设计",
        "数据分析",
        "Excel",
        "需求优先级",
      ],
      links: [
        {
          type: "项目文档",
          href: "https://lcni7ve7ymzp.feishu.cn/wiki/Q7dcwKOVeiV7yjkLimschCpxn2c",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "数据过程",
          href: "https://lcni7ve7ymzp.feishu.cn/wiki/Vc1TwzFBfiGxX8kHaWYcG9mZnWc",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/kano-cover.png",
      video: "",
    },
    {
      title: "汴绣智裳——非遗展示平台",
      href: "https://cloud-wear-portfolio.nocode.host",
      dates: "2026",
      active: true,
      description:
        "非遗数字化不能只停留在'把展品搬上网'。我在设计'汴绣智裳'时，思考的是如何让年轻用户从'观看文化'变成'参与文化'。平台以 AI 换装和纹样设计工坊作为互动抓手，降低体验门槛；用电商和乡村振兴模块承接转化，让文化传承产生实际价值。从需求定义到页面搭建，我尝试验证一条路径：好产品既要讲得出文化故事，也要跑得通商业闭环。",
      technologies: [
        "AI Coding",
        "产品需求定义",
        "原型搭建",
        "非遗文化",
        "电商模块",
      ],
      links: [
        {
          type: "平台预览",
          href: "https://cloud-wear-portfolio.nocode.host",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/bianxiu-cover.png",
      video: "",
    },
    {
      title: "番茄 ToDo 低保真原型还原",
      href: "https://modao.cc/proto/1aRxcaGDti3ty7s4TMLZsp/sharing?view_mode=read_only",
      dates: "2026",
      active: true,
      description:
        "番茄 ToDo 的'首页即计时'让我意识到：效率工具的入口设计，直接决定用户的行为转化率。在还原 5 个核心页面时，我不只是复刻界面，更在梳理它的信息架构与页面流转：为什么把计时放在首页？任务优先级如何与专注数据关联？计时状态切换怎样做到减少用户决策成本？通过低保真原型，我把对'减少认知负荷、强化正向反馈'的理解落到了具体交互细节中。",
      technologies: [
        "墨刀",
        "低保真原型",
        "信息架构",
        "交互设计",
        "页面流转",
      ],
      links: [
        {
          type: "原型预览",
          href: "https://modao.cc/proto/1aRxcaGDti3ty7s4TMLZsp/sharing?view_mode=read_only",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/tomato-cover.png",
      video: "",
    },
  ],
  hackathons: [] as Hackathon[],
};