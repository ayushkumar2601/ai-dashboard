def choose_chart(columns):

    columns = [c.lower() for c in columns]

    if "date" in columns[0]:
        return "line"

    if len(columns) == 2:
        return "bar"

    return "table"