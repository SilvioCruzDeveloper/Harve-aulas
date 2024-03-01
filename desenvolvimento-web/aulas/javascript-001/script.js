//ALUNO 1
const nomeAluno01 = "Valmir";
const faltasAluno01 = 0;
const notaAluno01 = 10;
//const faltasAluno01 = Math.trunc(Math.random() * 15);
//const notaAluno01 = 8;
//ALUNO 2
const nomeAluno02 = "Alexandro";
const notaAluno02 = 5;
const faltasAluno02 = Math.trunc(Math.random() * 15);
//ALUNO 3
const nomeAluno03 = "Osvaldo";
const faltasAluno03 = Math.trunc(Math.random() * 15);
const notaAluno03 = 6.8;
//ALUNO 4
const nomeAluno04 = "Matheus";
const faltasAluno04 = Math.trunc(Math.random() * 15);
const notaAluno04 = Math.trunc(Math.random() * 10);

//VARIAVES DA DOM
const feedback01 = document.getElementById("feedback-nota-01");
const feedback02 = document.getElementById("feedback-nota-02");
const feedback03 = document.getElementById("feedback-nota-03");
const feedback04 = document.getElementById("feedback-nota-04");

if (notaAluno01 >= 7 && faltasAluno01 <= 10) {
  feedback01.textContent = `Aluno: ${nomeAluno01} Total de faltas ${faltasAluno01} Recebel Nota ${notaAluno01} foi Aprovado`;
} else if (notaAluno01 == 10 && faltasAluno01 == 0) {
  alert("teste");
} else {
  feedback01.textContent = `Aluno: ${nomeAluno01} Total de faltas ${faltasAluno01} Recebel Nota ${notaAluno01} foi reprovado`;
}

if (notaAluno02 >= 7 && faltasAluno02 <= 10) {
  feedback02.textContent = `Aluno: ${nomeAluno02} Total de faltas ${faltasAluno02} Recebel Nota ${notaAluno02} foi aprovado`;
} else {
  feedback02.textContent = `Aluno: ${nomeAluno02} Total de faltas ${faltasAluno02} Recebel Nota ${notaAluno02} foi Reprovado`;
}

if (notaAluno03 >= 7 && faltasAluno03 <= 10) {
  feedback03.textContent = `Aluno: ${nomeAluno03} Total de faltas ${faltasAluno03} Recebel Nota ${notaAluno03} foi aprovado`;
} else {
  feedback03.textContent = `Aluno: ${nomeAluno03} Total de faltas ${faltasAluno03} Recebel Nota ${notaAluno03} foi reprovado`;
}
if (notaAluno04 >= 7 && faltasAluno04 <= 10) {
  feedback04.textContent = `Aluno: ${nomeAluno04} Total de faltas ${faltasAluno04} Recebel Nota ${notaAluno04}  foi aprovado`;
} else {
  feedback04.textContent = `Aluno: ${nomeAluno04} Total de faltas ${faltasAluno04} Recebel Nota ${notaAluno04} foi reprovado`;
}
