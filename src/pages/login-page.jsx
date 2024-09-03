import { object, string } from "zod";
import { useCustomForm } from "../components/users/util/use-custom-form";

const loginSchema = object({
    email: string().min(1, "Це поле є обов'язковим").email({
        message: "Введіть коректну електронну пошту",
    }),
    password: string()
        .min(1, "Це поле є обов'язковим")
        .min(8, "Пароль повинен містити не менше 8 символів")
        .regex(/[a-z]/, "Пароль повинен містити не менше однієї малої літери")
        .regex(/[A-Z]/, "Пароль повинен містити не менше однієї великої літери")
        .regex(/[0-9]/, "Пароль повинен містити не менше однієї цифри")
        .regex(
            /[!@#$%^&*]/,
            "Пароль повинен містити не менше одного спеціального символу (!@#$%^&*)"
        ),
});

export const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useCustomForm(loginSchema, {
        email: "",
        password: "",
    });

      const onSubmit = (data) => console.log(data)

    return (
        <>
        <div className="flex justify-center items-center h-[695px] bg-blue-200">
            <form className="bg-white rounded-lg w-[250px] h-[200px] py-6 flex flex-col items-center gap-4" onSubmit={handleSubmit(onSubmit)} >
                <input className="outline-0 h-10" 
                    placeholder="Enter your email" 
                    {...register("email")} />
                <input className="outline-0 h-10"
                     type="password"
                     placeholder="Enter your password"
                    {...register("password")} />
                <button className='bg-blue-400 text-white h-[30px] w-[100px] rounded-lg cursor-pointer hover:bg-blue-300'
                        type="submit">
                    submit
                </button>
            </form>
        </div>
        </>
    )
}