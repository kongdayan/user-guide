import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { MdOutlineMail } from "react-icons/md";
const config: DocsThemeConfig = {
  logo: <span>WeShareTech LMS User Guide</span>,
  project: {
    link: 'https://github.com/wesharetechnology/user-guide',
  },
  chat: {
    icon: MdOutlineMail,
    link: 'mailto:info@wesharetechnology.com',
  },
  docsRepositoryBase: 'https://github.com/wesharetechnology/user-guide',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config
