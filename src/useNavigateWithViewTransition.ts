import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useNavigateWithViewTransition = () => {
  const navigate = useNavigate();

  return useCallback(
    (newRoute: string) => {
      document.startViewTransition(() => {
        navigate(newRoute);
      });
    },
    [navigate]
  );
};

export default useNavigateWithViewTransition;
