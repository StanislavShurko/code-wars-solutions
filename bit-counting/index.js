function countBits(number) {
    const binary = number.toString(2);

    console.log(Array.from(binary).filter((bit) => !!bit))
    
    return Array.from(binary).filter((bit) => bit === 1).length;
}

countBits(0);
countBits(4);
countBits(7);
countBits(9);
countBits(10);