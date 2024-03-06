import GoBackButton from "@/components/goBackButton";
import Link from "next/link";

export default function EmptyPage() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="font-mono text-[23px]">Empty data returned!</h1>
            <Link 
            href={'/'}
            className="mt-5">
                <GoBackButton />
            </Link>
        </div>
    )
}