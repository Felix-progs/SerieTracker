# SerieTracker – Frontend

Webbapp för att hålla koll på serier. Lägg till, markera som sedd och ta bort. Byggd i React, kommunicerar med SerieTracker-backendens API.

## Teknik
- React (Vite)
- JavaScript
- Fetch API mot backend

## Tekniska val
- **React med Vite** 
- **Komponentuppdelning** (formulär, lista, serie) med state och API-logik i `App.jsx`.
- **Felhantering** misslyckade API anrop visar felmeddelande istället för att krascha.

## Komma igång
Backend måste köra först (se backend-repot).
```bash
npm install
npm run dev
```
Appen startar på `http://localhost:5173`.

## Status
Klart: lista, lägg till, uppdatera och ta bort mot eget API. Responsiv layout och felhantering.