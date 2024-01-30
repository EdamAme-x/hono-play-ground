import { Hono } from "hono";
import { useState } from "react";
import { normalizationPayh } from "./../../../lib/normalizationPath";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../../ui/select";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";

export function Panel({ app, buildStatus }: { app: Hono; buildStatus: "success" | "building" | "error" }) {
    const [config, setConfig] = useState({
        response: "",
        statusCode: 200,
        ok: true,
        headers: new Headers(),
        request: "/hello?name=hono",
        method: "GET"
    });
    console.log(buildStatus);

    const updateConfig = async () => {
        const response = await app.request("http://localhost" + normalizationPayh(config.request), {
            method: config.method,
            headers: config.headers
        });
        setConfig({
            ...config,
            ok: response.ok,
            response: await response.text(),
            statusCode: response.status,
            headers: response.headers
        });
    }

    return (
        <div className="border-separate rounded-md border border-gray-300 p-4 shadow-md">
            <div className="mb-4 flex gap-2">
                <Select onValueChange={(value) => setConfig({ ...config, method: value })} defaultValue={config.method}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Method" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Method</SelectLabel>
                            <SelectItem value="GET">GET</SelectItem>
                            <SelectItem value="POST">POST</SelectItem>
                            <SelectItem value="PUT">PUT</SelectItem>
                            <SelectItem value="DELETE">DELETE</SelectItem>
                            <SelectItem value="OPTIONS">OPTIONS</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Input
                    value={config.request}
                    onChange={(e) => setConfig({ ...config, request: e.target.value })}
                    onKeyDown={(e) => e.key === "Enter" && updateConfig()}
                    placeholder="/hello?name=hono"
                />
                <Button
                    onClick={() => updateConfig()}
                >Send</Button>
            </div>
            <div className="flex my-2 gap-2">
                <pre className={cn("rounded-md bg-gray-100 dark:bg-gray-800 p-2", config.ok ? "text-green-500" : "text-red-500")}>
                    <code>{config.statusCode}</code>
                </pre>
                <Input
                    value={Array.from(config.headers).map(([key, value]) => `${key}: ${value}; `).join("\n")}
                    readOnly
                    className="w-full outline-none"
                    placeholder="headers"
                />
            </div>
            <div>
                <pre className="rounded-md bg-gray-100 dark:bg-gray-800 p-2 text-black dark:text-white">
                    <code>{config.response}</code>
                </pre>
            </div>
        </div>
    );
}
