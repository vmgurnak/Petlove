import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';

// Custom typed hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
