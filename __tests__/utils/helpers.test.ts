import { capitalizeString } from '@/helper/helpers';

describe('capitalizeString function', () => {
    it('capitalizes the first letter of a string', () => {
        expect(capitalizeString('hello')).toBe('Hello');
        expect(capitalizeString('world')).toBe('World');
    });

    it('returns an empty string if given an empty string', () => {
        expect(capitalizeString('')).toBe('');
    });
});