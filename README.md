# mbertello-ecf-project

Guide d'installation locale

1. Download Xampp sur votre ordinateur, lien : https://www.apachefriends.org/fr/download.html
2. Installez Xampp et l'ouvrir sur votre ordinateur.
3. Clickez sur "start" à coté de "Apache" pour voir si tout marche sans erreur.
4. Clickez sur “stop” toujours a coté de Apache et clickez sur "Config" a droite, puis clickez sur le premier resultat, "Apache httpd.conf".
5. Dans le Notepad qui va s’ouvrir recherchez la parole "listen", (ctrl + f) "listen", pour trouver la porte en local ou se pourra voir l’application.
   Gardez en tete se numero.
7. Recherchez la parole "documentroot", (ctrl + f)  documentroot (tout attaché), pour trouver le parcours de l’application.
   Le parcour resemble a ca : DocumentRoot "C:/xampp/htdocs".
8. Changez le parcour in "documentroot" et aussi in "directory" avec le parcours ou vous avez sauvegardé l’application sur votre ordinateur.
9. Sauvargez le Notepad, puis le fermer.
10. Retournez sur Xampp et clickez sur "start" sur Apache, a nouveau.
11. Ouvrez le Task Manager sur votre ordinateur, allez dans "performances", puis allez dans "wi-fi".
    Recopiez l'adresse "ipv4adress" et l’ecrire sur votre navigateur, dans l’URL. Exemple: 192.168.43.86:
12. Rajoutez la porte que vous avez recherchez au début à la fin de l’adresse ipv4adress, exemple: 192.168.43.86::11420.
    Accédez au site.
