export function Editor({
    content,
    setCotent
}: {
    content: string;
    setCotent: (content: string) => void
}) {

    return <div class="w-full min-h-screen flex justify-center items-center">
        <textarea
            onChange={(e: Event) => setCotent((e.target as HTMLTextAreaElement).value)}
            class="w-[95%] min-h-[95%] p-2 bg-white dark:bg-gray-800 outline-none rounded-md"
        >{content}</textarea>
    </div>;
}