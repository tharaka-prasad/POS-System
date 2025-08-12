import { PageProps } from "@/types";
import SuccessAlert from "./SuccessAlert";
import DangerAlert from "./DangerAlert";

type Flash = {
    success?: string | [string, any];
    error?: string | [string, any];
};

export default function FlashAlerts({ flash }: { flash: Flash }) {
    let isSuccessArray = Array.isArray(flash?.success);
    let isErrorArray = Array.isArray(flash?.error);
    return (
        <>
            {flash?.success && (
                <SuccessAlert
                    key={isSuccessArray ? String(flash?.success[1]) : String(flash?.success)}
                    title="Success"
                    message={
                        isSuccessArray
                            ? (flash?.success[0] as string)
                            : (flash?.success as string)
                    }
                />
            )}

            {flash?.error && (
                <DangerAlert
                    key={isErrorArray ? String(flash?.error[1]) : String(flash?.error)}
                    title="Error"
                    message={
                        isErrorArray
                            ? (flash?.error[0] as string)
                            : (flash?.error as string)
                    }
                />
            )}
        </>
    );
}
