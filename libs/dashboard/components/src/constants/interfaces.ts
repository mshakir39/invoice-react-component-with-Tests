declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    nexttab?: string;
    pretab?: string;
  }
}

export interface IUserUpdateForm {
  email: string | null;
  currPw: string | null;
  newPw: string | null;
  newPwConfirm: string | null;
}
