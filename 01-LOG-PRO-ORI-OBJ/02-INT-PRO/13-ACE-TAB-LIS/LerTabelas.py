import csv

with open("notas_alunos.csv", "r") as arquivo:
	arquivo_csv = csv.reader(arquivo, delimiter=",")
	for linha in arquivo_csv:
		print(linha)
		if()
