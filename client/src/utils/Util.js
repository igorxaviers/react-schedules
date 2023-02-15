export const formatDate = (dateString) => {
    let date = new Date(dateString);
    let day = date.getDate() < 9 ? `0${date.getDate()}` : date.getDate();
    let month = date.getMonth() < 9 ? `0${date.getMonth()}` : date.getMonth();
    return `${day}/${month}/${date.getFullYear()}`;
}

export const formatCPF = (cpf) => {
    if(cpf && cpf.length === 11)
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return cpf;
}