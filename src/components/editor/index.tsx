import { LS } from "@/lib/localStorage";
import { default as MonacoEditor } from "@monaco-editor/react";

export function Editor({ content, setCotent }: { content: string; setCotent: (content: string) => void }) {
    return (
        <div className="my-[2.5vh] flex min-h-[95vh] w-[95%] min-w-[400px] items-center justify-center rounded-sm md:w-1/2">
            <MonacoEditor
                options={{
                    minimap: {
                        enabled: false,
                    },
                }}
                defaultValue={content}
                onChange={(value) => {
                    setCotent(value ?? "");
                    LS.set("config", JSON.stringify({ ...JSON.parse(LS.get("config") ?? "{}"), content: value ?? "" }));
                }}
                theme="vs-dark"
                defaultLanguage="javascript"
                language="typescript"
            />
        </div>
    );
}
