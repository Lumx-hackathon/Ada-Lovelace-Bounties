// Função para criar uma carteira
/* function createWallet() {
    const options = {
        method: 'POST',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicHJvamVjdElkIjoiM2M2NmM5MzYtOTRkMC00Mzk2LWIyZTMtMGU0NzI4ODhkZTAyIiwic2NvcGVzIjpbIlJFQURfV0FMTEVUUyIsIlJFQURfQ09OVFJBQ1RTIiwiUkVBRF9UT0tFTl9UWVBFUyIsIlJFQURfVFJBTlNBQ1RJT05TIiwiREVQTE9ZX0NPTlRSQUNUUyIsIldSSVRFX0NPTlRSQUNUUyIsIldSSVRFX0NVU1RPTV9UUkFOU0FDVElPTlMiLCJXUklURV9NSU5UUyIsIldSSVRFX01JTlRTIiwiV1JJVEVfVE9LRU5fVFlQRVMiLCJXUklURV9UUkFOU0ZFUlMiLCJXUklURV9XQUxMRVRTIl0sImlhdCI6MTcxNDk0OTI4NH0.JG1XotFyiGp5AjGzkb9YemGWU5shmNc8Dk_2bhmfFv1JJOpJjrG88TlaSW9m0yBer--zahbjf_i1_wAbNZRg_bNXBWDYkOHNynPZLnFzbk4sBsRYskxzZNgR0FIuNFAo0Cj9cJiZ8rwfoe-NTfO-pBvihAs9V100pR2eTWlOJ5dGnJoHlZ1Uz1DTC2x5GpVACns5vsOzwuxcP99oUOi54Zv1gwEsgWrlpFVXe-PENQWMzoTIL6dp_PaQJkNjYsgCeN61TQ34JKZ0JYBJjNFr9oUvAHMeiEUkQqOa-P79IYWlSmpGLkhrQagoyp7QA2WJds6kW9d1ZOJ6bacRJXb6VFLSncxv-virbDpvQIKM4ywUpPcL3nosW0RV_KVjEvZZRHyXd2rfErYbJ7O0VQ_g2lC-OGyR3FZJrwD4CiWcc3X8e_7YwXPwg1vXoFnWKt3RQDLVACTypJK75UjbTlSc6NihuXRggzT0L_o3Z-sMzCUeGnsJBUKNZC3ux1dm3Kr2HuDXJJSAlGYXR0SN80DEAb4i6WXHGTwmNoctHwQEWwv4Zp1J2eBm39hhnhYz67aks-qCZeZIRvzU5NXBKLEtidR4LYA2WoREdIr3m1ci4dyvuIA_iDi-3Fs-7p4BUvqlYpsWgcx4wYey7uTVcXOI-dDw-2kdmdx-k2yIa2hOHRc',
            'Content-Type': 'application/json'
        }
    };

    fetch('https://protocol-sandbox.lumx.io/v2/wallets', options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            document.getElementById('walletId').innerText = response.id;
            document.getElementById('walletAddress').innerText = response.address;
            document.getElementById('walletBalance').innerText = response.balance;
            document.getElementById('walletInfo').style.display = 'block'; // Exibir as informações da carteira
        })
        .catch(err => console.error(err));
} */

// Função para abrir o pop-up
function openPopup() {
    document.getElementById('walletPopup').style.display = 'block';
}

// Função para fechar o pop-up
function closePopup() {
    document.getElementById('walletPopup').style.display = 'none';
}

