(function(){
    'use strict';

    angular
        .module('app')
        .controller('CartController', CartController);

    function CartController(CartService, $state){

        var vm = this;

        angular.extend(vm, {
            cart: CartService.getCurrentCart(),
            deleteFromCart: deleteFromCart,
            checkout: checkout
        });

        function deleteFromCart(item){
            CartService.deleteFromCart(item);
        }

        function checkout(){
            CartService.saveCart(vm.cart).then(function(){
                $state.go('store.checkout');
            });
        }

    }
})();