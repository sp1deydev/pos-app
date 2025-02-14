import { useRef } from "react";
import { useDispatch } from "react-redux";
import { debounce } from 'lodash';
import { homeSlice } from "../redux/Slices/homeSlice";


export const useDebouncedChangeQuantity = () => {
    const dispatch = useDispatch();
    const changeQuantity = useRef(
        debounce((id, quantity) => {
            dispatch(homeSlice.actions.changeQuantity({ id, quantity }));
        }, 300)
    ).current;

    return changeQuantity;
};