// Função para criar uma carteira e exibir as informações no pop-up
function createWalletAndShowPopup() {
    const options = {
        method: 'POST',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicHJvamVjdElkIjoiM2M2NmM5MzYtOTRkMC00Mzk2LWIyZTMtMGU0NzI4ODhkZTAyIiwic2NvcGVzIjpbIlJFQURfV0FMTEVUUyIsIlJFQURfQ09OVFJBQ1RTIiwiUkVBRF9UT0tFTl9UWVBFUyIsIlJFQURfVFJBTlNBQ1RJT05TIiwiREVQTE9ZX0NPTlRSQUNUUyIsIldSSVRFX0NPTlRSQUNUUyIsIldSSVRFX0NVU1RPTV9UUkFOU0FDVElPTlMiLCJXUklURV9NSU5UUyIsIldSSVRFX01JTlRTIiwiV1JJVEVfVE9LRU5fVFlQRVMiLCJXUklURV9UUkFOU0ZFUlMiLCJXUklURV9XQUxMRVRTIl0sImlhdCI6MTcxNDk0OTI4NH0.JG1XotFyiGp5AjGzkb9YemGWU5shmNc8Dk_2bhmfFv1JJOpJjrG88TlaSW9m0yBer--zahbjf_i1_wAbNZRg_bNXBWDYkOHNynPZLnFzbk4sBsRYskxzZNgR0FIuNFAo0Cj9cJiZ8rwfoe-NTfO-pBvihAs9V100pR2eTWlOJ5dGnJoHlZ1Uz1DTC2x5GpVACns5vsOzwuxcP99oUOi54Zv1gwEsgWrlpFVXe-PENQWMzoTIL6dp_PaQJkNjYsgCeN61TQ34JKZ0JYBJjNFr9oUvAHMeiEUkQqOa-P79IYWlSmpGLkhrQagoyp7QA2WJds6kW9d1ZOJ6bacRJXb6VFLSncxv-virbDpvQIKM4ywUpPcL3nosW0RV_KVjEvZZRHyXd2rfErYbJ7O0VQ_g2lC-OGyR3FZJrwD4CiWcc3X8e_7YwXPwg1vXoFnWKt3RQDLVACTypJK75UjbTlSc6NihuXRggzT0L_o3Z-sMzCUeGnsJBUKNZC3ux1dm3Kr2HuDXJJSAlGYXR0SN80DEAb4i6WXHGTwmNoctHwQEWwv4Zp1J2eBm39hhnhYz67aks-qCZeZIRvzU5NXBKLEtidR4LYA2WoREdIr3m1ci4dyvuIA_iDi-3Fs-7p4BUvqlYpsWgcx4wYey7uTVcXOI-dDw-2kdmdx-k2yIa2hOHRc',
            'Content-Type': 'application/json'
        }
    };

    fetch('https://protocol-sandbox.lumx.io/v2/wallets', options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            document.getElementById('walletId').innerText = response.id;
            document.getElementById('walletAddress').innerText = response.address;
            document.getElementById('walletBalance').innerText = response.balance;
            openPopup(); // Abrir o pop-up após criar a carteira
        })
        .catch(err => console.error(err));
}

// Associar eventos aos botões
document.getElementById('openPopupBtn').addEventListener('click', createWalletAndShowPopup);
document.getElementById('closePopupBtn').addEventListener('click', closePopup);

