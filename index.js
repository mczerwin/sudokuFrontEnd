function submitPuzzle() {
    let grid = document.getElementsByClassName("field")
    let body = ''
    for (let i = 0; i < grid.length; i++) {
        let val = grid.item(i).value
        if (val == '') {
            val = 'n'
        }
        body += val
    }
    console.log(body)

    fetch('http://127.0.0.1:5000/solve', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({'puzzle': body})
    })
    .then(response => response.text())
    .then(text => {
        console.log(text)
        console.log(text.length)
        text = text.replace(/\D/g,'')
        console.log(text.length)
        for (let i = 0; i < text.length; i++) {
            c = text.charAt(i)
            if (!isNaN(+c) && c != '\n'){ //true if char is number
                grid.item(i).value = c
            }
            else {
                continue
            }
        }
    })

}