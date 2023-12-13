"use client";
import {Button} from "@/components/Button";
import {CardLogin} from "@/components/CardLogin";
import {Input} from "@/components/Input";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    password: yup.string().required("Senha é obrigatória"),
});

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <main style={{height: "92vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <CardLogin title={"Login"}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label="E-mail:"
                        id="email"
                        {...register("email")}
                        errors={errors.email}
                    />
                    <Input
                        label="Senha:"
                        id="password"
                        type="password"
                        {...register("password")}
                        errors={errors.password}
                    />

                    <Button type="submit" disabled={isSubmitting}>
                        Cadastrar
                    </Button>
                </form>
            </CardLogin>
        </main>

    );
}
