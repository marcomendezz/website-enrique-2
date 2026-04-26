import { VerifiedIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface ReplyProps {
    authorName: string;
    authorHandle: string;
    authorImage: string;
    content: string;
    isVerified?: boolean;
    timestamp: string;
}

interface XCardProps {
    link?: string;
    authorName: string;
    authorHandle: string;
    authorImage: string;
    content: string[];
    isVerified?: boolean;
    timestamp: string;
    reply?: ReplyProps;
}

export function XCard({
    link = "https://x.com/dorian_baffier/status/1880291036410572934",
    authorName = "Dorian",
    authorHandle = "dorian_baffier",
    authorImage = "https://pbs.twimg.com/profile_images/1854916060807675904/KtBJsyWr_400x400.jpg",
    content = [],
    isVerified = true,
    timestamp = "Jan 18, 2025",
    reply,
}: XCardProps) {
    return (
        <Link
            href={link}
            target="_blank"
            className="w-full"
        >
            <div
                className={cn(
                    "w-full min-w-[300px] md:min-w-[500px] max-w-xl mx-auto p-1.5 rounded-2xl relative isolate overflow-hidden",
                    "bg-surface",
                    "border border-gold-dim",
                    "shadow-xl",
                    "will-change-transform translate-z-0"
                )}
            >
                <div
                    className={cn(
                        "w-full p-5 rounded-xl relative",
                        "bg-background/50",
                        "backdrop-blur-md",
                        "text-foreground",
                        "will-change-transform translate-z-0",
                        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-gold/5 before:to-transparent before:opacity-0 before:transition-opacity before:pointer-events-none",
                        "hover:before:opacity-100"
                    )}
                >
                    <div className="flex gap-3">
                        <div className="flex-shrink-0">
                            <div className="h-10 w-10 rounded-full overflow-hidden relative">
                                <Image
                                    src={authorImage}
                                    alt={authorName}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-1">
                                        <span className="font-semibold text-foreground hover:underline cursor-pointer">
                                            {authorName}
                                        </span>
                                        {isVerified && (
                                            <VerifiedIcon className="h-4 w-4 text-blue-400" />
                                        )}
                                    </div>
                                    <span className="text-muted-dark text-sm">
                                        @{authorHandle}
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    className="h-8 w-8 text-muted hover:text-gold rounded-lg p-1 flex items-center justify-center transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1200"
                                        height="1227"
                                        fill="none"
                                        viewBox="0 0 1200 1227"
                                        className="w-4 h-4"
                                    >
                                        <title>X</title>
                                        <path
                                            fill="currentColor"
                                            d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        {content.map((item, index) => (
                            <p
                                key={index}
                                className="text-muted text-base mb-2 font-light"
                            >
                                {item}
                            </p>
                        ))}
                        <span className="text-muted-dark text-sm mt-4 block">
                            {timestamp}
                        </span>
                    </div>

                    {reply && (
                        <div className="mt-4 pt-4 border-t border-gold-dim/30">
                            <div className="flex gap-3">
                                <div className="flex-shrink-0">
                                    <div className="h-10 w-10 rounded-full overflow-hidden relative">
                                        <Image
                                            src={reply.authorImage}
                                            alt={reply.authorName}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-1">
                                        <span className="font-semibold text-foreground hover:underline cursor-pointer">
                                            {reply.authorName}
                                        </span>
                                        {reply.isVerified && (
                                            <VerifiedIcon className="h-4 w-4 text-blue-400" />
                                        )}
                                        <span className="text-muted-dark text-sm">
                                            @{reply.authorHandle}
                                        </span>
                                        <span className="text-muted-dark text-sm">
                                            ·
                                        </span>
                                        <span className="text-muted-dark text-sm">
                                            {reply.timestamp}
                                        </span>
                                    </div>
                                    <p className="text-muted text-sm mt-1 font-light">
                                        {reply.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}
