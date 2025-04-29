def multiplication_table(size):
    table = []
    for i in range(1, size + 1):
        row = []
        for x in range(1, size + 1):
            row.append(i * x)
        table.append(row)
    return table
