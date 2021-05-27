class Saver{
    saveState(key, value){
        localStorage.setItem(key, JSON.stringify(value))
    }

    loadState(key){
        return JSON.parse(localStorage.getItem(key))
    }
}