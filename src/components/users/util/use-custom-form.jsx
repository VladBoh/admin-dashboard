import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useCustomForm = (schema, defaultValues) => {
    const form = useForm({
        defaultValues,
        mode: "onSubmit",
        resolver: zodResolver(schema),
    });

    return form;
};
