import { useEffect, useState } from 'react';
import Wallpaper from '../components/Wallpaper';
import { useUserState } from '../context/user-context';

// https://iconscout.com/categories/windows-interface/icons

const Locked = () => {
    const { dispatch } = useUserState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Preload para que la imagen esté lista en caché
        preloadImage('/assets/screen-saver.png');
    }, []);

    const handleSignIn = () => {
        setLoading(true);
        // Simulamos un pequeño delay o procedemos directo según tu lógica
        dispatch({ type: 'UNLOCK_DESKTOP' });
    };

    return (
        <section className="w-full h-full font-light text-white relative">
            <div className="flex flex-col items-center justify-center h-full -mt-20 z-10 relative">
                {/* Usamos size-48 que equivale a 12rem (w-48 h-48) */}
                <span className="size-48">
                    <img
                        className="rounded-full w-full h-full object-cover"
                        src="/assets/icons/user-thumbnail.png"
                        alt="Thomas Gormley"
                    />
                </span>

                {!loading ? (
                    <>
                        <h1 className="mt-4 text-4xl">User</h1>
                        <button
                            type="button"
                            /* CAMBIOS TAILWIND v4:
                                1. bg-white/25 -> Opacidad simplificada
                                2. outline-none -> Reemplaza focus:outline-none para todo estado
                                3. Limpieza de bordes y rings redundantes
                            */
                            className="mt-3 px-7 py-1 text-sm bg-white/25 border border-transparent 
                                       outline-none ring-2 ring-transparent transition-all
                                       focus:border-black/50 focus:ring-white focus:bg-white/30"
                            onClick={handleSignIn}
                        >
                            Sign in
                        </button>
                    </>
                ) : (
                    <img
                        src="/assets/loader.png"
                        /* Agregamos animate-spin para que gire */
                        className="w-10 h-10 mt-3 animate-spin" 
                        alt="Loading..."
                    />
                )}
            </div>

            {/* Tu componente Wallpaper ya arreglado con v4 */}
            <Wallpaper img="locked" />
        </section>
    );
};

function preloadImage(path: string) {
    const img = new Image();
    img.src = path;
}

export default Locked;