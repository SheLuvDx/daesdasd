"use client";

import {
    CommandDialog,
    CommandEmpty,
    CommandItem,
    CommandList,
    CommandGroup,
    CommandInput,
    CommandSeparator,
    // CommandShortcut,
    // Command,
} from "../ui/command";
import { useRouter } from "next/navigation"; // usePathname
import { Command as CommandIcon, File, Wrench } from "lucide-react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import {
    ArrowUpDown,
    CornerDownLeft,
    Layers3,
    Package,
    Home,
    X as CloseIcon,
    Github,
    Mail,
} from "lucide-react";

import { useState, useEffect, useCallback } from "react";
import { Button } from "../ui/button";

import { useTheme } from "next-themes";

export function CommandMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { setTheme, theme } = useTheme();

    const router = useRouter();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && e.ctrlKey) {
                e.preventDefault();
                setIsOpen(!isOpen);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // e.g, pass in router push to func so it closes setIsOpen
    const runCommand = useCallback((command: () => unknown) => {
        setIsOpen(false);
        command();
    }, []);

    // TODO: slug
    // const currentPath = usePathname();
    // console.log(currentPath);

    return (
        <>
            <Button
                variant={"outline"}
                className="px-3 rounded-full absolute top-0 right-0 mt-4 mr-4 z-50" // maybe i can make this sticky? idk css is scary
                onClick={() => setIsOpen(!isOpen)}
            >
                {" "}
                <CommandIcon size={14} />{" "}
            </Button>
            <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
                <CommandInput placeholder="Search" />
                <CommandList>
                    <CommandEmpty>No results found</CommandEmpty>
                    <CommandGroup heading="Pages">
                        <CommandItem
                            className="transition-all duration-100"
                            onSelect={() => runCommand(() => router.push("/"))}
                        >
                            <Home size={16} />
                            <span className="ml-2">Home</span>
                        </CommandItem>
                        <CommandItem
                            className="transition-all duration-100"
                            onSelect={() =>
                                runCommand(() => router.push("/tools"))
                            }
                        >
                            <Wrench size={16} />
                            <span className="ml-2">Tools</span>
                        </CommandItem>
                        <CommandItem
                            className="transition-all duration-100"
                            onSelect={() =>
                                runCommand(() => router.push("/posts"))
                            }
                        >
                            <File size={16} />
                            <span className="ml-2">Posts</span>
                        </CommandItem>
                        {/* TODO(Prime): would be cool if it showed source code of the active page? maybe.. considering it's file based routing: tree/main/src/app..  */}
                        <CommandItem
                            onSelect={() =>
                                runCommand(() =>
                                    router.push(
                                        "https://git.dromzeh.dev/dromzeh.dev/",
                                    ),
                                )
                            }
                        >
                            <Github size={16} />
                            <span className="ml-2">Source Code</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Actions">
                        <CommandItem
                            className="transition-all duration-100"
                            onSelect={() =>
                                setTheme(theme === "dark" ? "light" : "dark")
                            }
                        >
                            <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="ml-2">Toggle Theme</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() =>
                                runCommand(() =>
                                    router.push("mailto:marcel@dromzeh.dev"),
                                )
                            }
                        >
                            <Mail size={16} />
                            <span className="ml-2">Send an Email</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
                <CommandSeparator />
                {/* TODO(Prime): alignments :3 */}
                <div className="text-muted-foreground flex gap-4 text-sm p-3 justify-end">
                    <div className="flex flex-row gap-1 items-center">
                        <ArrowUpDown
                            size={20}
                            color="white"
                            className="bg-neutral-800 p-1 rounded-sm border-neutral-700"
                        />
                        Navigate
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <CornerDownLeft
                            size={20}
                            color="white"
                            className="bg-neutral-800 p-1 rounded-sm border-neutral-700"
                        />
                        Select
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <CloseIcon
                            size={20}
                            color="white"
                            className="bg-neutral-800 p-1 rounded-sm border-neutral-700"
                        />
                        Close
                    </div>
                </div>
            </CommandDialog>
        </>
    );
}
