function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <div className="flex flex-col items-start">
      <label
        htmlFor="small"
        className="block mb-2 text-sm font-medium text-slate-700 "
      >
        {label}
      </label>
      <select
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
