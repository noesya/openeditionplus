# OpenEdition+

OpenEdition, c'est super mais c'est pénible à lire. 
Avec OpenEdition+, c'est super tout court !

## Comment ça marche ? 

C'est une toute petite extension, Chrome uniquement pour l'instant, qui charge un fichier CSS en plus sur les pages des publications du domaine openedition.org.

Le fichier corrige les problèmes suivants.

### Typos trop petites

Les textes ont une taille de 12px, alors que la bonne pratique d'accessibilité est de ne pas descendre en dessous de 16px. 

*L'extension passe le corps de texte en corps 21px*

https://accessibleweb.com/question-answer/minimum-font-size/

### Textes justifiés

Les paragraphes sont justifiés, probablement en héritage d'une tradition de composition typographique imprimée. Malheureusement, la justification est une opération subtile qui vise à éviter les lézardes, doser les césures, harmoniser le gris typographique. La justification automatique opérée par le navigateur ne sait pas gérer cette subtilité, et la responsivité des pages empêche un éventuel ajustement manuel. À la fois pour des raisons de qualité graphique et d'accessibilité, on ne justifie pas les textes sur le Web. 

*L'extension aligne le texte à gauche*

https://www.accede-web.com/notices/editoriale-modele/bonnes-pratiques/ne-pas-justifier-le-texte/

### Pages trop étroites

Certains écrans sont plus grands que dans le passé, et la lecture d'une petite colonne de texte sur un grand écran est pénible.

*L'extension étend la largeur de page*