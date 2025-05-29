const Tag = ({ label }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="flex items-center rounded-full bg-indigo-400/10 px-3 py-1 text-xs font-medium leading-5 text-eggplant">
        {label}
      </span>
    </div>
  );
};

export default Tag;
