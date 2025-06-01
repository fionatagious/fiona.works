export const ScrollButton = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (!aboutSection) return;

    var headerOffset = 150;
    var elementPosition = aboutSection.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.scrollY - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToAbout}
      className="text-eggplant border-2 border-mauve bg-lightMauve/20 min-h-[80px] min-w-[40px] p-0 rounded-full shadow-xl"
      aria-label="scroll to About section"
    >
      <span></span>
    </button>
  );
};
