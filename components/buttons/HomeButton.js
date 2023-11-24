import { Wrapper } from "./StyledButton";
import Link from "next/link";

export default function HomeButton() {
  return (
    <Link href="/" passHref>
      <Wrapper buttonColor="#d79eff">Home</Wrapper>
    </Link>
  );
}
