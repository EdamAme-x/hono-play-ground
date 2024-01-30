export function Editor({ content, setCotent }: { content: string; setCotent: (content: string) => void }) {
    return (
        <div class="flex min-h-screen w-full items-center justify-center">
            <textarea
                onChange={(e: Event) => setCotent((e.target as HTMLTextAreaElement).value)}
                class="min-h-[95%] w-[95%] rounded-md bg-white p-2 outline-none dark:bg-gray-800"
            >
                {content}
            </textarea>
        </div>
    );
}