// Função para fazer o mint dos tokens
// Função para obter e exibir o saldo da carteira
function getWalletBalance(walletId) {
    const options = {
        method: 'GET',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicHJvamVjdElkIjoiM2M2NmM5MzYtOTRkMC00Mzk2LWIyZTMtMGU0NzI4ODhkZTAyIiwic2NvcGVzIjpbIlJFQURfV0FMTEVUUyIsIlJFQURfQ09OVFJBQ1RTIiwiUkVBRF9UT0tFTl9UWVBFUyIsIlJFQURfVFJBTlNBQ1RJT05TIiwiREVQTE9ZX0NPTlRSQUNUUyIsIldSSVRFX0NPTlRSQUNUUyIsIldSSVRFX0NVU1RPTV9UUkFOU0FDVElPTlMiLCJXUklURV9NSU5UUyIsIldSSVRFX01JTlRTIiwiV1JJVEVfVE9LRU5fVFlQRVMiLCJXUklURV9UUkFOU0ZFUlMiLCJXUklURV9XQUxMRVRTIl0sImlhdCI6MTcxNDk0OTI4NH0.JG1XotFyiGp5AjGzkb9YemGWU5shmNc8Dk_2bhmfFv1JJOpJjrG88TlaSW9m0yBer--zahbjf_i1_wAbNZRg_bNXBWDYkOHNynPZLnFzbk4sBsRYskxzZNgR0FIuNFAo0Cj9cJiZ8rwfoe-NTfO-pBvihAs9V100pR2eTWlOJ5dGnJoHlZ1Uz1DTC2x5GpVACns5vsOzwuxcP99oUOi54Zv1gwEsgWrlpFVXe-PENQWMzoTIL6dp_PaQJkNjYsgCeN61TQ34JKZ0JYBJjNFr9oUvAHMeiEUkQqOa-P79IYWlSmpGLkhrQagoyp7QA2WJds6kW9d1ZOJ6bacRJXb6VFLSncxv-virbDpvQIKM4ywUpPcL3nosW0RV_KVjEvZZRHyXd2rfErYbJ7O0VQ_g2lC-OGyR3FZJrwD4CiWcc3X8e_7YwXPwg1vXoFnWKt3RQDLVACTypJK75UjbTlSc6NihuXRggzT0L_o3Z-sMzCUeGnsJBUKNZC3ux1dm3Kr2HuDXJJSAlGYXR0SN80DEAb4i6WXHGTwmNoctHwQEWwv4Zp1J2eBm39hhnhYz67aks-qCZeZIRvzU5NXBKLEtidR4LYA2WoREdIr3m1ci4dyvuIA_iDi-3Fs-7p4BUvqlYpsWgcx4wYey7uTVcXOI-dDw-2kdmdx-k2yIa2hOHRc'
        }
    };

    fetch(`https://protocol-sandbox.lumx.io/v2/wallets/${walletId}`, options)
        .then(response => response.json())
        .then(data => {
            document.getElementById('walletBalance').innerText = data.balance;
        })
        .catch(err => console.error(err));
}

