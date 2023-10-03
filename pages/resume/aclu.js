import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import utils from "/styles/utils.module.css";

export default function ACLUCard() {
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 1200,
        backgroundColor: "hsla(0, 100%, 0%, 0.7)",
      }}
      className="my-2"
    >
      <CardContent>
        <Grid container sx={{ display: "flex" }}>
          <Grid item>
            <Image
              priority
              src="/images/aclu-logo.jpg"
              className={utils.borderLogo}
              height={80}
              width={80}
              alt="aclu-logo"
            />
          </Grid>
          <Grid item sx={{ marginLeft: "0.75rem", alignSelf: "center" }}>
            <div className="text-xl text-pink leading-7">Paralegal</div>
            <div className="text-sm text-white leading-5">American Civil Liberties Union</div>
            <div className="text-sm text-white leading-5">4/2016 – 10/2017</div>
          </Grid>
        </Grid>
        <div className="text-sm text-white pl-3 mt-2">
          <ul>
            <li>
              Edited and cite-checked legal briefs, adhering to the a detailed
              system of citation rules. Wrote and filed Freedom of Information
              Act requests and appeals with over 30 government agencies.
            </li>
            <li>
              Validated data claims made by the ACLU in <i>U.S. v. Gilton</i>{" "}
              and in the U.S. Supreme Court case, <i>U.S. v. Carpenter</i>,
              through analysis of cell site location information and electronic
              search warrant notifications, respectively (Excel, python).
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
