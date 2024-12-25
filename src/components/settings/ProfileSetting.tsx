import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/date-picker";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import PencilIcon from "@/assets/icons/pencil.svg?react";
import { User, UserFieldId } from "@/types";
import { useStore } from "@/store/useStore";

interface InputFieldProps {
  id: UserFieldId;
  label: string;
  type?: string;
  register: any;
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
      className={`mt-1 block w-full ${
        error ? "border-red-500" : "border-gray-300"
      } rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500`}
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

export function ProfileSettings() {
  const user = useStore((state) => state.user);
  const updateUser = useStore((state) => state.updateUser);

  const [profileImage, setProfileImage] = useState<string>("/avatar.jpg");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
    clearErrors,
    setValue,
  } = useForm<User>({
    mode: "onBlur",
    defaultValues: {
      [UserFieldId.NAME]: user?.name || "",
      [UserFieldId.USERNAME]: user?.username || "",
      [UserFieldId.EMAIL]: user?.email || "",
      [UserFieldId.PASSWORD]: "", // This will remain blank for security
      [UserFieldId.DATE_OF_BIRTH]: user?.dateOfBirth || "",
      [UserFieldId.PERMANENT_ADDRESS]: user?.permanentAddress || "",
      [UserFieldId.PRESENT_ADDRESS]: user?.presentAddress || "",
      [UserFieldId.CITY]: user?.city || "",
      [UserFieldId.POSTAL_CODE]: user?.postalCode || "",
      [UserFieldId.COUNTRY]: user?.country || "",
    },
  });

  useEffect(() => {
    // Sync user data with form if it changes
    if (user) {
      setValue(UserFieldId.NAME, user.name || "");
      setValue(UserFieldId.USERNAME, user.username || "");
      setValue(UserFieldId.EMAIL, user.email || "");
      setValue(UserFieldId.DATE_OF_BIRTH, user.dateOfBirth || "");
      setValue(UserFieldId.PERMANENT_ADDRESS, user.permanentAddress || "");
      setValue(UserFieldId.PRESENT_ADDRESS, user.presentAddress || "");
      setValue(UserFieldId.CITY, user.city || "");
      setValue(UserFieldId.POSTAL_CODE, user.postalCode || "");
      setValue(UserFieldId.COUNTRY, user.country || "");
    }
  }, [user, setValue]);

  const onSubmit: SubmitHandler<User> = (data) => {
    updateUser(data);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setError(UserFieldId.PROFILE_IMAGE, {
          type: "manual",
          message: "Please select a valid image file.",
        });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
        clearErrors(UserFieldId.PROFILE_IMAGE);
      };
      reader.readAsDataURL(file);
    }
  };

  const formFields: { id: UserFieldId; label: string; type?: string }[] = [
    { id: UserFieldId.NAME, label: "Your Name" },
    { id: UserFieldId.USERNAME, label: "Username" },
    { id: UserFieldId.EMAIL, label: "Email", type: "email" },
    { id: UserFieldId.PASSWORD, label: "Password", type: "password" },
    {
      id: UserFieldId.DATE_OF_BIRTH,
      label: "Date of Birth",
      type: "date-picker",
    },
    { id: UserFieldId.PRESENT_ADDRESS, label: "Present Address" },
    { id: UserFieldId.PERMANENT_ADDRESS, label: "Permanent Address" },
    { id: UserFieldId.CITY, label: "City" },
    { id: UserFieldId.POSTAL_CODE, label: "Postal Code" },
    { id: UserFieldId.COUNTRY, label: "Country" },
  ];

  const disableDates = (date: Date): boolean => {
    const today = new Date();
    return date > today;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center md:items-start max-md:flex-col gap-16"
    >
      {/* Profile Image Section */}
      <div className="relative md:ml-8">
        <img
          src={profileImage}
          alt="Profile"
          className="size-[100px] md:size-[90px] rounded-full object-cover"
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

      {/* Form Fields Section */}
      <div className="w-full flex-1 flex flex-col items-end gap-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {formFields.map(({ id, label, type }) => {
            if (type === "date-picker") {
              return (
                <div className="flex flex-col" key={id}>
                  <Label
                    className="block text font-medium text-gray-700"
                    htmlFor={id}
                  >
                    {label}
                  </Label>
                  <Controller
                    control={control}
                    name={id}
                    rules={{
                      required: "This field is required",
                      validate: {
                        validDate: (value) => {
                          const [year, month, day] = value!
                            .split("-")
                            .map(Number);
                          const date = new Date(year, month - 1, day);
                          return (
                            !isNaN(date.getTime()) ||
                            "Please select a valid date"
                          );
                        },
                        isOldEnough: (value) => {
                          const [year, month, day] = value!
                            .split("-")
                            .map(Number);
                          const date = new Date(year, month - 1, day);
                          const today = new Date();
                          const eighteenYearsAgo = new Date(
                            today.getFullYear() - 18,
                            today.getMonth(),
                            today.getDate()
                          );
                          return (
                            date <= eighteenYearsAgo ||
                            "You must be at least 18 years old"
                          );
                        },
                      },
                    }}
                    render={({ field }) => {
                      const selectedDate = field.value
                        ? new Date(
                            parseInt(field.value.split("-")[0], 10),
                            parseInt(field.value.split("-")[1], 10) - 1,
                            parseInt(field.value.split("-")[2], 10)
                          )
                        : undefined;

                      const handleSelect = (date: Date | undefined) => {
                        if (date) {
                          const year = date.getFullYear();
                          const month = String(date.getMonth() + 1).padStart(
                            2,
                            "0"
                          );
                          const day = String(date.getDate()).padStart(2, "0");
                          const formattedDate = `${year}-${month}-${day}`;
                          field.onChange(formattedDate);
                        } else {
                          field.onChange("");
                        }
                      };

                      return (
                        <DatePicker
                          selected={selectedDate}
                          onSelect={handleSelect}
                          label={label}
                          className={
                            errors[id] ? "border-red-500 mt-1" : "mt-1"
                          }
                          disabled={disableDates}
                        />
                      );
                    }}
                  />
                  {errors[id] && (
                    <p id={`${id}-error`} className="text-red-500 text-sm mt-1">
                      {errors[id]?.message}
                    </p>
                  )}
                </div>
              );
            } else {
              const registerOptions =
                id === UserFieldId.EMAIL
                  ? {
                      required: "This field is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: "Please enter a valid email",
                      },
                    }
                  : { required: "This field is required" };

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
            }
          })}
        </div>

        <Button type="submit" className="w-48">
          Save
        </Button>
      </div>
    </form>
  );
}
