import { ReactNode } from 'react';

type PageHeaderProps = {
    title: string;
    description?: string;
    icon?: ReactNode;
};

export default function PageHeader({ title, description, icon }: PageHeaderProps) {
    return (
        <div className="mb-6 border-b border-gray-200 pb-4 flex items-start gap-4">
            {icon && (
                <div className="text-primary-600 text-3xl">
                    {icon}
                </div>
            )}
            <div>
                <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
                {description && (
                    <p className="mt-1 text-sm text-gray-500">{description}</p>
                )}
            </div>
        </div>
    );
}
