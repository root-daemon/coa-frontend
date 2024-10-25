"use client";

import { useState } from "react";
import { Instagram, Linkedin, Twitter, Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
const clubs = [
  {
    title: "NextTech Lab",
    type: "Technology Research Lab",
    description:
      "The Next Tech Lab pioneers advancements in AI, Cryptography, IoT, Blockchain, and Extended Reality. We foster collaboration to develop transformative solutions like AI-driven automation, secure cryptographic techniques, interconnected IoT systems, transparent blockchain transactions, and immersive XR experiences, driving technological progress and innovation.",
    social_media: {
      instagram: "https://www.instagram.com/nexttechlab",
      x: "https://x.com/nexttechlab?mx=2",
      linkedin: "https://www.linkedin.com/company/nexttechlab/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "TPH X SRMIST",
    type: "Blockchain Club",
    description:
      "Welcome to TPHXSRM, the Product House SRM Web3 Club! We're a community exploring Web3 and blockchain, offering a platform for learning and innovation. Join us to work on real projects, interact with industry experts, and shape the digital future. Let's lead the next wave of technology together!",
    social_media: {
      instagram: "https://www.instagram.com/0xsrmist/",
      x: "https://x.com/0xsrmist",
      linkedin: "https://www.linkedin.com/company/tph-srmist/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "BlockChain Club",
    type: "Blockchain Club",
    description:
      "Blockchain Club SRM is the pioneer student-led club around concepts of Web3 and distributed consensus. We are a club of 40+ strong members with expertise in various domains and technologies. Blockchain Club SRM is a student driven community dedicated to improving the web3 sector.",
    social_media: {
      instagram: "https://www.instagram.com/blockchainsrm/",
      x: "https://x.com/BlockchainSRM",
      linkedin: "https://www.linkedin.com/company/blockchain-club-srm/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "Google Developers Student Club",
    type: "Developers Club",
    description:
      "Google Developer Student Club (GDSC) is a program for university students to learn mobile and web development. Open to all skill levels, GDSC offers a space to explore ideas, collaborate, and enhance development skills. Join us to innovate and solve development challenges together!",
    social_media: {
      instagram: "https://www.instagram.com/gdsc.srm/",
      x: "https://x.com/gdscsrm",
      linkedin: "https://www.linkedin.com/company/gdgsrm/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "HackTheBox",
    type: "Cyber Security Club",
    description:
      "HackTheBox SRMIST focuses on training the next-gen of cyber-warriors transforming the cyber space in SRMIST and beyond.",
    social_media: {
      instagram: "https://www.instagram.com/htbsrmist/",
      x: "https://x.com/htbsrmist",
      linkedin: "https://www.linkedin.com/company/htbsrmist/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "SRMKZILLA",
    type: "Technology Club",
    description:
      "SRMZKILLA is an open-source student dev community at SRM Institute of Science and Technology. We bridge the gap between academics and practical skills through collaborative projects, workshops, and hackathons. Our mentorship programs and networking events connect students with industry professionals and alumni.",
    social_media: {
      instagram: "https://www.instagram.com/srmkzilla/",
      x: "https://x.com/SRMKZILLA_Club",
      linkedin: "https://www.linkedin.com/company/srmkzilla/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "Newton School Coding Club",
    type: "Coding Club",
    description:
      "Welcome to Newton School Coding Club SRM! We're proud to offer an excellent platform for students who want to do well in coding and technology. Our club has three parts: Technical, Creatives, and Non-Technical. Each part helps you learn and grow in different ways. We organize fun events that teach you a lot.",
    social_media: {
      instagram: "https://www.instagram.com/nscc_srm/",
      x: "https://x.com/nsccsrm?lang=en",
      linkedin:
        "https://www.linkedin.com/company/newton-school-coding-club-srmist/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "GitHub Community",
    type: "Technology Club",
    description:
      "GitHub Community SRM is the foremost student-led community spearheading the Open Source Revolution at SRMIST, Chennai.",
    social_media: {
      instagram: "https://www.instagram.com/githubsrm/?hl=en",
      x: "https://x.com/githubsrm",
      linkedin: "https://www.linkedin.com/company/githubsrm/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "Data Science Community",
    type: "Data Science Club",
    description:
      "We are a technology-driven Data Science-based student-led innovation community at SRM IST. Our aim is to foster development and entrepreneurial skills among students and work as a community that inspires thousands.",
    social_media: {
      instagram: "https://www.instagram.com/dscommunity_srm/",
      x: "https://x.com/dscommunitysrm",
      linkedin: "https://www.linkedin.com/company/dscommunitysrm/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "DBug Labs",
    type: "Technology Club",
    description:
      "Found a bug? You came to the right place to fix it. We are a team that wants to make a big change in the ever-changing programming and software development world.",
    social_media: {
      instagram: "https://www.instagram.com/dbuglabs/",
      x: "https://x.com/dbuglabs",
      linkedin: "https://www.linkedin.com/company/dbuglabs/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "Directorate of Student Affairs",
    type: "Cultural Club",
    description:
      "Welcome to the Directorate of Student Affairs (DSA) at SRMIST, Kattankulathur. We offer students opportunities beyond the classroom with 16 clubs and 8 houses, fostering holistic development and collaboration. Join us to explore your potential and embody SRMIST's motto: LEARN. LEAP. LEAD.",
    social_media: {
      instagram: "https://www.instagram.com/srmist_dsa/",
      x: "https://x.com/dsasrmist",
      linkedin:
        "https://www.linkedin.com/in/directorate-of-student-affairs-srmist-dsa/?originalSubdomain=in",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "AARUUSH - SRM IST",
    type: "Cultural Club",
    description:
      "Since 1985, SRMIST has been a premier institution with over 50,000 students from 64+ countries. It offers top-ranked programs in Engineering, Management, Medicine, Health Sciences, and Science and Humanities. With state-of-the-art facilities, SRMIST is accredited by UGC and NAAC with an 'A++' grade",
    social_media: {
      instagram: "https://www.instagram.com/aaruush_srm/",
      x: "https://x.com/aaruushsrmist",
      linkedin: "https://www.linkedin.com/company/aaruush-srm-ist/",
    },
    recruiting_status: "Recruitments are live",
  },
  {
    title: "Cherry+ Network",
    type: "Technical Club",
    description:
      "We offer internships, skill-development workshops, and courses to students, particularly those who are new to vocational education.We strive to build a community of creative thinkers where students can choose the field they want to follow as a career and receive support as they advance in that profession.",
    social_media: {
      instagram: "https://www.instagram.com/cherry.network/",
      x: null,
      linkedin: "https://www.linkedin.com/company/cherry-network/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "Nextgen Al Club",
    type: "AI Club",
    description:
      "CINTEL's NEXT-GEN AI offers a transformative journey in learning and personal growth. Our club is not just about acquiring knowledge but about preparing for the future by doing. Join us to embark on a memorable journey where learning meets action, and end with tangible success.",
    social_media: {
      instagram: "https://www.instagram.com/next_gen.ai/",
      x: null,
      linkedin: "https://www.linkedin.com/company/cintels-next-gen-ai/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "Quantum Computing Club SRM",
    type: "Quantum Club",
    description:
      "A student-led Quantum community focused on Quantum Education & Skilling to accelerate tomorrow's quantum workforce by providing undergrads exposure to research and training.",
    social_media: {
      instagram: "https://www.instagram.com/quantum_srm/",
      x: null,
      linkedin: "https://www.linkedin.com/company/quantumsrm/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "Coding Ninjas SRM",
    type: "Coding Club",
    description:
      "Welcome to Coding Ninjas Club SRM! We are a community of passionate coders dedicated to exploring technology and creating innovative solutions. Our club hosts events like Hackathons, Workshops, and Gaming Events, encouraging members to use their skills to solve real-world problems.",
    social_media: {
      instagram: "https://www.instagram.com/coding.ninjas/",
      x: "https://x.com/ninjassrm",
      linkedin: "https://www.linkedin.com/company/coding-ninjas-club-srm/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "SRM Qkrishi",
    type: "Quantum Club",
    description:
      "Qrishi to establish the SRM Qkrishi Center of Excellence in Quantum Information and Computing. This interdisciplinary research center focuses on advancing quantum software, algorithms education, and research, supporting India's skilling mission.",
    social_media: {
      instagram: "https://www.instagram.com/sq_quic/",
      x: "https://x.com/sqquic",
      linkedin: "https://www.linkedin.com/company/sq-quic/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "Microsoft Learn Student Ambassadors",
    type: "Technical Club",
    description:
      "Led by Microsoft Learn Student Ambassadors, our technical club Microsoft Learn Student Ambassadors SRM focuses on lighting a fire under zealous and spirited thinkers. Starting years back, we’ve been committed to serving the community. We regularly conduct events, organize workshops, technical talks, webinars, build community projects to develop young minds, and help them recognize and uncover their potential.",
    social_media: {
      instagram: "https://www.instagram.com/mlsa.srm/",
      x: "https://x.com/mlsasrm",
      linkedin: "https://www.linkedin.com/company/mlsa-srm/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "SRM Spikers",
    type: "Sports Club",
    description:
      "Welcome to the Sports Club at SRM! We promote physical fitness, teamwork, and sportsmanship through a variety of activities, including basketball, soccer, tennis, and swimming. Whether you're an experienced athlete or a beginner, join us to stay active, make friends, and enjoy the thrill of competition.",
    social_media: {
      instagram: "https://www.instagram.com/spikers_srm/",
      x: null,
      linkedin: null,
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "Alexa Developers SRM",
    type: "Technical Club",
    description:
      "Our Goal is to build a Community of Voice First developers through alexa Skills Workshops, Events, Hackathons and many more. Join us for an amazing experience on Amazon's Virtual Assistant alexa.",
    social_media: {
      instagram: "https://www.instagram.com/alexadevsrm/",
      x: null,
      linkedin:
        "https://www.linkedin.com/company/alexa-developers-srm?origin=linkedin.com",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "SRM MUN Society",
    type: "Delegation Club",
    description:
      "The SRM MUN Society is a student-led group that organizes Model United Nations events at SRM University. It helps students develop skills in diplomacy, public speaking, and global awareness by engaging in debates on international issues. The society is known for its active participation in MUN conferences and fostering leadership among its members.",
    social_media: {
      instagram: "https://www.instagram.com/srm_munsoc/",
      x: "https://x.com/srm_munsoc",
      linkedin: "https://www.linkedin.com/company/srm-mun-society/",
    },
    recruiting_status: "Recruiting",
  },
  {
    title: "CodeNex SRMIST",
    type: "Technical Club",
    description:
      "Code Nex, founded in 2024 at SRM KTR, focuses on app and web development, blockchain, and AI/ML. We offer workshops, projects, and internships, empowering students to excel in tech.",
    social_media: {
      instagram: "https://www.instagram.com/codenex_srmist/",
      x: null,
      linkedin: "https://www.linkedin.com/company/code-nex-club-srmist/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "Sri Ramanujan Mathematics Club",
    type: "Mathematics Club",
    description:
      "The Sri Ramanujan Mathematics Club, established in 1991 under the Department of Mathematics at SRM Engineering College, was the first of its kind in a private engineering college. Since its inception, the club has actively promoted mathematics through events like the Engineering Mathematics Festival (EMF), guest lectures by experts, and the Intra-Collegiate Mathematics Festival (IMF).",
    social_media: {
      instagram: "https://www.instagram.com/rmcatsrm/",
      x: "https://x.com/rmcatsrm",
      linkedin: "https://www.linkedin.com/company/rmcatsrm/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "SRM Team Robocon",
    type: "Robotics Club",
    description:
      "SRM Team Robocon, the Robotics Team of SRM Institute Of Science And Technology, Chennai, focuses on competitive robotics and R&D in various robotic structures and mechanisms. Our diverse team of passionate engineers from different branches and years collaborates to innovate and excel in technology.",
    social_media: {
      instagram: "https://www.instagram.com/srmteamrobocon/",
      x: null,
      linkedin: "https://www.linkedin.com/company/srmteamrobocon/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "E-Cell SRMIST",
    type: "Entrepreneurship Club",
    description:
      "E-Cell, SRMIST is a student-run entrepreneurial body whose aim is to promote entrepreneurship among students. It was currently placed 4th in the list of top 10 performing entrepreneurial organizations nationwide under the NEC(National Entrepreneurship Challenge) conducted by E-Cell, IIT Bombay.",
    social_media: {
      instagram: "https://www.instagram.com/ecell_srmist?utm_medium=copy_link",
      x: null,
      linkedin: "https://www.linkedin.com/company/e-cell-srmist/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "RUDRA - SRM MARS ROVER",
    type: "Robotics Club",
    description:
      "RUDRA is SRM IST's official team for the University Rover Challenge, held annually at the Mars Desert Research Station in Utah. Comprising 25-30 students from various engineering fields, the team focuses on R&D and innovative problem-solving.",
    social_media: {
      instagram: "https://www.instagram.com/team_rudra/",
      x: "https://x.com/srmrudra",
      linkedin: "https://www.linkedin.com/company/srmrudra/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "Liftoff",
    type: "Entrepreneurship Club",
    description:
      "Liftoff is a Cohort-Based Club that helps you build, ship, and capitalize on side projects. We provide structured learning, expert mentorship, and a supportive community to turn your ideas into success.",
    social_media: {
      instagram: "https://www.instagram.com/liftoff.club/",
      x: null,
      linkedin:
        "https://www.linkedin.com/company/liftoffsrm/?originalSubdomain=in",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "The Founders Club SRM",
    type: "Entrepreneurship Club",
    description:
      "Founders Club, the official body of SRM's Directorate of Entrepreneurship and Innovation, aims to cultivate a startup mindset among students. Our vision is to position SRM as a leader in innovation, fostering a dynamic ecosystem where diverse students transform ideas into successful startups and refine their entrepreneurial skills.",
    social_media: {
      instagram: "https://www.instagram.com/club.founders/",
      x: null,
      linkedin: "https://www.linkedin.com/company/foundersclub-srm/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "SRM ACM Student Chapter",
    type: "Technical Club",
    description:
      "The SRM ACM Student Chapter is an official student body under the Department of Computing Technologies. We are affiliated with the renowned organization, the Association for Computing Machinery (ACM). We provide opportunities for networking, growth, and learning. As a technical club, we undertake projects based on the needs in our surroundings.",
    social_media: {
      instagram: "https://www.instagram.com/srm.acm",
      x: null,
      linkedin:
        "https://www.linkedin.com/in/srm-acm-student-chapter-ktr-1801a32b8/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "TEAM CENTINEL",
    type: "Cyber Security Club",
    description:
      "In a rapidly advancing world, technological progress brings both innovation and vulnerabilities. Enter CENTINEL, SRM's pioneering Cybersecurity initiative. It's not just about knowledge; it's about practical application too. This exclusive team is dedicated to hands-on cybersecurity, setting standards by emphasizing the criticality of security measures in today's evolving digital landscape.",
    social_media: {
      instagram: "https://www.instagram.com/teamcentinelsrm/",
      x: null,
      linkedin: "https://www.linkedin.com/company/teamcentinelssrm/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "Directorate of Alumni Affairs",
    type: "Alumni Networking Club",
    description:
      "The Directorate of Alumni Affairs helps you stay connected with past colleagues .Strengthen the bond between SRM University and its Alumni Network. We foster various Alumni chapters across India and internationally with Alumni, students, and faculty members.",
    social_media: {
      instagram: "https://www.instagram.com/srmist_daa/",
      x: null,
      linkedin: "https://www.linkedin.com/in/srmist-daa/?originalSubdomain=in",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "Directorate of Entrepreneurship and Innovation",
    type: "Bootstrappers Council",
    description:
      "DEI supports innovators from idea to product with top-notch resources, mentorship, and funding, while protecting intellectual assets. We aim to foster an entrepreneurial spirit on campus and contribute to a self-reliant nation.",
    social_media: {
      instagram: "https://www.instagram.com/srmdei.official/",
      x: "https://x.com/SRM_DEI",
      linkedin: "https://www.linkedin.com/school/srmdei/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "ACM-W SRM",
    type: "Bootstrappers Council",
    description:
      "ACM-W SRM, Uplifting Women One Code at a Time, is dedicated to empowering women from around the globe by providing them with a platform to shape their own futures. Our mission is to inspire and support women in technology, encouraging them to reach for the stars and beyond through coding and collaboration.",
    social_media: {
      instagram: "https://www.instagram.com/acmwsrm",
      x: "https://x.com/acmwsrm",
      linkedin:
        "https://www.linkedin.com/company/acm-women-srmist-student-chapter/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "TEDxSRMIST",
    type: "Live talks",
    description:
      "TEDXSRMIST, a student-run club, will host interactive talks on campus following TED's guidelines. It will feature experienced speakers from various fields, offering students exposure to new ideas and a platform for aspiring speakers to share their insights.",
    social_media: {
      instagram: "https://www.instagram.com/tedxsrmist/",
      x: null,
      linkedin: "https://www.linkedin.com/company/tedxsrmist/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "SRM Music Club",
    type: "Music Club",
    description:
      "The SRM Music Club is a vibrant community where students come together to explore and celebrate music through performances, workshops, and jam sessions. It fosters creativity, collaboration, and a passion for music among its members.",
    social_media: {
      instagram: "https://www.instagram.com/srmmusicclub/",
      x: null,
      linkedin: null,
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "Movies & Dramatics SRM",
    type: "Drama Club",
    description:
      "The Music and Dramatics Club at SRM University offers a vibrant platform for students to explore and showcase their talents in music and performing arts. It fosters creativity and collaboration through various events, workshops, and performances.",
    social_media: {
      instagram: "https://www.instagram.com/srm.moviesanddramatics.club/",
      x: null,
      linkedin: null,
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "DANCE CLUB SRMIST",
    type: "Dance Club",
    description:
      "The Music and Dramatics Club at SRM University offers a vibrant platform for students to explore and showcase their talents in music and performing arts. It fosters creativity and collaboration through various events, workshops, and performances.",
    social_media: {
      instagram: "https://www.instagram.com/srm.moviesanddramatics.club/",
      x: null,
      linkedin: null,
    },
    recruiting_status: "Not Recuriting",
  },
  {
    title: "IEEE SRMIST",
    type: "Entrepreneurship Club",
    description:
      "IEEE SRM Student Branch is a dynamic community dedicated to fostering technological innovation and excellence. As a proud chapter of the world's largest professional organization, IEEE, we strive to inspire, educate, and empower our members.",
    social_media: {
      instagram: "https://www.instagram.com/ieeesrmist/",
      x: null,
      linkedin: "https://www.linkedin.com/company/ieeesrmist/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "Placfv's",
    type: "SRM Students Placement Team",
    description:
      "Placfv’ is SRM Career Center's student-led team, enhancing placement and internship processes across Corporate, Creatives, Content, and Research & Data. We aim to integrate placement into everyday student life, not just a final-year event.",
    social_media: {
      instagram: "https://www.instagram.com/srmist_placfvs/",
      x: null,
      linkedin: "https://www.linkedin.com/company/srm-placement/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "Team SRMSAT",
    type: "Satellite Research",
    description:
      "Team SRMSAT, part of the Space Systems Laboratory at SRM University, started as a group of students building a nanosatellite. Their first satellite, SRMSAT, launched in 2011 aboard PSLV C-18. They are now working on SRMSAT-2, aiming to push the limits of small satellites beyond Earth.",
    social_media: {
      instagram: "https://www.instagram.com/teamsrmsat/",
      x: null,
      linkedin:
        "https://www.linkedin.com/company/team-srmsat-space-systems-laboratory/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "Qwiklabs SRMIST",
    type: "Developer Club",
    description:
      "Qwiklabs Developers Club at SRM Institute of Science and Technology. We're a passionate Club dedicated to exploring Google cloud. Join us for hands-on labs, workshops and many more, Connect with like-minded peers, Let's push boundaries and grow as developers.",
    social_media: {
      instagram: "https://www.instagram.com/qdc_srmist/",
      x: null,
      linkedin:
        "https://www.linkedin.com/company/qwiklabs-developer-club-srmist/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "IEEE Computer Society SRMIST",
    type: "Technical Society",
    description:
      "The IEEE Computer Society Student Branch Chapter at SRMIST, is a part of the Institute of Electrical and Electronics Engineers (IEEE), and is dedicated to the academic and professional growth of SRM Institute of Science and Technology students in India. It engages in competitions and projects to encourage problem-solving and innovation. In addition to technical pursuits, the chapter emphasizes leadership development, teamwork, and collaboration for students to lead, interact and grow professionally.",
    social_media: {
      instagram: "https://www.instagram.com/ieeecs_srmist/",
      x: "https://x.com/IEEECS_SRMIST",
      linkedin:
        "https://www.linkedin.com/company/ieee-computer-society-srmist/",
    },
    recruiting_status: "Recuriments are live",
  },
  {
    title: "Futurix - SRMIST",
    type: "Technical Club",
    description:
      "Welcome to Futurix, the C.Tech department's official association at SRM KTR! Join us to explore cutting-edge technology, showcase your skills at flagship events like Tech Mesh and Ultron, and network with industry professionals. Embrace endless opportunities and be at the forefront of innovation!",
    social_media: {
      instagram: "https://www.instagram.com/futurix.ctech/",
      x: null,
      linkedin: "https://www.linkedin.com/company/futurix-srmist/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "Networking Nexus SRM",
    type: "Technical Club",
    description:
      "Empowering Students By Providing Multi-Stack Learning Experience Through Industry Grade Development Projects. Join Us To Amplify Creativity, Innovation And Collaboration.",
    social_media: {
      instagram: "https://www.instagram.com/netnexsrm/",
      x: null,
      linkedin: "https://www.linkedin.com/company/networkingnexus/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "SRM SIGKDD STUDENT CHAPTER",
    type: "Technical Club",
    description:
      "We make real-time projects, conduct researches, organize meetups, host events, and workshops primarily focusing on Data Science, Machine Learning, Al, Web Development and more. We guide and teach all those who aspire to work in these fields and help them attain better skills and knowledge.",
    social_media: {
      instagram: "https://www.instagram.com/srmsigkdd/",
      x: "https://x.com/srmsigkdd",
      linkedin: "https://www.linkedin.com/company/srmsigkdd/",
    },
    recruiting_status: "Not Recruiting",
  },
  {
    title: "Zephyr - The literary guild",
    type: "Literary Club",
    description:
      "Official Literary Association under Department of English and Foreign Languages in SRM University , Kattankulathur campus Public Speaking | Literature | Soft Skills",
    social_media: {
      instagram: "https://www.instagram.com/zephyr_srmist/",
      x: null,
      linkedin: "https://www.linkedin.com/company/srm-zephyr-society/",
    },
    recruiting_status: "Unknown",
  },
  {
    title: "IOT Alliance",
    type: "IOT Club",
    description:
      "IoT alliance, or IOTA as we are popularly known, are the only AICTE recognised club. We research issues affecting everyday life, brainstorming innovative solutions, and turning ideas into reality. with a focus on real-world impact, we consistently produce jaw-dropping projects and patents. we’re also known for our hands-on workshops, hackathons, and tech fests, where members dive into ai, IoT, robotics, and more.",
    social_media: {
      instagram: "https://www.instagram.com/iotalliance.srm/",
      x: null,
      linkedin: "https://www.linkedin.com/company/iot-aliance/",
    },
    recruiting_status: "Recuriments are live",
  },
  {
    title: "4ZE Raccing",
    type: "Racing Club",
    description:
      "4ZE Racing is SRM University's official Formula Electric team, designing electric race cars for global Formula Student competitions. We're committed to zero emissions, innovation, and energy efficiency.",
    social_media: {
      instagram: "https://www.instagram.com/4zeracing_srm/",
      x: null,
      linkedin: "https://www.linkedin.com/company/4zeracing/",
    },
    recruiting_status: "Recuriments are live",
  },
];

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClubs = clubs.filter(
    (club) =>
      club.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      club.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      club.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">
        Explore the clubs at SRM KTR Campus
      </h1>
      <div className="relative mb-6">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search clubs..."
          className="pl-10 bg-gray-800 text-white border-gray-700 focus:border-gray-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClubs.map((club, index) => (
          <Card key={index} className="bg-gray-800 text-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold">{club.title}</CardTitle>
              <Badge variant="secondary" className="mt-2">
                {club.type}
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-300 line-clamp-3">
                {club.description}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="flex space-x-2">
                {club.social_media.instagram && (
                  <a
                    href={club.social_media.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                )}
                {club.social_media.linkedin && (
                  <a
                    href={club.social_media.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                {club.social_media.x && (
                  <a
                    href={club.social_media.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
              </div>
              <Badge
                variant={
                  club.recruiting_status === "Not Recruiting"
                    ? "destructive"
                    : "default"
                }
              >
                {club.recruiting_status}
              </Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
