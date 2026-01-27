import user_image from './images/user-image.jpeg';
import code_icon from './icons/code-icon.png';
import code_icon_dark from './icons/code-icon-dark.png';
import edu_icon from './icons/edu-icon.png';
import language_icon_dark from './icons/language_icon_dark.png';
import language_icon_light from './icons/language_icon_light.png';
import edu_icon_dark from './icons/edu-icon-dark.png';
import project_icon from './icons/project-icon.png';
import project_icon_dark from './icons/project-icon-dark.png';
import vscode from './icons/vscode.png';
import firebase from './icons/firebase.png';
import figma from './icons/figma.png';
import git from './icons/git.png';
import mongodb from './icons/mongodb.png';
import right_arrow_white from './icons/right-arrow-white.png';
import mail_icon from './icons/mail_icon.png';
import mail_icon_dark from './icons/mail_icon_dark.png';
import profile_img from './images/profile-img.png';
import download_icon from './icons/download-icon.png';
import hand_icon from './icons/hand-icon.png';
import header_bg_color from './images/header-bg-color.png';
import moon_icon from './icons/moon_icon.png';
import sun_icon from './icons/sun_icon.png';
import arrow_icon from './icons/arrow-icon.png';
import arrow_icon_dark from './icons/arrow-icon-dark.png';
import menu_black from './icons/menu-black.png';
import menu_white from './icons/menu-white.png';
import close_black from './icons/close-black.png';
import close_white from './icons/close-white.png';
import web_icon from './icons/web-icon.png';
import mobile_icon from './icons/mobile-icon.png';
import ui_icon from './icons/ui-icon.png';
import graphics_icon from './icons/graphics-icon.png';
import right_arrow from './icons/right-arrow.png';
import send_icon from './icons/send-icon.png';
import right_arrow_bold from './icons/right-arrow-bold.png';
import right_arrow_bold_dark from './icons/right-arrow-bold-dark.png';
import mobile_background from './images/mobile-background.png';
import web_dev_icon from './icons/web-dev-icon.png';
import ai_icon from './icons/ai-icon.png';
import flutter_icon from './icons/flutter-icon.png';
import react_icon from './icons/react-icon.png';
import arrow_down from './icons/arrow-down.png';
import arrow_up from './icons/arrow-up.png';
import linkedin_logo from './icons/linkedin-logo.png';
import github_logo from './icons/github-logo.png';
import whatsapp_logo from './icons/whatsapp-logo.png';
import email_logo from './icons/email-logo.png';
import cloud_download from './icons/cloud-download-icon.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    mail_icon,
    mail_icon_dark,
    profile_img,
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
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    language_icon_dark,
    language_icon_light,
    mobile_background,
    web_dev_icon,
    ai_icon,
    flutter_icon,
    react_icon,
    arrow_down,
    arrow_up,
    linkedin_logo,
    github_logo,
    whatsapp_logo,
    email_logo,
    cloud_download,
};

export const workData = [
    {
        id: 1,
        title: 'Frontend project',
        category: 'Web Development',
        description: 'Web Development',
        coverImage: '',
        bgImage: '/work-1.png',
    },
    {
        id: 2,
        title: 'Geo based app',
        category: 'Mobile Development',
        description: 'Mobile Development',
        coverImage: '',
        bgImage: '/work-2.png',
    },
    {
        id: 3,
        title: 'AI & Machine Learning',
        category: 'AI & Machine Learning',
        description: 'AI & Machine Learning',
        coverImage: '',
        bgImage: '/work-4.png',
    },

];

export const serviceData = [
    { 
        icon: assets.web_dev_icon, 
        title: 'Web Development', 
        description: 'Building fast, responsive, and scalable websites and web applications using modern technologies like HTML, CSS, JavaScript, and frameworks such as React and Next.js.', 
        link: '' 
    },
    { 
        icon: assets.flutter_icon, 
        title: 'Flutter Mobile Development', 
        description: 'Creating high-performance cross-platform mobile applications for iOS and Android from a single Flutter codebase with smooth UI and native-like experience.', 
        link: '' 
    },
    { 
        icon: assets.react_icon, 
        title: 'React-Native Mobile Development', 
        description: 'Developing powerful mobile apps using React Native, delivering native performance and beautiful interfaces for both iOS and Android platforms.', 
        link: '' 
    },
    { 
        icon: assets.ai_icon, 
        title: 'AI & Machine Learning', 
        description: 'Designing intelligent systems that analyze data, automate processes, and make predictions using machine learning models and artificial intelligence technologies.', 
        link: '' 
    },
];

export const infoList = [
    { 
        icon: assets.code_icon, 
        iconDark: assets.code_icon_dark, 
        title: 'Programming Languages', 
        firstDescription: 'HTML, CSS, JavaScript, React Js, Next Js, Python, Java, C/C++' ,
        secondDescription: 'React-Native, Flutter, Dart'
    },
    { 
        icon: assets.edu_icon, 
        iconDark: assets.edu_icon_dark, 
        title: 'Education', 
        firstDescription: 'Bachelor in Computer Software Engineering from University of East London' ,
        secondDescription: 'Bachelor in Computer Software Engineering from Ain Shams University'
    },
    { 
        icon: assets.project_icon, 
        iconDark: assets.project_icon_dark, 
        title: 'Projects', 
        firstDescription: 'Built 3 live applications' ,
        secondDescription: 'Worked on more than 20 projects for my college'
    },
    { 
        icon: assets.language_icon_light, 
        iconDark: assets.language_icon_dark, 
        title: 'Languages', 
        firstDescription: 'I speak 3 languages ' ,
        secondDescription: 'English, German, Arabic'
    },
];

export const toolsData = [
    assets.vscode, 
    assets.firebase, 
    assets.mongodb, 
    // assets.figma, 
    assets.git,
];