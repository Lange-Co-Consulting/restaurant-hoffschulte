# Bedienungsanleitung — Karte und Inhalte pflegen

Carsten Hoffschulte kann die Speisekarte, Außer-Haus-Karte, Wild-Angebot, Veranstaltungs-Menüs, Öffnungszeiten und Gäste-Bewertungen selbst pflegen — ganz ohne Code. Dafür ist **Pages CMS** eingerichtet.

---

## Erstmaliges Setup (einmalig, von Emil zu erledigen)

### 1. GitHub-Account für das Restaurant anlegen

Damit Pages CMS arbeitet, braucht es einen GitHub-Account, der mit der Restaurant-E-Mail verknüpft ist. Carsten muss das Wort „GitHub" nie wieder sehen — der Account ist nur die Eintrittskarte ins CMS.

1. Auf **https://github.com/signup** einen neuen Account anlegen:
   - **E-Mail**: `Restaurant-Hoffschulte@t-online.de`
   - **Username**: `restaurant-hoffschulte` (oder ähnlich)
   - **Passwort**: sicher wählen, in einem Passwort-Manager (1Password, Bitwarden) speichern
2. E-Mail-Verifizierung über den Link in der Restaurant-Mailbox bestätigen
3. **Zwei-Faktor-Authentifizierung aktivieren** (Settings → Password and authentication) — sehr empfohlen

### 2. Diesen Account als Mitarbeiter zum Repo einladen

1. Im Browser: https://github.com/Lange-Co-Consulting/restaurant-hoffschulte/settings/access
2. **Add people** klicken → Username `restaurant-hoffschulte` eingeben → Rolle **Write** wählen
3. Im neu angelegten Account in der Mailbox bestätigen

### 3. Pages CMS verbinden

1. https://app.pagescms.org öffnen
2. **Sign in with GitHub** klicken — mit dem neuen Account einloggen
3. Pages CMS-App den Zugriff auf das Repo `restaurant-hoffschulte` erlauben
4. Im Dashboard erscheint jetzt der Eintrag „Restaurant Hoffschulte" — fertig.

### 4. Carsten den Zugang geben

Carsten bekommt von Emil:
- **URL**: https://app.pagescms.org
- **GitHub-Account**: `restaurant-hoffschulte`
- **Passwort**: (aus dem Passwort-Manager)

Beim ersten Login speichert sein Browser die Anmeldung. Danach ist es nur noch ein Klick.

---

## Wie Carsten die Karte ändert

### Speisekarte (Restaurant-Hauskarte)

1. https://app.pagescms.org öffnen, einloggen
2. Links auf **„Speisekarte (Restaurant)"** klicken
3. Bei der entsprechenden Karte auf das **Bild** klicken → **Upload** → neue PDF-Render-Datei wählen
4. Rechts oben **„Save"** klicken — fertig

In ca. 30 Sekunden ist die neue Karte auf der Website sichtbar.

### Veranstaltungs-Menüs (Familienmenü, Hochzeit, Buffet)

1. Links auf **„Menüvorschläge für Anlässe"** klicken
2. Karte auswählen → Bild austauschen oder Titel/Preis-Untertitel ändern
3. **Save**

### Außer-Haus-Karte (Suppen, Hauptgerichte, Beilagen)

1. Links auf **„Außer-Haus-Karte"** klicken
2. Direkt in der Tabelle: Name, Beschreibung, Preis ändern
3. **„+ Add item"** für neue Gerichte
4. **Save**

### Wild-Karte

Gleicher Weg wie Außer-Haus, unter **„Wild-Karte"**.

### Öffnungszeiten

Unter **„Öffnungszeiten"** — die drei Felder anpassen, **Save**.

### Gäste-Bewertungen (Startseite)

Unter **„Gäste-Bewertungen"** — neue Zitate hinzufügen, alte rauslöschen, Sterne anpassen.

---

## Was im Hintergrund passiert

Pages CMS schreibt die Änderungen als kleine Commits in das GitHub-Repository. Cloudflare Pages bemerkt jeden Commit automatisch und baut die Website neu — innerhalb von ca. 30 Sekunden ist die neue Version live unter https://restaurant-hoffschulte.pages.dev (bzw. später unter der Custom-Domain).

**Keine Datenverluste möglich** — jede Änderung ist versioniert. Wenn etwas schief geht, kann jede frühere Version mit zwei Klicks wiederhergestellt werden.

---

## Wenn etwas nicht funktioniert

- **Carsten kommt nicht ins CMS**: Login-Daten in Passwort-Manager nachschauen.
- **Bild wird nicht angezeigt**: 1 Minute warten (Cloudflare baut neu). Falls länger: Emil benachrichtigen.
- **CMS zeigt einen Fehler**: Screenshot machen, an Emil schicken.

Kontakt für technische Hilfe: Emil Averbeck.
