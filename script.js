let serigala = document.getElementsByClassName("serigala")
let kotak = document.getElementsByClassName("kotak");
let peluru = document.getElementById("peluru")
let score = document.getElementById("score")
let sisaPeluru = 11
let scoreAkhir = 0


function boxRandom(kotak) { 
    let kotakSama;
    let rdm = Math.floor(Math.random() * 5)
    let iRandom = kotak[rdm]

    if (iRandom === kotakSama) {
        serigala.style.display = "none"
    }
    
    return iRandom
}

function wolfIn() {
    let wolfRandom = boxRandom(kotak)
    wolfRandom.classList.add("serigala")
    wolfRandom.addEventListener("click", hit)

    setTimeout(function() {
        wolfRandom.classList.remove("serigala")
        if(sisaPeluru !== 0) {
            wolfIn()
        }
    }, 500)
}

function hit() {
    scoreAkhir++
}

function fire() {
    sisaPeluru--
    peluru.innerText = sisaPeluru
    if (sisaPeluru == 0) {
        alert(`Peluru Sudah Habis!, Score Akhir Kamu Adalah : ${scoreAkhir}`)
    }
}