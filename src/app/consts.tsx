export const skillsData = [
  {
    name: "Frontend",
    children: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Next.js" },
      { id: 4, name: "Tailwind CSS" },
      { id: 5, name: "Bootstrap" },
      { id: 6, name: "Material UI" },
    ],
  },
  {
    name: "Backend",
    children: [
      { id: 1, name: "Ruby on Rails" },
      { id: 2, name: "Express.js" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "Ruby" },
      { id: 5, name: "Python" },
      { id: 6, name: "SQL" },
    ],
  },
  {
    name: "Unit Testing",
    children: [
      { id: 1, name: "Vitest" },
      { id: 2, name: "Jest" },
      { id: 3, name: "RSpec" },
    ],
  },
  {
    name: "End-to-end Testing",
    children: [
      { id: 1, name: "Cypress" },
      { id: 2, name: "Capybara" },
    ],
  },
  {
    name: "Databases",
    children: [
      { id: 1, name: "PostgreSQL" },
      { id: 2, name: "MySQL" },
      { id: 3, name: "SQLite" },
    ],
  },
  {
    name: "DevOps & CI/CD",
    children: [
      { id: 1, name: "AWS EC2" },
      { id: 2, name: "Heroku" },
      { id: 3, name: "Vercel" },
      { id: 4, name: "GitHub Actions" },
      { id: 5, name: "Jenkins" },
      { id: 6, name: "Docker" },
    ],
  },
  {
    name: "Monitoring",
    children: [
      { id: 1, name: "Logz.io" },
      { id: 2, name: "Honeybadger" },
      { id: 3, name: "Honeycomb" },
      { id: 4, name: "Sentry" },
    ],
  },
  {
    name: "Soft skills",
    children: [
      { id: 1, name: "Attention to detail" },
      { id: 2, name: "Communication" },
      { id: 3, name: "Creativity" },
      { id: 4, name: "Curiosity" },
      { id: 5, name: "Dedication" },
      { id: 6, name: "Empathy" },
      { id: 7, name: "Organization" },
      { id: 8, name: "Resourcefulness" },
    ],
  },
];

