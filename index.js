class MiNav extends HTMLElement{

    connectedCallback(){
        this.innerHTML=`    


        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="PrincipalIndex.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contacto.html">Contacto</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="acercaDe.html">Acerca del Sitio</a>
              </li>
              <li class="nav-item">
              <a class="nav-link" href="politica.html">Política</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="economia.html">Economía</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="moda.html">Moda</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="tecnologia.html">Tecnología</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="galeria.html">Galeria</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="autor.html">Autores</a>
  </li>
            </ul>
          </div>
        </div>
      </nav>`
    }

}
customElements.define('mi-menu',MiNav);

