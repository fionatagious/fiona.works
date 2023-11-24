import { Wrapper } from "./StyledButton";
import Link from "next/link";

export default function EmailButton() {
  return (
    <Link href="mailto:fionatang@alum.berkeley.edu" passHref>
      <Wrapper buttonColor="#3066BE">Email me</Wrapper>
    </Link>
  );
}