export const resumeBullets = [
  {
    index: 0,
    alias: "braven",
    jobTitle: "Senior Software Engineer",
    organization: "Braven",
    datesWorked: "3/2024 – 5/2025",
    summary:
      "Braven is a non-profit organization that empowers promising young people on their path to college graduation and strong first jobs. At Braven, I build user flows to help students from low-income and marginalized backgrounds access resources and opportunities.",
    children: [
      {
        id: 1,
        bullet: `Build and maintain integrations with third-party platforms (Salesforce API, Canvas API, Ruby on Rails, PostgreSQL).`,
      },
      {
        id: 2,
        bullet: `Led accessibility epic to secure a WCAG 2.2 Level AAA VPAT. Identified and resolved accessibility issues.`,
      },
      {
        id: 3,
        bullet: `Collaborated cross-functionally to refine, build, and QA user-facing features (Ruby on Rails, Docker).`,
      },
      {
        id: 4,
        bullet: `Developed an encrypted token system to address signup friction, reducing related product support issues.`,
      },
      {
        id: 5,
        bullet: `Set up tools and processes to streamline workflows, documentation, and collaboration for a team of six developers.`,
      },
      {
        id: 6,
        bullet: `Mentored junior developers and shaped team's technical strategy, processes, and culture.`,
      },
    ],
  },
  {
    index: 1,
    alias: "tmp",
    jobTitle: "Software Engineer",
    organization: "The Mom Project",
    datesWorked: "11/2021 – 9/2023",
    summary:
      "The Mom Project is a digital talent marketplace and community that connects professionally accomplished job seekers with world-class companies. I worked on the Growth team, which was focused on user acquisition and retention.",
    children: [
      {
        id: 1,
        bullet: `Built, tested, and debugged features to enhance user flows to
            improve user acquisition and retention: log in, sign up, and job
            post creation (Rails, React.js).`,
      },
      {
        id: 2,
        bullet: `Planned and led engineering work for several high-impact epics.
            Clarified engineering effort and scope, synthesized feature
            requests, and documented technical specifications. Wrote user
            stories and acceptance criteria for ticket creation.`,
      },
      {
        id: 3,
        bullet: `Built reusable components for a migration from Rails codebase to a
            brand new front-end architecture (Next.js, React.js, TypeScript),
            leveraging integrations between our data structures,
            microservices, and APIs.`,
      },
      {
        id: 4,
        bullet: `Contributed to the creation and maintenance of a new design system
            and component UI library (Material UI, Storybook).`,
      },
      {
        id: 5,
        bullet: `Participated in feature prioritization, architecture discussions,
            and code reviews across four distinct repositories.`,
      },
      {
        id: 6,
        bullet: `Developed a new, responsive site navigation for logged-out and logged-in user experiences (React).`,
      },
      {
        id: 7,
        bullet: `Setup transactional emails with new content and designs,
            following two major company re-brands. Wrote application logic to
            implement email-related workers and triggers (React, Rails,
            SendGrid, Sidekiq).`,
      },
    ],
  },
  {
    index: 2,
    alias: "cfa",
    jobTitle: "Software Engineering Fellow",
    organization: "Code for America",
    datesWorked: "10/2020 – 7/2021",
    summary: `Code for America is a non-profit organization that uses the principles and practices of the tech industry to improve how government provides public services to Americans. As a Software Engineering fellow, I worked with a government agency of Adams County, Colorado to build an app that helped people experiencing homelessness access temporary shelter.`,
    children: [
      {
        id: 1,
        bullet: `Researched, project managed, designed, and developed a web app
        that streamlines the intake process to help people experiencing
        homelessness access shelter during cold weather periods, in
        partnership with Adams County, Colorado.`,
      },
      {
        id: 2,
        bullet: `Performed user research to better understand the needs of people experiencing homelessness and to better understand the technology needs of caseworkers who serve them.`,
      },
      {
        id: 3,
        bullet: `Investigated customer issues and supported data integrity of our
        database. Identified and addressed a data quality issue in which a
        portion of intake form responses were not being collected (SQL).`,
      },
      {
        id: 4,
        bullet: `Produced wireframes and interactive prototypes for an intake form on mobile, tablet, and desktop (Figma, usability testing).`,
      },
      {
        id: 5,
        bullet: `Implemented an admin portal to enable caseworkers to perform critical administrative tasks (Ruby on Rails, React). Expanded the app's admin functionality to allow for storage
        of non-contiguous intake periods (Rails).`,
      },
      {
        id: 6,
        bullet: `Wrote unit tests and validations for program activation dates and
        intake dates to expand application test coverage (Rails).`,
      },
    ],
  },
  {
    index: 3,
    alias: "acumen",
    jobTitle: "Data and Policy Analyst - Statistical Programmer",
    organization: "Acumen",
    datesWorked: "1/2020 – 2/2021",
    summary:
      "Acumen is a government consulting firm that provides data-driven solutions to federal agencies. I analyzed data from the Medicare Diabetes Prevention Program, a health behavior change program that helps people prevent Type 2 diabetes.",
    children: [
      {
        id: 1,
        bullet: `Analyzed claim line-level data to produce summary statistics (SAS)
        pertaining to weight loss and attendance outcomes under the
        Medicare Diabetes Prevention Program, administered by the Centers
        for Medicare and Medicaid Services.`,
      },
      {
        id: 2,
        bullet: `Produced reports to monitor beneficiary and claim trends, flag
        adverse/positive selection by suppliers, and audit program
        compliance.`,
      },
      {
        id: 3,
        bullet: `Transformed datasets to create contact lists of suppliers,
        enabling the business to contact these suppliers and enforce
        compliance requirements, in accordance with federal data
        governance and policies (SQL, SAS).`,
      },
    ],
  },
  {
    index: 4,
    alias: "uber",
    jobTitle: "Data Analyst",
    organization: "Uber",
    datesWorked: "9/2018 – 7/2019",
    summary: `On the Uber Eats team, I analyzed data on user retention and acquisition and helped to inform an overarching product roadmap.`,
    children: [
      {
        id: 1,
        bullet: `Built pipelines for querying and analysis using Uber's
        internal ingestion tools.`,
      },
      {
        id: 2,
        bullet: `Wrote complex queries to build dashboard on growth KPIs, such as
        retention and average revenue per user (SQL).`,
      },
      {
        id: 3,
        bullet: `Visualized platform activity of engaged users. Informed decision
        on whether to pursue targeted marketing (SQL, Tableau).`,
      },
      {
        id: 4,
        bullet: `Analyzed week-over-week onboarding of Uber Eats sellers to better
        understand ramp time, enabling Sales Operations team to establish
        reasonable quota (SQL, Python).`,
      },
      {
        id: 5,
        bullet: `Assessed the influence of a payment-code program on spending
        behaviors of new and existing customers (SQL, R).`,
      },
    ],
  },
  {
    index: 5,
    alias: "cm",
    jobTitle: "Data Associate",
    organization: "Change Machine",
    datesWorked: "10/2017 – 4/2018",
    summary: `Change Machine is a financial coaching platform that helps low-income individuals build assets and reduce debt. I worked as an analyst to track the financial outcomes of clients and evaluate the efficacy of our programs.`,
    children: [
      {
        id: 1,
        bullet: `Developed reports to track achievement in financial outcomes of 70,000 low-income New York City residents. Created dashboards on deliverables to support continued funding and partnerships (Salesforce, Excel, SQL).`,
      },
      {
        id: 2,
        bullet: `Streamlined the intake of raw datasets from internal and external data stores. Cleaned, queried, and visualized financial-coaching data to help produce fact sheets and publications (SQL, Python).`,
      },
      {
        id: 3,
        bullet: `Provided technical support and fulfilled data requests from caseworkers, product managers, and Executive leadership, juggling competing priorities.`,
      },
      {
        id: 4,
        bullet: `Queried and visualized financial-coaching data to aid in the production of fact sheets, publications, and policy proposals. Examined financial-coaching data for trends in consumer behavior (Python) to develop the Clinic’s policy agenda.`,
      },
    ],
  },
  {
    index: 6,
    alias: "aclu",
    jobTitle: "Legal Assistant",
    organization: "ACLU",
    team: "Speech, Privacy, and Technology Project",
    datesWorked: "4/2016 – 10/2017",
    summary: `The ACLU is a non-profit organization that works to defend and preserve individual rights and liberties. I supported a team of attorneys on the Speech, Privacy, and Technology Project, which focuses on the intersection of privacy and free speech in the digital age.`,
    children: [
      {
        id: 1,
        bullet: `Edited and cite-checked legal briefs, adhering to a detailed system of citation rules.`,
      },
      {
        id: 2,
        bullet: `Wrote and filed Freedom of Information Act requests and appeals with over 30 government agencies.`,
      },
      {
        id: 3,
        bullet: `Validated data claims made by the ACLU in U.S. v. Gilton and in the U.S. Supreme Court case, U.S. v. Carpenter, through analysis of cell site location information and electronic search warrant notifications, respectively (Excel, Python).`,
      },
    ],
  },
];

