jogadores = list()
jogador = dict()
gols = list()
soma = cont = 0
while True:
    print('-'*20)
    jogador['nome'] = str(input('Nome do Jogador: '))
    cont += 1
    partidas = int(input(f'Quantas partidas {jogador["nome"]} jogou? '))
    for c in range(0, partidas):
        gol = (int(input(f'Quantos gols na partida {c}? ')))
        gols.append(gol)
        jogador['gols'] = gols
        soma += gol
        jogador['total'] = soma
    jogadores.append(jogador.copy())
    jogador.clear()
    continuar = str(input('Quer continuar? [S/N]')).upper()
    while continuar not in "SN":
        continuar = str(input('Quer continuar? [S/N]')).upper()
    if continuar == 'N':
        break
print(jogadores)
print('-='*25)
print(f'{"cod":<5}{"nome":<10}{"gols":<10}{"total":<5}')
print('-'*35)
for c in range(0, cont):
    print(f'{c}{jogadores[c]["nome"]}{jogadores[c]["gols"]}{jogadores[c]["total"]}')