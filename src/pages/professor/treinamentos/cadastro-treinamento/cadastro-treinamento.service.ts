// import { Injectable } from '@angular/core';
// import { listaExercicios } from './cadastro-treinamento.model';

// @Injectable()
// export class cadastroTreinamentoService {
    
//     items: listaExercicios[] = []

//     clear() {
//         this.items = []
//     }

//     addItem(item: listaExercicios) {
//         let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
//         if (foundItem) {
//             this.increaseQty(foundItem)
//         } else {
//             this.items.push(new listaExercicios(item))
//         }
//     }

//     removeItem(item: listaExercicios) {
//         this.items.splice(this.items.indexOf(item), 1)
//     }

//     increaseQty(item: listaExercicios) {
//         item.quantity = item.quantity + 1
//     }

//     decreaseQty(item: listaExercicios) {
//         item.quantity = item.quantity - 1
//         if (item.quantity === 0) {
//             this.removeItem(item)
//         }
//     }

//     total(): number {
//         return this.items
//             .map(item => item.listaExercicios())
//             .reduce((prev, value) => prev + value, 0)
//     }
// }