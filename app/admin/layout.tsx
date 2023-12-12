import NavBar from "@/app/ui/admin/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <NavBar />
            <div>{children}</div>
        </div>
    )
}