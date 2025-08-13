import { Link } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { ButtonHTMLAttributes, useState } from 'react';

export default function ConfirmButton({
    className = "",
    disabled,
    label,
    url,
    message="Are you sure ?",
    yesText,
    noText,
    ...props
}: {
    className?: string;
    disabled?: boolean;
    url: string;
    label: string;
    message?: string;
    yesText?: string;
    noText?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
    const { t } = useLaravelReactI18n();

    const [collapse, setCollapse] = useState(false);

    return (
        <div
            className={
                (collapse == true ? " pl-4 " : " w-[auto] ") +
                " duration-300 ease-in-out transition-all inline-flex bg-red-100 rounded-lg"
            }
        >
            {collapse && (
                <span className="self-center mr-4 text-red-900">
                    {message?? t("confirmButton.danger.message")}
                </span>
            )}
            <div className="ml-auto ">
                {collapse && (
                    <Link
                        method="delete"
                        href={url}
                        as='button'
                        className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-l-md hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                        {/* {t("confirmButton.danger.yes")} */}
                        Yes
                    </Link>
                )}
                <span
                    onClick={() => setCollapse(!collapse)}
                    className={
                        `${
                            collapse
                                ? " bg-slate-600 hover:bg-slate-500 active:bg-slate-700 rounded-r-md focus:outline-none focus:ring-2 focus:ring-slate-500 "
                                : " bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 "
                        } inline-flex cursor-pointer items-center px-4 py-2   border border-transparent font-semibold text-xs text-white uppercase tracking-widest  focus:ring-offset-2 transition ease-in-out duration-150 ${
                            disabled && "opacity-25"
                        } ` + className
                    }
                >
                    <span>
                        {/* {collapse ? t("confirmButton.danger.no") : label} */}
                        {collapse ? "No" : label}
                    </span>
                </span>
            </div>
        </div>
    );
}
