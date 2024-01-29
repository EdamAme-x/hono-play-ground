// Editor <=> Preview

import { useState } from "hono/jsx";
import { defaultConfig } from "./defaultConfig";
import { LS } from "@/lib/localStorage";
import { Editor } from "../editor";

export function Container() {
    const [config, setConfig] = useState<typeof defaultConfig>(() => {
        if (!LS.has("config")) {
            LS.set("config", JSON.stringify(defaultConfig));
            return defaultConfig
        }

        try {
            return JSON.parse(LS.get("config") ?? JSON.stringify(defaultConfig))
        }catch (_) {
            LS.set("config", JSON.stringify(defaultConfig));
            return defaultConfig
        }
    });

    return <>
        <div class="flex justify-between">
            <Editor content={config.content} setCotent={(content: string) => {
                setConfig({
                    ...config,
                    content
                })
            }} />
            <div class="w-full min-h-screen">
                preview
            </div>
        </div>
    </>
}