// Função para fazer o mint dos tokens e atualizar o saldo
function mintTokens() {
    const tokenAmount = document.getElementById('tokenAmount').value; // Obter a quantidade de tokens do campo de entrada

    const options = {
        method: 'POST',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicHJvamVjdElkIjoiM2M2NmM5MzYtOTRkMC00Mzk2LWIyZTMtMGU0NzI4ODhkZTAyIiwic2NvcGVzIjpbIlJFQURfV0FMTEVUUyIsIlJFQURfQ09OVFJBQ1RTIiwiUkVBRF9UT0tFTl9UWVBFUyIsIlJFQURfVFJBTlNBQ1RJT05TIiwiREVQTE9ZX0NPTlRSQUNUUyIsIldSSVRFX0NPTlRSQUNUUyIsIldSSVRFX0NVU1RPTV9UUkFOU0FDVElPTlMiLCJXUklURV9NSU5UUyIsIldSSVRFX01JTlRTIiwiV1JJVEVfVE9LRU5fVFlQRVMiLCJXUklURV9UUkFOU0ZFUlMiLCJXUklURV9XQUxMRVRTIl0sImlhdCI6MTcxNDk0OTI4NH0.JG1XotFyiGp5AjGzkb9YemGWU5shmNc8Dk_2bhmfFv1JJOpJjrG88TlaSW9m0yBer--zahbjf_i1_wAbNZRg_bNXBWDYkOHNynPZLnFzbk4sBsRYskxzZNgR0FIuNFAo0Cj9cJiZ8rwfoe-NTfO-pBvihAs9V100pR2eTWlOJ5dGnJoHlZ1Uz1DTC2x5GpVACns5vsOzwuxcP99oUOi54Zv1gwEsgWrlpFVXe-PENQWMzoTIL6dp_PaQJkNjYsgCeN61TQ34JKZ0JYBJjNFr9oUvAHMeiEUkQqOa-P79IYWlSmpGLkhrQagoyp7QA2WJds6kW9d1ZOJ6bacRJXb6VFLSncxv-virbDpvQIKM4ywUpPcL3nosW0RV_KVjEvZZRHyXd2rfErYbJ7O0VQ_g2lC-OGyR3FZJrwD4CiWcc3X8e_7YwXPwg1vXoFnWKt3RQDLVACTypJK75UjbTlSc6NihuXRggzT0L_o3Z-sMzCUeGnsJBUKNZC3ux1dm3Kr2HuDXJJSAlGYXR0SN80DEAb4i6WXHGTwmNoctHwQEWwv4Zp1J2eBm39hhnhYz67aks-qCZeZIRvzU5NXBKLEtidR4LYA2WoREdIr3m1ci4dyvuIA_iDi-3Fs-7p4BUvqlYpsWgcx4wYey7uTVcXOI-dDw-2kdmdx-k2yIa2hOHRc',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            walletId: document.getElementById('walletId').innerText,
            contractAddress: '0xb542Ea04F6b4f91628Ef9665f258fd3De97D8FC6', // Endereço do contrato
            operations: [{
                functionSignature: 'mint(address, uint256)',
                argumentsValues: [document.getElementById('walletAddress').innerText, tokenAmount], // Endereço da carteira e quantidade de tokens a serem mintados
                messageValue: 0
            }]
        })
    };

    fetch('https://protocol-sandbox.lumx.io/v2/transactions/custom', options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            alert('Tokens minted successfully!');
            // Atualizar o saldo da carteira após o mint dos tokens
            getWalletBalance(document.getElementById('walletId').innerText);

            // Armazenar a quantidade de tokens mintados no localStorage
            localStorage.setItem('mintedTokens', tokenAmount);
        })
        .catch(err => console.error(err));
}

// Adicionar evento ao botão "Mint Tokens"
document.getElementById('mintTokensBtn').addEventListener('click', mintTokens);

// Função para realizar o burn de tokens e receber NFTs
function burnTokensAndReceiveNFTs() {
    const tokenAmountToBurn = document.getElementById('tokenAmountToBurn').value; // Obter a quantidade de tokens para queimar

    const options = {
        method: 'POST',
        headers: {
            Authorization: 'Bearer <seu-token-de-autenticacao>',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            walletId: document.getElementById('walletId').innerText,
            contractAddress: '0x8585d99A9307283b3FfF08B096dea4B40C7941f3', // Endereço do contrato
            operations: [{
                functionSignature: 'burn(uint256)', // Função de burn no contrato
                argumentsValues: [tokenAmountToBurn], // Quantidade de tokens a serem queimados
                messageValue: 0
            }]
        })
    };

    fetch('https://protocol-sandbox.lumx.io/v2/transactions/custom', options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            alert('Tokens burned successfully!');
            // Atualizar o saldo da carteira após o burn dos tokens
            getWalletBalance(document.getElementById('walletId').innerText);

            // Aqui você pode adicionar código para receber NFTs após o burn de tokens
            receiveNFTsAfterBurn(tokenAmountToBurn);
        })
        .catch(err => console.error(err));
}

// Função para receber NFTs após o burn de tokens
function receiveNFTsAfterBurn(tokenAmountBurned) {
    // Aqui você pode adicionar lógica para emitir NFTs com base na quantidade de tokens queimados
    // Por exemplo, você pode chamar outra função fetch() para realizar uma transação que emite NFTs
    // Certifique-se de implementar essa lógica no seu contrato inteligente
}

// Adicionar evento ao botão "Burn Tokens"
document.getElementById('burnTokensBtn').addEventListener('click', burnTokensAndReceiveNFTs);
