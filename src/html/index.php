<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8" />
        <title>Hola Mundo!</title>
        <?php 
            $result = 5;
            $pi = 'PHP INFO';
            $py = 'PHP MYADMIN';
            $Author = 'Lenin Ormaza';
        ?>
        <link rel="stylesheet" href="../css/styles.css" />
    </head>
    <body>
        <header>
            <h1>Hola Mundo!</h1>
            <nav>El men&uacute; si procediese</nav> <!-- Etiqueta comentada al no tener men&uacute; -->
        </header>
        <section>
            <article>
                <h2>Mi primer app usando sass, ghulp, nginx y PHP';</h2>
                <label >P&aacute;gina realizada en HTML<?=$result?></label>
            </article>
        </section>
        <aside>
            <h3>Art&iacute;culos relacionados</h3>
            <ul>
                <li><a href="http://local.miwebphp.com:88/" target="_blank"><?=$pi;?></a></li>
                <li><a href="http://local.phpmyadmin.com:88/" target="_blank"><?=$py;?></a></li>
            </ul>
        </aside>
        <footer>
            Creado por <?=$Author;?>
        </footer>
        <script type="application/javascript" src="../js/all,min.js"></script>
    </body>
</html>