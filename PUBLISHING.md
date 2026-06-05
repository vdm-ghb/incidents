# Publishing to GitHub

## One-time setup

### Step 1 — Create the repository on GitHub

Go to **github.com/new** and fill in:
- Repository name: `offshore-incidents` (or your preferred name)
- Visibility: **Public**
- Leave all checkboxes unticked (no README, no .gitignore, no licence)
- Click **Create repository**

### Step 2 — Connect your local repo and push

Run the following in Terminal, replacing `YOUR_USERNAME` and `REPO_NAME`:

```bash
cd "/Volumes/work/Code/2026.06.01 Lessons Learnt IOGP"
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

When prompted for a password, use a **Personal Access Token** — not your GitHub account password:
1. Go to **github.com/settings/tokens**
2. Click **Generate new token (classic)**
3. Tick the `repo` scope
4. Copy the token and paste it as your password

### Step 3 — Enable GitHub Pages

In your new GitHub repository:
1. Go to **Settings → Pages**
2. Under Source, select **Deploy from a branch**
3. Choose branch `main`, folder `/ (root)`
4. Click **Save**

Your site will be live at:
```
https://YOUR_USERNAME.github.io/REPO_NAME/
```
(allow about 60 seconds for the first deployment)

---

## Pushing updates

Every time you add or update incidents, run:

```bash
cd "/Volumes/work/Code/2026.06.01 Lessons Learnt IOGP"
git add .
git commit -m "Brief description of what changed"
git push
```

The live site updates automatically within about a minute of each push.

---

## Adding new incidents

All incident data is in `data/incidents.js`. Copy the structure of any existing
incident and add it to the `incidents` array. Key fields:

| Field | Description |
|---|---|
| `id` | Unique snake_case identifier |
| `name` | Display name |
| `year` / `date` | Year (number) and full date string |
| `lat` / `lng` | Decimal coordinates |
| `location` | Human-readable location string |
| `region` | Must match a filter option in `index.html` |
| `weather_event_type` | `hurricane`, `storm`, `internal_wave`, or `helicopter` |
| `fatalities` | Number (use `0` for infrastructure-only events) |
| `severity_override` | Optional — `critical`, `major`, `notable` — overrides marker colour when fatalities are 0 but damage is significant |
| `infrastructure_impact` | Optional — short string describing damage scale |

After editing, refresh `index.html` in your browser to verify before pushing.
