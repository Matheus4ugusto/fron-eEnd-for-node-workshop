"use client";
import {Button} from "@/components/Button";
import {CardLogin} from "@/components/CardLogin";
import {Input} from "@/components/Input";
import {useAuth} from "@/contexts/AuthContext";
import {login} from "@/services/user.service";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import React from "react";
import {useRouter} from "next/navigation";

const schema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    password: yup.string().required("Senha é obrigatória"),
});

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        setValue
    } = useForm({resolver: yupResolver(schema)});
    const router = useRouter();
    const {singIn} = useAuth();

    const onSubmit = async (data: any) => {
        const {
            data: {token},
        } = await login(data.email, data.password);
        router.push("/")
        singIn(token);
    };

    return (
        <main
            style={{
                height: "92vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <CardLogin title={"Login"}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label="E-mail:"
                        id="email"
                        {...register("email")}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue("email", e.target.value)}
                        errors={errors.email}
                        aria-label="Input de email"
                        name="Input de email"
                    />
                    <Input
                        label="Senha:"
                        id="password"
                        type="password"
                        {...register("password")}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue("password", e.target.value)}
                        errors={errors.password}
                        aria-label="Input de senha"
                        name="Input de senha"
                    />

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        aria-label="Entrar"
                        name="Entrar"
                    >
                        Entrar
                    </Button>
                </form>
            </CardLogin>
        </main>
    );
}
