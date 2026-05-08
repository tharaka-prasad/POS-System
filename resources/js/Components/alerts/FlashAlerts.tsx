import type { Flash } from "@/types";
import DangerAlert from "../elements/alerts/DangerAlert";
import SuccessAlert from "../elements/alerts/SuccessAlert";

export default function FlashAlerts({ flash }: { flash: Flash }) {
  let isSuccessArray = Array.isArray(flash?.success);
  let isErrorArray = Array.isArray(flash?.error);

  return (
    <>
      {flash?.success && (
        <SuccessAlert
          key={isSuccessArray ? flash.success[1] : String(flash.success)}
          title="Success"
          message={isSuccessArray ? String(flash.success[0]) : String(flash.success)}
        />
      )}

      {flash?.error && (
        <DangerAlert
          key={isErrorArray ? flash.error[1] : String(flash.error)}
          title="Error"
          message={isErrorArray ? String(flash.error[0]) : String(flash.error)}
        />
      )}
    </>
  );
}
