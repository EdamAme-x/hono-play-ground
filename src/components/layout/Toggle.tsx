import { useTheme } from "@/lib/theme";

export function Toggle() {
    const { theme, setTheme } = useTheme();

    const isDarkMode = theme === "dark";

    return (
        <button
            role="checkbox"
            aria-checked={isDarkMode}
            aria-label={"Toggle " + (isDarkMode ? "light" : "dark") + " mode"}
            title={"Toggle " + (isDarkMode ? "light" : "dark") + " mode"}
            onClick={() => setTheme(!isDarkMode ? "dark" : "light")}
            class="circle flex h-4 w-4 cursor-pointer items-center justify-center rounded-full border border-gray-700 bg-gray-700 p-4 text-2xl text-slate-500 hover:text-slate-700 focus:ring-0 dark:border-gray-300 dark:bg-gray-300 dark:text-slate-400 dark:hover:text-slate-300"
        ></button>
    );
}
