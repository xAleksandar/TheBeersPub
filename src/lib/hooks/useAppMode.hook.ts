import { useQuery } from "@tanstack/react-query";
import { connectionTypeEnum } from "../enums/connectionTypeEnum";

const useAppMode = () => {
  const mode = "app_mode";

  const getAppMode = () => {
    if (
      localStorage.getItem(mode) !== connectionTypeEnum.blockchain &&
      localStorage.getItem(mode) !== connectionTypeEnum.api
    ) {
      localStorage.setItem(mode, connectionTypeEnum.api);
    }

    return localStorage.getItem(mode);
  };
  const { status, data, refetch } = useQuery<string | null, Error>({
    queryKey: [mode],
    queryFn: getAppMode,
  });

  const changeAppMode = (value: string) => {
    localStorage.setItem(mode, value);
    refetch();
  };

  return {
    appMode: data,
    status,
    changeAppMode,
  };
};

export default useAppMode;
