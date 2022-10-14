import { Checkbox } from "@radix-ui/react-checkbox";
import { EnvelopeSimple, Lock } from "phosphor-react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { SVGHome } from "../components/SVGHome";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { FormEvent, useState } from "react";
import axios from 'axios'

export function SignIn() {

  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    await axios.post('/sections', {
      email: 'maycom.willams@gmail.com',
      password: '111222333',
    })

    setIsUserSignedIn(true)

  }

  return (
    <div className='w-screen h-full text-gray-100 flex flex-col items-center justify-center bg-gray-900'>
      <header className='flex items-center flex-col'>
        <SVGHome />
        <Heading size='xlg' className='text-gray-100'>Ignite Lab</Heading>
        <Text size='md' className='text-gray-200'>Faça login e comece a usar!</Text>
      </header>
      <form onSubmit={handleSignIn} className='flex flex-col gap-4 items-stretch mt-8 w-full max-w-sm'>
        {isUserSignedIn && <Text>Login realizado!</Text>}
        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text className='text-sm font-semibold'>
            Endereço de E-mail
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <EnvelopeSimple />
            </TextInput.Icon>
            <TextInput.Input type='email' id='email' placeholder='Digite seu e-mail' />
          </TextInput.Root>
        </label>
        <label htmlFor='password' className='flex flex-col gap-3'>
          <Text className='text-sm font-semibold'>
            Sua senha
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type='password' id='password' placeholder='Digite sua senha' />
          </TextInput.Root>
        </label>

        <label htmlFor='remember' className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Text size='sm' className='text-gray-200'>Lembrar-me de mim por 30 dias!</Text>
        </label>

        <Button type='submit'>
          Entrar na plataforma
        </Button>
      </form>
      <footer className='mt-4 flex flex-col items-center gap-2 mb-8'>
        <Text asChild size='sm'>
          <a href='' className='text-gray-400 underline transitions-colors hover:text-gray-200'>Esqueceu sua senha?</a>
        </Text>
        <Text asChild size='sm'>
          <a href='' className='text-gray-400 underline transitions-colors hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
        </Text>

      </footer>
    </div>
  )
}