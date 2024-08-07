export default function Header() {
    return <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center z-50">
            <div className="text-xl font-bold">CatchTech AI</div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                로그인
            </button>
        </div>
    </header>
}