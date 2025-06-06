<img src="assets/img/logo-blanca.png" alt="LetItBeat!">

<h3>/// 1. Descripción del Proyecto</h3>
<p>
  Toquen el DOM es una aplicación web interactiva para una <strong>escuela de música online</strong> que permite a los usuarios practicar con <strong>instrumentos virtuales</strong> (Piano, Marimba y Batería) mediante interacción con teclado y mouse.
</p>
<p>
  Este proyecto fue desarrollado como parte del <strong>Bootcamp P1 de FemCoders.</strong> (Proyecto ficticio de uso educacional)
</p>

<h3>/// 2. Características Principales:</h3>
<ul>
  <li><strong>Tres instrumentos</strong> con <strong>sonidos realistas</strong></li>
  <li>Interacción dual <strong>(teclado físico + mouse)</strong></li>
  <li><strong>Animaciones</strong> visuales al tocar</li>
  <li>Diseño <strong>responsive</strong></li>
  <li>Fácil despliegue con <strong>Docker</strong></li>
</ul>

<h3>/// 3. Contexto y Objetivos:</h3>
<p>
  <strong>Aplicar y consolidar</strong> nuestros conocimientos en tecnologías como JavaScript, Docker, HTML y CSS, con el objetivo de crear una herramienta innovadora que facilite el aprendizaje de la música en línea, <strong>sin importar la ubicación del estudiante.</strong>
</p>
<ul>
  <li>➡️ Crear una plataforma interactiva para práctica musical</li>
  <li>➡️ Implementar interacción mediante mouse y teclado</li>
  <li>➡️ Evaluar diferentes propuestas de desarrollo</li>
  <li>➡️ Cumplir con los requerimientos técnicos del bootcamp</li>
</ul>

<h3>/// 4. Requerimientos Técnicos</h3>
<ul>
  <li>✅ <strong>GitFlow</strong> para gestión de versiones</li>
  <li>✅ Tres instrumentos: <strong>Piano, Marimba y Batería</strong></li>
  <li>✅ Interacción con <strong>mouse y teclado</strong></li>
  <li>✅ <strong>Sonidos realistas</strong> y sincronizados</li>
  <li>✅ <strong>Animaciones</strong> al tocar</li>
  <li>✅ Código <strong>limpio y semántico</strong> (HTML5, CSS3, JS Vanilla)</li>
  <li>✅ <strong>Dockerfile</strong> para contenedorización</li>
</ul>

<p><strong>Bonus track</strong> 🌟</p>
<ul>
  <li>Diseño responsive</li>
  <li>Documentación de uso</li>
</ul>

<h3>/// 5. Vistas Principales:</h3>

<h4>Vista de Piano 🎹</h4>
<ul>
  <li>2 Octavas <strong>completas</strong></li>
  <li>Teclas blancas/negras correctamente <strong>afinadas</strong></li>
  <li>Mapeo a <strong>teclado</strong> QWERTY</li>
</ul>

<h4>Vista de Marimba 🎵</h4>
<ul>
  <li>Barras <strong>organizadas</strong> por tonalidad</li>
  <li>Sonidos percusivos <strong>realistas</strong></li>
  <li>Visualización de <strong>notas activas</strong></li>
</ul>

<h4>Vista de Batería 🥁</h4>
<ul>
  <li>Componentes <strong>interactivos</strong></li>
  <li>Efectos <strong>visuales</strong> al tocar</li>
</ul>

<h3>/// 6. Herramientas Utilizadas</h3>
<ul>
  <li>HTML5 semántico</li>
  <li>CSS3</li>
  <li>JavaScript vanilla</li>
  <li>Docker</li>
  <li>Git y GitHub</li>
  <li>DevTools</li>
  <li>Tone.js</li>
  <li>Google Fonts y Font Awesome</li>
  <li>Canva</li>
</ul>

<h3>/// 8. Instalación</h3>

<h4>Por el Dockerfile</h4>
<p>En Docker, crea un archivo llamado <code>Dockerfile</code> con este contenido:</p>
<pre><code>FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
</code></pre>

<p>Luego, en tu terminal, construye tu imagen:</p>
<code>docker build -t toqueneldom .</code>

<p>Y ejecuta el contenedor:</p>
<code>docker run -p 8080:80 toqueneldom</code>

<p>Después, abre tu navegador en: <br><code>http://localhost:8080</code></p>

<hr>

<h4>📧 Hecho por:</h4>
<ul>
  <li>Murry Alexandra Rojas Castro</li>
  <li>Bruna H. Sonda Santos</li>
  <li>Débora Rubio</li>
  <li>Mayleth Carrascal</li>
</ul>

<p>📅 Fecha de entrega: 24/04</p>

<p>🌐 <strong>Repositorio:</strong> <a href="https://github.com/debsrdev/toqueneldom">GitHub</a></p>

<p>Gracias! ✨</p>
