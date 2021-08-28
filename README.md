# API.PINKTUBE.EU

Custom API pro moje aplikace jednoduší práce s weather api a Reddit api

### Co to umí
* Random post z Redditu /api/reddit/JMÉNOREDDITU/randompost
* Zobrazení aktuálního počasí /api/weather/MĚSTO/current


### Jak spustit API
* Stáhneme kód 
* Ve složce, kde máme kód bota dáme `npm i`, což nám nainstaluje všechny použité balíčky
* Vytvoříme .env soubor, který bude obsahovat následující hodnoty:

```
API_PORT=Port, co se nám líbí
OPENWEATHERMAP_API_TOKEN=Api token lol
```
* Nyní API můžeme spustit pomocí `npm start`

### Error Codes
* 1 - Nebylo možné najít post odpovídající nastaveným restrikcím
* 2 - V .env nebyla nastavena hodnota OPENWEATHERMAP_API_TOKEN
