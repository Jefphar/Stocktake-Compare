# Stocktake Compare (Windows exe)

## Build with GitHub Actions
1. Create a new GitHub repo and upload everything in this folder (including the hidden `.github` folder).
2. Push to `main`, or open the Actions tab and run "Build Windows exe".
3. When it finishes, download the `Stocktake-Compare-exe` artifact. It contains `Stocktake-Compare.exe`, a single portable file with no installer.

## Build on your own PC (needs Node.js)
    npm install
    npm run build
The exe appears in `dist/`.

## Test without building
    npm install
    npm start
