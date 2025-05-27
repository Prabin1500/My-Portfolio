import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import right_arrow_white from './right-arrow-white.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import firebase from './firebase.png';
import mongodb from './mongodb.png';
import vscode from './vscode.png';
import figma from './figma.png';
import git from './Git.png';
import tailwind from './tailwind.png';
import html from './html.png';
import react from './react.png';
import java from './Java.png';
import javaScript from './javascript.png';
import css from './css.png';
import python from './Python.png';
import node from './node.png';
import c from './C++-Logo.png';
import sql from './SQL.png';
import typescript from './typescript.png';
import mailIcon from './mail_icon.png';
import swift from './swift.png';
import androidStudio from './Android_Studio.png';
import cinema from './cinema.png';
import blog from './blog.png';
import restaurant from './Kasthamandap.png';
import omagarden from './Omagarden.png';
import playnlearn from './playnLearn.png';
import recipe from './Food.png';
import schooldays from './Schooldays.png';

export const assets = {
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    figma,
    firebase,
    git,
    mongodb,
    right_arrow_white,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    tailwind,
    html,
    react,
    java,
    javaScript,
    css,
    python,
    node,
    c,
    sql,
    typescript,
    mailIcon,
    swift,
    androidStudio,
    cinema,
    blog,
    restaurant,
    omagarden,
    playnlearn,
    recipe,
    schooldays
};

export const workData = [
    {
        title: 'Blog Website',
        description: 'A full-stack blog platform where users can create, read, update, and delete blog posts.' + 
            'Built using MERN stack (MongoDB, Express.js, Node.js, vanilla JS).',
        tools: [assets.react, assets.html, assets.css, assets.node, assets.mongodb],
        url: 'https://github.com/Prabin1500/BlogWebsite',
        bgImage: assets.blog,
    },
    {
        title: 'School Days Web app',
        description: 'A full-stack web application for school-parent communication with role-based access and messaging features.',
        tools: [assets.node, assets.mongodb, assets.vscode, assets.html, assets.css],
        url: 'https://github.com/Prabin1500/School-days',
        bgImage: assets.schooldays,
    },
    {
        title: 'Movie Web App',
        description: 'A frontend cinema-themed web application using HTML, CSS, and JavaScript to showcase movie listings and enhance UI/UX skills.',
        tools: [assets.javaScript, assets.vscode, assets.html, assets.css],
        url: 'https://github.com/Prabin1500/Cinema',
        bgImage: assets.cinema,
    },
    {
        title: 'Restaurant Web App',
        description: 'Developed a full-stack restaurant website using React, Vite, and Firebase, enabling real-time menu and system management.',
        tools: [assets.tailwind, assets.vscode, assets.firebase, assets.git,assets.react],
        url: 'https://github.com/bekstha/kasthamandap',
        bgImage: assets.restaurant,
    },
    {
        title: 'PlayNLearn',
        description: 'Developed an educational iOS app using Swift and SwiftUI to teach foundational skills to children aged 2–4 through interactive games.',
        tools: [assets.swift, assets.git, assets.figma],
        url: 'https://github.com/Argier96/PlayNLearn',
        bgImage: assets.playnlearn,
    },
    {
        title: 'OmaGarden',
        description: 'Developed a cross-platform mobile app using React Native and Firebase to enable plant enthusiasts to share and explore plant images.',
        tools: [assets.react, assets.javaScript, assets.firebase],
        url: 'https://github.com/anish0123/omaGarden',
        bgImage: assets.omagarden,
    },
    {
        title: 'Recipe App',
        description: 'Developed an Android app using Java and Android SDK to suggest recipes based on available ingredients, enhancing meal planning efficiency.',
        tools: [assets.java, assets.git, assets.figma, assets.androidStudio],
        url: 'https://github.com/Prabin1500/RecipeApp',
        bgImage: assets.recipe,
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', 
        description: 'Web development is the process of building, programming...', 
        link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', 
        description: 'Mobile app development involves creating software for mobile devices...', 
        link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', 
        description: 'UI/UX design focuses on creating a seamless user experience...', 
        link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', 
        description: 'Creative design solutions to enhance visual communication...', 
        link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    //{ icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    {icon: assets.html, name: "HTML"},
    {icon: assets.css, name: "CSS"},
    {icon: assets.tailwind, name: "Tailwindcss"},
    {icon: assets.react, name: "React"},
    {icon: assets.javaScript, name: "JavaScript"},
    {icon: assets.typescript, name: "TypeScript"},
    {icon: assets.c, name: "C++"},
    {icon: assets.mongodb, name: "Mongodb"},
    {icon: assets.git, name: "git"},
    {icon: assets.vscode, name: "VSCode"},
    {icon: assets.figma, name: "Figma"},
    {icon: assets.java, name: "Java"},
    {icon: assets.python, name: "Python"},
    {icon: assets.node, name: "Node"},
    {icon: assets.firebase, name: "Firebase"},
    {icon: assets.sql, name: "SQL"},
];