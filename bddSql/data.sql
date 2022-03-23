USE portfolio;

INSERT INTO my_info (name, first_name, description, front_back, work, email)
VALUES  ("Sage", "Alexandre", "Développeur web et mobile junior je souhaite à terme devenir développeur full-stack spécialiser dans le dévellopement de site web et d'applications mobile.", "Front-end & Back-end", "Developpeur web et mobile", "alexandresage56@gmail.com");

INSERT INTO about (about_paragraph)
VALUES ("Terminant une formation de développeur Web et Mobile je suis à la recherche
d'un poste de développeur Web et Mobile Junior pour parfaire mes compétences."),
("Vous avez découvert au travers de ce site,les compétences que j’ai
aquises lors de ma formation de développeur web et web mobile chez Digigtal
Campus à Rennes. Lorsdes modules de cette formation j’ai étudié différents
langages et les frameworks."),
("J’ai également acquis des compétences dans le développement d’applications
mobiles via ReactNative."),
("Cette formation constitue pour moi une réelle oportunité de reconversion dans
un secteur qui mepassionne car il est en constante évolution. J’ai par exemple
a titre personnel souscrit un abonnement ausite Codecademy afin de
compléter les conaissances aquises lors de ma formation.");

INSERT INTO langages_frameworks (langages_frameworks_name,langages_frameworks_image_path)
VALUES
("JavaScript","src/images/langages/javascript.svg"),
("NodeJs","src/images/langages/nodejs.svg"),
("ReactJs","src/images/langages/react.svg"),
("MariaDB/Sql","src/images/langages/mariadb.svg"),
("HTML","src/images/langages/html.svg"),
("Pug","src/images/langages/pug.svg"),
("Twig","src/images/langages/twig.png"),
("PHP","src/images/langages/php.svg"),
("Symfony","src/images/langages/symfony.svg"),
("CSS","src/images/langages/css.svg"),
("Sass","src/images/langages/sass.svg"),
("Python 3","src/images/langages/python.svg");

INSERT INTO carousel_component_images (image_path)
VALUES
("src/images/carousel/esteiro.jpg"),
("src/images/carousel/esteiroxove.png"),
("src/images/carousel/general.jpg"),
("src/images/carousel/longa.jpg"),
("src/images/carousel/machacona.png"),
("src/images/carousel/photo.jpg"),
("src/images/carousel/report.jpg"),
("src/images/carousel/secretspot.jpg"),
("src/images/carousel/tube.jpg"),
("src/images/carousel/userprofildefaultpicture.jpg");