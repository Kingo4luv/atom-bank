export const generateReference = (length = 10) => {
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUPWXYZ0123456789'.split('');
    let code = '';
    for (let i = 0; i < length; i++) {
       
        code += alpha[Math.floor(Math.random() * Math.floor(alpha.length - 1))];
    }
    return code;

}