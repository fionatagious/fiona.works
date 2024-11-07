export default function SectionHeading({ id, headingText }) {
  return (
    <div
      id={id}
      className="heading font-bold text-md text-center sm:text-left text-2xl sm:text-3xl my-4"
    >
      {headingText}
    </div>
  );
}
