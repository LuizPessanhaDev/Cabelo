const controles2 = document.querySelectorAll('.controles-2') /*Constante (Array) dos botões*/
const itens2 = document.querySelectorAll('.item-2') /*Constante das fotos*/
const maxItens2 = itens2.length /*Constante do número máximo de fotos*/

let itemFoco2 = 0 /*Valor da foto em foco*/

controles2.forEach(controle2 => {
    controle2.addEventListener('click', () => {
        const esquerda2 = controle2.classList.contains('seta-esquerda-2')

        if(esquerda2){ /*Sem operador lógico >> constante boolean*/
            itemFoco2 -= 1
        } else {
            itemFoco2 += 1
        }

        if(itemFoco2 >= maxItens2){
            itemFoco2 = 0
        }

        if(itemFoco2 < 0){
            itemFoco2 = maxItens2 - 1
        }

        itens2.forEach(item2 => item2.classList.remove('item-foco'))

        itens2[itemFoco2].scrollIntoView({
            block: "center",
            inline: "center"
        })  

        itens2[itemFoco2].classList.add('item-foco')
    })
})

//DEPOIMENTOS 2

const controles3 = document.querySelectorAll('.controles-3') /*Constante (Array) dos botões*/
const itens3 = document.querySelectorAll('.item-3') /*Constante das fotos*/
const maxItens3 = itens3.length /*Constante do número máximo de fotos*/

let itemFoco3 = 0 /*Valor da foto em foco*/

controles3.forEach(controle3 => {
    controle3.addEventListener('click', () => {
        const esquerda3 = controle3.classList.contains('seta-esquerda-3')

        if(esquerda3){ /*Sem operador lógico >> constante boolean*/
            itemFoco3 -= 1
        } else {
            itemFoco3 += 1
        }

        if(itemFoco3 >= maxItens3){
            itemFoco3 = 0
        }

        if(itemFoco3 < 0){
            itemFoco3 = maxItens3 - 1
        }

        itens3.forEach(item3 => item3.classList.remove('item-foco'))

        itens3[itemFoco3].scrollIntoView({
            block: "center",
            inline: "center"
        })  

        itens3[itemFoco3].classList.add('item-foco')
    })
})