import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IUserUpdateForm } from "../../../constants/interfaces";
import { validator } from "../../../helpers/validator";
export const UserUpdateDefaultTemplate = {
  email: "",
  currPw: "",
  newPw: "",
  newPwConfirm: "",
};

interface IShowPassword {
  currPw: false;
  newPw: false;
  newPwConfirm: false;
}
interface userUpdateProps {
  userUpdate: {
    email: string;
  };
  onSubmitForm: (user: IUserUpdateForm) => Promise<void>;
}

const UserUpdateForm = ({ userUpdate, onSubmitForm }: userUpdateProps) => {
  const [userForm, setUserForm] = useState<IUserUpdateForm>(() => ({
    ...UserUpdateDefaultTemplate,
    ...userUpdate,
  }));

  const [errors, setErrors] = useState<IUserUpdateForm>(() => ({
    ...UserUpdateDefaultTemplate,
  }));

  const [showPassword, setShowPassword] = useState({
    currPw: false,
    newPw: false,
    newPwConfirm: false,
  });

  useEffect(() => {
    const errors: IUserUpdateForm = validator(userForm);
    setErrors(() => ({
      ...errors,
    }));
  }, [userForm]);

  const handleClickShowPassword = (fieldName: keyof IShowPassword) => {
    setShowPassword((showPassword) => ({
      ...showPassword,
      [fieldName]: !showPassword[fieldName],
    }));
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onSubmitForm(userForm);
    setUserForm({
      email: userForm.email,
      currPw: "",
      newPw: "",
      newPwConfirm: "",
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserForm((userForm) => ({
      ...userForm,
      [e.target.name]: e.target.value,
    }));
  };

  const checkDisable = () => {
    return (
      Object.values(errors).filter((e) => e).length > 0 || // check the errors list
      (Object.values(userForm).filter((e) => e).length === 1 && // only submit when updated email
        userForm.email === userUpdate.email)
    );
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "14px 0px",
      }}
    >
      <TextField
        id="email-address"
        label="Email Address"
        name="email"
        value={userForm.email}
        error={!!errors.email}
        helperText={errors.email}
        variant="standard"
        onChange={handleChange}
        fullWidth
        sx={(theme) => ({
          label: {
            color: "#141414",
          },
        })}
      />
      <FormControl variant="standard" fullWidth error={!!errors.currPw}>
        <InputLabel sx={{ color: "#141414" }} htmlFor="current-password">
          Current Password
        </InputLabel>
        <Input
          id="current-password"
          value={userForm.currPw}
          name="currPw"
          type={showPassword.currPw ? "text" : "password"}
          onChange={handleChange}
          sx={(theme) => ({
            label: {
              color: "#141414",
            },
          })}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => handleClickShowPassword("currPw")}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword.currPw ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText id="current-pw-helper-text">
          {errors.currPw}
        </FormHelperText>
      </FormControl>
      <FormControl variant="standard" fullWidth error={!!errors.newPw}>
        <InputLabel sx={{ color: "#141414" }} htmlFor="new-password">
          New Password
        </InputLabel>
        <Input
          id="new-password"
          name="newPw"
          value={userForm.newPw}
          type={showPassword.newPw ? "text" : "password"}
          onChange={handleChange}
          sx={{ input: { color: "red" } }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => handleClickShowPassword("newPw")}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword.newPw ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText id="new-pw-helper-text">{errors.newPw}</FormHelperText>
      </FormControl>
      <FormControl variant="standard" fullWidth error={!!errors.newPwConfirm}>
        <InputLabel sx={{ color: "#141414" }} htmlFor="confirm-new-password">
          Confirm New Password
        </InputLabel>
        <Input
          id="confirm-new-password"
          name="newPwConfirm"
          value={userForm.newPwConfirm}
          type={showPassword.newPwConfirm ? "text" : "password"}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => handleClickShowPassword("newPwConfirm")}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword.newPwConfirm ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText id="new-pw-confirm-helper-text">
          {errors.newPwConfirm}
        </FormHelperText>
      </FormControl>
      <Box textAlign="right">
        <Button
          disabled={checkDisable()}
          data-testid="save-btn"
          type="submit"
          variant="contained"
          sx={{
            background: "#ec650a",
            color: "black",
            fontWeight: 600,
            "&:hover": { background: "#ec650abf" },
          }}
        >
          SAVE
        </Button>
      </Box>
    </form>
  );
};

export default UserUpdateForm;
