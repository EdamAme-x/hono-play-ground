// Editor <=> Preview

import { useState } from "hono/jsx";
import { defaultConfig } from "./defaultConfig";
import { LS } from "@/lib/localStorage";

export function Container() {
    const [config, setConfig] = useState<typeof defaultConfig>(() => {
        try {
            return JSON.parse(LS.get("config") ?? JSON.stringify(defaultConfig))
        }catch (e) {
            return defaultConfig
        }
    });

    throw "unko"

    return <>
        <div class="flex justify-between">
            <div class="w-full min-h-screen">
                editor
            </div>
            <div class="w-full min-h-screen">
                preview
            </div>
        </div>
    </>
}
