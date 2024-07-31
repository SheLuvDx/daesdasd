import Link from "next/link";
import Image from "next/image";
import { MailIcon } from "lucide-react";

export function FollowGrid() {
    return (
        <div className="">
            <h2 className="text-foreground mb-2">Links </h2>
            <div className="flex flex-col space-y-2">
                <Link
                    href="Prime Id Lookup"
                    target="_blank"
                    className="flex flex-row space-x-2 items-center group"
                >
                    <Image
                        src="/github.svg"
                        alt="github"
                        width={16}
                        height={16}
                    />
                    <p className="text-foreground group-hover:text-muted-foreground/50 transition-colors duration-150">
                        @Prime
                    </p>
                </Link>
                <Link
                    href="https://discord.com/users/492731761680187403"
                    target="_blank"
                    className="flex flex-row space-x-2 items-center group"
                >
                    <Image
                        src="/discord.svg"
                        alt="discord"
                        width={16}
                        height={16}
                    />
                    <p className="text-foreground group-hover:text-muted-foreground/50 transition-colors duration-150">
                        @Prime
                    </p>
                </Link>

                <Link
                    href="tiktok : decariusw"
                    target="_blank"
                    className="flex flex-row space-x-2 items-center group"
                >
                    <MailIcon size={16} />
                    <p className="text-foreground group-hover:text-muted-foreground/50 transition-colors duration-150">
                    Prime Id Lookup
                    </p>
                </Link>
                {/* it'll always be twitter in my heart */}
                <Link
                    href=""
                    target="_blank"
                    className="flex flex-row space-x-2 items-center group"
                >
                    <Image
                        src="/x_dark.svg"
                        alt="twitter"
                        width={16}
                        height={16}
                    />
                    <p className="text-foreground group-hover:text-muted-foreground/50 transition-colors duration-150">
                        @Prime
                    </p>
                </Link>
                <Link
                    href="https://open.spotify.com/user/fnn3ngyzaq9wir8jyevt96zrf"
                    target="_blank"
                    className="flex flex-row space-x-2 items-center group"
                >
                    <Image
                        src="/spotify.svg"
                        alt="spotify"
                        width={16}
                        height={16}
                    />
                    <p className="text-foreground group-hover:text-muted-foreground/50 transition-colors duration-150">
                        marcel
                    </p>
                </Link>

                <Link
                    href="https://www.tiktok.com/@decariusw"
                    target="_blank"
                    className="flex flex-row space-x-2 items-center group"
                >
                    <Image
                        src="/tiktok.svg"
                        alt="tiktok"
                        width={16}
                        height={16}
                    />
                    <p className="text-foreground group-hover:text-muted-foreground/50 transition-colors duration-150">
                        @Prime
                    </p>
                </Link>
            </div>
        </div>
    );
}
