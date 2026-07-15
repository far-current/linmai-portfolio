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
        "模拟数据训练：100 条样本跑通 KANO 优先级判定流程。",
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
        "AI Coding 落地：5 个模块的 0 开发资源产品 Demo。",
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
        "逆向工程：通过还原理解“首页即计时”的极简设计逻辑。",
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