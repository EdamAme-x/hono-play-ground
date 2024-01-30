export function Exception() {
    return (
        <>
            <div className="flex h-screen w-screen flex-col items-center justify-center">
                <h1 className="text-3xl font-bold">🌊 Exception</h1>
                <div className="mt-3 flex flex-col items-center justify-center">
                    <p className="text-lg">Something went wrong</p>
                    <a href="/" target="_self" rel="noopener noreferrer" className="text-md">
                        Try reload.
                    </a>
                </div>
            </div>
        </>
    );
}
