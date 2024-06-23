import CryptoJS from 'crypto-js';

function encrypt(input: string): string {
    const hash = CryptoJS.SHA256(input);
    return hash.toString(CryptoJS.enc.Hex);
}

export default encrypt;