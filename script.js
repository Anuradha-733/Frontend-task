document.addEventListener('DOMContentLoaded', () => {
    const unitOptions = document.querySelectorAll('input[name="unit"]');
    const totalPrice = document.querySelector('.total');
    
    const oneUnitDropdowns = document.getElementById('one-unit-dropdowns');
    const twoUnitDropdowns = document.getElementById('two-unit-dropdowns');
    const threeUnitDropdowns = document.getElementById('three-unit-dropdowns');

    unitOptions.forEach(option => {
        option.addEventListener('change', updateTotal);
    });

    function updateTotal() {
        let price = 0;

        // Reset dropdown visibility
        oneUnitDropdowns.classList.add('hidden');
        twoUnitDropdowns.classList.add('hidden');
        threeUnitDropdowns.classList.add('hidden');

        if (document.querySelector('input[name="unit"]:checked').value === '1-unit') {
            price = 10.00;
            oneUnitDropdowns.classList.remove('hidden');  // Show 1-unit dropdowns
        } else if (document.querySelector('input[name="unit"]:checked').value === '2-units') {
            price = 18.00;
            twoUnitDropdowns.classList.remove('hidden');  // Show 2-unit dropdowns
        } else if (document.querySelector('input[name="unit"]:checked').value === '3-units') {
            price = 24.00;
            threeUnitDropdowns.classList.remove('hidden');  // Show 3-unit dropdowns
        }

        totalPrice.textContent = `Total: $${price.toFixed(2)} USD`;
    }
});
