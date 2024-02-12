it('should return an array with only words that have the search term or the entire array if empty', function() {
    expect(search('apple')).toEqual(['Apple', 'Custard apple', 'Pineapple']);
    expect(search('BANANA')).toEqual(['Banana']);
    expect(search('sandwhich')).toEqual([]);
    expect(search('')).toEqual(fruit);
});