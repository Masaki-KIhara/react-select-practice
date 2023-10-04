import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import Select from "react-select";
function App() {
  const { handleSubmit, control } = useForm();

  const status: Array<{ value: string; label: string }> = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
  ];

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <form className="grid justify-center" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="status"
        render={({ field }) => (
          <Select
            className="w-[300px] mt-10"
            options={status}
            placeholder={"status"}
            isMulti
            onChange={(newValue) => {
              field.onChange(newValue.map((result) => result.value));
            }}
          />
        )}
      />
      <button className="border border-black w-10 block mx-auto mt-10">
        送信
      </button>
    </form>
  );
}

export default App;
