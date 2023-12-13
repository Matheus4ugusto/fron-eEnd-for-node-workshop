"use client";

import { CardLogin } from "@/components/CardLogin";
import { Container } from "./style";
import { Input } from "@/components/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "@/components/Button";

const schema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Senhas não conferem")
    .required("Confirmação de senha é obrigatória"),
});

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container>
      <CardLogin title={"Cadastre-se"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Nome"
            id="name"
            {...register("name")}
            errors={errors.name}
          />
          <Input
            label="E-mail"
            id="email"
            {...register("email")}
            errors={errors.email}
          />
          <Input
            label="Senha"
            id="password"
            type="password"
            {...register("password")}
            errors={errors.password}
          />
          <Input
            label="Confirme a senha"
            id="confirmPassword"
            type="password"
            {...register("confirmPassword")}
            errors={errors.confirmPassword}
          />
          <Button type="submit" disabled={isSubmitting}>
            Cadastrar
          </Button>
        </form>
      </CardLogin>
    </Container>
  );
}
