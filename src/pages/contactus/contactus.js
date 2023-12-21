import { useForm } from "react-hook-form";
import { Button, Input } from "../../components";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log({ data });
  return (
    <div className="bg-gradient-to-t from-purple-300 via-white to-purple-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[600px] mx-auto py-[25px] flex justify-center py-[40px]"
      >
        <div className="w-[500px] flex flex-col items-start px-[25px] gap-y-[15px]">
          <Input
            type="text"
            register={register}
            label="name"
            required={true}
            error={errors}
          />
          <Input
            type="text"
            register={register}
            label="email"
            required={true}
            error={errors}
          />
          <Input
            type="text"
            register={register}
            label="subject"
            required={true}
            error={errors}
          />
          <div className="flex gap-x-[30px] items-center">
            <label className="w-[50px] text-[#76767f] text-[15px] font-[600]">
              Message:
            </label>
            <div className="flex flex-col">
              <textarea
                type="text"
                className="w-[344px] bg-[#f6f7fd] rounded-[4px] px-[10px] py-[8px] border-[1px] border-purple-400"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <span className="text-[red] text-[14px] font-[400]">
                  This is required field
                </span>
              )}
            </div>
          </div>
          <Button onSubmit={onSubmit} value="Submit" className="ms-[80px]" />
        </div>
      </form>
    </div>
  );
};
export default ContactUs;
