import { render, fireEvent, screen } from "@testing-library/react";
import UserUpdateForm from "./user-update-form";
const userUpdateOnLoadForm = { email: "abc@gmail.com" };

describe("User Update Form", () => {
  it("should render successfully", () => {
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
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId("save-btn").textContent).toBe("SAVE");
  });
  it("should display Email Address validation", () => {
    const onSubmitMock = jest.fn();
    onSubmitMock.mockImplementation((userUpdate) => {
      return userUpdate;
    });
    const { baseElement } = render(
      <UserUpdateForm onSubmitForm={onSubmitMock} userUpdate={{ email: "" }} />
    );
    expect(
      baseElement.querySelector("#email-address-helper-text")?.textContent
    ).toBe("Email is Required");
    // check invalid email
    const emailInput = baseElement.querySelector("#email-address");
    emailInput &&
      fireEvent.change(emailInput, {
        target: { value: "abc" },
      });
    expect(
      baseElement.querySelector("#email-address-helper-text")?.textContent
    ).toBe("Invalid Email Address");
  });
  it("Should any of the password fields are filled in, the other two must be filled in too", () => {
    const onSubmitMock = jest.fn();
    onSubmitMock.mockImplementation((userUpdate) => {
      return userUpdate;
    });
    const { baseElement } = render(
      <UserUpdateForm
        onSubmitForm={onSubmitMock}
        userUpdate={{ email: "abc@gmail.com" }} // input to check invalid email
      />
    );
    const crrPwInput = baseElement.querySelector("#current-password ");
    const newPwInput = baseElement.querySelector("#new-password");
    const newPwConfirmInput = baseElement.querySelector(
      "#confirm-new-password"
    );
    //1. Current password type
    crrPwInput &&
      fireEvent.change(crrPwInput, {
        target: { value: "123132" },
      });
    expect(baseElement.querySelector("#new-pw-helper-text")?.textContent).toBe(
      "New Password is Required"
    );
    expect(
      baseElement.querySelector("#new-pw-confirm-helper-text")?.textContent
    ).toBe("Confirm New Password is Required");
    //2. New Password type
    newPwInput &&
      fireEvent.change(newPwInput, {
        target: { value: "12345678" },
      });
    crrPwInput &&
      fireEvent.change(crrPwInput, {
        target: { value: "" },
      });

    expect(
      baseElement.querySelector("#current-pw-helper-text")?.textContent
    ).toBe("Current Password is Required");
    expect(
      baseElement.querySelector("#new-pw-confirm-helper-text")?.textContent
    ).toBe("Confirm New Password is Required");
    //3. New Password Confirm type
    newPwInput &&
      fireEvent.change(newPwInput, {
        target: { value: "" },
      });
    newPwConfirmInput &&
      fireEvent.change(newPwConfirmInput, {
        target: { value: "12345678" },
      });
    expect(
      baseElement.querySelector("#current-pw-helper-text")?.textContent
    ).toBe("Current Password is Required");
    expect(baseElement.querySelector("#new-pw-helper-text")?.textContent).toBe(
      "New Password is Required"
    );
  });
  it("should display New Password and Confirm New Password invalid", () => {
    const onSubmitMock = jest.fn();
    onSubmitMock.mockImplementation((userUpdate) => {
      return userUpdate;
    });
    const { baseElement } = render(
      <UserUpdateForm
        onSubmitForm={onSubmitMock}
        userUpdate={{ email: "abc@gmail.com" }}
      />
    );

    const newPwInput = baseElement.querySelector("#new-password");
    const newPwConfirmInput = baseElement.querySelector(
      "#confirm-new-password"
    );

    newPwInput &&
      fireEvent.change(newPwInput, {
        target: { value: "1234567" },
      });
    newPwConfirmInput &&
      fireEvent.change(newPwConfirmInput, {
        target: { value: "12345678" },
      });

    expect(baseElement.querySelector("#new-pw-helper-text")?.textContent).toBe(
      "New Password has less than 8 characters"
    );
    expect(
      baseElement.querySelector("#new-pw-confirm-helper-text")?.textContent
    ).toBe("New Password and Confirm New Password does not match");
  });
});
