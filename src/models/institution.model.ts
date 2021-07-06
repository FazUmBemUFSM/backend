export const getInstitutionRow = async (): Promise<any> => {
    return [
        {
            institutionId: 1,
            status: 'Pendente',
            email: 'institution@gmail.com',
            name: 'test institution'
        },
        {
            institutionId: 2,
            status: 'Pendente',
            email: 'institution2@gmail.com',
            name: 'test institution2'
        }
    ]
};