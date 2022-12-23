import { useContext, Component, createContext, ReactNode } from "react";

export const AppContext = createContext<AppWrapperState>({});
export type AppWrapperState = {
  apiHost?: string;
  setApiHost?: (host: string) => void;
};

type AppWrapperProps = {
  children: ReactNode;
};

export class AppWrapper extends Component<AppWrapperProps, AppWrapperState> {
  constructor(props: AppWrapperProps) {
    super(props);
    this.state = {
      apiHost: "",
      setApiHost: (host: string) =>
        this.setState((previousState: AppWrapperState) => ({
          ...previousState,
          apiHost: host,
        })),
    };
  }

  override render() {
    return (
      <AppContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const useGlobalAppContext = (): AppWrapperState => {
  return useContext<AppWrapperState>(AppContext);
};
