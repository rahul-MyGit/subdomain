export default function LivePage({
    params,
}: {
    params: { web: string };
}) {
    return (
        <div>
            <h1>Live Page</h1>
            <p>{params.web}</p>
        </div>
    );
}
