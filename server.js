import express from "express";
import { exec } from "child_process";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

const tempDir = path.join(process.cwd(), "temp");
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

// --- Executa código C ---
app.post("/run-c", (req, res) => {
    const n = parseInt(req.body.n);
    const cPath = path.join(tempDir, "fib.c");
    const exePath = path.join(tempDir, "fib.exe");

    const cCode = `
#include <stdio.h>
#include <time.h>

long long fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    int n = ${n};
    clock_t inicio = clock();
    long long resultado = fibonacci(n);
    clock_t fim = clock();

    double tempo_exec = (double)(fim - inicio) / CLOCKS_PER_SEC;

    printf("Fibonacci(%d) = %lld\\n", n, resultado);
    printf("Tempo de execucao: %.6f segundos\\n", tempo_exec);
    return 0;
}`.trim();

    fs.writeFileSync(cPath, cCode);

    exec(`gcc "${cPath}" -o "${exePath}" && "${exePath}"`, (err, stdout, stderr) => {
        if (err) return res.send(stderr || err.message);
        res.send(stdout);
    });
});

// --- Executa código Python ---
app.post("/run-python", (req, res) => {
    const n = parseInt(req.body.n);
    const pyPath = path.join(tempDir, "fib.py");

    const pyCode = `
import time

def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

n = ${n}
inicio = time.time()
resultado = fibonacci(n)
fim = time.time()

print(f"Fibonacci({n}) = {resultado}")
print(f"Tempo de execucao: {fim - inicio:.6f} segundos")
`.trim();

    fs.writeFileSync(pyPath, pyCode);

    exec(`python "${pyPath}"`, (err, stdout, stderr) => {
        if (err) return res.send(stderr || err.message);
        res.send(stdout);
    });
});

app.listen(PORT, () => console.log(`✅ Servidor rodando em http://localhost:${PORT}`));