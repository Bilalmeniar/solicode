
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Mon Portfolio</title>

    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <header class="header">

        <h1>Bienvenue sur mon Portfolio</h1>

        <nav>
            <a href="#accueil">Accueil</a>
            <a href="#projets">Projets</a>
            <a href="#contact">Contact</a>
        </nav>

    </header>

    <main>

        <!-- Section Accueil -->
        <section id="accueil" class="hero">

            <h2>Bonjour, je suis développeur web</h2>

            <p>Je crée des sites web modernes et simples.</p>

        </section>


        <!-- Section Projets -->
        <section id="projets" class="projets">

            <h2>Mes projets</h2>

            <div class="grille-projets">

                <?php foreach ($projets as $projet): ?>

                    <div class="projet">

                        <h3>
                            <?= htmlspecialchars($projet['titre']) ?>
                        </h3>

                        <p>
                            <?= htmlspecialchars($projet['description']) ?>
                        </p>

                        <span class="technologies">
                            <?= htmlspecialchars($projet['technologies']) ?>
                        </span>

                        <?php if ($projet['technologies'] === 'HTML, CSS, PHP'): ?>

                            <p>Projet avec PHP</p>

                        <?php else: ?>

                            <p>Projet sans PHP</p>

                        <?php endif; ?>

                    </div>

                <?php endforeach; ?>

            </div>

        </section>


        <!-- Section Contact -->
        <section id="contact" class="contact">

            <h2>Contact</h2>

            <p>Contactez-moi pour discuter de vos projets.</p>

        </section>

    </main>


    <!-- Footer -->
    <footer class="footer">

        <h2>Mon Portfolio</h2>

        <p>Développeur Web — Je crée des sites web modernes et simples.</p>

        <nav class="footer-nav">

            <a href="#accueil">Accueil</a>
            <a href="#projets">Projets</a>
            <a href="#contact">Contact</a>

        </nav>

        <p class="copyright">
            &copy; 2026 Mon Portfolio. Tous droits réservés.
        </p>

    </footer>

</body>

</html>
