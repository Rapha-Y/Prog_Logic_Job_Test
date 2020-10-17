const K = 20; //número de cédulas/moedas
let idList = []; //lista de novos ids para os inputs dinâmicos

//validação dos inputs
function numberValidation(number) {
    if(Number.isNaN(number)) {
        alert("Os valores devem estar preenchidos com números");
    } else {
        if (number == parseFloat(number.toFixed(2))) {
            if (number > 0) {
                return true;
            } else {
                alert("Os valores devem ser maiores do que zero");
            }
        } else {
            alert("Os valores devem ter no máximo duas casas decimais");
        }
    }
    return false;
}

//adiciona input com preço do novo produto
function addProduct() {
    var value = parseFloat(document.getElementById("newProdPrice").value);

    if (numberValidation(value)) {
        //geração de ids
        let id = "product-" + (idList.length + 1);
        idList.push(id);

        var list = document.getElementById("productList");

        var label = document.createElement("label");
        label.htmlFor = id;
        label.className = "mb-0";

        var input = document.createElement("input");
        input.id = id;
        input.name = id;
        input.type = "number";
        input.className = "form-control";
        input.value = value;

        list.appendChild(label);
        list.appendChild(input);
        list.appendChild(document.createElement("br"));

        label.innerHTML = "Valor Produto " + idList.length + ":";
        document.getElementById("newProdPrice").value = "";
    }
}

//cálculo da soma dos preços
function calcTotal() {
    let sum = 0;
    for (let i = 0; i < idList.length; i++) {
        let value = parseFloat(document.getElementById(idList[i]).value);
        sum += value;
    }
    if (numberValidation(sum)) {
        document.getElementById("totalValue").value = sum.toFixed(2).replace('.', ',');
        return sum;
    }
    return -1;
}

//cálculo do troco
function calcChange() {
    let total = calcTotal();
    let paid = parseFloat(document.getElementById("paidValue").value);
    if (total > 0 && numberValidation(paid)) {
        document.getElementById("changeValue").value = (paid - total).toFixed(2).replace('.', ',');
        return paid - total;
    }
    return -1;
}

//remoção da tabela de troco
function clearTable() {
    document.getElementById("totalValue").value = "";
    document.getElementById("changeValue").value = "";
    document.getElementById("moneyTable").innerHTML = "";
}

//geração da tabela de troco
function breakChange() {
    clearTable();

    let coinValues = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.10, 0.05];
    let brokenChange = [];
    
    if (calcChange() > 0) {
        let change = calcChange();
        //valores multiplicados por 100 para utilização da operação de módulo
        let breakableChange = change * 100;
    
        for (let i = 0; i < coinValues.length; i++) {
            let coinNumber = breakableChange / (coinValues[i] * 100);
            //verificação em relação ao limite de cédulas/moedas
            if (coinNumber < K) {
                brokenChange.push(Math.floor(coinNumber));
                breakableChange = breakableChange % (coinValues[i] * 100);
            } else {
                brokenChange.push(K);
                breakableChange = breakableChange - K * coinValues[i] * 100;
            }
        }
    
        //verifica se o troco pode ser pago com exatidão
        if (breakableChange == 0) {
            var tableDiv = document.getElementById("moneyTable");
            var table = document.createElement("table");
            var thead = document.createElement("tr");
            var th1 = document.createElement("th");
            var th2 = document.createElement("th");
    
            th1.innerHTML = "Moeda / Cédula";
            th2.innerHTML = "Quantidade";
            
            thead.appendChild(th1);
            thead.appendChild(th2);
            thead.className = "thead-dark";
    
            table.appendChild(thead);
    
            //geração do corpo da tabela
            for (i = 0; i < coinValues.length; i++) {
                var td1 = document.createElement("td");
                var td2 = document.createElement("td");
    
                if (coinValues[i] >= 1) {
                    td1.innerHTML = "<b>R$ " + coinValues[i].toString() + "</b>";
                } else {
                    td1.innerHTML = "<b>R$ " + coinValues[i].toFixed(2).replace('.', ',') + "</b>";
                }
                td2.innerHTML = brokenChange[i];
    
                var trow = document.createElement("tr");
                trow.appendChild(td1);
                trow.appendChild(td2);
                table.appendChild(trow);
            }
            
            table.className = "table";
            tableDiv.appendChild(table);
        } else {
            alert("Não é possível devolver um troco exato com a quantidade atual de notas/moedas");
        }
    }   
}

//reset para as condições iniciais
function reset() {
    document.getElementById("newProdPrice").value = "";
    idList = [];
    document.getElementById("productList").innerHTML = "";
    document.getElementById("paidValue").value = "";
    clearTable();
}