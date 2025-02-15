import ActionButton from '../common/ActionButton';

export default function Features({ content, actions }: { 
    content: any;
    actions?: { label: string; type: 'link' | 'modal' | 'scroll'; target: string; }[];
}) {
    return (
        <div className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {content.items.map((item: any, index: number) => (
                        <div key={index} className="text-center p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
                {actions && (
                    <div className="flex justify-center gap-4">
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