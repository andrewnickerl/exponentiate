function exponentiate(base, power)
{
    let expFig = base;
    if (power === 0) return 1;
    else
    {
        for (let i = 1; i < power; i++)
        {
           expFig *= base;
        }
    }
    return expFig;
}

console.log(exponentiate(8, 4))