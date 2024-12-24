import React, { useState } from "react";
import { useForm, SubmitHandler, UseFormRegisterReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import PencilIcon from "@/assets/icons/pencil.svg?react";

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
  PROFILE_IMAGE = "profileImage",
}

type FormValues = Record<FieldId, string>;

interface InputFieldProps {
  id: FieldId;
  label: string;
  type?: string;
  register: UseFormRegisterReturn;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = "text",
  register,
  error,
}) => (
  <div className="flex flex-col">
    <Label className="block text-sm font-medium text-gray-700" htmlFor={id}>
      {label}
    </Label>
    <Input
      id={id}
      type={type}
      variant="outline"
      {...register}
      aria-invalid={!!error}
      aria-describedby={`${id}-error`}
    />
    {error && (
      <p id={`${id}-error`} className="text-red-500 text-sm mt-1">
        {error}
      </p>
    )}
  </div>
);

const formFields: { id: FieldId; label: string; type?: string }[] = [
  { id: FieldId.NAME, label: "Your Name" },
  { id: FieldId.USERNAME, label: "Username" },
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
  const [profileImage, setProfileImage] = useState<string>(
    "https://via.placeholder.com/100"
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<FormValues>({
    defaultValues: {
      [FieldId.NAME]: "Charlene Reed",
      [FieldId.USERNAME]: "CharleneReed",
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
    // Implement data submission logic here (e.g., API call)
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        setError(FieldId.PROFILE_IMAGE, {
          type: "manual",
          message: "Please select a valid image file.",
        });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
        clearErrors(FieldId.PROFILE_IMAGE);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-start max-md:flex-col gap-16"
    >
      <div className="relative md:ml-8">
        <img
          src={profileImage}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        <label
          htmlFor="profileImageInput"
          className="absolute flex justify-center items-center w-8 h-8 -right-2 bottom-0 rounded-full bg-accent cursor-pointer"
        >
          <PencilIcon className="fill-white w-4 h-4" />
          <input
            type="file"
            id="profileImageInput"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>
        {errors.profileImage && (
          <p className="text-red-500 text-sm mt-1">
            {errors.profileImage.message}
          </p>
        )}
      </div>

      <div className="flex-1 flex flex-col items-end gap-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {formFields.map(({ id, label, type }) => {
            const registerOptions =
              id === FieldId.EMAIL
                ? {
                    required:
                      label !== "Password" ? "This field is required" : false,
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Please enter a valid email address",
                    },
                  }
                : {
                    required:
                      label !== "Password" ? "This field is required" : false,
                  };

            return (
              <InputField
                key={id}
                id={id}
                label={label}
                type={type}
                register={register(id, registerOptions)}
                error={errors[id]?.message}
              />
            );
          })}
        </div>

        <Button type="submit" className="w-48">
          Save
        </Button>
      </div>
    </form>
  );
}
