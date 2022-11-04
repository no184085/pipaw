const CACHE_NAME = 'version-1';
const urlToCache = [
  'index.html', 
  'offline.html', 
  './',
  'styles.css',
  'script.js', 
  'api.js',
  'https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css', 
  'https://unpkg.com/scrollreveal' ,'https://fonts.googleapis.com/css2?family=Basic&family=Nunito&display=swap'
  ];

const self = this;

//Durante la fase de instalacion, generalmente se almacena en cache los activos estaticos
self.addEventListener('install', e => {
  
});


// Una vez que se instala el Sw se activa y busca los recursos para hacer que funciones son conexion
self.addEventListener('activate', e => {
    
});

//Cuando el neavegador recupera una URL
self.addEventListener('fetch', e => {
    
});