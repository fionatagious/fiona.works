const Tag = ({ label }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="flex items-center rounded-full text-eggplant bg-lightMauve/20 px-3 py-1 text-xs font-medium leading-5">
        {label}
      </span>
    </div>
  );
};

export default Tag;
