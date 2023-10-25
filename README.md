# OpenEdition+

OpenEdition, c'est super mais c'est pénible à lire. 
Avec OpenEdition+, c'est super tout court !

## Comment ça marche ? 

C'est une toute petite extension, Chrome uniquement pour l'instant, qui charge un fichier CSS en plus sur les pages des publications du domaine openedition.org.

Le fichier corrige les problèmes suivants.

### Typos trop petites

Les textes ont une taille de 12px, alors que la bonne pratique d'accessibilité est de ne pas descendre en dessous de 16px. 

**L'extension passe le corps de texte en corps 21px**

https://accessibleweb.com/question-answer/minimum-font-size/

### Textes justifiés

Les paragraphes sont justifiés, probablement en héritage d'une tradition de composition typographique imprimée. Malheureusement, la justification est une opération subtile qui vise à éviter les lézardes, doser les césures, harmoniser le gris typographique. La justification automatique opérée par le navigateur ne sait pas gérer cette subtilité, et la responsivité des pages empêche un éventuel ajustement manuel. À la fois pour des raisons de qualité graphique et d'accessibilité, on ne justifie pas les textes sur le Web. 

**L'extension aligne le texte à gauche*

https://www.accede-web.com/notices/editoriale-modele/bonnes-pratiques/ne-pas-justifier-le-texte/

### Pages trop étroites

Les résolutions des écrans se sont progressivement agrandies, passant de 800×600 en 2000 à 1024×768 en 2007, à 1280×800 en 2011, et à 1920×1080 aujourd'hui.
Les pages des publications OpenEditon ont une largeur de 900px, c'est à dire que le design est resté bloqué autour des résolutions de 2007. Sur un écran en 1920, ça veut dire que 1020 pixels sont vides. Il faut ajouter à cela la colonne de gauche et les marges, laissant une largeur de texte de 528px. 
La lecture de cette petite colonne de texte sur un grand écran vide est très sous-optimale.

**L'extension étend la largeur de page à 1920, et la colonne de texte à 984px sur un écran de cette taille**