# Todo Test Projet

## Description
Ce projet est une application de gestion de tâches (Todo List) utilisant **React** pour le frontend et **NestJS** pour le backend, avec **Docker** pour la base de données.

## Installation et Lancement

### Prérequis
- **Docker**
- **Node.js**
- **Yarn**

### Installation
1. Cloner les dépôts forkés sur la machine personnelle.
2. Installer les dépendances du backend :
   ```sh
   cd ..\GitHub\hdm-todo-test-api
   yarn install
   ```
3. Installer les dépendances du frontend :
   ```sh
   cd ..\GitHub\hdm-todo-test-web-app
   yarn install
   ```
4. Lancer les containers Docker :
   ```sh
   docker compose -f stack.local.yml up -d
   ```
5. Démarrer le backend :
   ```sh
   yarn run start
   ```
6. Démarrer le frontend :
   ```sh
   yarn dev
   ```

---

## Difficultés rencontrées

### 1. Problème d'accès à Docker
- Initialement, il était difficile d'accéder au container et de se connecter à la base de données.
- Solution : Utilisation de `docker exec -it <id_du_container> mysql -u root -p` et connexion à la BDD via MySQL.

### 2. Erreurs dans le backend
- **Problème avec `UseCaseFactory`** :
  - Le type `UseCases` n'était pas défini correctement.
  - Solution : Ajout de `type UseCases = GetAllTasksUseCase | DeleteTask | SaveTaskUseCase;`.
- **Injection de dépendances incorrecte** :
  - `TaskRepository` n'était pas correctement injecté dans `TaskController`.
  - Solution : Correction de l'injection via le constructeur.
- **Erreur avec `handle(dto)`** :
  - `SaveTaskDto` était mal reconnu comme paramètre.
  - Solution : Correction du typage et des DTOs.

### 3. Vérifications dans le frontend
- Ajout de conditions pour empêcher la validation d'une tâche sans titre.
- Désactivation du bouton "Modifier" si aucun changement n'est détecté.

---

## Fonctionnalités
- **Créer une tâche** ✅
- **Modifier une tâche** ✅
- **Supprimer une tâche** ✅
- **Empêcher la validation si le champ est vide** ✅
- **Empêcher la modification si aucun changement n'est fait** ✅

- **Ajout d’une méthode disconnect dans PrismaService.ts :**
Méthode disconnect a été ajoutée dans PrismaService.ts. Cela permet de fermer proprement la connexion à la base de données lorsque l’application s’arrête, pour ainsi éviter les fuites de connexions

---

## Livrables
1. **Dépôts GitHub forkés** ✅
2. **Ce fichier README.md** ✅
3. **Vidéo de démonstration de l'application** ✅

---

