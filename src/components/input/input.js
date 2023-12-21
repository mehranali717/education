const Input = ({  label, required, error }) => (
  <div className="flex gap-x-[30px] items-center">
    <label className="w-[50px] text-[#76767f] text-[15px] font-[600] capitalize">
      {label}:
    </label>
    <input
    //   {...register(label, { required: required })}
      className="w-[344px] bg-[#f6f7fd] rounded-[4px] px-[10px] py-[8px] border-[1px] border-purple-400"
    />
    {/* {error.label && (
      <span className="text-[red] text-[14px] font-[400]">
        This is required field
      </span>
    )} */}
  </div>
);
export default Input;
