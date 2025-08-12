import { useEffect, FormEventHandler } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import Checkbox from '@/Components/elements/inputs/Checkbox';
import InputError from '@/Components/elements/inputs/InputError';
import InputLabel from '@/Components/elements/inputs/InputLabel';
import TextInput from '@/Components/elements/inputs/TextInput';
import AppLayout from '@/Layouts/AppLayout';


export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false as boolean,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <AppLayout isFooter={false}
            isHeader={false}

        >
            <Head title="Log in" />
             <div className="flex flex-col items-center justify-center h-full min-h-screen pt-6 mt-20 bg-white sm:pt-0">
                <div className="w-full px-6 py-10 space-y-6 overflow-hidden bg-white sm:border sm:shadow-md sm:px-14 sm:max-w-md sm:rounded-lg">
                    {status && <div className="mb-4 text-sm font-medium text-green-600">{status}</div>}
                    <h1 className="text-3xl font-medium text-center font-Inter ">Log in to Ekrain POS System</h1>


            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 block">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e: { target: { checked: any; }; }) =>
                                setData(
                                    'remember',
                                    (e.target.checked || false) as false,
                                )
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="mt-4 flex items-center justify-end">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <button className="ms-4" disabled={processing}>
                        Log in
                    </button>
                </div>
            </form>
             <div className="flex items-center justify-center mt-4">
                        <span className="mr-2 text-md text-textSecondary">Don’t have an Crown-CRM account?</span>
                        <Link href={route('register')} className="font-medium text-md font-Inter text-nowrap text-primary hover:text-primary-500">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
