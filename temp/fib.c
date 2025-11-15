#include <stdio.h>
#include <time.h>

long long fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    int n = 45;
    clock_t inicio = clock();
    long long resultado = fibonacci(n);
    clock_t fim = clock();

    double tempo_exec = (double)(fim - inicio) / CLOCKS_PER_SEC;

    printf("Fibonacci(%d) = %lld\n", n, resultado);
    printf("Tempo de execucao: %.6f segundos\n", tempo_exec);
    return 0;
}