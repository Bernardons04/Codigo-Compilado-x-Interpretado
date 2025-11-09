# 🔹 Comparação: Compilador x Interpretador

Projeto desenvolvido para demonstrar, de forma prática e visual, as diferenças entre linguagens **compiladas** e **interpretadas**, utilizando **C** e **Python**.

---

## 🚀 Objetivo

O sistema permite comparar o **tempo de execução** de um mesmo algoritmo (sequência de Fibonacci) nas duas linguagens, evidenciando as diferenças entre o processo de **compilação** (C) e **interpretação** (Python).

---

## 🧠 Conceitos Envolvidos

| Conceito | Descrição |
|-----------|------------|
| **Compilador** | Traduz todo o código fonte para linguagem de máquina antes da execução. Exemplo: GCC (para C). |
| **Interpretador** | Lê e executa o código linha a linha, em tempo real. Exemplo: Python. |
| **Diferença Prática** | Linguagens compiladas tendem a ter desempenho superior, enquanto linguagens interpretadas oferecem maior flexibilidade e rapidez no desenvolvimento. |

---

## 🏗️ Tecnologias Utilizadas

- **Frontend:** HTML, CSS (Bootstrap 5.3), Vue.js  
- **Backend:** Node.js + Express  
- **Execução de Códigos:** `child_process` (para executar GCC e Python)
- **Hospedagem:** Render (ou ambiente local)

---

## ⚙️ Estrutura do Projeto

```

Projeto/
│
├── public/               # Interface web (HTML, CSS, JS)
│   └── index.html
│
├── temp/                 # Arquivos temporários gerados dinamicamente
│
├── server.js             # Servidor Node.js (executa C e Python)
│
└── package.json          # Configurações e dependências

```

---

## 🧩 Funcionamento

1. O usuário acessa a interface web e informa um número **n**.  
2. O sistema gera o código fonte equivalente em **C** e **Python**.  
3. O servidor Node.js:
   - Compila e executa o código C com **GCC**.
   - Interpreta o código Python com o **Python CLI**.
4. O resultado e o **tempo de execução** são retornados e exibidos na tela.  
5. O usuário pode comparar diretamente os desempenhos das duas linguagens.

---

## 🖥️ Exemplos de Execução

### C (Compilado)
```

Fibonacci(20) = 6765
Tempo de execucao: 0.000153 segundos

```

### Python (Interpretado)
```

Fibonacci(20) = 6765
Tempo de execucao: 0.002391 segundos

````

---

## 🧾 Demonstração Prática

A aplicação mostra na prática:

- Que linguagens **compiladas** passam por uma etapa de **tradução prévia** (GCC → binário).
- Que linguagens **interpretadas** são executadas **diretamente**, sem compilação.
- O impacto dessas abordagens no **tempo de execução real**.

---

## 🧪 Como Executar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Python 3](https://www.python.org/)
- [GCC](https://gcc.gnu.org/)

### Passos

```bash
# 1. Clonar o repositório
git clone https://github.com/Bernardons04/Codigo-Compilado-x-Interpretado.git

# 2. Acessar a pasta
cd compilador-vs-interpretador

# 3. Instalar dependências
npm install

# 4. Executar o servidor
node server.js
````

Acesse no navegador:
👉 **[http://localhost:3000](http://localhost:3000)**
