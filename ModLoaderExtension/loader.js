console.warn("MOD LOADER LOADED")

const urlData = document.getElementById("modsURLS");

for (const url of urlData.split(" ")) {
    Game.Main.BundleManager.loadMod(url);
}