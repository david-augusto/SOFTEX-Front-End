import csv

with open("G:\\Outros computadores\\Meu modelo Laptop\\Backup Notebook\\13 - Softex\\01 - LOGICA DE PROGRAMACAO ORIENTADA A OBJETOS\\MODULO 02 - INTRODUCAO A PROGRAMACAO\\13 - ACESSAR TABELAS E LISTAS\\notas_alunos.csv", "r") as arquivo:
	arquivo_csv = csv.reader(arquivo, delimiter=",")
	for linha in arquivo_csv:
		print(linha)
		if()