import { z } from "zod";
export const SignupValidation = z.object({
  name: z.string().min(2, {
    message: "حداقل باید دارای 2 کارارکتر باشد",
  }),
  username: z.string().min(2, {
    message: "حداقل باید دارای 2 کارارکتر باشد",
  }),
  email: z.string().email({ message: "ایمیل معتبر نیست." }),
  password: z.string().min(8, {
    message: "حداقل باید دارای 8 کارارکتر باشد",
  }),
});
export const SigninValidation = z.object({
  email: z.string().email({ message: "ایمیل معتبر نیست." }),
  password: z.string().min(8, {
    message: "حداقل باید دارای 8 کارارکتر باشد",
  }),
});
export const PostValidation = z.object({
  caption: z.string().min(5, { message: "حداقل باید دارای 5 کاراکتر باشد." }).max(2200, { message: "حداکثر2200 کارارکتر" }),
  file: z.custom<File[]>(),
  location: z.string().min(1, { message: "این فیلد الزامی است" }).max(1000, { message: "حداکثر 100 کاراکتر" }),
  tags: z.string(),
});
