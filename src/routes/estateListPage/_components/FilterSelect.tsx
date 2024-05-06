import { SetStateAction } from "react";

function Select({
  label,
  options,
  onSelect,
  selected,
}: {
  label: string;
  options: string[];
  onSelect: React.Dispatch<SetStateAction<string>>;
  selected?: undefined | string;
}) {
  return (
    <div className="flex flex-col items-start w-full ">
      <label
        htmlFor="small"
        className="md:block  hidden mb-2 text-sm font-medium text-slate-700 "
      >
        {label}
      </label>
      <select
        value={selected}
        onChange={(e) => {
          onSelect(e.target.value);
        }}
        id="small"
        className="block w-full p-2  text-sm text-gray-900 border border-gray-300 rounded-xl max-w-[120px]"
      >
        <option selected>Any</option>
        {options.map((el) => (
          <option key={el}>{el}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
