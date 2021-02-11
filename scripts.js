
    const Modal = {
        open(){
            // Abrir modal
            // Adicionar a class active ao modal
            document
                .querySelector('.modal-overlay')
                .classList
                .add('active')

        },
        close(){
            // fechar o modal
            // remover a class active do modal
            document
                .querySelector('.modal-overlay')
                .classList
                .remove('active')
        }
}

const transactions = [{
    id: 1, 
    description: 'Luz',
    amount: -50000, 
    date: '11/02/2021',  
},

{
    id: 1, 
    description: 'Website',
    amount: 500000, 
    date: '11/02/2021',  
},

{
    id: 1, 
    description: 'Internet',
    amount: -20000, 
    date: '11/02/2021',  
},

]
const Transaction = {
    incomes () {
        // somar as entradas 
    },

    expenses() {
        // somar saidas 
    }, 

    total() {
        // entradas - saidas 
    }

}

// Eu preciso pegar as minhas transações do meu
// objeto aqui do javascript
// e colocar lá no html