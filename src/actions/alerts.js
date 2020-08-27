import { toast } from "react-toastify";

export const successAlert = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const errorAlert = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};
