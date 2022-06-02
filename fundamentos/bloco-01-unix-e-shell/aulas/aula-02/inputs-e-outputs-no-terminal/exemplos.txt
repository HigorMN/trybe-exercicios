# Considere o arquivo nomes.txt para os exemplos a seguir
# Seu conteúdo inicial é:
Ana
Maria
João

# O > redireciona a saída padrão para um arquivo, sendo assim
# caso haja algum conteúdo no arquivo, ele será substituído

cat > nomes.txt
# Digite o nome "Amanda" e encerre o cat (Ctrl + D)

cat nomes.txt
# Resultado
Amanda

# O >> anexa a saída padrão a um arquivo. Sendo assim, ele adiciona
# o que for digitado ao final do arquivo em questão

cat >> nomes.txt
# Digite o nome "Fernanda", depois `enter` e o nome "Fabiano", e encerre o cat (Ctrl + D)

cat nomes.txt
# Resultado
Amanda
Fernanda
Fabiano

# O | canaliza a saída do primeiro comando para a entrada do segundo,
# dessa forma conseguimos realizar comandos de forma sucessiva

# Considere que queremos uma lista com todos os nomes que contenham
# a letra "F" e que nosso resultado esteja em ordem alfabética
# Para isso podemos realizar o comando abaixo

grep F nomes.txt | sort
# Resultado
Fabiano
Fernanda