export const articles = [
  {
    id: 1,
    organizationName: `Code for America`,
    title: `When a Cool, Shiny App Wont Cut It: Recognizing the Limits of Technology in Addressing Homelessness`,
    summary: `Working to find housing solutions for people experiencing homelessness shows that technology is just one piece of the puzzle`,
    href: "https://codeforamerica.org/news/limits-technology-homelessness/",
    src: "https://files.codeforamerica.org/2021/05/09204729/swap-e1621447855163.jpg",
    alt: `A long line of people stand waiting for intake to the SWAP program outside a building with the title Historic City Hall. It is a bright day in winter, with no leaves on nearby trees.`,
  },
  {
    id: 2,
    organizationName: `Code for America`,
    title: `Meet the Community Fellows: Team Adams County`,
    summary: `An interview with the Adams County Fellows on housing stability as a human right and using technology to make a positive impact`,
    href: "https://codeforamerica.org/news/meet-the-community-fellows-team-adams-county/",
    src: "https://files.codeforamerica.org/2021/05/28124636/Adams_County_Government_Center-300x210.jpeg",
    alt: "The Adams County Government Center is a large building with the Colorado and US flags flown outside.",
  },
  {
    id: 3,
    organizationName: `Digital Privacy News`,
    title: `'A Terrible Idea'`,
    summary: `Amazon Expands Contactless Palm Technology During Pandemic`,
    href: "https://web.archive.org/web/20230922075054/https://digitalprivacy.news/2021/04/13/a-terrible-idea/",
    src: "/images/amazon-one-palm-scanner.jpg",
    alt: "a photo of a hand hovering over a blue grid representing a palm scanner",
  },
  {
    id: 4,
    organizationName: `Digital Privacy News`,
    title: `'Giving It Out Like Candy'`,
    summary: `Calif. Bill Seeks to Stop Police From Unbridled License-Plate Data Collection`,
    href: "https://web.archive.org/web/20230922080456/https://digitalprivacy.news/2021/04/16/giving-it-out-like-candy",
    src: "/images/alpr-software.jpg",
    alt: "a screenshot of software used by law enforcement to view license plate data",
  },
  {
    id: 5,
    organizationName: `ACLU`,
    title: `ACLU FOIA Seeks Information About How Government Launders Evidence`,
    summary: `The ACLU filed a Freedom of Information Act (FOIA) request seeking records related to “parallel construction.”`,
    href: "https://www.aclu.org/news/privacy-technology/aclu-foia-seeks-information-about-how-government",
    src: "https://www.aclu.org/wp-content/uploads/2019/09/surveillance_equip_by_thomas_hawk_credit-1000x666.jpg",
    alt: "",
  },
];

