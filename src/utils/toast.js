import { toast } from "react-toastify";

const notifySuccess = (message) =>
  toast.success(message, {
    position: "bottom-center",
  });
const notifyError = (message) =>
  toast.error(message, {
    position: "bottom-center",
  });
const notifyInfo = (message) =>
  toast.info(message, {
    position: "bottom-center",
  });

export { notifyError, notifyInfo, notifySuccess };
