import { Toggle } from "./Toggle";
import { Image } from "../image";

export function Header() {
    return (
        <>
            <header className="my-2 flex h-[3rem] w-full items-center justify-between p-2 sm:p-5">
                <h1 className="label inline-flex items-center justify-center gap-1 text-3xl font-bold">
                    <Image src="/favicon.png" alt="Hono logo" width={36} height={36} className="icon" />
                    <span className="pb-1">Hono Playground</span>
                </h1>
                <Toggle />
            </header>
            <hr className="shadow-sm" />
        </>
    );
}
