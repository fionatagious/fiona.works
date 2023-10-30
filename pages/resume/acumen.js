import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";

export default function AcumenCard() {
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 1200,
        backgroundColor: "hsla(0, 100%, 0%, 0.7)",
        color: "white",
      }}
      className="my-2"
    >
      <CardContent>
        <Grid container sx={{ display: "flex", alignItems: "center" }}>
          <Grid item>
            <Image
              priority
              src="/images/acumen-logo.jpg"
              className="company-logo"
              height={65}
              width={65}
              alt="acumen-logo"
            />
          </Grid>
          <Grid item sx={{ marginLeft: "0.75rem" }}>
            <div className="hidden sm:block sm:text-xl sm:text-pink sm:leading-7">
              Data and Policy Analyst - Statistical Programmer
            </div>
            <div className="block sm:hidden text-lg sm:text-xl text-pink leading-7">
              Data and Policy Analyst -{" "}
            </div>
            <div className="block sm:hidden text-lg sm:text-xl text-pink leading-7">
              Statistical Programmer
            </div>
            <Typography variant="subtitle2">Acumen, LLC</Typography>
            <Typography variant="subtitle2">1/2020 – 2/2021</Typography>
          </Grid>
        </Grid>
        <div className="text-sm sm:text-md text-white pl-3 mt-2">
          <ul className="list-disc">
            <li>
              Analyzed claim line-level data to produce summary statistics (SAS)
              pertaining to weight loss and attendance outcomes under the
              Medicare Diabetes Prevention Program, administered by the Centers
              for Medicare and Medicaid Services.
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
      </CardContent>
    </Card>
  );
}
