'use client';

interface ActionButtonProps {
    label: string;
    type: 'link' | 'modal' | 'scroll';
    target: string;
    className?: string;
}

export default function ActionButton({ label, type, target, className = '' }: ActionButtonProps) {
    const handleClick = () => {
        switch (type) {
            case 'modal':
                alert(`Modal ${target} would open here`);
                break;
            case 'scroll':
                const element = document.getElementById(target);
                element?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'link':
                if (target.startsWith('http')) {
                    window.open(target, '_blank');
                } else {
                    window.location.href = target;
                }
                break;
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors ${className}`}
        >
            {label}
        </button>
    );
} 