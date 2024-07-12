


export const formatDate = (date: string) =>{
    const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;

    const asDate = new Date(date);

    return asDate.toLocaleDateString('en-GB', options);

}