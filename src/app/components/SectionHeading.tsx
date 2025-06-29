interface SectionHeadingProps {
  id: string;
  headingText: string;
}

const SectionHeading = ({ id, headingText }: SectionHeadingProps) => {
  return (
    <div
      id={id}
      className="heading font-bold text-md text-center text-2xl sm:text-3xl my-4"
    >
      {headingText}
    </div>
  );
};

export default SectionHeading;
