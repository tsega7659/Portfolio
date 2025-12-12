
import askaladmin from "../assets/askaladmin.jpg";
import askaladmin1 from "../assets/askaladmin1.jpg";
import askaladmin2 from "../assets/askaladmin2.jpg";
import askaladmin3 from "../assets/askaladmin3.jpg";

import tsimona from "../assets/tsimona.jpg";
import tsimona1 from "../assets/tsimona1.jpg";
import tsimona3 from "../assets/tsimona3.jpg";

import askal from "../assets/askal.jpg";
import askal1 from "../assets/askal1.jpg";
import askal2 from "../assets/askal2.jpg";
import askal3 from "../assets/askal3.jpg";

import planning from "../assets/planner.jpg";

import school from "../assets/schoolnet1.jpg";
import school2 from "../assets/schoolnet2.jpg";
import school3 from "../assets/schoolnet3.jpg";
import school4 from "../assets/schoolnet4.jpg";
import school5 from "../assets/schoolenet5.jpg";

import yeneta from "../assets/yeneta.jpg";
import yeneta1 from "../assets/yeneta1.jpg";
import yeneta2 from "../assets/yeneta2.jpg";
import yeneta3 from "../assets/yeneta3.jpg";
import yeneta4 from "../assets/yeneta4.jpg";
import yeneta5 from "../assets/yeneta5.jpg";
import yeneta6 from "../assets/yeneta6.jpg";


export const projects = [
    {
        id: "askal-charity",
        title: "Askal Charity Website",
        description: "A charity organization website built for users to view Askal’s goal, objective, and vision. The website also helps the organization increase its number of members and volunteers, since it has a registration form for four types of membership in the Askal Charity Association.",
        role: "Full Stack Developer",
        roleDescription: "My role in this project was to develop and build the About Us and Join Us pages. I worked on this project with a team, and I handled both the backend and frontend parts of the Join Us page, including the integration. I used React with Tailwind CSS for the frontend and Node.js with Express and MySQL for the backend.",
        image: askal,
        gallery: [askal1, askal2, askal3],
        link: "https://askalcharityassociation.org/",
        github: "https://github.com/Yohanamtesfaye/Askal-Charity-Website/",
        languages: ["Node.js", "Express", "MySQL", "React", "Tailwind CSS"],
    },
    {
        id: "askal-admin",
        title: "Askal Admin Dashboard",
        description: "Askal Charity Association has an admin-side website designed only for administrators to manage different members, including tracking their payments.",
        role: "Full Stack Developer",
        roleDescription: "My role in this project was to develop the entire frontend and backend, along with the integration. The admin can view a dashboard that shows general information about the association, such as the number of members and volunteers, as well as the current month’s payment status. The admin can also mark whether a user has paid their monthly payment, register new members, and add experiences for existing members. I used React with Tailwind CSS for the frontend and Node, Express.js, and MySQL for the backend.",
        image: askaladmin,
        gallery: [askaladmin1, askaladmin2, askaladmin3],
        // link: "https://ritta-flowers.netlify.app/",
        // github: "https://github.com/tsega7659/Ritta_Flowers_React_Excersice",
        languages: ["React", "Tailwind CSS", "node.js", "Express.js", "MySQL"],
    },
    {
        id: "schoolnet-mobile",
        title: "SchoolNet Mobile App",
        description: "SchoolNet is a mobile app that helps parents find different schools for their children based on their preferences.",
        role: "Mobile App Developer",
        roleDescription: "My role in this project was as a mobile app developer. I built the entire application using Flutter and the BLoC state management pattern. The app fetches the user's location and displays schools based on that area. Families can also filter schools by fees, school type, and view detailed information about each school, including curriculum and infrastructure.",
        image: school,
        gallery: [school, school2, school3, school4, school5],
        link: "https://drive.google.com/file/d/1ef0kfP_IH2bxnA_zfSfi1-96BxSKLWn4/view?usp=sharing",
        github: "https://github.com/tsega7659/SchoolNet-Mobile",
        languages: ["Dart", "Flutter", "BLoC State Managment"],
    },
    {
        id: "yeneta-kids",
        title: "Yeneta Kids Mobile App",
        description: "Yeneta is an app designed for kids to help them learn various subjects such as Math, General Science, English, and Amharic. It also teaches students about their culture, famous people, and different stories.",
        role: "Mobile App Developer",
        roleDescription: "My role was to develop the entire mobile application. The app allows children to learn subjects, take quizzes, and earn rewards. They can also read stories and listen to kids’ songs. In addition, the app motivates students by presenting well-known Ethiopian figures along with their backgrounds. I used Flutter and the BLoC state management pattern.",
        image: yeneta,
        gallery: [yeneta1, yeneta2, yeneta3, yeneta4, yeneta5, yeneta6],
        link: "https://drive.google.com/file/d/164C_D3TslrfmfXLPmuamLA1xwccl1DBG/view?usp=sharing",
        github: "https://github.com/tsega7659/Yeneta",
        languages: ["Dart", "Flutter", "BLoC State Managment"],
    },
    {
        id: "tsimona-books",
        title: "Tsimona Books",
        description: "Tsimona Books is a website that helps users access different types of books.",
        role: "Frontend Developer",
        roleDescription: "My role was to develop the frontend. I built it using React and Tailwind CSS, and I used Google’s API to fetch the books. Users can filter books by genre and search for books by their title or the author’s name.",
        image: tsimona,
        gallery: [tsimona, tsimona1, tsimona3],
        link: "https://tsimonabooks.netlify.app/",
        github: "https://github.com/tsega7659/BOOK_RENTING",
        languages: ["React", "Tailwind CSS", "RESTful API"],
    },
    {
        id: "planning-system",
        title: "Planning Management System",
        description: "A comprehensive system for managing planning and reporting process. ",
        role: "Frontend Developer",
        roleDescription: "Contributed to the frontend application in Next.js. I worked on implementing core business logic for the planning modules and created dynamic reports for data visualization.",
        image: planning,
        gallery: [planning, planning, planning],
        link: "#",
        github: "https://github.com/fitiha/aastu-planner",
        languages: ["Next.js", "Tailwind CSS", "Go"],
    },

];
