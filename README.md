# Todo Test Projet


## 1. Description
Cette application est une Todo List développée en **React** pour le frontend et **NestJS** pour le backend.  
Elle permet de **créer, éditer et supprimer des tâches**.

## 2. Choix techniques
- **React** pour le frontend car c'est demandé dans le test.
- **NestJS** pour le backend pour une architecture modulaire et scalable.
- **TypeScript** pour un typage fort et une meilleure maintenance du code.

## 3. Défis rencontrés et solutions
### a) Problème de type avec `UseCases`
- Erreur `Argument of type 'typeof SaveTaskUseCase' is not assignable...`
- Solution : Vérification des interfaces et compatibilité entre `SaveTaskUseCase` et `UseCases`.

### b) Communication frontend-backend
- Difficulté avec les requêtes API et le format des réponses.
- Solution : Utilisation de `axios` et ajustement des DTO.

## 4. Installation et exécution
### Backend (NestJS)
```sh
cd backend
npm install
npm run start
