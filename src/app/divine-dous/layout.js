import NavBar from "@/DivineComponents/Navbar";

export default function RootLayout({ children }) {
    return (
        <div className="relative bg-gray-100">
            <NavBar />
            <div className="">{children}</div>
        </div>
    );
}
