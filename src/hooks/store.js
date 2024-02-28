import { useDispatch, useSelector } from "react-redux";
// 在整个应用程序中使用，而不是简单的 `useDispatch` 和 `useSelector`
export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;
// 导出各种actions
export { actions as userActions } from "@store/slice/user";
export { actions as tabbarActions } from "@store/slice/tabbar";
