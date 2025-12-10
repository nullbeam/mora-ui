import React from 'react';

type WallpaperProps = {
  // Aceptamos las claves conocidas o cualquier string por si acaso
  img?: 'default' | 'locked' | string;
};

const wallpapers: Record<string, string> = {
  default: 'bg-default',
  // EN V4: Eliminamos 'filter' y 'transform', ya no hacen falta.
  locked: 'bg-locked blur-md scale-105', 
};

const Wallpaper: React.FC<WallpaperProps> = ({ img = 'default' }) => {
  // Pequeña mejora de seguridad: si 'img' no existe en el objeto, usamos 'default'
  // para evitar que aparezca "undefined" en el className.
  const activeClass = wallpapers[img] || wallpapers.default;

  return (
    <div
      className={`h-full w-full -z-10 fixed top-0 ${activeClass} bg-no-repeat bg-cover bg-center`}
      aria-hidden="true"
    />
  );
};

export default Wallpaper;