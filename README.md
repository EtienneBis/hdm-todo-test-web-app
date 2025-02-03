# Todo List - Test Technique

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
   cd backend
   yarn install
   ```
3. Installer les dépendances du frontend :
   ```sh
   cd frontend
   yarn install
   ```
4. Lancer les containers Docker :
   ```sh
   docker-compose up -d
   ```
5. Démarrer le backend :
   ```sh
   yarn start:dev
   ```
6. Démarrer le frontend :
   ```sh
   yarn dev
   ```

---

## Difficultés rencontrées

### 1. Problème d'accès à Docker
- Initialement, il était difficile d'accéder au container et de se connecter à la base de données.
- Solution : Utilisation de `docker exec -it <nom_du_container> bash` et connexion à la BDD via MySQL.

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

---

## Livrables
1. **Dépôts GitHub forkés** ✅
2. **Ce fichier README.md** ✅
3. **Vidéo de démonstration de l'application** 🎥

---

## Auteur
BISBAU Etienne

