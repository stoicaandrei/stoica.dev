import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from 'components/ui';
import { signin } from 'lib';

const SignInPage: NextPage = () => {
  const router = useRouter();
  const [error, setError] = useState('');

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="w-96 rounded bg-white p-6 shadow-none md:shadow-lg">
        <h1 className="text-3xl font-bold leading-normal">Sign in</h1>
        <p className="text-sm leading-normal">
          Access the hidden admin interface 👻
        </p>
        <SignInForm
          onSubmit={(data) => {
            setError('');
            signin(data.email, data.password)
              .then(() => router.push('/admin'))
              .catch((err) => setError(err.message));
          }}
        />
        <p className="pt-3 text-sm text-gray-500">{error}</p>
      </div>
    </div>
  );
};

type SignInData = {
  email: string;
  password: string;
};
type FormProps = {
  onSubmit: (data: SignInData) => void;
};
const SignInForm = ({ onSubmit }: FormProps) => {
  const { register, handleSubmit } = useForm<SignInData>();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 pt-3"
    >
      <Input {...register('email')} type="email" placeholder="Email" />
      <Input {...register('password')} type="password" placeholder="Password" />
      <button type="submit" className="rounded-full bg-blue-600 p-2 text-white">
        Signin
      </button>
    </form>
  );
};

export default SignInPage;
