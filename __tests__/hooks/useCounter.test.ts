import { renderHook, act } from '@testing-library/react';
import { useCounter } from '@/hooks/useCounter';

describe('useCounter', () => {
    it('should initialize with default value', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.count).toBe(0);
    });

    it('should initialize with provided value', () => {
        const { result } = renderHook(() => useCounter(10));
        expect(result.current.count).toBe(10);
    });

    it('should increment the counter', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(1);
    });

    it('should decrement the counter', () => {
        const { result } = renderHook(() => useCounter(5));
        act(() => {
            result.current.decrement();
        });
        expect(result.current.count).toBe(4);
    });

    it('should reset the counter', () => {
        const { result } = renderHook(() => useCounter(5));
        act(() => {
            result.current.increment();
            result.current.reset();
        });
        expect(result.current.count).toBe(5);
    });
});