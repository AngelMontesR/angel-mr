
export default function Footer() {
    return (
        <footer className="bg-indigo-900 text-white py-6 mt-12">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <p>&copy; {new Date().getFullYear()} AngelDev. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}