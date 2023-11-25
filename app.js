const reasons = [
    "meu gato fugiu",
    "Andressa não deixou",
    "minha mãe tá na fila do Atacadão",
    "tô sem carro",
    "tô com uma preguiça lascada",
    "vou trabalhar",
    "tenho que fazer o TCC",
    "tenho que entregar o TCC",
    "tenho que dormir cedo",
    "meu cachorro tá doente",
    "meu gato tá doente",
    "tenho compromisso",
    "não tô na vibe",
    "tô cansadão",
    "tenho que ficar em casa",
    "preciso dormir",
    "vou sair com Andressa",
    "Andressa tá meio triste",
    "tô com dor no ombro",
    "machuquei meu ombro",
    "tenho aula da faculdade",
    "tenho que trabalhar amanhã de manhã",
    "tô meio doente",
    "tô sem grana",
    "gastei muito com meu gato",
    "gastei muito esse mês",
    "tenho que levar meu gato no veterinário",
    "tenho que ir no médico",
    "tô sem a chave de casa"
]

function generateReason() {
    let btn = document.getElementById("btn");
    let txt = document.getElementById("reason-text");
    let emoji = document.getElementById("emoji");

    txt.classList.add("hidden");
    btn.disabled = true;
    emoji.classList.remove("hidden");

    const emojiInterval = setInterval(() => {
        emoji.style.transform = "scale(1.1)";
        setTimeout(() => {
            emoji.style.transform = "scale(1)";
        }, 250);
    }, 500)

    const reasonInterval = setInterval(() => {
        let reason = getRandomReason();
        txt.textContent = reason;
    }, 100);

    setTimeout(() => {
        clearInterval(reasonInterval);
        clearInterval(emojiInterval);
        txt.classList.remove("hidden");
        btn.disabled = false;
        emoji.classList.add("hidden");
    }, 3000);
}

function getRandomReason() {
    const randomIdx = Math.floor(Math.random()*reasons.length)
    return reasons[randomIdx];
}