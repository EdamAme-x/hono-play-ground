import { cn } from "@/lib/utils";
import { Config } from ".";
import { Badge } from "../../ui/badge";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { serializeResponse } from "@/lib/serializeResponse";
import { LS } from "@/lib/localStorage";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Badges({ config, setConfig }: { config: Config; setConfig: (config: Config) => void }) {
    const [openRawResponse, setOpenRawResponse] = useState<null | string>(null);

    const blobURL = () => {
        if (config.response === "") return;

        const blobUrl = createBlob(config.response, config.headers.get("Content-Type") ?? "text/plain");
        window.open(blobUrl, "_blank");
    };

    const viewRawResponse = async () => {
        if (config.response === "") return;

        if (openRawResponse) {
            setOpenRawResponse(null);
            return;
        }

        setOpenRawResponse(JSON.stringify(await serializeResponse(config.rawResponse, config.response), null, 2));
    };

    const resetEditor = () => {
        if (LS.has("config")) {
            LS.remove("config");
            window.location.reload();
        }
    };

    return (
        <>
            <div className="mt-2 flex gap-1">
                <Badge className={cn("cursor-pointer", config.response !== "" ? "" : "bg-gray-300 hover:bg-gray-300")} onClick={() => blobURL()}>
                    Blob URL
                </Badge>
                <Badge
                    className={cn("cursor-pointer", config.response !== "" ? "" : "bg-gray-300 hover:bg-gray-300")}
                    onClick={() => viewRawResponse()}
                >
                    Raw Response
                </Badge>
                <Badge className={cn("cursor-pointer")} onClick={() => resetEditor()}>
                    Reset Editor
                </Badge>
            </div>
            <div>{openRawResponse && <Textarea className="mt-2" value={openRawResponse} readOnly />}</div>
        </>
    );
}

function createBlob(text: string, type: string) {
    const blob = new Blob([text], { type });
    return URL.createObjectURL(blob);
}
