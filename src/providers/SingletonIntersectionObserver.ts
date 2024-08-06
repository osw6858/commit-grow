import {UseScrollStyleOptions} from "@/hooks/useIntersectionObserver";

const SingletonIntersectionObserver = (() => {
    let instance: IntersectionObserver | null = null;
    let options: UseScrollStyleOptions = { threshold: 0.1, rootMargin: '0px' };

    const createInstance = (): IntersectionObserver => {
        return new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('translate-y-10', 'opacity-0');
                        entry.target.classList.add('translate-y-0', 'opacity-100');
                    } else {
                        entry.target.classList.add('translate-y-10', 'opacity-0');
                        entry.target.classList.remove('translate-y-0', 'opacity-100');
                    }
                });
            },
            options
        );
    };

    return {
        getInstance: (newOptions?: UseScrollStyleOptions): IntersectionObserver => {
            if (newOptions) {
                options = { ...options, ...newOptions };
            }
            if (!instance || newOptions) {
                if (instance) {
                    // 새로운 옵션이 들어오면 기존 관찰 모두 중지
                    instance.disconnect();
                }
                instance = createInstance();
            }
            return instance;
        }
    };
})();

export default SingletonIntersectionObserver