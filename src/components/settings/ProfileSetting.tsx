import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export enum FieldId {
  NAME = "name",
  USERNAME = "username",
  EMAIL = "email",
  PASSWORD = "password",
  DATE_OF_BIRTH = "dateOfBirth",
  PERMANENT_ADDRESS = "permanentAddress",
  PRESENT_ADDRESS = "presentAddress",
  CITY = "city",
  POSTAL_CODE = "postalCode",
  COUNTRY = "country",
}

type FormValues = Record<FieldId, string>;

interface InputFieldProps {
  id: FieldId;
  label: string;
  type?: string;
  register: ReturnType<typeof useForm<FormValues>>["register"];
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  register,
  error,
}) => (
  <div>
    <Label className="block text-sm font-medium text-gray-700" htmlFor={id}>
      {label}
    </Label>
    <Input id={id} variant="outline" {...register(id)} />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const formFields: { id: FieldId; label: string; type?: string }[] = [
  { id: FieldId.NAME, label: "Your Name" },
  { id: FieldId.USERNAME, label: "User Name" },
  { id: FieldId.EMAIL, label: "Email", type: "email" },
  { id: FieldId.PASSWORD, label: "Password", type: "password" },
  { id: FieldId.DATE_OF_BIRTH, label: "Date of Birth", type: "date" },
  { id: FieldId.PRESENT_ADDRESS, label: "Present Address" },
  { id: FieldId.PERMANENT_ADDRESS, label: "Permanent Address" },
  { id: FieldId.CITY, label: "City" },
  { id: FieldId.POSTAL_CODE, label: "Postal Code" },
  { id: FieldId.COUNTRY, label: "Country" },
];

export function ProfileSettings() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      [FieldId.NAME]: "Charlene Reed",
      [FieldId.USERNAME]: "Charlene Reed",
      [FieldId.EMAIL]: "charlenereed@gmail.com",
      [FieldId.PASSWORD]: "",
      [FieldId.DATE_OF_BIRTH]: "1990-01-25",
      [FieldId.PERMANENT_ADDRESS]: "San Jose, California, USA",
      [FieldId.PRESENT_ADDRESS]: "San Jose, California, USA",
      [FieldId.CITY]: "San Jose",
      [FieldId.POSTAL_CODE]: "45962",
      [FieldId.COUNTRY]: "USA",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-start">
      <div className="flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Change Picture
        </button>
      </div>

      <div className="flex flex-col items-end gap-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {formFields.map(({ id, label, type }) => (
            <InputField
              key={id}
              id={id}
              label={label}
              type={type}
              register={register}
              error={errors[id]?.message}
            />
          ))}
        </div>

        <Button type="submit" className="w-[190px]">
          Save
        </Button>
      </div>
    </form>
  );
}
