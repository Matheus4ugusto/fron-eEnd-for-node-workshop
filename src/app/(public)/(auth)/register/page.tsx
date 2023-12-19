"use client";

import {CardLogin} from "@/components/CardLogin";
import {Container} from "./style";
import {Input} from "@/components/Input";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import {Button} from "@/components/Button";
import {ChangeEvent} from "react";
import {createUser, CreateUser} from "@/services/user.service";
import {useRouter} from "next/navigation";

const schema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    password: yup.string().required("Senha é obrigatória"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), undefined], "Senhas não conferem")
        .required("Confirmação de senha é obrigatória"),
    gender: yup.string().required("Informe o seu gênero"),
    birthDate: yup.string().required(),
});

export default function RegisterPage() {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        setValue,
        setError
    } = useForm({
        resolver: yupResolver(schema),
    });
    const route = useRouter();

    const onSubmit = async (payload: CreateUser) => {
        delete payload.confirmPassword
        try {
            const {data} = await createUser(payload);
            route.push("/login")
        } catch (error: any) {
            if (error.response.status && error.response.status == 422) {
                const {errors} = error.response.data;

                for (let errorField of errors) {
                    setError(errorField, errorField.error)
                }
            }
        }
    };

    return (
        <Container>
            <CardLogin title={"Cadastre-se"}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label="Nome"
                        id="name"
                        {...register("name")}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setValue("name", e.target.value)}
                        errors={errors.name}
                        aria-label="Input de nome"
                        name="Input de nome"
                    />
                    <Input
                        label="E-mail"
                        id="email"
                        {...register("email")}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setValue("email", e.target.value)}
                        errors={errors.email}
                        aria-label="Input de email"
                        name="Input de email"
                    />
                    <Input
                        label="Gênero"
                        id="gender"
                        {...register("gender")}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setValue("gender", e.target.value)}
                        errors={errors.gender}
                        aria-label="Input de gênero"
                        name="Input de gênero"
                    />
                    <Input
                        label="Data de Nascimento"
                        id="birthDate"
                        type="date"
                        {...register("birthDate")}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setValue("birthDate", e.target.value)}
                        errors={errors.birthDate}
                        aria-label="Input de data de nascimento"
                        name="Input de data de nascimento"
                    />
                    <Input
                        label="Senha"
                        id="password"
                        type="password"
                        {...register("password")}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setValue("password", e.target.value)}
                        errors={errors.password}
                        aria-label="Input de senha"
                        name="Input de senha"
                    />
                    <Input
                        label="Confirme a senha"
                        id="confirmPassword"
                        type="password"
                        {...register("confirmPassword")}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setValue("confirmPassword", e.target.value)}
                        errors={errors.confirmPassword}
                        aria-label="Input de confirmação de senha"
                        name="Input de confirmação de senha"
                    />
                    <Button type="submit" disabled={isSubmitting} aria-label="Cadastrar" name="Cadastrar">
                        Cadastrar
                    </Button>
                </form>
            </CardLogin>
        </Container>
    );
}
