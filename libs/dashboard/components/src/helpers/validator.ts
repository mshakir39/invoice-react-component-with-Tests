import { UserUpdateDefaultTemplate } from "../constants";
import { IUserUpdateForm } from "../constants/interfaces";

export const validator = (values: IUserUpdateForm) => {
  const errors: IUserUpdateForm = { ...UserUpdateDefaultTemplate };
  Object.entries(values).forEach(([key, value]) => {
    switch (key) {
      case "email":
        validateEmail(values.email, errors);
        break;
      case "currPw":
        validateCurrentPassword(values, errors);
        break;
      case "newPw":
        validateNewPassword(values, errors);
        break;
      case "newPwConfirm":
        validateConfirmNewPassword(values, errors);
        break;
      default:
    }
  });
  return errors;
};

function validateEmail(email: string | null, errors: IUserUpdateForm) {
  let result = true;
  if (!email) {
    errors.email = "Email is Required";
    result = false;
  } else {
    const re =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    result = re.test(String(email).toLowerCase());
    if (!result) errors.email = "Invalid Email Address";
  }
}

function validateCurrentPassword(
  values: IUserUpdateForm,
  errors: IUserUpdateForm
) {
  if (!values.currPw && (values.newPw || values.newPwConfirm)) {
    errors.currPw = "Current Password is Required";
  }
}

function validateNewPassword(values: IUserUpdateForm, errors: IUserUpdateForm) {
  if (!values.newPw && (values.currPw || values.newPwConfirm)) {
    errors.newPw = "New Password is Required";
  } else {
    if (values.newPw && values.newPw.length < 8) {
      errors.newPw = "New Password has less than 8 characters";
    }
  }
}

function validateConfirmNewPassword(
  values: IUserUpdateForm,
  errors: IUserUpdateForm
) {
  if (!values.newPwConfirm && (values.newPw || values.currPw)) {
    errors.newPwConfirm = "Confirm New Password is Required";
  } else if (
    values.newPw &&
    values.newPwConfirm &&
    values.newPw !== values.newPwConfirm
  ) {
    errors.newPwConfirm =
      "New Password and Confirm New Password does not match";
  }
}
