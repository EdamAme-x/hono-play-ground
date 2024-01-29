// Editor <=> Preview

import { useState } from "hono/jsx";
import { defaultConfig } from "./defaultConfig";

export function Container() {
    const [config, setConfig] = useState<typeof defaultConfig>(defaultConfig);

    return <>
        <div class="flex justify-between">
            <div class="w-full h-19">

            </div>
        </div>
    </>
}
