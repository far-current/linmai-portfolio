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

type ProjectLink = {
  icon: ReactNode;
  type: string;
  href: string;
};

type Project = {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  links: ProjectLink[];
  image: string;
  video: string;
  materials?: string[];
  note?: string;
};

export const DATA = {
  name: "林迈",
  initials: "LM",
  url: "https://linmai.dev",
  location: "北京",
  locationLink: "https://www.google.com/maps/place/beijing",
  description:
    "会写 PRD、会跑数据、会用 AI Coding 落地原型——找能独立闭环的产品实习生，是我。",
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
        "0 预算验证：23 份问卷推翻“自动排版”假设，重定义 AI 简历核心模块。",
      materials: [
        "📄 PRD 全文（含调研、流程图）",
        "📊 问卷原始数据",
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
        "模拟数据训练：100 条样本跑通 KANO 优先级判定流程。",
      materials: [
        "📊 KANO 问卷设计",
        "📉 模拟数据生成说明 + 统计",
        "📊 计算过程",
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
        "AI Coding 落地：5 个模块的 0 开发资源产品 Demo。",
      materials: [
        "🌐 双版本 Demo 链接",
        "🤖 需求迭代记录（3-5 轮对话）",
        "🛠️ 制作过程时间线（工具使用、踩坑反思）",
      ],
      note: "注：本项目重点验证 AI Coding 从需求到页面的落地能力，非最终产品形态。",
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
        "逆向工程：通过还原理解“首页即计时”的极简设计逻辑。",
      materials: [
        "🎨 墨刀原型（可交互）",
        "📄 信息架构图（树状）",
        "📄 页面流转图（流程）",
        "📝 3 条设计笔记",
      ],
      links: [
        {
          type: "墨刀原型",
          href: "https://modao.cc/proto/1aRxcaGDti3ty7s4TMLZsp/sharing?view_mode=read_only",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/tomato-cover.png",
      video: "",
    },
  ] as Project[],
  hackathons: [] as Hackathon[],
  portfolioMaterials: [
    "📁 产品刷题记录（70 道真题，截图或 PDF）",
    "📁 数据处理案例（脱敏后的 SQL / Excel 成果，1-2 个）",
    "📁 个人知识库 / 笔记",
  ],
};