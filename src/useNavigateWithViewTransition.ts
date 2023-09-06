import { useCallback } from "react";
import { flushSync } from "react-dom";
import { useNavigate } from "react-router-dom";

const useNavigateWithViewTransition = () => {
  const navigate = useNavigate();

  return useCallback(
    (newRoute: string) => {
      document.startViewTransition(() => {
        flushSync(() => {
          navigate(newRoute);
        });
      });
    },
    [navigate]
  );
};

export default useNavigateWithViewTransition;
