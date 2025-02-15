import ActionButton from '../common/ActionButton';

export default function Contact({ content, actions }: { 
    content: any;
    actions?: { label: string; type: 'link' | 'modal' | 'scroll'; target: string; }[];
}) {
    return (
        <div id="contact" className="py-16 px-4">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
                <div className="space-y-4 mb-8">
                    <p>{content.address}</p>
                    <p>{content.phone}</p>
                    <p>{content.email}</p>
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