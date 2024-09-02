export const skillsData = [
  {
    name: "Languages",
    children: [
      { id: 1, name: "HTML5" },
      { id: 2, name: "CSS3" },
      { id: 3, name: "Javascript" },
      { id: 4, name: "SQL" },
      { id: 5, name: "TypeScript" },
      { id: 6, name: "Ruby" },
      { id: 7, name: "Python" },
      { id: 8, name: "R" },
    ],
  },
  {
    name: "Frameworks",
    children: [
      { id: 1, name: "Tailwind CSS" },
      { id: 2, name: "Bootstrap CSS" },
      { id: 3, name: "Next.js" },
      { id: 4, name: "React.js" },
      { id: 5, name: "Ruby on Rails" },
      { id: 6, name: "Material UI" },
      { id: 7, name: "Sidekiq" },
    ],
  },
  {
    name: "Testing",
    children: [
      { id: 1, name: "Jest" },
      { id: 2, name: "Rspec" },
      { id: 3, name: "Capybara" },
    ],
  },
  {
    name: "Version control",
    children: [{ id: 1, name: "Git" }],
  },
  {
    name: "Observability",
    children: [
      { id: 1, name: "Logz.io" },
      { id: 2, name: "Honeybadger" },
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
    alias: "tmp",
    jobTitle: "Software Engineer",
    organization: "The Mom Project",
    datesWorked: "11/2021 – 9/2023",
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
        bullet: `Built a new site navigation (top-level header and footer) that
            included dropdown menus, a toggleable Login/Join modal, and a
            hamburger menu for mobile devices, tablets, and smaller screen
            widths on desktop.`,
      },
      {
        id: 7,
        bullet: `Updated transactional emails with new content and designs,
            following two major company re-brands. Wrote application logic to
            implement email-related workers and triggers (React, Rails,
            SendGrid, Sidekiq).`,
      },
    ],
  },
  {
    index: 1,
    alias: "cfa",
    jobTitle: "Software Engineering Fellow",
    organization: "Code for America",
    datesWorked: "10/2020 – 7/2021",
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
        bullet: `Performed user research to better understand the social services
        needs of people experiencing homelessness, and to better
        understand the technology needs of caseworkers working to help the
        unhoused.`,
      },
      {
        id: 3,
        bullet: `Investigated customer issues and supported data integrity of our
        database. Identified and addressed a data quality issue in which a
        portion of intake form responses were not being collected (SQL).`,
      },
      {
        id: 4,
        bullet: `Expanded the app's admin functionality to allow for storage
        of non-contiguous intake periods (Rails).`,
      },
      {
        id: 5,
        bullet: ` Wrote unit tests and validations for program activation dates and
        intake dates to expand application test coverage (Rails).`,
      },
      {
        id: 6,
        bullet: `Problem solved a technical tradeoff by writing optimized SQL to
        query data that was unattainable using ActiveRecord.`,
      },
    ],
  },
  {
    index: 2,
    alias: "acumen",
    jobTitle: "Data and Policy Analyst - Statistical Programmer",
    organization: "Acumen",
    datesWorked: "1/2020 – 2/2021",
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
    index: 3,
    alias: "uber",
    jobTitle: "Data Analyst",
    organization: "Uber",
    datesWorked: "9/2018 – 3/2019",
    children: [
      {
        id: 1,
        bullet: `Built pipelines for querying and analysis using Uber's
        internal ingestion tools, Watchtower and Kirby.`,
      },
      {
        id: 2,
        bullet: `Wrote advanced queries to build dashboard on growth KPIs, such as
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
    index: 4,
    alias: "cm",
    jobTitle: "Data Associate",
    organization: "Change Machine",
    datesWorked: "10/2017 – 4/2018",
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
    index: 5,
    alias: "aclu",
    jobTitle: "Legal Assistant",
    organization: "ACLU",
    team: "Speech, Privacy, and Technology Project",
    datesWorked: "4/2016 – 10/2017",
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
    href: "https://web.archive.org/web/20230922080456/https://digitalprivacy.news/2021/04/16/giving-it-out-like-candy/",
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
