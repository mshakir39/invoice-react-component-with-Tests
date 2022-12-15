import { fireEvent, render, screen } from "@testing-library/react";
import UserUpdateForm from "../user-update-form/user-update-form";
import AccountSettings from "./account-settings";
const userUpdateOnLoadForm = { email: "abc@gmail.com" };

describe("Account Settings", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <AccountSettings title="Account Settings">
        <UserUpdateForm
          onSubmitForm={async (user) => console.log(user)}
          userUpdate={userUpdateOnLoadForm}
        />
      </AccountSettings>
    );
    expect(baseElement).toBeTruthy();
  });
  it("should submit Email User Update successfully", () => {
    const onSubmitMock = jest.fn();

    onSubmitMock.mockImplementation((userUpdate) => {
      return userUpdate;
    });
    const { baseElement } = render(
      <UserUpdateForm
        onSubmitForm={onSubmitMock}
        userUpdate={userUpdateOnLoadForm}
      />
    );
    const emailInput = baseElement.querySelector("#email-adress");
    const saveButton = screen.getByTestId("save-btn");
    // type email
    emailInput &&
      fireEvent.change(emailInput, {
        target: { value: "usertest@gmail.com" },
      });
    // submit form and check alert mock data
    fireEvent.click(saveButton);
    expect(onSubmitMock).toBeCalledTimes(1);
    expect(onSubmitMock).toBeCalledWith({
      currPw: "",
      email: "usertest@gmail.com",
      newPw: "",
      newPwConfirm: "",
    });
  });
  it("should submit User Update form successfully", () => {
    const onSubmitMock = jest.fn();
    onSubmitMock.mockImplementation((userUpdate) => {
      return userUpdate;
    });
    const { baseElement } = render(
      <UserUpdateForm
        onSubmitForm={onSubmitMock}
        userUpdate={userUpdateOnLoadForm}
      />
    );

    const saveButton = screen.getByTestId("save-btn");
    const emailInput = baseElement.querySelector("#email-adress");
    const crrPwInput = baseElement.querySelector("#current-password ");
    const newPwInput = baseElement.querySelector("#new-password");
    const newPwConfirmInput = baseElement.querySelector(
      "#confirm-new-password"
    );
    // input user update form
    emailInput &&
      fireEvent.change(emailInput, {
        target: { value: "usertest@gmail.com" },
      });
    crrPwInput &&
      fireEvent.change(crrPwInput, {
        target: { value: "123132" },
      });
    newPwInput &&
      fireEvent.change(newPwInput, {
        target: { value: "12345678" },
      });
    newPwConfirmInput &&
      fireEvent.change(newPwConfirmInput, {
        target: { value: "12345678" },
      });
    // submit form and check alert mock data
    fireEvent.click(saveButton);
    expect(onSubmitMock).toBeCalledWith({
      currPw: "123132",
      email: "usertest@gmail.com",
      newPw: "12345678",
      newPwConfirm: "12345678",
    });
    expect(baseElement).toBeTruthy();
  });
});
