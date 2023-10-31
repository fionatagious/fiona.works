import * as React from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import ExternalLinkIcon from "/components/icons/ExternalLinkIcon";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
// import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    width: 30,
    backgroundColor: "#635ee7",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-selected": {
      color: "#fff",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

function ExperiencePanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="ExperiencePanel"
      hidden={value !== index}
      id={`vertical-ExperiencePanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

ExperiencePanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-ExperiencePanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          color: "white",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <StyledTabs
          orientation={matches ? "vertical" : "horizontal"}
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="relevant-work-experiences"
          sx={{
            display: "flex",
            borderRight: "3px solid #94a3b8",
            zIndex: 0,
            minWidth: { xs: 200 },
          }}
        >
          <StyledTab
            label="The Mom Project"
            {...a11yProps(0)}
            sx={{ alignSelf: "end" }}
          />
          <StyledTab
            label="Code for America"
            {...a11yProps(1)}
            sx={{ alignSelf: "end" }}
          />
          <StyledTab
            label="Acumen"
            {...a11yProps(2)}
            sx={{ alignSelf: "end" }}
          />
          <StyledTab label="Uber" {...a11yProps(3)} sx={{ alignSelf: "end" }} />
          <StyledTab
            label="Change Machine"
            {...a11yProps(4)}
            sx={{ alignSelf: "end" }}
          />
          <StyledTab label="ACLU" {...a11yProps(5)} sx={{ alignSelf: "end" }} />
        </StyledTabs>
        <ExperiencePanel value={value} index={0}>
          <div className="text-red-200 text-lg">
            Software Engineer, The Mom Project
          </div>
          <div className="text-md sm:text-md text-white mt-2">
            <ul className="list-disc">
              <li>
                Built, tested, and debugged features to enhance user flows to
                improve user acquisition and retention: log in, sign up, and job
                post creation (Rails, React.js).
              </li>
              <li>
                Planned and led engineering work for several high-impact epics.
                Clarified engineering effort and scope, synthesized feature
                requests, and documented technical specifications. Synthesized
                feature requests and product requirements. Developed acceptance
                criteria and wrote user stories for ticket creation.
              </li>
              <li>
                Built reusable components for a migration from Rails codebase to
                a brand new front-end architecture (Next.js, React.js,
                TypeScript), leveraging integrations between our data
                structures, microservices, and APIs.
              </li>
              <li>
                Contributed to the creation and maintenance of a new design
                system and component UI library (Material UI, Storybook).
              </li>
              <li>
                Participated in feature prioritization, architecture
                discussions, and code reviews across four distinct repositories.
              </li>
              <li>
                Built new site navigation (top-level header and footer) and
                updated transactional emails with new content and designs,
                following two major company re-brands. Wrote application logic
                to implement email-related workers and triggers (React, Rails,
                SendGrid, Sidekiq).
              </li>
            </ul>
          </div>
        </ExperiencePanel>
        <ExperiencePanel value={value} index={1}>
          <div className="text-red-200 text-lg">
            Software Engineering Fellow, Code for America
          </div>
          <div className="text-sm sm:text-md text-white pl-3 mt-2">
            <ul className="list-disc">
              <li>
                Researched, project managed, designed, and developed a web app
                that streamlines the intake process to help people experiencing
                homelessness access shelter during cold weather periods, in
                partnership with Adams County, Colorado.
              </li>
              <li>
                Performed user research to better understand the social services
                needs of people experiencing homelessness, and to better
                understand the technology needs of caseworkers working to help
                the unhoused.
              </li>
              <li>
                Investigated customer issues and supported data integrity of our
                database. Identified and addressed a data quality issue in which
                a portion of intake form responses were not being collected
                (SQL).
              </li>
              <li>
                Expanded the app&apos;s admin functionality to allow for storage
                of non-contiguous intake periods (Rails).
              </li>
              <li>
                Wrote unit tests and validations for program activation dates
                and intake dates to expand application test coverage (Rails).
              </li>
              <li>
                Problem solved a technical tradeoff by writing optimized SQL to
                query data that was unattainable using ActiveRecord.
              </li>
            </ul>
          </div>
        </ExperiencePanel>
        <ExperiencePanel value={value} index={2}>
          <div className="text-red-200 text-lg">
            Data and Policy Analyst, Acumen
          </div>
          <div className="text-sm sm:text-md text-white pl-3 mt-2">
            <ul className="list-disc">
              <li>
                Analyzed claim line-level data to produce summary statistics
                (SAS) pertaining to weight loss and attendance outcomes under
                the Medicare Diabetes Prevention Program, administered by the
                Centers for Medicare and Medicaid Services.
              </li>
              <li>
                Produced reports to monitor beneficiary and claim trends, flag
                adverse/positive selection by suppliers, and audit program
                compliance.
              </li>
              <li>
                Transformed datasets to create contact lists of suppliers,
                enabling the business to contact these suppliers and enforce
                compliance requirements, in accordance with federal data
                governance and policies (SQL, SAS).
              </li>
            </ul>
          </div>
        </ExperiencePanel>
        <ExperiencePanel value={value} index={3}>
          <div className="text-red-200 text-lg">Data Analyst, Uber</div>
          <div className="text-sm sm:text-md text-white pl-3 mt-2">
            <ul className="list-disc">
              <li>
                Built pipelines for querying and analysis using Uber&apos;s
                internal ingestion tools, Watchtower and Kirby.
              </li>
              <li>
                Wrote advanced queries to build dashboard on growth KPIs, such
                as retention and average revenue per user (SQL).
              </li>
              <li>
                Visualized platform activity of engaged users. Informed decision
                on whether to pursue targeted marketing (SQL, Tableau).
              </li>
              <li>
                Analyzed week-over-week onboarding of Uber Eats sellers to
                better understand ramp time, enabling Sales Operations team to
                establish reasonable quota (SQL, Python).
              </li>
              <li>
                Assessed the influence of a payment-code program on spending
                behaviors of new and existing customers (SQL, R).
              </li>
            </ul>
          </div>
        </ExperiencePanel>
        <ExperiencePanel value={value} index={4}>
          <div className="text-red-200 text-lg">
            Data Associate, Change Machine{" "}
          </div>
          <div className="text-sm sm:text-md text-white pl-3 mt-2">
            <ul className="list-disc">
              <li>
                Developed reports to track achievement in financial outcomes of
                70,000 low-income New York City residents. Created dashboards on
                deliverables to support continued funding and partnerships
                (Salesforce, Excel, SQL).
              </li>
              <li>
                Streamlined the intake of raw datasets from internal and
                external data stores. Cleaned, queried, and visualized
                financial-coaching data to help produce fact sheets and
                publications (SQL, Python).
              </li>
              <li>
                Provided technical support and fulfilled data requests from
                caseworkers, product managers, and Executive leadership,
                juggling competing priorities.
              </li>
              <li>
                Queried and visualized financial-coaching data to aid in the
                production of fact sheets, publications, and policy proposals.
                Examined financial-coaching data for trends in consumer behavior
                (Python) to develop the Clinic’s policy agenda.
              </li>
            </ul>
          </div>
        </ExperiencePanel>
        <ExperiencePanel value={value} index={5}>
          <div className="text-red-200 text-lg">Paralegal, ACLU</div>
          <div className="text-sm sm:text-md text-white pl-3 mt-2">
            <ul className="list-disc">
              <li>
                Edited and cite-checked legal briefs, adhering to a detailed
                system of citation rules. Wrote and filed Freedom of Information
                Act requests and appeals with over 30 government agencies.
              </li>
              <li>
                Validated data claims made by the ACLU in <i>U.S. v. Gilton</i>
                and in the U.S. Supreme Court case, <i>U.S. v. Carpenter</i>,
                through analysis of cell site location information and
                electronic search warrant notifications, respectively (Excel,
                Python).
              </li>
            </ul>
          </div>
        </ExperiencePanel>
      </Box>
      <a
        href="/resume"
        target="_blank"
        className="items-center flex flex-grow text-red-200 justify-center sm:justify-end"
      >
        View my full resume&nbsp;
        <ExternalLinkIcon />
      </a>
    </>
  );
}
