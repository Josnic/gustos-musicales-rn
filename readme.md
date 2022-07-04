# App Gustos Musicales

Aplicación Android y iOS desarrollada usando `React 17.0.2` y `React Native 0.66.0`.

## Configuración de ambiente de desarrollo Android/iOS

Se debe configurar en la máquina de desarrollo un entorno de trabajo para desarrollo de apicaciones Android: `SDK Android` y `Java 8` para Android; para iOS se debe instalar XCode 12 o supeior y Cocoapods. Además, al ser una aplicación de `React Native` es necesario instalar `NodeJS`. Para este proyecto, las versiones de `NodeJS` y `NPM` usadas son: 
```
NodeJS v12.20.0
npm 6.14.8
```
## Iniciando desarrollo

Para empezar a trabajar con el proyecto, solo se debe clonar el repositorio usando `Git`, luego en el directorio principal del proyecto solo se debe correr:
```
npm install
```
Este comando de instalará todas las dependencias del proyecto.

NOTA: Para iOS debe usar también el siguiente comando para instalar dependecias exclusivas para iOS:

```
npm install npx pod-install
```
## Comandos

* Comando para iniciar la aplicación en modo desarrollo en el emulador o en el dispositivo físico.
```
npm run android/ios
```
* Comando para crear un paquete que será utilizado en generar una APK en desarrollo. Este comando genera un APK independiente al servidor de Metro (Android)
```
npm run bundle-dev:android
```
### Generar un APK distribuible en modo Debug (Android)

1. Ejecutar el comando dependiendo del sistema operativo de trabajo: 
```
npm run windows:generate:apk:debug
```
o
```
npm run mac:generate:apk:debug
```

Esto permite crear una versión del APK distribuible en depuración, que no depende del servidor de Metro.

2. Una vez creado el APK, se puede localizar en la siguiente ruta:
```
/android/app/build/outputs/apk/debug/
```

5. La versión APK se encuentra disponible en la ruta del punto 3.

## Preparar y enviar la Aplicación
### Generar aplicación en AAB (Android App Bundle) o APK (Android)

1. Este comando ejecuta internamente el comando ```gradlew assembleDebug``` el cual agrupa todo el JavaScript necesario para ejecutar la aplicación en formato AAB. Se debe ejecutar el comando que corresponda al sistema operativo en el que se esté trabajando:
```
npm run windows:build:aab
```
o 
```
npm run mac:build:aab
```
2. El AAB generado esta disponible en la ruta y esta listo para cargarse en Google Play.
```
android/app/build/outputs/bundle/release/app.aab
```
3. Comando para instalar la versión de lanzamiento de la aplicación. 
```
npm run android:release
```
4. Comando que permite crear una versión APK lista para ser enviada a Google Play, ejecuta internamente el comando ```gradlew assembleRelease```. Se debe ejecutar de acuerdo al sistema operativo de trabajo:
```
npm run windows:generate:apk:release
```
o
```
npm run mac:generate:apk:release
```

### Generar aplicación para iOS.

Solo debe usar XCode y su proceso de firma y subida a App Store

