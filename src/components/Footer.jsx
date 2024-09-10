 export default function Footer() {
  return (
    <footer className="bg-muted mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Nosotros</h3>
            <p className="text-muted-foreground">AlanRuizStore es tu tienda de variedad mas amplia</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Rutas rapidas</h3>
            <ul className="space-y-2">
              <li><button >FAQ</button></li>
              <li><button >Devoluciones</button></li>
              <li><button >Politicas de privacidad</button></li>
              <li><button >Terminos de servicio</button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Boletin de noticias</h3>
            <p className="text-muted-foreground mb-4">Suscribete a nuestro boletin de noticias para recibir ofertas.</p>
            <div className="flex">
              <input type="email" placeholder="Tu correo" className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" required />
              <button className="rounded-l-none">-Suscribite</button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; 2024 Alan Ruiz</p>
        </div>
      </div>
    </footer>
  );
}
