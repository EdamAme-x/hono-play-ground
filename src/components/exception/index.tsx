export function Exception() {
    return (
        <>
            <div class="flex h-screen w-screen flex-col items-center justify-center">
                <h1 class="text-3xl font-bold">🌊 Exception</h1>
                <div class="mt-3 flex flex-col items-center justify-center">
                    <p class="text-lg">Something went wrong</p>
                    <a href="/" target="_self" rel="noopener noreferrer" class="text-md">
                        Try reload.
                    </a>
                </div>
            </div>
        </>
    );
}
