<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"   content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="script.js"></script>
    <title>Teste</title>
</head>
<body>    
    <div class="jumbotron m-0">
        <form>
            <label for="newProdPrice">
                <h3>Valor Produto</h3>
            </label>
            <div class="input-group">
                <input type="number" class="form-control" id="newProdPrice" name="newProdPrice" placeholder="R$">
                <div class="input-group-append">
                    <button type="button" class="btn btn-primary" onclick="addProduct()">+</button>
                </div>
            </div>
            <br>
        </form>
        <form>
            <div id="productList"></div>
            <label for="paidValue">
                <h3>Valor Pago</h3>
            </label>
            <input type=number class="form-control" id="paidValue" name="paidValue" placeholder="R$">
            <br>
            
            <button type="button" class="form-control btn btn-success" onclick="breakChange()">Calcular</button>
        </form>
        <br>
        <label for="totalValue">
                <h3>Valor Total</h3>
            </label>
        <input type="text" class="form-control" id="totalValue" name="totalValue" placeholder="Pressione Calcular..." readonly>
        <br>
        <label for="changeValue">
                <h3>Valor Troco</h3>
            </label>
        <input type="text" class="form-control" id="changeValue" name="changeValue" placeholder="Pressione Calcular..." readonly>
        <br>
        <div id="moneyTable"></div>
        <br>
        <button type="button" class="form-control btn btn-danger" onclick="reset()">Limpar</button>
    </div>
</body>
</html>