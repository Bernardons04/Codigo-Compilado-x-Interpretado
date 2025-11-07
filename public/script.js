async function runCode(lang) {
  const n = document.getElementById(lang === "python" ? "nPython" : "nC").value;
  const outputEl = document.getElementById(lang === "python" ? "outputPython" : "outputC");

  if (!n) {
    outputEl.textContent = "Digite um valor para N!";
    return;
  }

  outputEl.textContent = "Executando...";

  const res = await fetch(`/run-${lang}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ n }),
  });

  const result = await res.text();
  outputEl.textContent = result;
}
