# toraline
Middleware API to calculate products purchases made by users based on their porcentages discounts

To run this project on your machine you need to follow these simples steps:

1. clone this repository
2. run 'yarn' on the command line to install the project dependencies
3. **optional**: create a .env file to choose the port you want the server to run (if you do not it will run on port 3000)
4. run 'yarn dev' to run the server locally


### **Tests**

This project have a few integration tests implements
To run the tests run 'yarn test' on the command line

***

Api intermediária para calcular compras de produtos feitas por usuários baseadas nas suas taxas de descontos.

Para rodar esse projeto na sua máquina você precisa seguir estes simples passos:

1. clone este repositório
2. rode 'yarn' na linha de comando para instalar as depedências do projeto
3. **opcional**: crie um arquivo .env para escolher a porta que o servidor irá utilizar(se não escolher ele irá rodar na porta 3000)
4. 'yarn dev' para inicializar o servidor localmente


### **Testes**

Este projeto possui alguns testes de integração implementados. Para rodar insira 'yarn test' na linha de comando.
***


## **ROTAS**
### Listagem de usuários 

> GET /users - FORMATO DA RESPOSTA - STATUS 200

```json
[
    {
        "id": 1,    
        "name": "cvRhuZicvV",
        "tax": 79
    },
    ...
]
```

### Listagem de produtos 

> GET /products - FORMATO DA RESPOSTA - STATUS 200

```json
[
    {
        "id": 1,
        "name": "explicabo alias hic reprehenderit deleniti quos id reprehenderit consequuntur ipsam iure voluptatem ea culpa excepturi ducimus repudiandae ab",
        "price": 6945
    },
    ...
]
```

### Calcular Compra

> POST /purchase - FORMATO DA RESQUISIÇÃO 

```json
{
    "userId": 1,
    "productsIds": [
        1,
        2,
        3,
    ]
}   
```

> POST /purchase - FORMATO DA RESPOSTA - STATUS 200

```json
1000
```

### ⚠️ Possíveis Erros

> POST /purchase - FORMATO DA RESPOSTA - STATUS 404

Caso você envie id inválido de usuário

```JSON
{
    "status": "Error",
    "code": 404,
    "message": "User not found"
}
```

> POST /purchase - FORMATO DA RESPOSTA - STATUS 404

Caso você envie id inválido de produtos

```JSON
{
    "status": "Error",
    "code": 404,
    "message": "Some or all products not found"
}
```
***
