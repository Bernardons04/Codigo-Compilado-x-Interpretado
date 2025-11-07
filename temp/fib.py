import time

def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

n = 45
inicio = time.time()
resultado = fibonacci(n)
fim = time.time()

print(f"Fibonacci({n}) = {resultado}")
print(f"Tempo de execucao: {fim - inicio:.6f} segundos")