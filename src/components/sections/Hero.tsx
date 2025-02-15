import ActionButton from '../common/ActionButton';

export default function Hero({ content, actions }: { 
    content: any;
    actions?: { label: string; type: 'link' | 'modal' | 'scroll'; target: string; }[];
}) {
    return (
        <div className="relative h-[70vh] flex items-center justify-center">
            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${content.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.7)'
                }}
            />
            <div className="relative z-10 text-center text-white">
                <h1 className="text-5xl font-bold mb-4">{content.heading}</h1>
                <p className="text-xl mb-8">{content.subheading}</p>
                {actions && (
                    <div className="flex gap-4 justify-center">
                        {actions.map((action, index) => (
                            <ActionButton
                                key={index}
                                {...action}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
} 