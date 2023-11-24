import { Wrapper } from "./StyledButton";
import Link from "next/link";

export default function ResumeButton() {
  return (
    <Link href="/resume" passHref>
      <Wrapper buttonColor="#d79eff">Resume</Wrapper>
    </Link>
  );
}