export const projects = [
  {
    id: 1,
    projectName: `Dish Deets`,
    summary: `ChatGPT-powered dish identifier for dishes from cuisines around the world`,
    tags: ["Ruby on Rails", "OpenAI API", "NextJS", "React with TypeScript"],
    href: "https://dishdeets.com",
    src: "dish-deets.jpg",
    alt: "a web page showing search results from a dish description written in English",
  },
  {
    id: 2,
    projectName: `Ward Wise`,
    summary: `Neighborhood spending in Chicago`,
    tags: ["NextJS", "Tailwind CSS", "React with TypeScript"],
    href: "https://www.wardwisechicago.org",
    src: "ward-wise.jpg",
    alt: "map of neighborhood spending in Chicago and search bar",
  },
  {
    id: 3,
    projectName: `Caring for Girls`,
    summary: `Reproductive care for women and girls in Sierra Leone`,
    tags: ["Wordpress", "HTML", "CSS"],
    href: "https://caringforgirls.org",
    src: "caring-for-girls.jpg",
    alt: "a girl wearing a backpack, standing with her peers, smiles at the camera",
  },
  {
    id: 4,
    projectName: `Air Quality Index (AQI) Viewer`,
    summary: `Air Quality Index (AQI) viewer`,
    tags: ["React", "Tailwind CSS"],
    href: "https://fionatagious.github.io/aqi-viewer/",
    src: "aqi-viewer.jpg",
    alt: "displays air quality in a handful of cities around the world",
  },
  {
    id: 5,
    projectName: `Severe Weather Action Plan app`,
    summary: `Emergency shelter for people experiencing homelessness in Adams County, Colorado`,
    tags: ["Ruby on Rails", "React"],
    href: "https://swapp-1.herokuapp.com/users/sign_in",
    src: "swapp.jpg",
    alt: "news reports of Denver's 2021 blizzard becoming the #4 largest snowstorm of all-time",
  },
];

export const leadershipData = [
  {
    role: "Member",
    organization: "Chicago Hack Night",
    date: "9/2023 – Present",
    description:
      "Work on public service projects with a community of civic-minded technologists. Build user-focused apps to enhance public services in Chicago.",
  },
  {
    role: "Web Developer",
    organization: "Radical Engineers",
    date: "9/2023 – 3/2024",
    description:
      "Partner with social impact organizations to build software that helps them achieve their missions.",
  },
  {
    role: "Founder & Co-Chair",
    organization: "The Mom Project, Tapistry",
    date: "1/2023 – 9/2023",
    description:
      "Founded the first AAPI Employee Resource Group at The Mom Project. Recruited new members and organized company-wide events to build community and bring awareness to issues impacting the AAPI community.",
  },
  {
    role: "Community Organizer & Canvasser",
    organization: "Community Democracy Project",
    date: "6/2019 – 8/2022",
    description:
      "Gathered signatures for a grassroots campaign to amend the City of Oakland charter to enable participatory budgeting.",
  },
  {
    role: "Finance and Advancement Chair",
    organization: "New Leaders Council",
    date: "6/2021 – 7/2022",
    description:
      "Lead the Fundraiser & Capstone components of the NLC Oakland fellowship. Collaborate with Board members on recruitment and selections of fellows. Develop curriculum content, plan events and fundraisers, and connect with local political leaders.",
  },
  {
    role: "Cohort Co-Chair & Finance Committee Co-Lead",
    organization: "New Leaders Council",
    date: "1/2021 – 6/2021",
    description:
      "Developed fundraising strategies to reach 2021 fellowship cohort's fundraising goal of $20k. Established Finance Committee processes and project management tools. Served as liaison between Finance Committee and Oakland Chapter Board.",
  },
];
